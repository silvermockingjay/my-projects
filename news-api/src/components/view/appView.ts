import News from './news/news';
import Sources from './sources/sources';
import { UserResponse } from '../interfaces/interfaces';
import { Articles } from '../interfaces/interfaces';
import { Source } from '../interfaces/interfaces';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: UserResponse): void {
        let values: Articles[] = [];
        if ('articles' in data) {
            values = data.articles || [];
        }
        this.news.draw(values);
    }

    drawSources(data: UserResponse): void {
        let values: Source[] = [];
        if ('sources' in data) {
            values = data.sources || [];
        }
        this.sources.draw(values);
    }
}
export default AppView;
