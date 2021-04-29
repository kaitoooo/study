interface ModalOptions {
    openElem: string;
    targetSelector: string;
}
const defaults: ModalOptions = {
    openElem: '[data-modal]', //モーダル表示するエレメント
    targetSelector: '[data-modal]', //クリックするターゲット
};
export class Modal {
    params: ModalOptions;
    targets: HTMLElement;
    openTarget: HTMLElement;
    modalWrap: HTMLElement;
    modalBg: HTMLElement;
    closeElem: HTMLElement;
    body: HTMLElement;
    addClass: string;

    constructor(props: ModalOptions) {
        this.params = { ...defaults, ...props };
        this.init();
    }
    init(): void {
        this.targets = document.querySelector<HTMLElement>(this.params.targetSelector);
        this.openTarget = document.querySelector<HTMLElement>(this.params.openElem);
        this.modalWrap = document.querySelector<HTMLElement>('[data-modal="wrap"]');
        this.closeElem = document.querySelector<HTMLElement>('[data-modal="close"]');
        this.modalBg = document.querySelector<HTMLElement>('[data-modal="bg"]');
        this.body = document.querySelector<HTMLElement>('body');
        this.addClass = 'is-show';

        this.targets.addEventListener('click', () => {
            this.open();
        });
        this.closeElem.addEventListener('click', () => {
            this.close();
        });
        this.modalBg.addEventListener('click', () => {
            this.close();
        });
    }
    open(): void {
        this.openTarget.classList.add(this.addClass);
        this.modalWrap.classList.add(this.addClass);
        this.body.classList.add(this.addClass);
    }
    close(): void {
        this.openTarget.classList.remove(this.addClass);
        this.modalWrap.classList.remove(this.addClass);
        this.body.classList.remove(this.addClass);
    }
}
