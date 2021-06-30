<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="title">template-nuxt-types</h1>
            <AppBotton :to="`page01`">Page</AppBotton>

            <div class="products__btn btn btn--top">
                <a href="https://www.k-tounyu.jp/lineup/4084/" class="btn__link btn__link--original" target="_blank" rel="noopener noreferrer">
                    <div class="btn__texts">
                        <p class="btn__text btn__text--link btn__text--top" data-role="charming">商品の詳細はこちら</p>
                        <p class="btn__text btn__text--link btn__text--bottom" data-role="charming">商品の詳細はこちら</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/_btn';
</style>
