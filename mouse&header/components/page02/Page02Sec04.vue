<template>
    <section class="sec04">
        <ul class="sec04__flex">
            <li class="sec04__flex--item sp" data-scroll>
                <figure>
                    <AppImage :pc-img="`img2.jpg`" :pc-img-retina="`img2.jpg`" :alt="``" :role="`none`" :width="1280" :height="785" />
                </figure>
            </li>
            <li class="sec04__flex--item" data-scroll>
                <h2 class="sec04__flex--title">Suspendisse sed congue elit.</h2>
                <p class="sec04__flex--text">
                    ed tristique tincidunt libero, sed vestibulum ex rhoncus eget. Cras lacinia risus aliquet nisi vestibulum tincidunt. Sed ultrices vehicula tortor tempor rhoncus. Praesent sit amet velit ut nisl dapibus ullamcorper a a tortor. Praesent eget pellentesque ex. Cras eget dolor ut eros
                    consectetur euismod nec sed mi. Ut lacinia tellus massa, eu mattis sapien consectetur ac. Donec eu orci sodales dolor consectetur fringilla.
                </p>
                <AppBotton :to="`/`">Top</AppBotton>
            </li>
            <li class="sec04__flex--item pc" data-scroll>
                <figure>
                    <AppImage :pc-img="`img2.jpg`" :pc-img-retina="`img2.jpg`" :alt="``" :role="`none`" :width="1280" :height="785" />
                </figure>
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
@import '~/assets/styles/components/page01/_sec04';
</style>
