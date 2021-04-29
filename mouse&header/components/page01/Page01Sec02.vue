<template>
    <section class="sec02">
        <ul class="sec02__flex">
            <li class="sec02__flex--item" data-scroll>
                <figure>
                    <AppImage :pc-img="`img13.jpg`" :pc-img-retina="`img13.jpg`" :alt="``" :role="`none`" :width="1920" :height="1280" />
                </figure>
            </li>
            <li class="sec02__flex--item sec02__flex--item-left" data-scroll>
                <h2 class="sec02__flex--title">Suspendisse sed congue elit.</h2>
                <p class="sec02__flex--text">
                    ed tristique tincidunt libero, sed vestibulum ex rhoncus eget. Cras lacinia risus aliquet nisi vestibulum tincidunt. Sed ultrices vehicula tortor tempor rhoncus. Praesent sit amet velit ut nisl dapibus ullamcorper a a tortor. Praesent eget pellentesque ex. Cras eget dolor ut eros
                    consectetur euismod nec sed mi. Ut lacinia tellus massa, eu mattis sapien consectetur ac. Donec eu orci sodales dolor consectetur fringilla.
                </p>
                <AppBotton :to="`/page02/`">Page02</AppBotton>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Scroll } from '~/assets/scripts/scroll';

export default Vue.extend({
    mounted() {
        const taeget01 = new Scroll({
            addClass: 'is-show',
            targetSelector: '[data-scroll]',
            threshold: [0.25],
        });
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/index/_sec02';
</style>
