const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Input', () => {
    it('Input exist.', () => {
        expect(Input).to.be.ok;
    });

    describe('props', () => {
        const Constructor = Vue.extend(Input);
        let vm;

        afterEach(function () {
            vm.$destroy();
        });

        it('Receive value parameter', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount();

            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.value).to.equal('1234');
        });
        it('Receive disabled parameter', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();

            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.disabled).to.equal(true);
        });
        it('Receive readonly parameter', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();

            const inputElement = vm.$el.querySelector('input');
            expect(inputElement.readOnly).to.equal(true);
        });
        it('Receive error parameter', () => {
            vm = new Constructor({
                propsData: {
                    error: 'Error'
                }
            }).$mount();

            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
            const errorMessage = vm.$el.querySelector('.error-message');
            expect(errorMessage.innerHTML).to.equal('Error');
        });
    });

    describe('Input event', () => {
        const Constructor = Vue.extend(Input);
        let vm;

        afterEach(function () {
            vm.$destroy();
        });

        it('Support change/input/focus/blur event', () => {
            ['change', 'input', 'focus', 'focus']
                .forEach((eventName) => {
                    vm = new Constructor({}).$mount();
                    const callback = sinon.fake();

                    vm.$on('eventName', callback);

                    let event = new Event('eventName');
                    let inputElement = vm.$el.querySelector('input');
                    inputElement.dispatchEvent(event);
                    expect(callback).to.have.been.calledWith(event);
                });
        });
    })
});