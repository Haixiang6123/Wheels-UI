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
import Toast from './Toast';
import Tabs from './Tabs';
import TabsHead from './TabsHead';
import TabsItem from './TabsItem';
import TabsBody from './TabsBody';
import TabsPane from './TabsPane';
import Popover from './Popover';

import plugin from './plugin';

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
Vue.component('w-toast', Toast);
Vue.component('w-tabs', Tabs);
Vue.component('w-tabs-head', TabsHead);
Vue.component('w-tabs-item', TabsItem);
Vue.component('w-tabs-body', TabsBody);
Vue.component('w-tabs-pane', TabsPane);
Vue.component('w-popover', Popover);

Vue.use(plugin);

new Vue({
    el: '#app',
    data: {
        selectedTabs: 'sports'
    },
    methods: {
    }
});