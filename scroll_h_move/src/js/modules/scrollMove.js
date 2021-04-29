export default class ScrollMove {
    constructor(){
        this.target02 = document.querySelector('.col02__flex');
        this.target04 = document.querySelector('.col04__flex');
        this.init();
    }
    init(){
        let scrollY = window.pageYOffset;//スクロール量を取得
        let target02Pos = ['translateX(-' + scrollY + 'px)'];
        this.target02.style.transform = target02Pos;

        let scroll04 = scrollY / 3;
        let target04Pos = ['translateX(' + scroll04 + 'px)'];
        this.target04.style.transform = target04Pos;
    }
}
