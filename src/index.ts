"use strict";

import './assets/style/style.scss';

import { AppRender } from './view/app-render';
import { AppRouter } from './view/app-router';

const appRender = new AppRender();
window.onload = appRender.createAppBase;