"use strict";

import './assets/style/style.scss';

import { PageRenderer } from './model/page-renderer.model';
import { Header } from './view/components/header/header';
import { Main } from './view/pages/main/main';
import { NotFound } from './view/pages/not-found/not-found';

import { Utils } from './services/utils/Utils';

const headerComponent = new Header();
const mainPage = new Main();
const notFoundPage = new NotFound();

const routes = new Map<string, PageRenderer>([
    ['/', mainPage],
    ['**', notFoundPage],
]);

const router = async (): Promise<void> => {
    // Lazy load view element:
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const content = document.createElement('main');
    //создаем страничку
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.append(wrapper);
    wrapper.append(header, content);

    // Render the Header and footer of the page
    header.innerHTML = await headerComponent.render();
    await headerComponent.after_render();;

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL();

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes.has(parsedURL) ? routes.get(parsedURL) : notFoundPage;

    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

//Самооценка
console.log();