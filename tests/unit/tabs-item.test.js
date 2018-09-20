const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../../src/TabsItem';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsItem', () => {
    it('exist.', () => {
        expect(TabsItem).to.be.exist;
    });
    it('receive name props', () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                name: 'xxx',
            }
        }).$mount();

        expect(vm.$el.getAttribute('test-name')).to.eq('xxx');
    });
    it('receive disabled props', () => {
        const Constructor = Vue.extend(TabsItem);
        const vm = new Constructor({
            propsData: {
                disabled: true,
            }
        }).$mount();

        console.log(vm.$el.outerHTML);
        expect(vm.$el.classList.contains('disabled')).to.be.true;

        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.not.been.called;
    });
});