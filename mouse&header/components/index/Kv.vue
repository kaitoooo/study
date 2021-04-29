<template>
    <section class="kv" :class="{ 'is-hidden': hidden }">
        <div class="kv__block" :class="{ 'is-show': show }">
            <p class="kv__block--inner">
                <span class="kv__block--text kv__block--no01">H</span>
                <span class="kv__block--text kv__block--no02">e</span>
                <span class="kv__block--text kv__block--no03">a</span>
                <span class="kv__block--text kv__block--no04">d</span>
                <span class="kv__block--text kv__block--no05">e</span>
                <span class="kv__block--text kv__block--no06">r</span>
                <span class="kv__block--text kv__block--no07">&</span>
                <span class="kv__block--text kv__block--no08">M</span>
                <span class="kv__block--text kv__block--no09">o</span>
                <span class="kv__block--text kv__block--no10">u</span>
                <span class="kv__block--text kv__block--no11">s</span>
                <span class="kv__block--text kv__block--no12">e</span>
                <span class="kv__block--text kv__block--no13">H</span>
                <span class="kv__block--text kv__block--no14">o</span>
                <span class="kv__block--text kv__block--no15">v</span>
                <span class="kv__block--text kv__block--no16">e</span>
                <span class="kv__block--text kv__block--no17">r</span>
            </p>
        </div>
        <div class="kv__arrow" :class="{ 'is-show': isShow }"></div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            hidden: false,
            show: false,
            isShow: false,
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            setTimeout(() => {
                this.show = true;
            }, 500);

            setTimeout(() => {
                this.hidden = true;
                this.isShow = true;
            }, 2300);
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/index/_kv';
</style>
