export default class Wh {
    constructor() {
        this.wh = null;
        this.item01 = null;
        this.item02 = null;
        this.item03 = null;

        this.init();
    }
    init() {
        this.wh = window.innerHeight;
        this.item01 = document.querySelector('.col01__flex--item-left-text');
        this.item02 = document.querySelector('.col02__flex--item-left-text');
        this.item03 = document.querySelector('.col03__flex--item-left-text');

        console.log(this.wh);
        if(this.wh < 626){
            this.item01.style.top = '33%';
            this.item02.style.top = '33%';
            this.item03.style.top = '33%';
        }
    }
}