import { PageRenderer } from '../../../model/page-renderer.model';

class Main implements PageRenderer {

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
      <div class="main-container__canvas-wrap"></div>
      <div class="main-container__bord-size"></div>
      <div class="main-container__size-settings"></div>
    </div>
    `;
    return Promise.resolve(view);
  }

  after_render(): Promise<void> {
    return Promise.resolve();
  }
}

export { Main };