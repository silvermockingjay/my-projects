import { getState, setGaragePage, setView, setWinnersPage } from '../state/states';
import { renderView } from '../views/view-manager';

export function prevPage(): void {
  const nextPageBtn: HTMLButtonElement | null = document.querySelector('.nextButton');
  let currPage = 0;
  const currView = getState('view');
  if (currView === 'garage') {
    currPage = getState('garagePage');
  } else {
    currPage = getState('winnersPage');
  }
  let prevPage = 0;
  if (currPage > 1) {
    prevPage = currPage - 1;
    if (currView === 'garage') {
      setGaragePage(prevPage);
    } else {
      setWinnersPage(prevPage);
    }
    if (nextPageBtn?.classList.contains('inactive')) nextPageBtn.classList.remove('inactive');
  }
}

export function nextPage(): void {
  const prevPageBtn: HTMLButtonElement | null = document.querySelector('.prevButton');
  const nextPageBtn: HTMLButtonElement | null = document.querySelector('.nextButton');
  let currPage = 0;
  let totalPagesView = 0;
  const currView = getState('view');
  if (currView === 'garage') {
    currPage = getState('garagePage');
    totalPagesView = getState('totalPagesGarage');
  } else {
    currPage = getState('winnersPage');
    totalPagesView = getState('totalPagesWinners');
  }
  let nextPage = 0;
  if (currPage < totalPagesView) {
    nextPage = currPage + 1;
    if (currView === 'garage') {
      setGaragePage(nextPage);
    } else {
      setWinnersPage(nextPage);
    }
    if (prevPageBtn?.classList.contains('inactive')) prevPageBtn.classList.remove('inactive');
    if (nextPage === totalPagesView) nextPageBtn?.classList.add('inactive');
  }
}

export function goToGarage() {
  setView('garage');
  renderView();
}

export function goToWinners() {
  setView('winners');
  renderView();
}
