export default class Scroll {
  constructor(targetElem, point, className) {
    this.targetElem = targetElem;
    this.point = point;
    this.className = className;
    this.init();
  }
  init() {
    //スクロールアニメーション
    let targetElem = document.querySelectorAll(this.targetElem);
    let point = this.point;

    for (let i = 0; i < targetElem.length; i++) {
      //ブラウザの高さを取得
      const windowHeight = window.innerHeight;
      //垂直方向のスクロール量
      const scroll = window.pageYOffset | document.documentElement.scrollTop;
      //ターゲット要素をの位置を取得
      const targetTop = targetElem[i].getBoundingClientRect().top;
      const offset = scroll + targetTop;
      if (scroll > offset - windowHeight + windowHeight / point) {
        targetElem[i].classList.add(this.className);
      }else{
        targetElem[i].classList.remove(this.className);
      }
    }
  }
}
