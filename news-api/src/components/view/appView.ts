import News from './news/news.js';
import Sources from './sources/sources.js';
import { Response } from '../interfaces/interfaces.js';
import { Articles } from '../interfaces/interfaces.js';
import { Source } from '../interfaces/interfaces.js';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Response) {
        let values: Articles[] = [];
        if ('articles' in data) {
            values = data.articles || [];
        }
        this.news.draw(values);
    }

    drawSources(data: Response) {
        let values: Source[] = [];
        if ('sources' in data) {
            values = data.sources || [];
        }
        this.sources.draw(values);
    }
}
export default AppView;
