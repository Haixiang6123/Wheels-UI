const expect = chai.expect;
import Vue from 'vue'
import Toast from '../../src/Toast';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
    it('exist.', () => {
        expect(Toast).to.be.exist;
    });

    describe('props', () => {
        it('receive autoClose', (done) => {
            const div = document.createElement('div');
            document.body.appendChild(div);

            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div);

            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false);
                done();
            });
        });

        it('receive auto', (done) => {
            const callback = sinon.fake();

            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: 'Close',
                        callback
                    }
                }
            }).$mount();

            let closeButton = vm.$el.querySelector('.close');
            expect(closeButton.textContent.trim()).to.eq('Close');

            setTimeout(() => {
                closeButton.click();
                expect(callback).to.have.been.called;
                done();
            }, 200);
        });

        it('receive enableHtml', () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            });

            vm.$slots.default = ['<strong id="test">OK</strong>'];
            vm.$mount();

            let strongEle = vm.$el.querySelector('#test');
            expect(strongEle).to.be.exist;
        });

        it('receive position', () => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount();

            expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
        });
    });
});