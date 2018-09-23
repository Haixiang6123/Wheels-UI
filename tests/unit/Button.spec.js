import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from '@vue/test-utils';
import Button from '../../src/Button/Button.vue';

chai.use(sinonChai);

describe('Button', () => {
    it('Button exist.', () => {
        expect(Button).to.be.ok
    });
    it('Set icon for a button.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        });

        const useElement = wrapper.find('use');
        expect(useElement.attributes()['href']).to.equal('#i-settings');
    });
    it('Enable loading button.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        });

        const useElements = wrapper.findAll('use');

        expect(useElements.length).to.equal(1);
        expect(useElements.at(0).attributes().href).to.equal('#i-loading');
    });
    xit('Default order of icon is 1', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        });

        const icon = wrapper.find('svg');
        // No DOM => styles can be calculated
        expect(getComputedStyle(icon).order).to.eq('1');
    });
    xit('Set iconPosition to change order', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        });

        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('2');
    });
    it('Click button to trigger click event', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        });

        const vm = wrapper.vm;

        const callback = sinon.fake();
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});