import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();

import Scroll from './modules/scrollTrigger';
import ScrollAnim from './modules/scroll';

export default class App {
    constructor() {
        window.addEventListener(
            'DOMContentLoaded',
            () => {
                this.init();
            },
            false
        );
    }
    init() {
        new Scroll();
        this.scroll();
    }
    scroll() {
        const itemNo1 = new ScrollAnim('.contents02__main');
    }
}
new App();
