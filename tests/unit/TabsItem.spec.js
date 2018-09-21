import sinon from 'sinon';
import chai, {expect} from 'chai';
import {mount} from '@vue/test-utils';
import TabsItem from '@/TabsItem';

describe('TabsItem', () => {
    it('exist.', () => {
        expect(TabsItem).to.be.exist;
    });
    xit('receive name props', () => {
        const wrapper = mount(TabsItem, {
            propsData: {
                name: 'xxx'
            }
        });

        expect(wrapper.attributes()['test-name']).to.eq('xxx');
    });
    xit('receive disabled props', () => {
        const wrapper = mount(TabsItem, {
            propsData: {
                disabled: true
            }
        });

        expect(wrapper.classes().includes('disabled')).to.eq(true);

        const callback = sinon.fake();
        const vm = wrapper.vm;
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.not.been.called;
    });
});