import Vue from 'vue';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';

Vue.component('ow-icon', Icon);
Vue.component('ow-button', Button);
Vue.component('ow-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
});

// Unit test
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
       propsData: {
           icon: 'settings'
       }
    });
    button.$mount();

    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings');
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });
    button.$mount();

    let useElement = button.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    button.$mount(div);

    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    button.$el.remove();
    button.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    });
    button.$mount(div);

    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    button.$el.remove();
    button.$destroy();
}
{
    const Constructor = Vue.extend(Button);
    const owButton = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    owButton.$mount();

    let spy = chai.spy(function() {});

    owButton.$on('click', spy);
    owButton.$el.click();

    expect(spy).to.have.been.called();

    owButton.$el.remove();
    owButton.$destroy();
}