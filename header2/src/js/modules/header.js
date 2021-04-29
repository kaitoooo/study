export default class Header {
    constructor() {
        this.addClass = 'is-active';
        this.openBtn = document.querySelector('[data-role="headerOpen"]');
        this.contents = document.querySelector('[data-role="headerContents"]');
        this.bg = document.querySelector('[data-role="headerBg"]');
        this.header = document.querySelector('[data-role="header"]');
        this.headerInner = document.querySelector('[data-role="headerInner"]');
        this.headerText01 = document.querySelector('[data-role="headerText01"]');
        this.headerText02 = document.querySelector('[data-role="headerText02"]');
        this.headerText03 = document.querySelector('[data-role="headerText03"]');
        this.body = document.querySelector('body');

        this.open();
        this.close();
        this.fixed();
    }
    open(){
        this.openBtn.addEventListener('click', () => {
            this.openBtn.classList.toggle(this.addClass);
            this.contents.classList.toggle(this.addClass);
            this.bg.classList.toggle(this.addClass);
            this.body.classList.toggle(this.addClass);
        });
    }
    close(){
        this.bg.addEventListener('click', () => {
            this.openBtn.classList.remove(this.addClass);
            this.contents.classList.remove(this.addClass);
            this.bg.classList.remove(this.addClass);
            this.body.classList.remove(this.addClass);
        });
    }
    fixed(){
        let pos = 0;
        let lastPos = 0;
        const hH = this.header.clientHeight;
        const windowHeight = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        const windBtm = docH - windowHeight;

        const topArrive = () => {
        const scroll = window.pageYOffset | document.documentElement.scrollTop;
            if(scroll > windowHeight / 2){
                this.headerInner.classList.add('header-color');
                this.headerText01.classList.add('header-color');
                this.headerText02.classList.add('header-color');
                this.headerText03.classList.add('header-color');
                this.openBtn.classList.add('header-color');
            }else {
                this.headerInner.classList.remove('header-color');
                this.headerText01.classList.remove('header-color');
                this.headerText02.classList.remove('header-color');
                this.headerText03.classList.remove('header-color');
                this.openBtn.classList.remove('header-color');
            }
        }

        const onScroll = () => {
            if(pos > hH && pos > lastPos) {
              this.header.classList.add('header-up');
            }else if(pos < hH || pos < lastPos) {
              this.header.classList.remove('header-up');
            }
            if(pos < hH || pos < lastPos || windBtm <= pos) {
                this.header.classList.remove('header-up');
            }
              lastPos = pos;
          };

          window.addEventListener("scroll", () => {
            pos = window.scrollY;
            onScroll();
            topArrive();
          });
    }
}
