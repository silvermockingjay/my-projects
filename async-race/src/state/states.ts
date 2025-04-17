import type { AppState } from "../components/interfaces";
import { removeCarFromList, updateCarList, updateCarListItem } from "../components/list";

const state: AppState = {
  view: 'garage',
  cars: [],
  winners: [],
  garagePage: 1,
  winnersPage: 1,
  totalCars: 0,
  totalWinners: 0,
  limitCars: 7,
  limitWinners: 10,
  selectId: null,
  removeId: null,
  sortingOrder: 'asc',
  sortBy: 'time',
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
    }
  },
  setUpdatedCar(updatedCar) {
    const index = this.cars.findIndex((car) => car.id === updatedCar.id);
    if (index !== -1) {
      this.cars[index] = updatedCar;
      updateCarListItem(updatedCar);
    }
  },
  setWinners(winner) {
    if (Array.isArray(winner)) {
      this.winners = winner;
    } else {
      this.winners.push(winner);
    }
  },
  setTotal(total, prop) {
    if (prop === 'cars') {
      this.totalCars = total;
    } else {
      this.totalWinners = total;
    }
  },
  setGaragePage(page) {
    this.garagePage = page;
  },
  setWinnersPage(page) {
    this.winnersPage = page;
  },
  setId(id, type) {
    if (type === 'select') {
      this.selectId = id;
    } else {
      this.removeId = id;
      const index = this.cars.findIndex((car) => car.id === this.removeId);
      if (index !== -1) {
        this.cars.splice(index, 1);
        removeCarFromList(this.removeId);
      }
    }
  },
  setSortingOrder(order) {
    this.sortingOrder = order;
  },
  setSortBy(type) {
    this.sortBy = type;
  }
}

export const getState = state.getState.bind(state);
export const setView = state.setView.bind(state);
export const setCars = state.setCars.bind(state);
export const setUpdatedCar = state.setUpdatedCar.bind(state);
export const setWinners = state.setWinners.bind(state);
export const setTotal = state.setTotal.bind(state);
export const setGaragePage = state.setGaragePage.bind(state);
export const setWinnersPage = state.setWinnersPage.bind(state);
export const setId = state.setId.bind(state);
export const setSortingOrder = state.setSortingOrder.bind(state);
export const setSortBy = state.setSortBy.bind(state);