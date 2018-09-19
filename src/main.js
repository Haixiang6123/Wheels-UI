// import Vue from 'vue';
// import Button from './Button';
// import ButtonGroup from './ButtonGroup';
// import Icon from './Icon';
// import Input from './Input';
// import Row from './Row';
// import Col from './Col';
// import Layout from './Layout';
// import Header from './Header';
// import Sider from './Sider';
// import Content from './Content';
// import Footer from './Footer';
// import Toast from './Toast';
// import Tabs from './Tabs';
// import TabsHead from './TabsHead';
// import TabsItem from './TabsItem';
// import TabsBody from './TabsBody';
// import TabsPane from './TabsPane';
// import Popover from './Popover';
// import Collapse from './Collapse';
// import CollapseItem from './CollapseItem';
// import Cascader from './Cascader';
//
// import plugin from './plugin';
//
// Vue.component('w-button', Button);
// Vue.component('w-button-group', ButtonGroup);
// Vue.component('w-cascader', Cascader);
// Vue.component('w-col', Col);
// Vue.component('w-collapse', Collapse);
// Vue.component('w-collapse-item', CollapseItem);
// Vue.component('w-content', Content);
// Vue.component('w-footer', Footer);
// Vue.component('w-header', Header);
// Vue.component('w-icon', Icon);
// Vue.component('w-input', Input);
// Vue.component('w-layout', Layout);
// Vue.component('w-popover', Popover);
// Vue.component('w-row', Row);
// Vue.component('w-sider', Sider);
// Vue.component('w-tabs', Tabs);
// Vue.component('w-tabs-body', TabsBody);
// Vue.component('w-tabs-head', TabsHead);
// Vue.component('w-tabs-item', TabsItem);
// Vue.component('w-tabs-pane', TabsPane);
// Vue.component('w-toast', Toast);
//
// Vue.use(plugin);
//
// new Vue({
//     el: '#app',
//     data: {
//         source: [
//             {
//                 name: 'California',
//                 children: [
//                     {name: 'Irvine', children: [{name: 'UCI'}]},
//                     {name: 'LosAngles', children: [{name: 'UCLA'}, {name: 'UCB'}]},
//                     {name: 'San Diego', children: [{name: 'UCSD'}]},
//                 ]
//             },
//             {
//                 name: 'Texas',
//                 children: [
//                     {name: 'El Paso', children: [{name: 'University 1'}]},
//                     {name: 'Fort Worth', children: [{name: 'University 1'}, {name: 'University 2'}]}
//                 ]
//             },
//             {
//                 name: 'Washington',
//                 children: [
//                     {name: 'Spokane', children: [{name: 'University 1'}]},
//                     {name: 'Tacoma', children: [{name: 'University 1'}, {name: 'University 2'}]},
//                     {name: 'Vancouver', children: [{name: 'University 1'}, {name: 'University 2'}]}
//                 ]
//             }
//         ]
//     },
//     methods: {}
// });

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
