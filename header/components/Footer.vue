<template>
  <footer class="footer">
    <nuxt-link
      class="footer__link"
      v-scroll-to="'#top'"
      to
      @click.native="clickLink"
      >
      Page Top
    </nuxt-link>
    <small class="footer__small">kaito takase @2021</small>
  </footer>
</template>

<script>
export default {
  methods: {
    clickLink: function(){
      this.open = !this.open
    },
  }
}
</script>
