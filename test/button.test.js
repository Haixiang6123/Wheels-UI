const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('Button exist.', () => {
        expect(Button).to.be.ok
    });
    it('Set icon for a button.', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use');
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
        vm.$destroy()
    });
    it('Enable loading button.', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount();
        const useElements = vm.$el.querySelectorAll('use');
        expect(useElements.length).to.equal(1);
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading');
        vm.$destroy();
    });
    it('Default order of icon is 1', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('1');
        vm.$el.remove();
        vm.$destroy();
    });
    it('Set iconPosition to change order', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('2');
        vm.$el.remove();
        vm.$destroy();
    });
    it('Click button to trigger click event', () => {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount();

        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});