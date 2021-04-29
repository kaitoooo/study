<template>
  <div class="dog">
    <h1 class="dog__title">DOG GALLERY</h1>
    <no-ssr>
      <div v-masonry="'containerId'" item-selector=".dog__masonry--item" class="dog__masonry">
        <div v-for="(item, index) in photoListDog" :key="index" v-masonry-tile class="dog__masonry--item">
          <img :src="item.src" :width="item.width" :height="item.height" alt="img" />
        </div>
      </div>
    </no-ssr>
    <div class="dog__footer">
      <nuxt-link class="dog__footer--link" to="/">PAGE TOP</nuxt-link>
      <small class="dog__footer--small">kaito takase @2021</small>
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
      photoListDog: [
        { src: require('@/assets/img/img1.jpg'),
          width: 640,
          height: 423
        },
        { src: require('@/assets/img/img2.jpg'),
          width: 640,
          height: 386
        },
        { src: require('@/assets/img/img3.jpg'),
          width: 426,
          height: 640
        },
        { src: require('@/assets/img/img4.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img5.jpg'),
          width: 640,
          height: 463
        },
        { src: require('@/assets/img/img6.jpg'),
          width: 640,
          height: 427
        },
        { src: require('@/assets/img/img7.jpg'),
          width: 640,
          height: 640
        },
        { src: require('@/assets/img/img8.jpg'),
          width: 427,
          height: 640
        },
        { src: require('@/assets/img/img9.jpg'),
          width: 640,
          height: 426
        },
        { src: require('@/assets/img/img10.jpg'),
          width: 640,
          height: 360
        },
        { src: require('@/assets/img/img11.jpg'),
          width: 640,
          height: 420
        },
        { src: require('@/assets/img/img12.jpg'),
          width: 640,
          height: 427
        },
        { src: require('@/assets/img/img13.jpg'),
          width: 640,
          height: 480
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
.dog{
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
