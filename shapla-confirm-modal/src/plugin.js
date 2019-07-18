import modal from '../../shapla-modal';

modal.install = function (Vue) {
    modal.events = new Vue();

    Vue.prototype.$modal = {
        show(name, params = {}) {
            modal.events.$emit('show', params);
        },

        confirm(message, params = {}) {
            if (typeof message === 'string') {
                params.message = message;
            } else {
                params = message;
            }

            return new Promise(resolve => {
                this.show('dialog', params);

                modal.events.$on('clicked', confirmed => resolve(confirmed));
            });
        }
    }
};

export default modal;
