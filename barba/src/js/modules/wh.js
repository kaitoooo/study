export default class Wh {
    constructor() {
        this.wh = null;
        this.items = null;

        this.init();
    }
    init() {
        this.wh = window.innerHeight;
        this.items = document.querySelectorAll('.kv__flex--link');

        if(this.wh < 626){
            this.items.forEach((target) => {
                target.style.padding = '23% 0';
            });
        }
    }
}