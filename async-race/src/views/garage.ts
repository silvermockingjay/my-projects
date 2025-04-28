import { button } from '../components/button';
import { cleanForm, inputField, form } from '../components/form';
import { list } from '../components/list';
import { pElem } from '../components/paragraph';
import { createCar, generateCars, getCars, resetCars, startRace, updateCar } from '../requests/requests';
import { nextPage, prevPage } from '../routing/navigation';
import { goToGarage, goToWinners } from '../routing/navigation';
import { getState } from '../state/states';

export function renderGarage(): HTMLElement {
  const main: HTMLElement = document.createElement('main');
  const [divNavView, divRace, sectionWithForm, sectionWithList, divNavPage]: DestructureContainers = createContainers();
  main.append(divNavView, sectionWithForm, sectionWithList, divNavPage);
  // Create buttons to switch views
  const garageBtn = button({ type: 'button', text: 'garage', onClick: goToGarage, className: 'garageBtn' });
  const winnersBtn = button({ type: 'button', text: 'winners', onClick: goToWinners, className: 'winnersBtn' });
  divNavView.append(garageBtn, winnersBtn);
  // Create form to create a car
  const inputFields1 = createCarInputs();
  const carCreationForm = createCarForm(inputFields1);
  sectionWithForm.append(carCreationForm);
  // Create form to update a car
  const inputFields2 = updateCarInputs();
  const carUpdateForm = updateCarForm(inputFields2);
  sectionWithForm.append(carUpdateForm);
  // Create race, reset, generate cars button
  const raceBtn = button({ type: 'button', text: 'race', onClick: startRace, className: 'raceBtn' });
  const resetBtn = button({ type: 'button', text: 'reset', onClick: resetCars, className: 'resetBtn' });
  const generateCarsBtn = button({ type: 'button', text: 'generate', onClick: generateCars, className: 'generateBtn' });
  divRace.append(raceBtn, resetBtn, generateCarsBtn);
  sectionWithForm.append(divRace);
  // Create list
  const heading: HTMLHeadingElement = document.createElement('h1');
  heading.textContent = 'Garage';
  const totalCars = pElem({ className: 'totalCars', text: `Total cars: ${getState('totalCars')}` });
  const currentPage = pElem({ className: 'currentPage', text: `Current page: ${getState('garagePage')}` });
  const myCarsList = list({ type: 'ul', className: 'carList' });
  sectionWithList.append(heading, totalCars, currentPage, myCarsList);
  // Create buttons to navigate between list pages
  const prevButton = button({ type: 'button', text: 'prev', onClick: prevPage, className: 'prevButton' });
  const nextButton = button({ type: 'button', text: 'next', onClick: nextPage, className: 'nextButton' });
  divNavPage.append(prevButton, nextButton);
  // Fill the car list
  getCars();
  return main;
}

type DestructureContainers = [HTMLDivElement, HTMLDivElement, HTMLElement, HTMLElement, HTMLDivElement];

function createContainers(): DestructureContainers {
  const div1: HTMLDivElement = document.createElement('div');
  const div2: HTMLDivElement = document.createElement('div');
  const section1: HTMLElement = document.createElement('section');
  const section2: HTMLElement = document.createElement('section');
  const div3: HTMLDivElement = document.createElement('div');
  return [div1, div2, section1, section2, div3];
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

function createCarForm(inputs: HTMLInputElement[]) {
  return form({
    formSubmitFun: createCar,
    cleanFormFun: () => {
      cleanForm('createName', 'createColor');
    },
    inputFields: inputs,
    btnText: 'create',
  });
}

function updateCarForm(inputs: HTMLInputElement[]) {
  return form({
    formSubmitFun: updateCar,
    cleanFormFun: () => {
      cleanForm('updateName', 'updateColor');
    },
    inputFields: inputs,
    btnText: 'update',
  });
}

export function updateTotalCars(): void {
  const totalCars: HTMLParagraphElement | null = document.querySelector('.totalCars');
  if (totalCars) totalCars.textContent = `Total cars: ${getState('totalCars')}`;
}

export function updateCurrPage(viewPage: 'garagePage' | 'winnersPage'): void {
  const currPage: HTMLParagraphElement | null = document.querySelector('.currentPage');
  if (currPage) currPage.textContent = `Current page: ${getState(viewPage)}`;
}
