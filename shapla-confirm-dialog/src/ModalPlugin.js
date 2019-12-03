const Dialog = {

    install(Vue) {

        Dialog.events = new Vue();

        Vue.prototype.$dialog = {

            /**
             * @param params
             */
            show(params = {}) {
                Dialog.events.$emit('show', params);
            },

            /**
             * @param message
             * @param params
             * @returns {Promise}
             */
            confirm(message, params = {}) {
                if (typeof message === 'string') {
                    params.message = message;
                } else {
                    params = message;
                }

                return new Promise(resolve => {
                    this.show(params);

                    Dialog.events.$on('clicked', confirmed => resolve(confirmed));
                });
            }
        }
    }
};

export default Dialog;