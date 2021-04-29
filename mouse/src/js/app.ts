import '../style/style.scss';
import picturefill from 'picturefill';
picturefill();
import smoothScroll from 'smooth-scroll';
import { Mouse } from './components/mouse';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
        window.addEventListener('scroll', () => {});
    }
    init() {
        this.smoothScroll();
        new Mouse();
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
