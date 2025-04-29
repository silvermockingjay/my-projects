import type { AppState } from '../components/interfaces';
import { removeCarFromList, updateCarList, updateCarListItem } from '../components/list';
import { updateWinnerTable } from '../components/table';
import { getCars, getWinners } from '../requests/requests';
import { updateTotalCars, updateCurrPage } from '../views/garage';
import { updateTotalWinners } from '../views/winners';

const notFoundIndex = -1;

const state: AppState = {
  view: 'garage',
  cars: [],
  winners: [],
  garagePage: 1,
  winnersPage: 1,
  totalCars: 0,
  totalWinners: 0,
  currWinnerNum: 1,
  totalPagesGarage: 0,
  totalPagesWinners: 0,
  limitCars: 7,
  limitWinners: 10,
  selectId: null,
  removeId: null,
  sortingOrder: 'ASC',
  sortBy: 'time',
  animations: new Map(),
  getState(prop) {
    return this[prop];
  },
  setView(view) {
    this.view = view;
  },
  setCars(car) {
    if (Array.isArray(car)) {
      this.cars = car;
    } else {
      this.cars.push(car);
    }
    if (this.cars.length <= this.limitCars) {
      updateCarList(car);
    } else {
      const nextPage = this.garagePage + 1;
      this.setGaragePage(nextPage);
    }
  },
  setUpdatedCar(updatedCar) {
    const index = this.cars.findIndex((car) => car.id === updatedCar.id);
    if (index !== notFoundIndex) {
      this.cars[index] = updatedCar;
      updateCarListItem(updatedCar);
    }
  },
  setUpdatedWinner(updatedWinner) {
    const index = this.winners.findIndex((winner) => winner.id === updatedWinner.id);
    if (index !== notFoundIndex) {
      this.winners[index] = updatedWinner;
      updateWinnerRow(updatedWinner);
    }
  },
  setWinners(winner) {
    if (Array.isArray(winner)) {
      this.winners = winner;
    } else {
      this.winners.push(winner);
    }
    if (this.winners.length <= this.limitWinners) {
      updateWinnerTable(winner);
    } else {
      const nextPage = this.winnersPage + 1;
      this.setWinnersPage(nextPage);
    }
  },
  setCurWinnerNum(num) {
    this.currWinnerNum = num;
  },
  setTotal(total, prop) {
    if (prop === 'cars') {
      this.totalCars = total;
      this.setTotalPagesGarage();
      updateTotalCars();
    } else {
      this.totalWinners = total;
      this.setTotalPagesWinners();
      updateTotalWinners();
    }
  },
  setTotalPagesGarage() {
    this.totalPagesGarage = Math.ceil(this.totalCars / this.limitCars);
  },
  setTotalPagesWinners() {
    this.totalPagesWinners = Math.ceil(this.totalWinners / this.limitWinners);
  },
  setGaragePage(page) {
    this.garagePage = page;
    updateCurrPage('garagePage');
    getCars();
  },
  setWinnersPage(page) {
    this.winnersPage = page;
    updateCurrPage('winnersPage');
    getWinners();
  },
  setId(id, type) {
    if (type === 'select') {
      this.selectId = id;
    } else {
      this.removeId = id;
      const index = this.cars.findIndex((car) => car.id === this.removeId);
      if (index !== notFoundIndex) {
        this.cars.splice(index, 1);
        removeCarFromList(this.removeId);
      }
      if (!this.cars.length && this.garagePage > 1) {
        const prevPage = this.garagePage - 1;
        this.setGaragePage(prevPage);
      }
    }
  },
  setAnimations(id: number, animation: Animation) {
    this.animations.set(id, animation);
  },
  setSortingOrder(order) {
    this.sortingOrder = order;
  },
  setSortBy(type) {
    this.sortBy = type;
  },
};

export const getState = state.getState.bind(state);
export const setView = state.setView.bind(state);
export const setCars = state.setCars.bind(state);
export const setUpdatedCar = state.setUpdatedCar.bind(state);
export const setWinners = state.setWinners.bind(state);
export const setUpdatedWinner = state.setUpdatedWinner.bind(state);
export const setCurWinnerNum = state.setCurWinnerNum.bind(state);
export const setTotal = state.setTotal.bind(state);
export const setTotalPagesGarage = state.setTotalPagesGarage.bind(state);
export const setTotalPagesWinners = state.setTotalPagesWinners.bind(state);
export const setGaragePage = state.setGaragePage.bind(state);
export const setWinnersPage = state.setWinnersPage.bind(state);
export const setId = state.setId.bind(state);
export const setAnimations = state.setAnimations.bind(state);
export const setSortingOrder = state.setSortingOrder.bind(state);
export const setSortBy = state.setSortBy.bind(state);
