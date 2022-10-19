import { PageRenderer } from '../../../model/page-renderer.model';
import { timer } from '../../../services/timer';

class Main implements PageRenderer {
  public currentBoardSize: number = 4;
  public moves: number = 0;
  public time: string = '00:00';
  public timerView: null | HTMLElement = null;
  public timer: null | NodeJS.Timer = null;

  public sizeItem: null | NodeListOf<Element> = null;
  public canvas: null | HTMLCanvasElement = null;
  public canvasWrap: null | HTMLElement = null;
  public settingButtons: null | NodeListOf<Element> = null;

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
        <p>Moves: <span>${this.moves}</span></p>
        <p>Times: <span class="timer-view">${this.time}</span></p>
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
    this.canvas = document.querySelector('.canvas');
    this.canvasWrap = document.querySelector('.main-container__canvas-wrap');
    this.settingButtons = document.querySelectorAll('.setting-button');
    this.timerView = document.querySelector('.timer-view');


    //const resizeObserver = new ResizeObserver(this.windowOnResize);

    this.sizeItem.forEach(el => el.addEventListener('click', (e) => this.changeSizeOnClick(e)));
    this.windowOnResize();
    this.settingButtons.forEach(el => el.addEventListener('click', (e) => this.buttonOnClick(e)));

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

  drawOnCanvas() {
    const ctx = this.canvas.getContext('2d');
    const wrapWidth = (this.canvasWrap.clientWidth);
    const tileWidth = wrapWidth / this.currentBoardSize;
    const fontSize = tileWidth / 1.5;

    ctx.font = `${fontSize}px serif`;
    //const text = ctx.measureText("foo");

    ctx.lineWidth = 4;

    let tileCount = 0;
    const tileArray = this.createSuffleArr(this.currentBoardSize);
    tileArray.push(0)

    //рисуем квадраты
    for (let i = 0; i < this.currentBoardSize; i++) {
      for (let j = 0; j < this.currentBoardSize; j++) {
        //ctx.beginPath();
        if (!(i === this.currentBoardSize - 1 && j === this.currentBoardSize - 1)) {
          const x = j * tileWidth; // x coordinate
          const y = i * tileWidth; // y coordinate

          //stroke
          ctx.strokeStyle = 'white';
          ctx.strokeRect(x, y, tileWidth, tileWidth);

          //fill
          ctx.fillStyle = 'black';
          ctx.fillRect(x, y, tileWidth, tileWidth);

          //text
          ctx.textAlign = 'center';
          ctx.fillStyle = 'white';
          ctx.fillText(`${tileArray[tileCount] + 1}`, x + tileWidth / 2, y + fontSize);
          tileCount += 1;
        }
      }
    }
  }

  windowOnResize() {
    this.canvas.setAttribute('width', this.canvasWrap.clientWidth + "px");
    this.canvas.setAttribute('height', this.canvasWrap.clientWidth + "px");
    this.drawOnCanvas();
  }

  buttonOnClick(e: Event): void {
    const elem = <HTMLElement>e.target;
    const type = elem.dataset.type;

    switch (type) {
      case 'start': this.staetGame();

        break;
      case 'save':

        break;
      case 'stop':

        break;
      case 'results':

        break;

      default:
        break;
    }
  }

  staetGame() {
    this.sizeItem.forEach(el => el.classList.add('blocked'));
    this.timer = timer(this.timerView);
  }

  changeSizeOnClick(e: Event): void {
    const sizeDesctiption = document.querySelector('.size-view');
    this.sizeItem.forEach(el => el.classList.remove('active'));

    const elem = <HTMLElement>e.target;
    const size = elem.dataset.size;
    elem.classList.add('active');
    this.currentBoardSize = +size;
    sizeDesctiption.innerHTML = `${this.currentBoardSize}x${this.currentBoardSize}`
    this.windowOnResize();
  }

  createSuffleArr(num: number): number[] {
    const arr = [...Array(num * num).keys()];
    arr.pop();
    return arr.sort(() => Math.random() - 0.5);
  }

}

export { Main };