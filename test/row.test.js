const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row';
import Col from '../src/Col';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Row', () => {
    it('Row exist.', () => {
        expect(Row).to.be.exist;
    });
    it('Receive props gutter', (done) => {
        Vue.component('w-row', Row);
        Vue.component('w-col', Col);

        const div = document.createElement('div');
        document.body.appendChild(div);

        div.innerHTML = `
            <w-row gutter="20">
                <w-col span="12"></w-col>
                <w-col span="12"></w-col>
            </w-row>
        `;

        const vm = new Vue({
            el: div
        });

        setTimeout(() => {
            const row = vm.$el.querySelector('.row');
            expect(getComputedStyle(row).marginLeft).to.eq('-10px');
            expect(getComputedStyle(row).marginRight).to.eq('-10px');
            const cols = vm.$el.querySelectorAll('.col');
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px');
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px');

            vm.$el.remove();
            vm.$destroy();
            done();
        });
    });
    it('Receive props align', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        const Constructor = Vue.extend(Row);
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div);

        const el = vm.$el;
        expect(getComputedStyle(el).justifyContent).to.eq('center');

        div.remove();
        vm.$destroy();
    });
});