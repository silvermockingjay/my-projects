import { button } from '../components/button';
import { table } from '../components/table';
import { getWinners } from '../requests/requests';
import { nextPage, prevPage } from '../routing/navigation';
import { goToGarage, goToWinners } from '../routing/navigation';
import { getState } from '../state/states';

export function renderWinners(): HTMLElement {
  const main: HTMLElement = document.createElement('main');
  const divWithViewNavigation: HTMLDivElement = document.createElement('div');
  const sectionWithTable: HTMLElement = document.createElement('section');
  const divWithPageNavigation: HTMLDivElement = document.createElement('div');
  main.append(divWithViewNavigation, sectionWithTable, divWithPageNavigation);
  // Create buttons to switch views
  const garageBtn = button({ type: 'button', text: 'garage', onClick: goToGarage, className: 'garageBtn' });
  const winnersBtn = button({ type: 'button', text: 'winners', onClick: goToWinners, className: 'winnersBtn' });
  divWithViewNavigation.append(garageBtn, winnersBtn);
  // Create table
  const heading: HTMLHeadingElement = document.createElement('h1');
  heading.textContent = 'Winners';
  const totalWinners: HTMLParagraphElement = document.createElement('p');
  const currentPage: HTMLParagraphElement = document.createElement('p');
  totalWinners.textContent = `Total winners: ${getState('totalWinners')}`;
  totalWinners.className = 'totalWinners';
  currentPage.textContent = `Current page: ${getState('winnersPage')}`;
  currentPage.className = 'currentPage';
  const tableWinners = table({});
  sectionWithTable.append(heading, totalWinners, currentPage, tableWinners);
  // Create buttons to navigate between list pages
  const prevButton = button({ type: 'button', text: 'prev', onClick: prevPage, className: 'prevButton' });
  const nextButton = button({ type: 'button', text: 'next', onClick: nextPage, className: 'nextButton' });
  divWithPageNavigation.append(prevButton, nextButton);
  // Fill the table
  getWinners();
  return main;
}

export function updateTotalWinners(): void {
  const totalWinners: HTMLParagraphElement | null = document.querySelector('.totalWinners');
  if (totalWinners) totalWinners.textContent = `Total winners: ${getState('totalWinners')}`;
}
