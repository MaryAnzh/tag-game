import { PageRenderer } from '../../../model/page-renderer.model';

class Header implements PageRenderer {
  public navList: string[] = [
    'About',
    'Map',
    'Zoos',
    'Donate',
    'Contact us'
  ];

  render(): Promise<string> {

    const view =  /*html*/`
          <h2>Header work</h2>
        `
    return Promise.resolve(view);
  }

  after_render(): Promise<void> {

    return Promise.resolve();
  }

}

export { Header };