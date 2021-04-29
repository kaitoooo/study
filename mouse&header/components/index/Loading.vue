<template>
    <section class="loading" :class="{ 'is-hidden': hidden }">
        <div class="loading__block" :class="{ 'is-show': show }">
            <p class="loading__block--inner">
                <span class="loading__block--text loading__block--no01">H</span>
                <span class="loading__block--text loading__block--no02">e</span>
                <span class="loading__block--text loading__block--no03">a</span>
                <span class="loading__block--text loading__block--no04">d</span>
                <span class="loading__block--text loading__block--no05">e</span>
                <span class="loading__block--text loading__block--no06">r</span>
                <span class="loading__block--text loading__block--no07">&</span>
                <span class="loading__block--text loading__block--no08">M</span>
                <span class="loading__block--text loading__block--no09">o</span>
                <span class="loading__block--text loading__block--no10">u</span>
                <span class="loading__block--text loading__block--no11">s</span>
                <span class="loading__block--text loading__block--no12">e</span>
                <span class="loading__block--text loading__block--no13">H</span>
                <span class="loading__block--text loading__block--no14">o</span>
                <span class="loading__block--text loading__block--no15">v</span>
                <span class="loading__block--text loading__block--no16">e</span>
                <span class="loading__block--text loading__block--no17">r</span>
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            hidden: false,
            show: false,
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            this.show = true;
            setTimeout(() => {
                this.hidden = true;
            }, 2300);
        },
    },
});
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/index/_loading';
</style>
