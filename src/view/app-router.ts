

export class AppRouter {

    private _modules = {
        HomePage: () => import('./pages/home/home'),
        GamePage: () => import('./pages/game/game'),
    }

    constructor() {
    }

    static getModules() {
        return this._modules;
    }
};