import AppLoader from './appLoader.js';
import { CallBackFunction } from '../interfaces/interfaces.js';

class AppController extends AppLoader {
    getSources(callback: CallBackFunction) {
        super.getResp(
            {
                endpoint: '/v2/top-headlines/sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallBackFunction) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId || 'no-id');
                    super.getResp(
                        {
                            endpoint: '/v2/everything',
                            options: {
                                sources: sourceId || 'no-id',
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
