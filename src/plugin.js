import Toast from './Toast';

let currentToast;

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (msg, toastOptions) {
            if (currentToast) {
                currentToast.close();
            }
            currentToast = createToast({Vue, msg, propsData: toastOptions});
        }
    }
}

/* Helpers */
function createToast({Vue, msg, propsData}) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({ propsData });

    toast.$slots.default = [msg];
    toast.$mount();
    document.body.appendChild(toast.$el);

    return toast;
}