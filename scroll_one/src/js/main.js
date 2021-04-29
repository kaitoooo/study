import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();
import smoothScroll from 'smooth-scroll';
import Scroll from './modules/scroll';
import Wh from './modules/wh';

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
            this.fadeIn();
        });
    }
    init(){
        this.smoothScroll();
        new Wh();
    }
    fadeIn(){
        const fadeInItem01 = new Scroll('.target');
        const fadeInItem02 = new Scroll('.target2');
        const fadeInItem03 = new Scroll('.target3');
    }
    smoothScroll() {
        new smoothScroll('a[href*="#"]', {
          speed: 400,
          easing: 'easeInOutCubic',
          updateURL: false,
        });
    }
}
new App();
