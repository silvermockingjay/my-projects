import { button } from '../components/button';
import { cleanForm, inputField, form } from '../components/form';
import { list } from '../components/list';
import { createCar, generateCars, getCars, resetCars, startRace, updateCar } from '../requests/requests';
import { nextPage, prevPage } from '../routing/navigation';
import { goToGarage, goToWinners } from '../routing/navigation';
import { getState } from '../state/states';

export function renderGarage(): HTMLElement {
  const main: HTMLElement = document.createElement('main');
  const divWithViewNavigation: HTMLDivElement = document.createElement('div');
  const divWithRaceAndGenerator: HTMLDivElement = document.createElement('div');
  const sectionWithForm: HTMLElement = document.createElement('section');
  const sectionWithList: HTMLElement = document.createElement('section');
  const divWithPageNavigation: HTMLDivElement = document.createElement('div');
  main.append(divWithViewNavigation, sectionWithForm, sectionWithList, divWithPageNavigation);
  // Create buttons to switch views
  const garageBtn = button({ type: 'button', text: 'garage', onClick: goToGarage, className: 'garageBtn' });
  const winnersBtn = button({ type: 'button', text: 'winners', onClick: goToWinners, className: 'winnersBtn' });
  divWithViewNavigation.append(garageBtn, winnersBtn);
  // Create form to create a car
  const inputFields1 = createCarInputs();
  const createCarForm = form({ formSubmitFun: createCar, cleanFormFun: () => cleanForm('createName', 'createColor'), inputFields: inputFields1, btnText: 'create' });
  sectionWithForm.append(createCarForm);
  // Create form to update a car
  const inputFields2 = updateCarInputs();
  const updateCarForm = form({ formSubmitFun: updateCar, cleanFormFun: () => cleanForm('updateName', 'updateColor'), inputFields: inputFields2, btnText: 'update' });
  sectionWithForm.append(updateCarForm);
  // Create race, reset, generate cars button
  const raceBtn = button({ type: 'button', text: 'race', onClick: startRace, className: 'raceBtn' });
  const resetBtn = button({ type: 'button', text: 'reset', onClick: resetCars, className: 'resetBtn' });
  const generateCarsBtn = button({ type: 'button', text: 'generate', onClick: generateCars, className: 'generateBtn' });
  divWithRaceAndGenerator.append(raceBtn, resetBtn, generateCarsBtn);
  sectionWithForm.append(divWithRaceAndGenerator);
  // Create list
  const heading: HTMLHeadingElement = document.createElement('h1');
  heading.textContent = 'Garage';
  const totalCars: HTMLParagraphElement = document.createElement('p');
  const currentPage: HTMLParagraphElement = document.createElement('p');
  totalCars.textContent = `Total cars: ${getState('totalCars')}`;
  totalCars.className = 'totalCars';
  currentPage.textContent = `Current page: ${getState('garagePage')}`;
  currentPage.className = 'currentPage';
  const myCarsList = list({ type: 'ul', className: 'carList' });
  sectionWithList.append(heading, totalCars, currentPage, myCarsList);
  // Create buttons to navigate between list pages
  const prevButton = button({ type: 'button', text: 'prev', onClick: prevPage, className: 'prevButton' });
  const nextButton = button({ type: 'button', text: 'next', onClick: nextPage, className: 'nextButton' });
  divWithPageNavigation.append(prevButton, nextButton);
  // Fill the car list
  getCars();
  return main;
}

export function updateTotalCars(): void {
  const totalCars: HTMLParagraphElement | null = document.querySelector('.totalCars');
  if (totalCars) totalCars.textContent = `Total cars: ${getState('totalCars')}`;
}

function createCarInputs(): HTMLInputElement[] {
  const inputFields: HTMLInputElement[] = [];
  const textField: HTMLInputElement = inputField({ type: 'text', className: 'createName' });
  const colorField: HTMLInputElement = inputField({ type: 'color', value: '#ffffff', className: 'createColor' });
  inputFields.push(textField, colorField);
  return inputFields;
}

function updateCarInputs(): HTMLInputElement[] {
  const inputFields: HTMLInputElement[] = [];
  const hiddenInput: HTMLInputElement = inputField({ type: 'hidden', className: 'updateId' });
  const textField: HTMLInputElement = inputField({ type: 'text', className: 'updateName' });
  const colorField: HTMLInputElement = inputField({ type: 'color', value: '#ffffff', className: 'updateColor' });
  inputFields.push(hiddenInput, textField, colorField);
  return inputFields;
}
