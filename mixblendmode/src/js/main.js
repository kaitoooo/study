import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();

import smoothScroll from 'smooth-scroll';
import Scroll from './modules/scroll';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.smoothScroll();
            },
            false
        );
        window.addEventListener('scroll', () => {
            this.fadeIn();
          });
    }
    fadeIn(){
        const fadeInItem01 = new Scroll('.fadeout');
    }
    smoothScroll() {
        new smoothScroll('a[href*="#"]', {
          speed: 400,
          offset: 0,
          easing: 'easeInOutCubic',
          updateURL: false,
        });
      }
}
new App();
