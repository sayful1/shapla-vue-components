class Dialog {
  /**
   * Listen event
   *
   * @param event
   * @param callback
   */
  static on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  }

  /**
   * Dispatch event
   *
   * @param event
   * @param data
   */
  static dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, {detail: data}));
  }

  /**
   * Show dialog
   *
   * @param {Object} params
   */
  static show(params = {}) {
    Dialog.dispatch('show.ShaplaVueConfirmModal', params);
  }

  /**
   * Get parameters
   *
   * @param {String|Object} message
   * @param {Object} params
   * @return {Object}
   */
  static getParams(message, params = {}) {
    if (typeof message === 'string') {
      params.message = message;
    } else {
      params = message;
    }

    const defaultParamsData = {
      icon: 'primary', title: '', message: 'Are you sure?', confirmButton: 'OK', cancelButton: 'Cancel'
    }

    return Object.assign(defaultParamsData, params);
  }

  /**
   * Show confirm dialog
   *
   * @param {String|Object} message
   * @param {Object} params
   * @returns {Promise}
   */
  static confirm(message, params = {}) {
    let _params = this.getParams(message, params);
    _params.type = 'confirm';

    return new Promise(resolve => {
      this.show(_params);

      Dialog.on('click.ShaplaVueConfirmModal', confirmed => resolve(confirmed));
    });
  }

  /**
   * Show alert dialog
   *
   * @param message
   * @param params
   */
  static alert(message, params = {}) {
    let _params = this.getParams(message, params);
    _params.type = 'alert';
    _params.cancelButton = false;
    this.show(_params);
  }
}

export {Dialog};
export default Dialog;
