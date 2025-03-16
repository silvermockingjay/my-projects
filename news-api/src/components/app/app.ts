import AppController from '../controller/controller.js';
import { AppView } from '../view/appView.js';

class App {
    public controller: AppController;
    public view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesBlock = document.querySelector('.sources') as HTMLDivElement;
        sourcesBlock.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
