import { button } from "../components/button";
import { nextPage, prevPage } from "../routing/navigation";
import { goToGarage, goToWinners } from "../routing/navigation";
import { getState } from "../state/states";

export function renderWinners(): void {
  const body = document.body;
  const main: HTMLElement = document.createElement('main');
  const divWithViewNavigation: HTMLDivElement = document.createElement('div');
  const sectionWithTable: HTMLElement = document.createElement('section');
  const divWithPageNavigation: HTMLDivElement = document.createElement('div');
  body.append(main);
  main.append(divWithViewNavigation, sectionWithTable, divWithPageNavigation);
  // Create buttons to switch views
  const garageBtn = button({type: 'button', text: 'garage', onClick: goToGarage, className: 'garageBtn'});
  const winnersBtn = button({type: 'button', text: 'winners', onClick: goToWinners, className: 'winnersBtn'});
  divWithViewNavigation.append(garageBtn, winnersBtn);
  // Create table
  const heading: HTMLHeadingElement = document.createElement('h1');
  heading.textContent = 'Winners';
  const paragraph: HTMLParagraphElement = document.createElement('p');
  paragraph.textContent = `Total winners: ${getState('totalWinners')}`;
  paragraph.className = 'totalWinners';
  // Create buttons to navigate between list pages
  const prevButton = button({type: 'button', text: 'prev', onClick: prevPage, className: 'prevButton'});
  const nextButton = button({type: 'button', text: 'next', onClick: nextPage, className: 'nextButton'});
  divWithPageNavigation.append(prevButton, nextButton);
  // Fill the table

}

export function updateTotalWinners(): void {
    const totalWinners = document.querySelector('.totalWinners') as HTMLParagraphElement;
    totalWinners.textContent = `Total winners: ${getState('totalWinners')}`;
  }