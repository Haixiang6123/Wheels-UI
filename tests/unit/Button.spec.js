import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from '@vue/test-utils';

chai.use(sinonChai);

const expect = chai.expect;

import Vue from 'vue'
import Button from '@/Button.vue';

Vue.config.productionTip = false
Vue.config.devtools = false

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
    it('Default order of icon is 1', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        });

        const icon = wrapper.find('svg');
        // No DOM => styles can be calculated
        expect(getComputedStyle(icon).order).to.eq('1');
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