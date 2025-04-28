import { button } from './button';
import { selectCar, removeCar, startStopCarEngine } from '../requests/requests';
import type { AnimateProps, Car, ListProps } from './interfaces';
import { setAnimations, getState } from '../state/states';
import { divElem, spanElem } from './div_span';

type DestructureButtons = [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement, HTMLButtonElement];

export const listItemBtns = (car: Car): DestructureButtons => {
  const selectBtn = button({
    type: 'button',
    text: 'select',
    onClick: () => {
      selectCar(car);
    },
  });
  const removeBtn = button({
    type: 'button',
    text: 'remove',
    onClick: () => {
      removeCar(car.id);
    },
  });
  const startBtn = button({
    type: 'button',
    text: 'A',
    onClick: () => {
      startStopCarEngine(car.id, 'started');
    },
    className: 'startEngine',
  });
  const stopBtn = button({
    type: 'button',
    text: 'B',
    onClick: () => {
      startStopCarEngine(car.id, 'stopped');
    },
    className: 'stopEngine',
  });
  return [selectBtn, removeBtn, startBtn, stopBtn];
};

export const listItem = (car: Car, className?: string): HTMLLIElement => {
  const li: HTMLLIElement = document.createElement('li');
  li.dataset.id = `${car.id}`;
  if (className) li.className = className;
  const div: HTMLDivElement = divElem({ className: 'liContainer' });
  li.append(div);
  const upperPart: HTMLDivElement = divElem({ className: 'upperPartContainer' });
  const lowerPart: HTMLDivElement = divElem({ className: 'lowerPartContainer' });
  div.append(upperPart, lowerPart);
  const [selectCarBtn, removeCarBtn, startEngineBtn, stopEngineBtn]: DestructureButtons = listItemBtns(car);
  stopEngineBtn.disabled = true;
  const carName: HTMLSpanElement = spanElem({ className: 'carName', text: car.name });
  upperPart.append(selectCarBtn, removeCarBtn, carName);
  const group = divElem({ className: 'group' });
  const imgCar = divElem({ className: 'imgCar' });
  imgCar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
  const imgFlag = divElem({ className: 'imgFlag' });
  imgFlag.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 24h-2v-24h2v24zm18-16l-16-6v12l16-6z" fill="#ff0000"/>
    </svg>
  `;
  group.append(startEngineBtn, stopEngineBtn, imgCar);
  lowerPart.append(group, imgFlag);
  return li;
};

export const list = ({ type, listItems, className }: ListProps): HTMLUListElement => {
  const list: HTMLUListElement = document.createElement(type);
  if (className) list.className = className;
  if (Array.isArray(listItems)) {
    listItems.forEach((item) => {
      list.append(item);
    });
  } else if (listItems) {
    list.append(listItems);
  }
  return list;
};

export const updateCarList = (car: Car | Car[]): void => {
  const carList: HTMLUListElement | null = document.querySelector('.carList');
  if (carList) {
    if (Array.isArray(car)) {
      const carItems: HTMLLIElement[] = car.map((item) => listItem(item));
      carList.innerHTML = '';
      carList.append(...carItems);
    } else {
      const carItem = listItem(car);
      carList.append(carItem);
    }
  }
};

export const updateCarListItem = (car: Car): void => {
  const carItem: HTMLLIElement | null = document.querySelector(`[data-id='${car.id}']`);
  if (carItem) {
    const name: HTMLDivElement | null = carItem.querySelector('.carName');
    if (name) name.textContent = car.name;
    const path: SVGPathElement | null = carItem.querySelector('.svgCar');
    if (path) path.setAttribute('fill', car.color);
  }
};

export const removeCarFromList = (id: number): void => {
  const carList: HTMLUListElement | null = document.querySelector('.carList');
  const carItem: HTMLLIElement | null = document.querySelector(`[data-id='${id}']`);
  if (carList && carItem) carList.removeChild(carItem);
};

export const animateCar = ({ id, velocity, distance }: AnimateProps): void => {
  const carItem: HTMLLIElement | null = document.querySelector(`[data-id='${id}']`);
  if (carItem) {
    const imgCar: HTMLLIElement | null = carItem.querySelector('.imgCar');
    const imgFlag: HTMLLIElement | null = carItem.querySelector('.imgFlag');
    if (imgCar && imgFlag) {
      const time = distance / velocity;
      const rectFlag = imgFlag.getBoundingClientRect();
      const rectCar = imgCar.getBoundingClientRect();
      const distanceToFlag = rectFlag.left - rectCar.left + rectCar.width;
      const animation = imgCar.animate(
        [{ transform: 'translateX(0px)' }, { transform: `translateX(${distanceToFlag}px)` }],
        {
          duration: time,
          iterations: 1,
          fill: 'forwards',
          easing: 'linear',
        }
      );
      setAnimations(id, animation);
      animation.play();
      const startBtn: HTMLButtonElement | null = carItem.querySelector('.startEngine');
      const stopBtn: HTMLButtonElement | null = carItem.querySelector('.stopEngine');
      if (startBtn) startBtn.disabled = true;
      if (stopBtn) stopBtn.disabled = false;
    }
  }
};

export const stopCar = (id: number): void => {
  const animations = getState('animations');
  const animation = animations.get(id);
  if (animation) animation.pause();
};

export const resetCar = (id: number): void => {
  const animations = getState('animations');
  const animation = animations.get(id);
  if (animation) animation.cancel();
  const carItem: HTMLLIElement | null = document.querySelector(`[data-id='${id}']`);
  if (carItem) {
    const startBtn: HTMLButtonElement | null = carItem.querySelector('.startEngine');
    const stopBtn: HTMLButtonElement | null = carItem.querySelector('.stopEngine');
    if (startBtn) startBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = true;
  }
};
