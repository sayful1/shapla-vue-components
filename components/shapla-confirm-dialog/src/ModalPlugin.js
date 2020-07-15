const Dialog = {

    install(Vue) {

        Dialog.events = new Vue();

        Vue.prototype.$dialog = {

            /**
             * Show dialog
             *
             * @param {Object} params
             */
            show(params = {}) {
                Dialog.events.$emit('show', params);
            },

            /**
             * Get parameters
             *
             * @param {String|Object} message
             * @param {Object} params
             * @return {Object}
             */
            getParams(message, params = {}) {
                if (typeof message === 'string') {
                    params.message = message;
                } else {
                    params = message;
                }
                return params;
            },

            /**
             * Show confirm dialog
             *
             * @param {String|Object} message
             * @param {Object} params
             * @returns {Promise}
             */
            confirm(message, params = {}) {
                let _params = this.getParams(message, params);
                _params.type = 'confirm';

                return new Promise(resolve => {
                    this.show(_params);

                    Dialog.events.$on('clicked', confirmed => resolve(confirmed));
                });
            },

            /**
             * Show alert dialog
             *
             * @param message
             * @param params
             */
            alert(message, params = {}) {
                let _params = this.getParams(message, params);
                _params.type = 'alert';
                _params.cancelButton = false;
                this.show(_params);
            }
        }
    }
};

export default Dialog;