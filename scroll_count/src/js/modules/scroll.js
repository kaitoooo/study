require('intersection-observer');

export default class Scroll {
    constructor(targetSelector) {
        this.threshold = [0.2];
        this.addClass = 'is-fadeIn';
        this.targetSelector = targetSelector;
        this.targets = null;
        this.init();
    }
    init() {
        this.targets = [...document.querySelectorAll(this.targetSelector)];
        if (this.targets.length > 0) {
            this.scroll();
        }
    }
    scroll() {
        const options = {
            threshold: this.threshold,
        };
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= this.threshold) {
                    entry.target.classList.add(this.addClass);
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        this.targets.forEach((elm) => {
            observer.observe(elm);
        });
    };
}