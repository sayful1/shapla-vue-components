import modal from './modal';

modal.install = function (Vue, options = {}) {
    Vue.component('modal', modal);

    modal.events = new Vue();

    Vue.prototype.$modal = {
        show(name, params = {}) {
            location.hash = name;

            modal.events.$emit('show', params);
        },

        hide(name) {
            location.hash = '#';
        },

        dialog(message, params = {}) {
            if (typeof message === 'string') {
                params.message = message;
            } else {
                params = message;
            }

            return new Promise((resolve, reject) => {
                this.show('dialog', params);

                modal.events.$on(
                    'clicked', confirmed => resolve(confirmed)
                );
            });
        }
    }
};

export default modal;
