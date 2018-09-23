import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from '@vue/test-utils';
import Popover from '../../src/Popover/Popover';

chai.use(sinonChai);

describe('Popover', () => {

    it('exists.', () => {
        expect(Popover).to.exist;
    });

    it('can set position', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>Click</button>`},
                content: '<div>Popover Content</div>'
            },
            propsData: {
                position: 'bottom'
            }
        });
        wrapper.find('button').trigger('click');
        let classes = wrapper.find('.content-wrapper').classes();
        expect(classes).to.include('position-bottom');
    });
    it('can trigger with hover', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>Click</button>`},
                content: '<div>Popover Content</div>'
            },
            propsData: {
                position: 'bottom',
                trigger: 'hover'
            }
        });
        expect(wrapper.find('.content-wrapper').element).to.not.exist;
        wrapper.find('.popover').trigger('mouseenter');
        expect(wrapper.find('.content-wrapper').element).to.exist;
    });
});