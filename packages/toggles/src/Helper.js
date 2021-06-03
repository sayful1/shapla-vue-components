class ToggleEvent {
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
}

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
  });
}

export {ToggleEvent, createUUID}
export default ToggleEvent;
