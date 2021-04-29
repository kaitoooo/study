import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();

//common
import Confetti from './modules/confetti';
// import Loading from './modules/loading';

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
        new Confetti();
        // new Loading();
    }
}
new App();
