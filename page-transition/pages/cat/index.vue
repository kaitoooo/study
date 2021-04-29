<template>
  <div class="cat">
    <h1 class="cat__title">CAT GALLERY</h1>
    <no-ssr>
      <div v-masonry="'containerId'" item-selector=".cat__masonry--item" class="cat__masonry">
        <div v-for="(item, index) in photoListCat" :key="index" v-masonry-tile class="cat__masonry--item">
          <img :src="item.src" :width="item.width" :height="item.height" alt="img" />
        </div>
      </div>
    </no-ssr>
    <div class="cat__footer">
        <nuxt-link class="cat__footer--link" to="/">PAGE TOP</nuxt-link>
      <small class="cat__footer--small">kaito takase @2021</small>
    </div>
  </div>
</template>
<script>
import NoSSR from 'vue-no-ssr'
export default {
  components: {
    'no-ssr': NoSSR
  },
  data() {
    return {
      photoListCat: [
        { src: require('@/assets/img/img14.jpg'),
          width: 640,
          height: 390
        },
        { src: require('@/assets/img/img15.jpg'),
          width: 489,
          height: 640
        },
        { src: require('@/assets/img/img16.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img17.jpg'),
          width: 640,
          height: 433
        },
        { src: require('@/assets/img/img18.jpg'),
          width: 426,
          height: 640
        },
        { src: require('@/assets/img/img19.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img20.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img21.jpg'),
          width: 533,
          height: 640
        },
        { src: require('@/assets/img/img22.jpg'),
          width: 640,
          height: 398
        },
        { src: require('@/assets/img/img23.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img24.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img25.jpg'),
          width: 640,
          height: 398
        },
        { src: require('@/assets/img/img26.jpg'),
          width: 640,
          height: 434
        },
      ],
    }
  },
  // ページ読み込み時にタイル状に表示させる
  mounted() {
    if (this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style lang="scss" scoped>
.cat{
  width: 100%;
  height: 100%;

  &__title{
    padding: 50px 0;
    font-size: 30px;
    text-align: center;
    font-family: 'Coda Caption', sans-serif;
    @media all and (max-width: 768px) {
      font-size: 8vw;
      padding: 14vw 0 10vw;
    }
  }
  &__masonry {
    margin: auto;
    width: 95%;

    &--item {
      width: 100%;
      margin: 0 0 8px;
      @media screen and (min-width: 768px) {
        width: calc(100% / 3 - 32px);
        margin: 0 2% 2% 0;
      }
      @media screen and (min-width: 1440px) {
        width: calc(100% / 3 - 32px);
      }

      img{
        display: block;
        width: 100%;
      }
    }
  }
  &__footer {
    padding: 20px 0 0;
    background-color: #333;

    &--link {
      display: block;
      color: #fff;
      font-size: 16px;
      margin: 0 0 80px 20px;
      transition: all 0.3s;
      font-family: 'Coda Caption', sans-serif;

      &:hover {
        color: #eba13d;
        transition: all 0.3s;
      }
    }
    &--small {
      display: block;
      color: #fff;
      font-size: 16px;
      text-align: center;
      padding: 20px 0;
      background-color: #000;
      font-family: 'Coda Caption', sans-serif;
    }
  }
}
</style>
