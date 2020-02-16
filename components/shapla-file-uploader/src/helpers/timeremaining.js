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

export default timeRemaining;
