import '../styles/page2.scss';
import picturefill from 'picturefill';
picturefill();

import barba from '@barba/core';
import barbaCss from '@barba/css';
import barbaPrefetch from '@barba/prefetch';

import Swiper, { Autoplay, EffectFade, } from 'swiper';
import ScrollAnim from './modules/scroll';
import smoothScroll from 'smooth-scroll';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.barbaJs();
                this.init();
            },
            false
        );
    }
    barbaJs(){
        let mask = document.querySelector(".mask");

        barba.use(barbaCss);
        barba.use(barbaPrefetch);
        barba.init();
        this.noLink();
        barba.hooks.enter(() => {
            window.scrollTo(0, 0);//ページ遷移時にページの一番上まで行く
            this.init();
        });
        barba.hooks.leave(() => {
            mask.classList.add('is-close');
        });
        barba.hooks.afterEnter(() => {
            setTimeout(() => {
                mask.classList.remove('is-close');
            }, 500);
        });
    }
    noLink(){//同じurlの場合、ページ遷移をさせない
        const eventDelete = e => {
            if (e.currentTarget.href === window.location.href) {
              e.preventDefault()
              e.stopPropagation()
              return
            }
        }
        const links = [...document.querySelectorAll('a[href]')]
          links.forEach(link => {
            link.addEventListener('click', e => {
              eventDelete(e)
            }, false)
        })
    }
    init(){
        this.smoothScroll();
        this.swiper();
        this.scroll();
    }
    scroll() {
        const itemNo1 = new ScrollAnim('[data-scroll="item01"]');
        const itemNo2 = new ScrollAnim('[data-scroll="item02"]');
    }
    smoothScroll() {
        new smoothScroll('a[href*="#"]', {
          speed: 500,
          easing: 'easeInOutCubic',
          updateURL: false,
        });
    }
    swiper() {
        Swiper.use([Autoplay, EffectFade]);
        let kvSwiper = new Swiper('.kv__swiper', {
          effect: 'fade',
          loop: true,
          autoplay: {
            delay: 3000,
          },
          speed: 1300,
        });
    }
}
new App();
