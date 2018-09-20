const expect = chai.expect;
import Vue from 'vue'
import TabsBody from '../../src/TabsBody';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('TabsBody', () => {
    it('exist.', () => {
        expect(TabsBody).to.be.exist;
    });
});