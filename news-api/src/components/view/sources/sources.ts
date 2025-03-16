import './sources.css';
import { Source } from '../../interfaces/interfaces';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
            sourceItemName.textContent = item.name || 'no-name';
            const sourceItem = sourceClone.querySelector('.source__item') as HTMLDivElement;
            sourceItem.setAttribute('data-source-id', item.id || 'no-id');
            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.append(fragment);
    }
}

export default Sources;
