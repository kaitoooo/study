import '../styles/common.scss';
import picturefill from 'picturefill';
picturefill();
//barba.jsをIEで使用するため
require("polyfill-library-node");
//barba.js
import barba from '@barba/core';
import barbaCss from '@barba/css';
import barbaPrefetch from '@barba/prefetch';

//ページごとの設定
import Swiper, { Autoplay, EffectFade, } from 'swiper';
import ScrollAnim from './modules/scroll';
import smoothScroll from 'smooth-scroll';
import Loading from './modules/loading';
import Wh from './modules/wh';
import { gsap } from 'gsap';

export default class App {
    constructor() {
        this.header = document.querySelector(".header");
        this.footer = document.querySelector(".footer");
        this.barbaJs();
    }
    barbaJs(){
        // const mask = document.querySelector(".mask");
        const header = document.querySelector(".header");
        const footer = document.querySelector(".footer");

        //同じurlの場合、ページ遷移をさせない
        this.noLink();

        //head内の変更を読み取る
        const replaceHeadTags = target => {
            const head = document.head
            const targetHead = target.html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]
            const newPageHead = document.createElement('head')
            newPageHead.innerHTML = targetHead
            const removeHeadTags = [
              "meta[name='keywords']",
              "meta[name='description']",
              "meta[property^='fb']",
              "meta[property^='og']",
              "meta[name^='twitter']",
              "meta[name='robots']",
              'meta[itemprop]',
              'link[itemprop]',
              "link[rel='prev']",
              "link[rel='next']",
            //   "link[rel='stylesheet']",
            ].join(',')
            const headTags = [...head.querySelectorAll(removeHeadTags)]
            headTags.forEach(item => {
              head.removeChild(item)
            })
            const newHeadTags = [...newPageHead.querySelectorAll(removeHeadTags)]
            newHeadTags.forEach(item => {
              head.appendChild(item)
            })
        }

        //swiper,scroll,smoothScrollを呼び出す
        const init = target => {
            this.init()
        }
        const topOnly = target => {
            this.topOnly()
        }

        const pageTransition = target => {
            this.pageTransition()
        }

        //barba設定
        barba.init({
            transitions: [
                {
                    async leave() {
                        pageTransition();
                        // mask.classList.add('is-close');//ページ遷移のアニメーション
                        await new Promise((resolve) => {
                            return setTimeout(resolve, 1000);
                        });
                    },
                    // afterEnter() {
                    //     // mask.classList.remove('is-close');//ページ遷移のアニメーション
                    // },
                    enter() {
                        window.scrollTo(0, 0);//ページ遷移時にページの一番上まで行く
                    },
                    beforeEnter({ next }) {//head内を書き換える
                        replaceHeadTags(next);
                    },
                }
            ],
            views: [//各ページの設定
                {
                    namespace: 'top',
                    beforeEnter (data) {
                        header.style.display = "none";
                        footer.style.display = "none";
                        topOnly(data)
                    },
                },
                {
                    namespace: 'page2',
                    beforeEnter (data) {
                        init(data);
                    },
                },
                {
                    namespace: 'page3',
                    beforeEnter (data) {
                        init(data);
                    },
                },
                {
                    namespace: 'page4',
                    beforeEnter (data) {
                        init(data);
                    },
                },
                {
                    namespace: 'page5',
                    beforeEnter (data) {
                        init(data);
                    },
                },
            ]
        });
        barba.use(barbaCss);
        barba.use(barbaPrefetch);
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
        this.show();
    }
    topOnly(){
        new Wh();
        window.addEventListener('load', () => {
            new Loading();
        });
    }
    show() {
        this.header.style.display = "block";
        this.footer.style.display = "block";
    }
    pageTransition(){
        const transitionItem = document.querySelectorAll('.mask__item');
        const transitionContainer = document.querySelector('.mask');
        const tl = gsap.timeline();
        tl.to(transitionItem, {
          duration: 0.4,
          scaleY: 1,
          transformOrigin: 'bottom left',
          stagger: 0.1,
          ease: 'Expo.easeInOut'
        });
        tl.to(transitionContainer, {
          duration: 1.2,
          y: '-100%',
          ease: 'Expo.easeInOut'
        });
        tl.to(transitionContainer, {
          duration: 0,
          y: 0
        });
        tl.to(transitionItem, {
          duration: 0,
          scaleY: 0,
          scaleX: 1
        });
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
            speed: 1300,
            autoplay: {
                delay: 3000,
            },
        });
    }
}
new App();
