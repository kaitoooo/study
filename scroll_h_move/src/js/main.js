import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();
import smoothScroll from 'smooth-scroll';
import ScrollMove from './modules/scrollMove';
import Scroll from './modules/scroll';
import Loading from './modules/loading';


export default class App {
    constructor() {
        window.addEventListener('DOMContentLoaded',() => {
            this.init();
        },
            false
        );
        window.addEventListener('scroll', () => {
            new ScrollMove();
            new Scroll();
            this.fadeIn();
        });
    }
    init(){
        this.smoothScroll();
        new Loading();
    }
    fadeIn() {
        const fadeIn = new Scroll('.footer__bg', '2', 'is-show');
        const fadeIn2 = new Scroll('.footer', '2', 'is-show');
    }
    smoothScroll() {
        new smoothScroll('a[href*="#"]', {
          speed: 500,
          easing: 'easeInOutCubic',
          updateURL: false,
        });
    }
}
new App();
