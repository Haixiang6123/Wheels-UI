import Vue from 'vue';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';
import Input from './Input';
import Row from './Row';
import Col from './Col';

Vue.component('w-icon', Icon);
Vue.component('w-button', Button);
Vue.component('w-button-group', ButtonGroup);
Vue.component('w-input', Input);
Vue.component('w-row', Row);
Vue.component('w-col', Col);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
});