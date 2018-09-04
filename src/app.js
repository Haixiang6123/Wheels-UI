import Vue from 'vue';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';
import Input from './Input';
import Row from './Row';
import Col from './Col';
import Layout from './Layout';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';

Vue.component('w-icon', Icon);
Vue.component('w-button', Button);
Vue.component('w-button-group', ButtonGroup);
Vue.component('w-input', Input);
Vue.component('w-row', Row);
Vue.component('w-col', Col);
Vue.component('w-layout', Layout);
Vue.component('w-header', Header);
Vue.component('w-sider', Sider);
Vue.component('w-content', Content);
Vue.component('w-footer', Footer);

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