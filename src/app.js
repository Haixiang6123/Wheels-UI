import Vue from 'vue';
import Button from './Button';
import Icon from './Icon';

Vue.component('ow-icon', Icon);
Vue.component('ow-button', Button);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
})