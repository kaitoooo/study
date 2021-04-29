export default class Loading {
  constructor() {
    this.block = document.querySelector('.kv__block');
    this.addClass = 'is-show';
    this.init();
  }
  init() {
    this.block.classList.add(this.addClass);
  }
}
