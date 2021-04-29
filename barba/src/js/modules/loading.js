export default class Loading {
    constructor() {
        this.Loading = document.querySelector('.loading');
        this.text = document.querySelector('.loading__text');

        this.addClass = "is-hide";
        this.addDelete = "is-delete";
        this.addShow = "is-show";
        this.init();
    }
    init() {
        setTimeout(() => {
            this.text.classList.add(this.addShow);
        }, 100);
        setTimeout(() => {
            this.text.classList.remove(this.addShow);
        }, 1800);
        setTimeout(() => {
            this.Loading.classList.add(this.addClass);
        }, 2000);
        setTimeout(() => {
            this.Loading.classList.add(this.addDelete);
        }, 2500);
    }
}