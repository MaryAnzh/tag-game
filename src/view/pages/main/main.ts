import { PageRenderer } from '../../../model/page-renderer.model';

class Main implements PageRenderer {
  public currentBoardSize: number = 4;
  public sizeItem: null | NodeListOf<Element> = null;


  render(): Promise<string> {
    const view =  /*html*/`
    <div class="main-container">
      <div class="main-container__game-settings">
      <div class="main-container__game-settings__setting">
        <svg viewBox="24 0 16 16">
          <path d="M40,9.5v-3h-1.8l-0.7-1.8l1.3-1.3l-2.1-2.1l-1.3,1.3l-1.9-0.8V0h-3v1.8l-1.8,0.8l-1.3-1.3l-2.1,2.1l1.3,1.3
          l-0.8,1.8H24v3h1.8l0.7,1.8l-1.3,1.3l2.1,2.1l1.3-1.3l1.8,0.7V16h3v-1.8l1.8-0.7l1.3,1.3l2.1-2.1l-1.3-1.3L38,9.6h2V9.5z M32,12
          c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S34.2,12,32,12z"/>
        </svg>
      </div>
        <p>Moves: <span>10</span></p>
        <p>Times: <span>10:20</span></p>
      </div>
      <div class="main-container__canvas-wrap">
        <canvas class="canvas">
          Браузер не поддерживает  этот элемент
        </canvas>
      </div>
      <div class="main-container__board-size">
        <p>Frame size <span class="size-view">${this.currentBoardSize}x${this.currentBoardSize}</span></p>
      </div>
      <div class="main-container__size-settings">
        <ul class="main-container__size-settings__list">
          ${this.createSizeSettingsList(3, 8)}
        </ul>
      </div>
    </div>
    `;
    return Promise.resolve(view);
  }

  after_render(): Promise<void> {
    this.sizeItem = document.querySelectorAll('.main-container__size-settings__list__item');
    this.sizeItem.forEach(el => el.addEventListener('click', (e) => this.changeSizeOnClick(e)));

    return Promise.resolve();
  }

  createSizeSettingsList(start: number, end: number): string {
    const arr = [...Array(end - start + 1).keys()];

    return arr.reduce((str, num) => {
      const size = num + start;
      const activeClass = size === this.currentBoardSize ? ' active' : '';
      const vuew = `
      <li
      class="main-container__size-settings__list__item${activeClass}"
      data-size="${size}">
        ${size}x${size}
      </li>`
      return str + vuew;
    },
      ``);
  }

  changeSizeOnClick(e: Event): void {
    const sizeDesctiption = document.querySelector('.size-view');
    this.sizeItem.forEach(el => el.classList.remove('active'));

    const elem = <HTMLElement>e.target;
    const size = elem.dataset.size;
    elem.classList.add('active');
    this.currentBoardSize = +size;
    sizeDesctiption.innerHTML = `${this.currentBoardSize}x${this.currentBoardSize}`
  }
}

export { Main };