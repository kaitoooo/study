<template>
  <header class="header" data-role="header">
    <div class="header__bg" data-role="headerBg"></div>
    <ul class="header__flex" data-role="headerInner">
      <li class="flex__item flex__item--right">
      </li>
      <li class="flex__item flex__item--left">
        <a href="/" class="left__text" data-role="headerText01">Menu1</a>
        <a href="/" class="left__text" data-role="headerText02">Menu2</a>
        <a href="/" class="left__text" data-role="headerText03">Menu3</a>
        <div class="left__btn" data-role="headerOpen"><span></span></div>
      </li>
    </ul>
    <div class="header__menu" data-role="headerContents">
       <ul class="header__menu--flex">
        <li class="flex__item">
          <a href="/" class="flex__item--link">
            Link1
          </a>
        </li>
        <li class="flex__item">
          <a href="/" class="flex__item--link">
            Link2
          </a>
        </li>
        <li class="flex__item">
          <a href="/" class="flex__item--link">
            Link3
          </a>
        </li>
        <li class="flex__item">
          <a href="/" class="flex__item--link">
            Link4
          </a>
        </li>
       </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      addClass: 'is-active',
      openBtn: process.client ? document.querySelector('[data-role="headerOpen"]') : null,
      contents: process.client ? document.querySelector('[data-role="headerContents"]') : null,
      bg: process.client ? document.querySelector('[data-role="headerBg"]') : null,
      header: process.client ? document.querySelector('[data-role="header"]') : null,
      headerInner: process.client ? document.querySelector('[data-role="headerInner"]') : null,
      headerText01: process.client ? document.querySelector('[data-role="headerText01"]') : null,
      headerText02: process.client ? document.querySelector('[data-role="headerText02"]') : null,
      headerText03: process.client ? document.querySelector('[data-role="headerText03"]') : null,
      body: process.client ? document.querySelector('body') : null,
    };
  },
  mounted() {
    this.open();
    this.close();
    this.fixed();
  },
  methods: {
    open() {
      this.openBtn.addEventListener('click', () => {
        this.openBtn.classList.toggle(this.addClass);
        this.contents.classList.toggle(this.addClass);
        this.bg.classList.toggle(this.addClass);
        this.body.classList.toggle(this.addClass);
      });
    },
    close() {
      this.bg.addEventListener('click', () => {
        this.openBtn.classList.remove(this.addClass);
        this.contents.classList.remove(this.addClass);
        this.bg.classList.remove(this.addClass);
        this.body.classList.remove(this.addClass);
      });
    },
    fixed() {
      let pos = 0;
      let lastPos = 0;
      const hH = this.header.clientHeight;
      const windowHeight = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const windBtm = docH - windowHeight;

      const topArrive = () => {
        const scroll = window.pageYOffset | document.documentElement.scrollTop;
        if (scroll > windowHeight / 2) {
          this.headerInner.classList.add('header-color');
          this.headerText01.classList.add('header-color');
          this.headerText02.classList.add('header-color');
          this.headerText03.classList.add('header-color');
          this.openBtn.classList.add('header-color');
        } else {
          this.headerInner.classList.remove('header-color');
          this.headerText01.classList.remove('header-color');
          this.headerText02.classList.remove('header-color');
          this.headerText03.classList.remove('header-color');
          this.openBtn.classList.remove('header-color');
        }
      };

      const onScroll = () => {
        if (pos > hH && pos > lastPos) {
          this.header.classList.add('header-up');
        } else if (pos < hH || pos < lastPos) {
          this.header.classList.remove('header-up');
        }
        if (pos < hH || pos < lastPos || windBtm <= pos) {
          this.header.classList.remove('header-up');
        }
        lastPos = pos;
      };

      window.addEventListener('scroll', () => {
        pos = window.scrollY;
        onScroll();
        topArrive();
      });
    },
  },
};
</script>
