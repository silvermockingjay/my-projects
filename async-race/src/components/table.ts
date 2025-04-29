import type { Car, TableRowProps, TableProps, Winner } from './interfaces';
import { getState } from '../state/states';

export const tableRow = ({ winner, car, className }: TableRowProps): HTMLTableRowElement => {
  const tr = document.createElement('tr');
  if (className) tr.className = className;
  tr.dataset.id = `${winner.id}`;
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  td1.className = 'countNum';
  td1.textContent = `${getState('currWinnerNum')}`;
  td2.className = 'carImg';
  td2.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
  td3.className = 'carName';
  td3.textContent = car.name;
  td4.className = 'carWins';
  td4.textContent = `${winner.wins}`;
  td5.textContent = `${winner.time}`;
  td5.className = 'carTime';
  tr.append(td1, td2, td3, td4, td5);
  return tr;
};

export const table = ({ tableRows, className }: TableProps): HTMLTableElement => {
  const tableElem = document.createElement('table');
  if (className) tableElem.className = className;
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  tbody.className = 'tableBody';
  const headers: HTMLTableCellElement[] = [];
  const totalCol = 5;
  for (let i = 0; i < totalCol; i++) {
    const th = document.createElement('th');
    headers.push(th);
  }
  const headerNames = ['Number', 'Car', 'Name', 'Wins', 'Best time, s'];
  headers.forEach((item, index) => {
    item.textContent = headerNames[index] ?? '';
  });
  thead.append(...headers);
  if (Array.isArray(tableRows)) {
    tbody.append(...tableRows);
  } else if (tableRows) {
    tbody.append(tableRows);
  }
  tableElem.append(thead, tbody);
  return tableElem;
};

export const updateWinnerTable = (winner: Winner | Winner[], car: Car | Car[]): void => {
  const tbody = document.querySelector('tbody');
  if (tbody) {
    if (Array.isArray(winner) && Array.isArray(car)) {
      const tableRows: HTMLTableRowElement[] = winner.map((item, index) => {
        const defaultCar = {
          id: 0,
          name: 'noName',
          color: '#000000',
        };
        const myCar = car[index] ?? defaultCar;
        return tableRow({ winner: item, car: myCar });
      });
      tbody.innerHTML = '';
      tbody.append(...tableRows);
    } else if (!Array.isArray(winner) && !Array.isArray(car)) {
      const tableRowElem = tableRow({ winner: winner, car: car });
      tbody.append(tableRowElem);
    }
  }
};

export const updateWinnerRow = (winner: Winner): void => {
  const tableRow: HTMLTableRowElement | null = document.querySelector(`[data-id='${winner.id}']`);
  if (tableRow) {
    const wins: HTMLTableCellElement | null = tableRow.querySelector('.carWins');
    if (wins) wins.textContent = `${winner.wins}`;
    const time: HTMLTableCellElement | null = tableRow.querySelector('.carTime');
    if (time) time.textContent = `${winner.time}`;
  }
};

export const removeWinnerFromTable = (id: number): void => {
  const tbody = document.querySelector('.tableBody');
  const trow = document.querySelector(`[data-id='${id}']`);
  if (tbody && trow) tbody.removeChild(trow);
};
