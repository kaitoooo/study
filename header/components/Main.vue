<template>
  <section class="main" id="top">
    <h1 class="main__title">Masonry</h1>
    <div v-masonry="'containerId'" transition-duration="0.3s" item-selector=".item" class="main__wrap">
      <div v-for="(item, index) in photoList" :key="index" v-masonry-tile class="main__wrap--item item">
        <img :src="item.src" :width="item.width" :height="item.height" alt="img" />
      </div>
    </div>
  </section>
</template>

<script>
'use strict';
import imagesLoaded from 'imagesloaded';

export default {
  data() {
    return {
      photoList: [
        {
          src: require('@/assets/img/img1.jpg'),
          width: 1920,
          height: 1080,
        },
        {
          src: require('@/assets/img/img2.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img3.jpg'),
          width: 1280,
          height: 1920,
        },
        {
          src: require('@/assets/img/img4.jpg'),
          width: 1920,
          height: 1282,
        },
        {
          src: require('@/assets/img/img5.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img6.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img7.jpg'),
          width: 1920,
          height: 1080,
        },
        {
          src: require('@/assets/img/img8.jpg'),
          width: 960,
          height: 1280,
        },
        {
          src: require('@/assets/img/img9.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img10.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img11.jpg'),
          width: 853,
          height: 1280,
        },
        {
          src: require('@/assets/img/img12.jpg'),
          width: 1920,
          height: 1080,
        },
        {
          src: require('@/assets/img/img13.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img14.jpg'),
          width: 998,
          height: 1280,
        },
        {
          src: require('@/assets/img/img15.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img16.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img17.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img18.jpg'),
          width: 1920,
          height: 1309,
        },
        {
          src: require('@/assets/img/img19.jpg'),
          width: 1280,
          height: 743,
        },
        {
          src: require('@/assets/img/img20.jpg'),
          width: 1280,
          height: 852,
        },
        {
          src: require('@/assets/img/img21.jpg'),
          width: 853,
          height: 1280,
        },
        {
          src: require('@/assets/img/img22.jpg'),
          width: 1920,
          height: 1281,
        },
        {
          src: require('@/assets/img/img23.jpg'),
          width: 852,
          height: 1280,
        },
        {
          src: require('@/assets/img/img24.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img25.jpg'),
          width: 1920,
          height: 1280,
        },
        {
          src: require('@/assets/img/img26.jpg'),
          width: 1280,
          height: 870,
        },
        {
          src: require('@/assets/img/img27.jpg'),
          width: 426,
          height: 640,
        },
        {
          src: require('@/assets/img/img28.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img29.jpg'),
          width: 1280,
          height: 851,
        },
        {
          src: require('@/assets/img/img30.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img31.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img32.jpg'),
          width: 427,
          height: 640,
        },
        {
          src: require('@/assets/img/img33.jpg'),
          width: 960,
          height: 1280,
        },
        {
          src: require('@/assets/img/img34.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img35.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img36.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img37.jpg'),
          width: 1280,
          height: 960,
        },
        {
          src: require('@/assets/img/img38.jpg'),
          width: 640,
          height: 426,
        },
        {
          src: require('@/assets/img/img39.jpg'),
          width: 1280,
          height: 803,
        },
        {
          src: require('@/assets/img/img40.jpg'),
          width: 640,
          height: 426,
        },
        {
          src: require('@/assets/img/img41.jpg'),
          width: 854,
          height: 1280,
        },
        {
          src: require('@/assets/img/img42.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img43.jpg'),
          width: 1280,
          height: 854,
        },
        {
          src: require('@/assets/img/img44.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img45.jpg'),
          width: 904,
          height: 1280,
        },
        {
          src: require('@/assets/img/img46.jpg'),
          width: 853,
          height: 1280,
        },
        {
          src: require('@/assets/img/img47.jpg'),
          width: 640,
          height: 426,
        },
        {
          src: require('@/assets/img/img48.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img49.jpg'),
          width: 640,
          height: 424,
        },
        {
          src: require('@/assets/img/img50.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img51.jpg'),
          width: 515,
          height: 640,
        },
        {
          src: require('@/assets/img/img52.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img53.jpg'),
          width: 426,
          height: 640,
        },
        {
          src: require('@/assets/img/img54.jpg'),
          width: 640,
          height: 426,
        },
        {
          src: require('@/assets/img/img55.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img56.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img57.jpg'),
          width: 427,
          height: 640,
        },
        {
          src: require('@/assets/img/img58.jpg'),
          width: 640,
          height: 427,
        },
        {
          src: require('@/assets/img/img59.jpg'),
          width: 941,
          height: 1280,
        },
        {
          src: require('@/assets/img/img60.jpg'),
          width: 1280,
          height: 853,
        },
        {
          src: require('@/assets/img/img61.jpg'),
          width: 1920,
          height: 1280,
        },
      ],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      // 画像の読み込み開始
      const preloadImages = () => {
        return new Promise((resolve, reject) => {
          imagesLoaded(
            document.querySelectorAll('img'),
            {
              background: true,
            },
            resolve
          );
        });
      };
      preloadImages().then(() => {
        // 画像を全て読み込んだら実行
        this.init();
      });
    },
    init() {
      // ページ読み込み時にタイル状に表示させる
      this.$redrawVueMasonry();
    },
  },
};
</script>
