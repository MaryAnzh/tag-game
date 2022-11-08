import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

export class AppRender {
    body: HTMLBodyElement | null = document.querySelector('body');
    wrapper: HTMLDivElement = document.createElement('div');
    main: HTMLElement = document.createElement('main');
    header: Header = new Header();
    footer: Footer = new Footer(); s

    constructor() {
        this.wrapper.classList.add('wraooer');
        this.main.classList.add('main');

        this.createAppBase();
    }

    createAppBase() {
        if (this.body === null) {
            return;
        }

        this.body.append(this.wrapper);
        this.wrapper.append(this.header.header, this.main, this.footer.footer);
    }
}