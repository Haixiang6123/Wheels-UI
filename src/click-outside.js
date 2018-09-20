let onClickDocument = (e) => {
    let {target} = e;
    callbacks.forEach((item) => {
        // item.el item.callback
        if (target === item.el || item.el.contains(target)) {
            return
        }
        else {
            item.callback();
        }
    });
};

document.addEventListener('click', onClickDocument);

let callbacks = [];
export default {
    bind(el, binding, vnode) {
        callbacks.push({el, callback: binding.value});
    }
}
let removeListeners = () => {
    document.removeEventListener('click', onClickDocument);
};

export {
    removeListeners
}