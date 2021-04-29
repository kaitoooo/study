import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();

//page
import Count from './modules/count';
import Confetti from './modules/confetti';
// import Loading from './modules/loading';
import Finish from './modules/finish';

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
    init(){
        new Count();
        new Confetti();
        // new Loading();
        new Finish();
    }
}
new App();
