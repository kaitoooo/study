import '../styles/style.scss';
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
                // this.barbaJs();
            },
            false
        );
        this.header = document.querySelector(".header");
        this.footer = document.querySelector(".footer");

        this.barbaJs();
    }
    barbaJs(){
        const mask = document.querySelector(".mask");
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

        //barba設定
        barba.init({
            transitions: [
                {
                    async leave() {
                        mask.classList.add('is-close');//ページ遷移のアニメーション
                        await new Promise((resolve) => {
                            return setTimeout(resolve, 1000);
                        });
                    },
                    afterEnter() {
                        mask.classList.remove('is-close');//ページ遷移のアニメーション
                    },
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
    show() {
        this.header.style.display = "block";
        this.footer.style.display = "block";
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
