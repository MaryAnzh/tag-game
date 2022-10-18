import { PageRenderer } from '../../../model/page-renderer.model';

class Header implements PageRenderer {
  public navList: string[] = [
    'shuffle and start',
    'stop',
    'save',
    'results',
  ];

  render(): Promise<string> {

    const view =  /*html*/`
          <ul class="header-list">
            ${this.createNav(this.navList)}
          </ul>
        `
    return Promise.resolve(view);
  }

  after_render(): Promise<void> {

    return Promise.resolve();
  }

  createNav(navList: string[]): string {
    return navList.reduce((nav, item) => {
      const vuew = `
      <li class="header-list__item"
        data-type="${item}">
          ${item}
      </li>`;
      return nav + vuew;
    }, ``);
  }

}

export { Header };