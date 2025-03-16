import News from './news/news.js';
import Sources from './sources/sources.js';
import { ResponseArticles } from '../interfaces/interfaces.js';
import { ResponseSources } from '../interfaces/interfaces.js';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResponseArticles) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
