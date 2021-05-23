const refreshBodyClass = (active) => {
  let body = document.querySelector('body');
  if (active) {
    return body.classList.add('has-shapla-modal');
  }
  setTimeout(() => {
    if (document.querySelectorAll('.shapla-modal.is-active').length === 0) {
      body.classList.remove('has-shapla-modal');
    }
  }, 50);
}

const ShaplaModalHelper = {
  refreshBodyClass
}

export {refreshBodyClass}
export default ShaplaModalHelper;
