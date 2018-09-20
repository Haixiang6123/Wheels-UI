const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../../src/TabsPane';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsPane', () => {
    it('exist.', () => {
        expect(TabsPane).to.be.exist;
    });
});