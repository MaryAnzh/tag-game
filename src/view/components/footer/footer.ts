export class Footer {
    name = 'footer';
    footer = document.createElement('footer');

    constructor() {
        this.footer.classList.add(this.name);
        this.footer.textContent = this.name;
    }
}