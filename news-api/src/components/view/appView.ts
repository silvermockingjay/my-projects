import News from './news/news.js';
import Sources from './sources/sources.js';
import { UserResponse } from '../interfaces/interfaces.js';
import { Articles } from '../interfaces/interfaces.js';
import { Source } from '../interfaces/interfaces.js';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: UserResponse) {
        let values: Articles[] = [];
        if ('articles' in data) {
            values = data.articles || [];
        }
        this.news.draw(values);
    }

    drawSources(data: UserResponse) {
        let values: Source[] = [];
        if ('sources' in data) {
            values = data.sources || [];
        }
        this.sources.draw(values);
    }
}
export default AppView;
