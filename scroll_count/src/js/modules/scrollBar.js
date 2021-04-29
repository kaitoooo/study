export default class ScrollBar {
    constructor(){
        this.barWrap = document.querySelector('.percent__wrap');
        this.addClass = 'is-hide';
        this.init();
    }
    init(){
        let bar = document.querySelector('.percent__bar');
        let timeoutId;//時間
        let windowHeight = document.body.clientHeight;//高さを取得
        let scrollY = window.pageYOffset;//スクロール量を取得
        let  percent01 = windowHeight / 100; //1%を計算
        let percentAll = (scrollY*1.6) / percent01; //スクロール位置を1％で割る＆誤差補正
        let percentFin = Math.round(percentAll); //小数点を四捨五入
        if( percentFin > 100 ) percentFin = 100; //100%以上加算されないように制御
        bar.style.height = percentFin+"%"; //パーセントをバーで表示

        if( percentFin == 100){
            this.barWrap.classList.add(this.addClass); //バーを非表示
        }else{
            this.barWrap.classList.remove(this.addClass); //バーを表示
        }

        bar.style.backgroundColor = '#e95e51'; //スクロール中はバーを赤色にする
        clearTimeout(timeoutId);
        timeoutId = setTimeout( function () {
            bar.style.backgroundColor = '#000'; //スクロール終了0.5秒後にバーを黒に戻す
        }, 500);
    }
}
