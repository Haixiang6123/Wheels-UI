const expect = chai.expect;
import Vue from 'vue'
import TabsHead from '../src/TabsHead';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsHead', () => {
    it('exist.', () => {
        expect(TabsHead).to.be.exist;
    });
});