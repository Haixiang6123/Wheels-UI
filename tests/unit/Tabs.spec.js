import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from '@vue/test-utils';

import Vue from 'vue'
import Tabs from '../../src/Tabs/Tabs';
import TabsHead from '../../src/Tabs/TabsHead';
import TabsItem from '../../src/Tabs/TabsItem';
import TabsBody from '../../src/Tabs/TabsBody';
import TabsPane from '../../src/Tabs/TabsPane';

Vue.component('w-tabs', Tabs);
Vue.component('w-tabs-head', TabsHead);
Vue.component('w-tabs-item', TabsItem);
Vue.component('w-tabs-body', TabsBody);
Vue.component('w-tabs-pane', TabsPane);

describe('Tabs', () => {
    it('exist.', () => {
        expect(Tabs).to.be.exist;
    });
    xit('receive selected props', (done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <w-tabs selected="home">
                <w-tabs-head>
                    <w-tabs-item name="home">Home</w-tabs-item>
                    <w-tabs-item name="category">Category</w-tabs-item>
                    <w-tabs-item name="ahoutus">About us</w-tabs-item>
                </w-tabs-head>
                <w-tabs-body>
                    <w-tabs-pane name="home">Home</w-tabs-pane>
                    <w-tabs-pane name="category">Category</w-tabs-pane>
                    <w-tabs-pane name="ahoutus">About us </w-tabs-pane>
                </w-tabs-body>
            </w-tabs>
        `;

        let vm = new Vue({
            el: div
        });

        vm.$nextTick(() => {
            let activeTabsItem = vm.$el.querySelector(`.tabs-item[test-name="home"]`);
            expect(activeTabsItem.classList.contains('active')).to.eq(true);
            done();
        })
    });
    xit('receive orientation props', () => {
        // Todo
    });
});