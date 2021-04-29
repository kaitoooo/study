import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default class Scroll {
    constructor() {
        this.wh = 0;
        this.init();
    }
    init() {
        this.wh = window.innerHeight;
        // console.log( `${this.wh * 2}px`)

        const tl = gsap.timeline();
        tl.from(".contents01__img--no01", {width: '100vw'});
        tl.from(".contents01__img--no02", {xPercent: '-100'});
        tl.from(".contents01__img--no03", {xPercent: '100'});
        tl.from(".contents01__text", {yPercent: '100'});

        ScrollTrigger.create({
            animation: tl,
            trigger: ".contents01",
            start: "top",
            scrub: 0, // 1秒遅れて追従させる
            pin: true, // 要素を固定表示させる
            end: `${this.wh * 2}px`,
            anticipatePin: 1, // ピン留めをどのくらい早く行うかを制御
            markers: true
        });

        const tl02 = gsap.timeline();
        tl02.from(".contents02__flex", {x: '1000'});
        // tl.to(".contents02__flex", {x: '-1000'});

        ScrollTrigger.create({
            animation: tl02,
            trigger: ".contents02",
            start: "top",
            scrub: 0,
            pin: true, // 要素を固定表示させる
            end: `${this.wh}px`,
            anticipatePin: 0, // ピン留めをどのくらい早く行うかを制御
            markers: true
        });
    }
}
