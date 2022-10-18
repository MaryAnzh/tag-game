import { PageRenderer } from '../../../model/page-renderer.model';

class NotFound implements PageRenderer {
    
    render(): Promise<string> {
        const view =  /*html*/`
        <h3 class="page-name"></h3>
        <p>In process...</p>
        `
        return Promise.resolve(view);
    }

    after_render(): Promise<void> {
        return Promise.resolve();
    }
}

export { NotFound };