import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();
import smoothScroll from 'smooth-scroll';
import ScrollBar from './modules/scrollBar';
import Scroll from './modules/scroll';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
        window.addEventListener('scroll', () => {
            new ScrollBar();
            this.fadeIn();
        });
    }
    init(){
        this.smoothScroll();
    }
    fadeIn(){
        const fadeInItem01 = new Scroll('.fadeout');
    }
    smoothScroll() {
        new smoothScroll('a[href*="#"]', {
          speed: 800,
          easing: 'easeInOutCubic',
          updateURL: false,
        });
    }
}
new App();
