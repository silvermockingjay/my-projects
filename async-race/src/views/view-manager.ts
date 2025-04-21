import { getState } from '../state/states';
import { renderGarage } from './garage';
import { renderWinners } from './winners';

export function renderView() {
  const view = getState('view');
  const body: HTMLElement = document.body;
  body.innerHTML = '';
  let content: HTMLElement | null;
  if (view === 'garage') {
    content = renderGarage();
  } else {
    content = renderWinners();
  }
  body.append(content);
}
