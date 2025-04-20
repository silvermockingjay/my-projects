import { getState, setGaragePage, setWinnersPage } from "../state/states";

export function prevPage(): void {
  const nextPageBtn = document.querySelector('.nextButton') as HTMLButtonElement;
  let currPage: number = 0;
  const currView = getState('view');
  if (currView === 'garage') {
    currPage = getState('garagePage');
  } else {
    currPage = getState('winnersPage');
  }
  let prevPage: number = 0;
  if (currPage > 1) {
    prevPage = currPage - 1;
    currView === 'garage' ? setGaragePage(prevPage): setWinnersPage(prevPage);
    if (nextPageBtn?.classList.contains('inactive')) nextPageBtn.classList.remove('inactive');
  }
}

export function nextPage(): void {
  const prevPageBtn = document.querySelector('.prevButton') as HTMLButtonElement;
  const nextPageBtn = document.querySelector('.nextButton') as HTMLButtonElement;
  let currPage: number = 0;
  let totalPagesView: number = 0;
  const currView = getState('view');
  if (currView === 'garage') {
    currPage = getState('garagePage');
    totalPagesView = getState('totalPagesGarage');
  } else {
    currPage = getState('winnersPage');
    totalPagesView = getState('totalPagesWinners');
  }
  let nextPage: number = 0;
  if (currPage < totalPagesView) {
    nextPage = currPage + 1;
    currView === 'garage' ? setGaragePage(nextPage): setWinnersPage(nextPage);
    if (prevPageBtn?.classList.contains('inactive')) prevPageBtn.classList.remove('inactive');
    if (nextPage === totalPagesView) nextPageBtn.classList.add('inactive');
  }
}