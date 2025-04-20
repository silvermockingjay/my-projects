import type { AppState } from "../components/interfaces";
import { removeCarFromList, updateCarList, updateCarListItem } from "../components/list";
import { getCars } from "../requests/requests";

const state: AppState = {
  view: 'garage',
  cars: [],
  winners: [],
  garagePage: 1,
  winnersPage: 1,
  totalCars: 0,
  totalWinners: 0,
  totalPagesGarage: 0,
  totalPagesWinners: 0,
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
    } else {
      const nextPage = this.garagePage + 1;
      this.setGaragePage(nextPage);
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
      this.setTotalPagesGarage();
    } else {
      this.totalWinners = total;
      this.setTotalPagesWinners();
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
    getCars();
  },
  setWinnersPage(page) {
    this.winnersPage = page;
    getCars();
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
      if (this.cars.length === 0 && this.garagePage > 1) {
        const prevPage = this.garagePage - 1;
        this.setGaragePage(prevPage);
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
export const setTotalPagesGarage = state.setTotalPagesGarage.bind(state);
export const setTotalPagesWinners = state.setTotalPagesWinners.bind(state);
export const setGaragePage = state.setGaragePage.bind(state);
export const setWinnersPage = state.setWinnersPage.bind(state);
export const setId = state.setId.bind(state);
export const setSortingOrder = state.setSortingOrder.bind(state);
export const setSortBy = state.setSortBy.bind(state);