import Vue from 'vue';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {mount} from '@vue/test-utils';
import Carousel from '@/Carousel.vue';
import CarouselItem from '@/CarouselItem.vue';

chai.use(sinonChai);

describe('Carousel', () => {
    it('exist.', () => {
        expect(Carousel).to.be.ok
    });
    it('shows the fist one as default', (done) => {
        Vue.component('w-carousel-item', CarouselItem);
        const wrapper = mount(Carousel, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
                    <w-carousel-item name="1">
                        <div class="box1">1</div>
                    </w-carousel-item>
                    <w-carousel-item name="2">
                        <div class="box2">2</div>
                    </w-carousel-item>
                    <w-carousel-item name="3">
                        <div class="box3">3</div>
                    </w-carousel-item>
                `
            }
        });

        setTimeout(() => {
            expect(wrapper.find('.box1')).to.be.exist;
            done();
        })
    });
    it('shows ith slide when selected=i', (done) => {
        Vue.component('w-carousel-item', CarouselItem);
        const wrapper = mount(Carousel, {
            propsData: {
                selected: '2',
                autoPlay: false
            },
            slots: {
                default: `
                    <w-carousel-item name="1">
                        <div class="box1">1</div>
                    </w-carousel-item>
                    <w-carousel-item name="2">
                        <div class="box2">2</div>
                    </w-carousel-item>
                    <w-carousel-item name="3">
                        <div class="box3">3</div>
                    </w-carousel-item>
                `
            }
        });

        setTimeout(() => {
            expect(wrapper.find('.box2')).to.be.exist;
            done();
        })
    });
    it('shows the second slide when it selects the second navigator', (done) => {
        Vue.component('w-carousel-item', CarouselItem);
        const wrapper = mount(Carousel, {
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            slots: {
                default: `
                    <w-carousel-item name="1">
                        <div class="box1">1</div>
                    </w-carousel-item>
                    <w-carousel-item name="2">
                        <div class="box2">2</div>
                    </w-carousel-item>
                    <w-carousel-item name="3">
                        <div class="box3">3</div>
                    </w-carousel-item>
                `
            },
            listeners: {
                'update:selected': (newSelected) => {
                    expect(newSelected).to.eq('2');
                    done();
                }
            }
        });

        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click');
        });
    });
    it('can auto play', (done) => {
        const callback = sinon.fake();

        Vue.component('w-carousel-item', CarouselItem);
        const wrapper = mount(Carousel, {
            propsData: {
                autoPlay: true,
                selected: '1',
                autoPlayDelay: 20
            },
            slots: {
                default: `
                    <w-carousel-item name="1">
                        <div class="box1">1</div>
                    </w-carousel-item>
                    <w-carousel-item name="2">
                        <div class="box2">2</div>
                    </w-carousel-item>
                    <w-carousel-item name="3">
                        <div class="box3">3</div>
                    </w-carousel-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        });

        setTimeout(() => {
            expect(callback).to.have.been.called;
            expect(callback).to.have.been.calledWith('2');
            done();
        }, 21);
    });
});