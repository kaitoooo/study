const charming = require('charming');

export class Charming {
    targets!: NodeListOf<HTMLElement>;

    constructor() {
        this.targets = document.querySelectorAll<HTMLElement>('[data-role="charming"]');
        this.init();
    }
    init() {
        if (this.targets.length > 0) {
            // span split
            this.targets.forEach((elm) => {
                charming(elm);
            });
        }
    }
}
