<template>
    <header class="header" :class="{ 'is-show': isShow }">
        <div class="header__inner">
            <nav class="header__nav" :class="{ 'is-active': isNavOpen }">
                <div class="header__nav--list">
                    <nuxt-link
                        v-for="(link, index) in headerLinkList"
                        :key="index"
                        :to="link.href.url"
                        :target="link.href.blank ? '_blank' : false"
                        :rel="link.href.blank ? 'noopener' : false"
                        v-html="link.label"
                        class="header__nav--link"
                        data-cursor="target"
                    ></nuxt-link>
                </div>
            </nav>
            <button class="header__trigger" @click="toggleNav">
                <p class="header__border header__border--top" :class="{ 'is-active': isNavOpen }"></p>
                <p class="header__border header__border--center" :class="{ 'is-active': isNavOpen }"></p>
                <p class="header__border header__border--bottom" :class="{ 'is-active': isNavOpen }"></p>
            </button>
        </div>
        <div class="header__cursor" data-cursor="cursor"></div>
        <div class="header__overlay" data-cursor="overlay"></div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Mouse } from '~/assets/scripts/mouse';

export default Vue.extend({
    data(): {
        isNavOpen: boolean;
        isNavOpened: boolean;
        isShow: boolean;
    } {
        return {
            isNavOpen: false,
            isNavOpened: false,
            isShow: false,
        };
    },
    computed: {
        isSp(): boolean {
            return window.innerWidth <= 768;
        },
        headerLinkList(): {
            label: string;
            href: { url: string; blank?: boolean };
        }[] {
            return [
                {
                    label: 'TOP',
                    href: {
                        url: '/',
                    },
                },
                {
                    label: 'Page01',
                    href: {
                        url: '/page01',
                    },
                },
                {
                    label: 'Page02',
                    href: {
                        url: '/page02',
                    },
                },
            ];
        },
    },
    mounted() {
        new Mouse({
            targetCursor: '[data-cursor="cursor"]',
            targetOverlay: '[data-cursor="overlay"]',
        });
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        });
    },
    watch: {
        isNavOpen(newValue: boolean) {
            // scroll固定処理
            const elmBody = document.body;
            if (newValue) {
                const top = `-${window.scrollY}px`;
                elmBody.style.overflow = 'hidden';
                elmBody.style.top = top;
            } else {
                const top = elmBody.style.top;
                elmBody.style.overflow = '';
                elmBody.style.top = '';
                window.scrollTo(0, parseInt(top) * -1);
            }
        },
    },
    methods: {
        toggleNav(): void {
            if (!this.isSp) return;
            this.isNavOpened = true;
            this.isNavOpen = !this.isNavOpen;
        },
    },
});
</script>
<style lang="scss" scoped>
@import '~/assets/styles/components/common/_header';
</style>
