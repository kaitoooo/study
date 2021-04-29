export default class Loading {
  constructor() {
    this.img = document.querySelector('.main__img');
    this.text = document.querySelector('.main__text');
    this.audience01 = document.querySelector('.main__audience');
    this.audience02 = document.querySelector('.main__audience2');
    this.audience03 = document.querySelector('.main__audience3');
    this.audience04 = document.querySelector('.main__audience4');
    this.wa1 = document.querySelector('.main__wa1');
    this.wa2 = document.querySelector('.main__wa2');
    this.kya = document.querySelector('.main__kya');
    this.kya2 = document.querySelector('.main__kya2');

    this.addClass = 'is-show';
    this.addClassAnim = 'is-anim';
    this.init();
  }
  init(){
    this.img.classList.add(this.addClass);
    setTimeout(() => {
      this.text.classList.add(this.addClass);
    }, 1000);
    setTimeout(() => {
      this.audience01.classList.add(this.addClass);
    }, 3000);
    setTimeout(() => {
      this.audience02.classList.add(this.addClass);
    }, 2000);
    setTimeout(() => {
      this.audience02.classList.add(this.addClassAnim);
    }, 3000);
    setTimeout(() => {
      this.audience03.classList.add(this.addClass);
    }, 2000);
    setTimeout(() => {
      this.audience04.classList.add(this.addClass);
    }, 3000);
    setTimeout(() => {
      this.audience03.classList.add(this.addClassAnim);
    }, 3500);
    setTimeout(() => {
      this.wa1.classList.add(this.addClass);
    }, 3000);
    setTimeout(() => {
      this.wa2.classList.add(this.addClass);
    }, 3200);
    setTimeout(() => {
      this.kya.classList.add(this.addClass);
    }, 3500);
    setTimeout(() => {
      this.kya2.classList.add(this.addClass);
    }, 3500);
  }
}