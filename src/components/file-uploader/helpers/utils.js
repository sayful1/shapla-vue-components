const pad = {
  left(pad, string) {
    return this.pad(pad, string, true)
  },
  right(pad, string) {
    return this.pad(pad, string, false)
  },
  pad(pad, string, left) {
    if (typeof string === 'undefined') {
      return pad
    }

    if (left) {
      return (pad + string).slice(-pad.length)
    }

    return (string + pad).substring(0, pad.length)
  }
};

/**
 * Calculate remaining time
 *
 * @type {{
 * _getMovingAverage(*): *,
 * cache: {averageSpeed: null},
 * calculate(*, *, *): (number|number)
 * }}
 */
const timeRemaining = {
  cache: {
    averageSpeed: null
  },
  _getMovingAverage(bytesBySecond) {
    if (!this.averageSpeed) {
      this.averageSpeed = bytesBySecond;
    }

    return 0.005 * bytesBySecond + (1 - 0.005) * this.averageSpeed;
  },
  calculate(totalBytes, loadedBytes, timeStarted) {
    let secondsElapsed, bytesBySecond;

    if (!totalBytes || !loadedBytes) {
      return 0
    }

    secondsElapsed = (new Date().getTime() - timeStarted) / 1000;
    bytesBySecond = secondsElapsed ? loadedBytes / secondsElapsed : 0;

    return Math.ceil((totalBytes - loadedBytes) / this._getMovingAverage(bytesBySecond));
  }
};

/**
 * Get file Object
 *
 * @param {File} file
 * @param {null|number} chunkSizeInBytes
 * @returns {
 * {
 *  id: string,
 *  file:File,
 *  totalChunks: number,
 *  chunkSize: number,
 *  currentChunkIndex: number,
 *  xhr: null|XMLHttpRequest,
 *  secondsRemaining: number,
 *  progress: number,
 *  totalBytes: number,
 *  cancelled: boolean,
 *  timeStarted: number,
 *  finished: boolean,
 *  failed: boolean,
 *  loadedBytes: number
 * }
 * }
 */
const generateFileObject = (file, chunkSizeInBytes = null) => {
  if (!chunkSizeInBytes) {
    chunkSizeInBytes = file.size;
  }
  const numberOfChunks = Math.ceil(file.size / chunkSizeInBytes);
  return {
    id: Date.now() + Math.floor(Math.random() * 100).toString(),
    file: file,
    totalChunks: numberOfChunks,
    chunkSize: chunkSizeInBytes,
    currentChunkIndex: 0,
    chunkCompleteStatus: {},
    progress: 0,
    loadedBytes: 0,
    totalBytes: 0,
    timeStarted: (new Date).getTime(),
    secondsRemaining: 0,
    finished: false,
    cancelled: false,
    failed: false,
    xhr: null
  }
}

/**
 *
 * @param {ProgressEvent} oEvent
 * @param fileObject
 */
const updateProgress = (oEvent, fileObject) => {
  if (oEvent.lengthComputable) {
    let chunkPercentComplete = Math.round(oEvent.loaded / oEvent.total * 100);
    let totalPercentComplete = Math.round(fileObject.currentChunkIndex / fileObject.totalChunks * 100 + chunkPercentComplete / fileObject.totalChunks);

    fileObject.chunkCompleteStatus[fileObject.currentChunkIndex] = {
      loaded: oEvent.loaded,
      total: oEvent.total
    };

    let loaded = 0, total = 0;
    for (let status in fileObject.chunkCompleteStatus) {
      let value = fileObject.chunkCompleteStatus[status];
      loaded += value.loaded;
      total += value.total;
    }

    fileObject.loadedBytes = loaded;
    fileObject.totalBytes = total;
    fileObject.progress = totalPercentComplete;
    if (0 === totalPercentComplete % 5 || 0 === fileObject.secondsRemaining) {
      fileObject.secondsRemaining = timeRemaining.calculate(fileObject.file.size, fileObject.loadedBytes, fileObject.timeStarted);
    }
  }
}

/**
 *
 * @param fileObject
 * @param {Number} start
 * @param {XMLHttpRequest} oReq
 * @param {Object} args
 * @returns {Promise<unknown>}
 */
const onUploaded = (fileObject, start, oReq, args) => {
  let contentType = oReq.getResponseHeader("Content-Type"),
    isJsonResponse = (contentType && contentType.indexOf("application/json") !== -1),
    response = isJsonResponse ? JSON.parse(oReq.responseText) : oReq.responseText;

  return new Promise((resolve, reject) => {
    if (oReq.status >= 200 && oReq.status < 300) {
      //next chunk starts at + chunkSize from start
      start += fileObject.chunkSize;
      //if start is smaller than file size - we have more to still upload
      if (start < fileObject.file.size) {
        // Create the new chunk
        fileObject.currentChunkIndex++;
        resolve({data: response, status: oReq.status, start: start});
      } else {
        fileObject.finished = true;
        resolve({data: response, status: oReq.status});
      }
    } else {
      fileObject.failed = true;
      reject({error: response, status: oReq.status});
    }
  })
}

const getChunkFormData = (args, chunk, fileObject) => {
  const chunkFormData = new FormData();
  chunkFormData.append(args.paramName, chunk, fileObject.file);

  const params = {
    ...args.params,
    chunk: fileObject.currentChunkIndex.toString(),
    chunks: fileObject.totalChunks.toString(),
    name: fileObject.file.name,
  }
  for (let [key, value] of Object.entries(params)) {
    chunkFormData.append(key, value);
  }
  return chunkFormData;
}

const uploadChunk = (fileObject, start, args = {}) => {
  return new Promise((resolve, reject) => {
    let chunkEnd = Math.min(start + fileObject.chunkSize, fileObject.file.size);
    const chunk = fileObject.file.slice(start, chunkEnd);

    const chunkFormData = getChunkFormData(args, chunk, fileObject);

    const oReq = new XMLHttpRequest();

    oReq.upload.addEventListener("progress", (event) => updateProgress(event, fileObject));
    oReq.open(args.method, args.url, true);

    let headers = {...args.headers, Accept: "application/json"}
    for (let [headerName, headerValue] of Object.entries(headers)) {
      if (headerName && headerValue) {
        oReq.setRequestHeader(headerName, headerValue);
      }
    }

    let blobEnd = chunkEnd - 1;
    const contentRange = "bytes " + start + "-" + blobEnd + "/" + fileObject.file.size;
    oReq.setRequestHeader("Content-Range", contentRange);

    oReq.addEventListener('load', () => {
      onUploaded(fileObject, start, oReq, args).then(data => {
        if (data.start) {
          uploadChunk(fileObject, data.start, args)
            .then((_data) => resolve(_data))
            .catch((_data) => reject(_data));
        } else {
          resolve({fileObject, data});
        }
      }).catch(error => {
        reject({fileObject, error});
      })
    });
    oReq.send(chunkFormData);
  })
}

export {
  pad,
  timeRemaining,
  generateFileObject,
  uploadChunk
}
