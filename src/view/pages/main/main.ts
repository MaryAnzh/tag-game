import { PageRenderer } from '../../../model/page-renderer.model';

class Main implements PageRenderer {

  render(): Promise<string> {
    const view =  /*html*/`
    <h1>Main Work</h1>
    `;
    return Promise.resolve(view);
  }

  after_render(): Promise<void> {
    return Promise.resolve();
  }
}

export { Main };