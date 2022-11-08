

export class AppRouter {

    public modules = {
        HomePage: () => import('./pages/home/home'),
        GamePage: () => import('./pages/game/game'),
    }

    constructor() {
    }

    getModules() {
        return this.modules;
    }
};