<template>
    <section class="sec03">
        <h2 class="sec03__title">Vestibulum dignissim nisl eu dictum iaculis.</h2>
        <p class="sec03__text">
            Vivamus id suscipit orci. Morbi nec urna porta, rhoncus nisl ut, tempus mi. <br />
            Ut condimentum lacus tincidunt venenatis tempor. Phasellus diam ex
        </p>
        <ul class="sec03__flex">
            <li class="sec03__flex--item" data-scroll>
                <AppImage :pc-img="`img4.jpg`" :pc-img-retina="`img4.jpg`" :alt="``" :role="`none`" :width="1280" :height="743" />
            </li>
            <li class="sec03__flex--item" data-scroll>
                <AppImage :pc-img="`img43.jpg`" :pc-img-retina="`img43.jpg`" :alt="``" :role="`none`" :width="1280" :height="854" />
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/index/_sec03';
</style>
