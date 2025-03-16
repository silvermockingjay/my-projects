import AppLoader from './appLoader';
import { CallBackFunction } from '../interfaces/interfaces';

class AppController extends AppLoader {
    getSources(callback: CallBackFunction) {
        super.getResp(
            {
                endpoint: 'mocks/sources',
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
                            endpoint: 'mocks/everything',
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
