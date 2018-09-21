import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import {shallowMount, mount} from '@vue/test-utils';
import Input from '@/Input';

chai.use(sinonChai);

describe('Input', () => {
    it('Input exist.', () => {
        expect(Input).to.be.ok;
    });

    describe('props', () => {
        it('Receive value parameter', () => {
            const wrapper = mount(Input, {
                propsData: {
                    value: '1234'
                }
            });

            const inputElement = wrapper.find('input');
            expect(inputElement.element.value).to.equal('1234');
        });
        it('Receive disabled parameter', () => {
            const wrapper = mount(Input, {
                propsData: {
                    disabled: true
                }
            });

            const inputElement = wrapper.find('input');
            expect(inputElement.attributes().disabled).to.equal('disabled');
        });
        it('Receive readonly parameter', () => {
            const wrapper = mount(Input, {
                propsData: {
                    readonly: true
                }
            });

            const inputElement = wrapper.find('input');
            expect(inputElement.attributes().readonly).to.equal('readonly');
        });
        it('Receive error parameter', () => {
            const wrapper = mount(Input, {
                propsData: {
                    error: 'Error'
                }
            });

            const useElement = wrapper.find('use');
            expect(useElement.attributes().href).to.equal('#i-error');
            const errorMessage = wrapper.find('.error-message');
            expect(errorMessage.text()).to.equal('Error');
        });
    });

    describe('Input event', () => {
        it('Support change/input/focus/blur event', () => {
            ['change', 'input', 'focus', 'focus']
                .forEach((eventName) => {
                    const wrapper = mount(Input);
                    const callback = sinon.fake();

                    const vm = wrapper.vm;

                    vm.$on(eventName, callback);

                    // Trigger event
                    let event = new Event(eventName);
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hi'},
                            enumerable: true
                        });
                    let inputElement = vm.$el.querySelector('input');
                    inputElement.dispatchEvent(event);
                    expect(callback).to.have.been.calledWith('hi');
                });
        });
    })
});