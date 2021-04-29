export default class Loading {
    constructor(){
        this.loading = document.querySelector('.loading');
        this.hukidashi = document.querySelector('.item__hukidashi');
        this.img = document.querySelector('.item__img');
        this.title = document.querySelector('.item__title');
        this.text = document.querySelector('.item__text');
        this.btn = document.querySelector('#btn01');

        this.addClass = 'is-show';
        this.addClassHide = 'is-hide';

        this.init();
    }
    init(){
        this.loading.classList.add(this.addClass);
        setTimeout(() => {
            this.loading.classList.add(this.addClassHide);
        }, 1000);
        setTimeout(() => {
            this.title.classList.add(this.addClass);
        }, 1000);
        setTimeout(() => {
            this.text.classList.add(this.addClass);
        }, 1500);
        setTimeout(() => {
            this.img.classList.add(this.addClass);
        }, 1800);
        setTimeout(() => {
            this.hukidashi.classList.add(this.addClass);
        }, 2100);
        setTimeout(() => {
            this.btn.classList.add(this.addClass);
        }, 2100);
    }
}
