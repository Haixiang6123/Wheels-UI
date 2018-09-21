import chai, {expect} from 'chai';
import sinon from 'sinon';
import {shallowMount, mount} from '@vue/test-utils';
import Vue from 'vue'
import Toast from '@/Toast';

describe('Toast', () => {
    it('exist.', () => {
        expect(Toast).to.be.exist;
    });

    describe('props', () => {
        it('receive autoClose', (done) => {
            const wrapper = mount(Toast, {
                propsData: {
                    autoClose: 1
                }
            });

            const vm = wrapper.vm;
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false);
                done();
            });
        });

        xit('receive auto', (done) => {
            const callback = sinon.fake();

            const wrapper = mount(Toast, {
                propsData: {
                    classButton: {
                        text: 'Close',
                        callback
                    }
                }
            });

            const vm = wrapper.vm;

            let closeButton = vm.$el.querySelector('.close');
            expect(closeButton.textContent.trim()).to.eq('Close');

            setTimeout(() => {
                closeButton.click();
                expect(callback).to.have.been.called;
                done();
            }, 200);
        });

        xit('receive enableHtml', () => {
            const wrapper = mount(Toast, {
                slots: {
                    default: {template: `<strong id="test">OK</strong>`}
                },
                propsData: {
                    enableHtml: true
                }
            });

            let strongEle = wrapper.find('#test');
            expect(strongEle).to.be.exist;
        });

        it('receive position', () => {
            const wrapper = mount(Toast, {
                propsData: {
                    position: 'bottom'
                }
            });

            expect(wrapper.classes().includes('position-bottom')).to.eq(true);
        });
    });
});