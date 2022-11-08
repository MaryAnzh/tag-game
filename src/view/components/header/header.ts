export class Header {
    name = 'header';
    header = document.createElement('header');

    constructor() {
        this.header.classList.add(this.name);
        this.header.textContent = this.name;
    }
}