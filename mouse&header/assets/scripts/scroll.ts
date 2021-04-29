require('intersection-observer');

interface ScrollOptions {
    addClass: string;
    targetSelector: string;
    threshold: number | number[];
}

const defaults: ScrollOptions = {
    addClass: 'is-show',
    targetSelector: '[data-scroll]',
    threshold: [0.25],
};
export class Scroll {
    params!: ScrollOptions;
    targets!: NodeListOf<HTMLElement>;
    constructor(props: ScrollOptions) {
        this.params = { ...defaults, ...props };
        this.init();
    }
    init() {
        this.targets = document.querySelectorAll<HTMLElement>(this.params.targetSelector);
        if (this.targets.length > 0) {
            this.start();
        }
    }
    start() {
        const options: IntersectionObserverInit = {
            threshold: this.params.threshold,
        };
        const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= this.params.threshold) {
                    entry.target.classList.add(this.params.addClass);
                    observer.unobserve(entry.target);
                }
            });
        };
        const observer = new IntersectionObserver(callback, options);
        this.targets.forEach((elm) => {
            observer.observe(elm);
        });
    }
}
