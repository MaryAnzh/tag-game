export class GamePage {
    name = 'game-page';
    wrapper = document.createElement('div');

    constructor() {
        this.wrapper.classList.add(this.name);
        this.wrapper.textContent = this.name;
    }
}