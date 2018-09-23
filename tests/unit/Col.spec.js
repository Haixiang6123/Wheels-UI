import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from '@vue/test-utils';
import Col from '../../src/Grid/Col';

chai.use(sinonChai);

describe('Col', () => {
    it('Col exist.', () => {
        expect(Col).to.be.exist;
    });

    it('Receive props span', function () {
        const wrapper = mount(Col, {
            propsData: {
                span: 1
            }
        });

        expect(wrapper.classes().includes('col-1')).to.eq(true);
    });

    it('Receive props offset', function () {
        const wrapper = mount(Col, {
            propsData: {
                offset: 1
            }
        });

        expect(wrapper.classes().includes('offset-1')).to.eq(true);
    });

    it('Receive ipad offset', function () {
        const wrapper = mount(Col, {
            propsData: {
                ipad: {span: 1, offset: 2}
            }
        });

        expect(wrapper.classes().includes('col-ipad-1')).to.eq(true);
        expect(wrapper.classes().includes('offset-ipad-2')).to.eq(true);
    });

    it('Receive narrowPc offset', function () {
        const wrapper = mount(Col, {
            propsData: {
                narrowPc: {span: 1, offset: 2}
            }
        });

        expect(wrapper.classes().includes('col-narrow-pc-1')).to.eq(true);
        expect(wrapper.classes().includes('offset-narrow-pc-2')).to.eq(true);
    });

    it('Receive pc offset', function () {
        const wrapper = mount(Col, {
            propsData: {
                pc: {span: 1, offset: 2}
            }
        });

        expect(wrapper.classes().includes('col-pc-1')).to.eq(true);
    });

    it('Receive widePc offset', function () {
        const wrapper = mount(Col, {
            propsData: {
                widePc: {span: 1, offset: 2}
            }
        });

        expect(wrapper.classes().includes('col-wide-pc-1')).to.eq(true);
        expect(wrapper.classes().includes('offset-wide-pc-2')).to.eq(true);
    });
});