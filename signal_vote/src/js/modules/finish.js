export default class Finish {
    constructor(){
        this.init();
    }
    init(){
        let img = document.querySelector('.finish__main--img');
        let text = document.querySelector('.finish__main--text');
        let audience01 = document.querySelector('.finish__main--audience');
        let audience02 = document.querySelector('.finish__main--audience2');
        let audience03 = document.querySelector('.finish__main--audience3');
        let audience04 = document.querySelector('.finish__main--audience4');
        let wa1 = document.querySelector('.finish__main--wa1');
        let wa2 = document.querySelector('.finish__main--wa2');
        let kya = document.querySelector('.finish__main--kya');
        let kya2 = document.querySelector('.finish__main--kya2');
        let finish = document.querySelector('.finish');

        finish.classList.add('is-show');
        setTimeout(() => {
            img.classList.add('is-show');
        }, 1000);
        setTimeout(() => {
          text.classList.add('is-show');
        }, 2000);
        setTimeout(() => {
          audience01.classList.add('is-show');
        }, 2700);
        setTimeout(() => {
          audience02.classList.add('is-show');
        }, 3000);
        setTimeout(() => {
          audience02.classList.add('is-anim');
        }, 3900);

        setTimeout(() => {
          audience03.classList.add('is-show');
        }, 3000);
        setTimeout(() => {
          audience04.classList.add('is-show');
        }, 2700);
        setTimeout(() => {
          audience03.classList.add('is-anim');
        }, 4000);

        setTimeout(() => {
          wa1.classList.add('is-show');
        }, 4500);
        setTimeout(() => {
          wa2.classList.add('is-show');
        }, 4800);
        setTimeout(() => {
          kya.classList.add('is-show');
        }, 5000);
        setTimeout(() => {
          kya2.classList.add('is-show');
        }, 5300);
    }
}
