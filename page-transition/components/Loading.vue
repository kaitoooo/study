<template>
  <div class="loading" :class="{'is-hidden' : hidden, 'is-none' : none}">
    <div class="loading__block" :class="{'is-show' : show}">
      <span class="loading__block--inner">
        <i class="loading__block--text loading__block--no01">W</i>
        <i class="loading__block--text loading__block--no02">H</i>
        <i class="loading__block--text loading__block--no03">I</i>
        <i class="loading__block--text loading__block--no04">C</i>
        <i class="loading__block--text loading__block--no05">H</i><br>
      </span>
      <span class="loading__block--inner">
        <i class="loading__block--text loading__block--no06"></i>
        <i class="loading__block--text loading__block--no07">D</i>
        <i class="loading__block--text loading__block--no08">O</i><br>
      </span>
      <span class="loading__block--inner">
        <i class="loading__block--text loading__block--no09"></i>
        <i class="loading__block--text loading__block--no10">Y</i>
        <i class="loading__block--text loading__block--no11">O</i>
        <i class="loading__block--text loading__block--no12">U</i><br>
      </span>
      <span class="loading__block--inner">
        <i class="loading__block--text loading__block--no13"></i>
        <i class="loading__block--text loading__block--no14">L</i>
        <i class="loading__block--text loading__block--no15">O</i>
        <i class="loading__block--text loading__block--no16">V</i>
        <i class="loading__block--text loading__block--no17">E</i>
        <i class="loading__block--text loading__block--no18">?</i>
      </span>
    </div>
  </div>
</template>
<script>
import imagesLoaded from 'imagesloaded';

export default {
  data() {
    return{
      show: false,
      hidden: false,
      none: false,
    }
  },
  mounted(){
    this.load();
  },
  methods: {
    load() {
      // 画像の読み込み開始
      const preloadImages = () => {
        return new Promise((resolve, reject) => {
          imagesLoaded(document.querySelectorAll('img'), {
            background: true
          }, resolve);
        });
      };
      preloadImages().then(() => {
        // 画像を全て読み込んだら実行
        this.init();
      });
    },
    init(){
      this.show = true;
      setTimeout(() => {
        this.hidden = true;
      }, 2000);
      setTimeout(() => {
        this.none = true;
      }, 3000);
    }
  },
}
</script>

<style lang="scss" scoped>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #eba13d;
  transition: ease .5s;
  z-index: 10;

  &.is-hidden{
    opacity: 0;
    visibility: hidden;
    transition: ease .3s;
  }
  &.is-none{
    display: none;
  }

  &__block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 2;
    @media all and (max-width: 768px) {
      top: 38%;
    }

    &--inner{
      display: block;
      height: 100%;
      overflow: hidden;
    }

    &.is-show {
      .loading__block--no01 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.333s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.333s;
      }
      .loading__block--no02 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.343s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.343s;
      }
      .loading__block--no03 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.353s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.353s;
      }
      .loading__block--no04 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.363s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.363s;
      }
      .loading__block--no05 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.373s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.373s;
      }
      .loading__block--no06 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.383s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.383s;
      }
      .loading__block--no07 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.413s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.413s;
      }
      .loading__block--no08 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.443s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.443s;
      }
      .loading__block--no09 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.453s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.453s;
      }
      .loading__block--no10 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.483s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.483s;
      }
      .loading__block--no11 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.493s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.493s;
      }
      .loading__block--no12 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.503s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.503s;
      }
      .loading__block--no13 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.513s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.513s;
      }
      .loading__block--no14 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.543s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.543s;
      }
      .loading__block--no15 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.553s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.553s;
      }
      .loading__block--no16 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.563s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.563s;
      }
      .loading__block--no17 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.573s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.573s;
      }
      .loading__block--no18 {
        transform: translateZ(0);
        visibility: visible;
        transition: transform 0.666s cubic-bezier(0.1, 0, 0.1, 1) 0.583s, opacity 1.333s cubic-bezier(0.1, 0, 0.1, 1) 0.583s;
      }
    }

    &--text {
      display: inline-block;
      font-style: normal;
      transform: translate3d(0, 100%, 0);
      visibility: hidden;
      font-size: 100px;
      color: #b42638;
      font-family: 'Coda Caption', sans-serif;
      @media all and (max-width: 768px) {
        font-size: 10vw;
    }
    }
  }
}
</style>
