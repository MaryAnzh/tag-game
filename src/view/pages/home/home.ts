export class HomePage {
    name = 'home-page';
    wrapper = document.createElement('div');

    constructor() {
        this.wrapper.classList.add(this.name);
        this.wrapper.textContent = this.name;
    }
}