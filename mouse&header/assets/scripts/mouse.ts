interface MouseOptions {
    /**
     *@default '[data-cursor="cursor"]'
     *
     * @type {string}
     */
    targetCursor: string;

    /**
     * @default '[data-cursor="overlay"]'
     *
     * @type {string}
     */
    targetOverlay: string;
}

const defaults: MouseOptions = {
    targetCursor: ' [data-cursor="cursor"]',
    targetOverlay: ' [data-cursor="overlay"]',
};
export class Mouse {
    params!: MouseOptions;
    /**
     *
     * SCSS カーソルの直径の1/2
     * @type {number}
     */
    cursorR!: number;

    /**
     * @default '[data-cursor="cursor"]'
     *
     * @type {any}
     */
    cursor!: any;

    /**
     * @default '[data-cursor="overlay"]'
     *
     * @type {any}
     */
    overlay!: any;

    /**
     * @default 'a'
     *
     * @type {NodeListOf<HTMLElement>}
     */
    linkElem!: NodeListOf<HTMLElement>;

    /**
     * @default '[data-cursor="target"]'
     *
     * @type {NodeListOf<HTMLElement>}
     */
    headerLinkElem!: NodeListOf<HTMLElement>;

    /**
     * @default is-hover
     *
     * @type {string}
     */
    addClass!: string;

    constructor(props: Partial<MouseOptions>) {
        this.params = { ...defaults, ...props };
        this.init();
    }
    init(): void {
        this.cursorR = 8;
        this.cursor = document.querySelector<HTMLElement>(this.params.targetCursor);
        this.overlay = document.querySelector<HTMLElement>(this.params.targetOverlay);
        this.linkElem = document.querySelectorAll<HTMLElement>('a');
        this.headerLinkElem = document.querySelectorAll<HTMLElement>('[data-cursor="target"]');
        this.addClass = 'is-hover';
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
        });

        for (let i = 0; i < this.headerLinkElem.length; i++) {
            this.headerLinkElem[i].addEventListener('mouseover', (e) => {
                this.cursor.classList.add(this.addClass);
                this.overlay.classList.add(this.addClass);
            });

            this.headerLinkElem[i].addEventListener('mouseout', (e) => {
                this.cursor.classList.remove(this.addClass);
                this.overlay.classList.remove(this.addClass);
            });
        }

        for (let i = 0; i < this.linkElem.length; i++) {
            this.linkElem[i].addEventListener('mouseover', (e) => {
                this.cursor.classList.add(this.addClass);
            });

            this.linkElem[i].addEventListener('mouseout', (e) => {
                this.cursor.classList.remove(this.addClass);
            });
        }
    }
}
