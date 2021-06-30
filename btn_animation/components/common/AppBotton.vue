<template>
    <p class="link-button">
        <component :is="external ? 'a' : 'nuxt-link'" class="link-button__label" :to="external ? '' : to" :href="external ? to : ''" :target="external ? '_blank' : false">
            <slot />
        </component>
    </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        to: {
            type: String,
            required: true,
        },
        external: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/common/_link-button';
</style>
