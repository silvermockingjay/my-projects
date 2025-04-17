import { button } from "./button";
import { selectCar, removeCar, startStopCarEngine } from "../requests/requests";
import type { Car } from "./interfaces";

export const listItem = (car: Car, className?: string): HTMLLIElement => {
  const li: HTMLLIElement = document.createElement('li');
  li.dataset.id = `${car.id}`;
  if (className) li.className = className;
  const div: HTMLDivElement = document.createElement('div');
  div.className = 'liContainer';
  li.append(div);
  const upperPart: HTMLDivElement = document.createElement('div');
  upperPart.className = 'upperPartContainer'
  const lowerPart: HTMLDivElement = document.createElement('div');
  lowerPart.className = 'lowerPartContainer'
  div.append(upperPart, lowerPart);
  const selectCarBtn = button({type: 'button', text: 'select', onClick: () => selectCar(car)});
  const removeCarBtn = button({type: 'button', text: 'remove', onClick: () => removeCar(car.id)});
  const startEngineBtn = button({type: 'button', text: 'A', onClick: () => startStopCarEngine(car.id, 'started')});
  const stopEngineBtn = button({type: 'button', text: 'B', onClick: () => startStopCarEngine(car.id, 'stopped')});
  const carName: HTMLSpanElement = document.createElement('span');
  carName.className = 'carName';
  carName.textContent = car.name;
  upperPart.append(selectCarBtn, removeCarBtn, carName);
  const imgCar = document.createElement('div');
  imgCar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
  const imgFlag = document.createElement('div');
  imgFlag.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 24h-2v-24h2v24zm18-16l-16-6v12l16-6z" fill="ff0000"/>
    </svg>
  `;
  lowerPart.append(startEngineBtn, stopEngineBtn, imgCar, imgFlag);
  return li;
}

export const list = (listItems?: HTMLLIElement[] | HTMLLIElement, className?: string): HTMLUListElement => {
  const list: HTMLUListElement = document.createElement('ul');
  if (className) list.className = className;
  if (Array.isArray(listItems)) {
    listItems.forEach((item) => list.append(item));
  } else if (listItems) {
    list.append(listItems);
  }
  return list;
}

export const updateCarList = (car: Car | Car[]): void => {
  const carList = document.querySelector('.carList') as HTMLUListElement;
  const carItem = listItem(car);
  carList.append(carItem);
}

export const updateCarListItem = (car: Car): void => {
  const carItem = document.querySelector(`[data-id=${car.id}]`) as HTMLLIElement;
  const name = carItem.querySelector('.carName') as HTMLDivElement;
  name.textContent = car.name;
  const path = carItem.querySelector('.svgCar') as SVGPathElement;
  path.setAttribute('fill', car.color); 
}

export const removeCarFromList = (id: number): void => {
  const carList = document.querySelector('.carList') as HTMLUListElement;
  const carItem = document.querySelector(`[data-id=${id}]`) as HTMLLIElement;
  carList.removeChild(carItem);
}