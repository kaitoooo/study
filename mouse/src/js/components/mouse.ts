export class Mouse {
    cursorR: number;
    cursor: HTMLElement;
    linkElem: NodeListOf<HTMLElement>;
    addClass: string;

    constructor() {
        this.init();
    }
    init(): void {
        this.cursorR = 8; //SCSS カーソルの直径の1/2
        this.cursor = document.querySelector<HTMLElement>('[data-cursor="cursor"]');
        this.linkElem = document.querySelectorAll<HTMLElement>('a');
        this.addClass = 'is-hover';

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
        });

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
