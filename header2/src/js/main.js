import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();

import smoothScroll from 'smooth-scroll';
import Macy from 'macy';
import Photo from './lists/photo';
import Header from './modules/header';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
                this.macy();
                this.smoothScroll();
            },
            false
        );
    }
    init(){
        new Header();
    }
    macy(){
        var masonry = new Macy({
            container: '#grid',
            trueOrder: false,
            waitForImages: false,
            useOwnImageLoader: false,
            margin: {
                x: 4,
                y: 4
            },
            columns: 5,
            breakAt: {
                1200: {columns: 4},
                740: {columns: 3}
            }
        });
    }
    smoothScroll() {
        new smoothScroll('a[href*="#"]', {
          speed: 200,
          offset: 0,
          easing: 'easeInOutCubic',
          updateURL: false,
        });
      }
}
new App();
