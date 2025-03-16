import './news.css';
import { Articles } from '../../interfaces/interfaces';

class News {
    draw(data: Articles[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            const newsItem = newsClone.querySelector('.news__item') as HTMLDivElement;

            if (idx % 2) newsItem.classList.add('alt');

            const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            newsAuthor.textContent = item.author || item.source.name || 'no-author-info';
            const newsDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            if (item.publishedAt) {
                newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            } else {
                newsDate.textContent = 'no-date';
            }
            const descSource = newsClone.querySelector('.news__description-source') as HTMLHeadingElement;
            const descTitle = newsClone.querySelector('.news__description-title') as HTMLHeadingElement;
            descTitle.textContent = item.title || 'no-title';
            descSource.textContent = item.source.name || 'no-source-name';
            const descContent = newsClone.querySelector('.news__description-content') as HTMLParagraphElement;
            descContent.textContent = item.description || 'no-description';
            const readMore = newsClone.querySelector('.news__read-more a') as HTMLParagraphElement;
            readMore.setAttribute('href', item.url || 'no-url');

            fragment.append(newsClone);
        });

        const newsBlock = document.querySelector('.news') as HTMLDivElement;
        newsBlock.innerHTML = '';
        newsBlock.appendChild(fragment);
    }
}

export default News;
