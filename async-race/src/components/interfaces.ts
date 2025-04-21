export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
}

export interface AppState {
  view: string;
  cars: Car[];
  winners: Winner[];
  garagePage: number;
  winnersPage: number;
  totalPagesGarage: number;
  totalPagesWinners: number;
  totalCars: number;
  totalWinners: number;
  limitCars: number;
  limitWinners: number;
  selectId: number | null;
  removeId: number | null;
  sortingOrder: 'asc' | 'desc';
  sortBy: 'wins' | 'time';
  getState: <K extends keyof Omit<AppState, 'getState'>>(prop: K) => AppState[K];
  setView: (view: string) => void;
  setCars: (car: Car | Car[]) => void;
  setUpdatedCar: (car: Car) => void;
  setWinners: (winners: Winner | Winner[]) => void;
  setTotal: (total: number, prop: 'cars' | 'winners') => void;
  setTotalPagesGarage: () => void;
  setTotalPagesWinners: () => void;
  setGaragePage: (page: number) => void;
  setWinnersPage: (page: number) => void;
  setId: (id: number, type: 'select' | 'remove') => void;
  setSortingOrder: (order: 'asc' | 'desc') => void;
  setSortBy: (type: 'wins' | 'time') => void;
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  text?: string;
  onClick?: () => void;
  className?: string;
}

export interface InputProps {
  type: string;
  value?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export interface FormProps {
  cleanFormFun?: () => void;
  formSubmitFun: (...args: string[]) => void;
  inputFields: HTMLInputElement[];
  formClass?: string;
  btnClass?: string;
  btnText: string;
}

export interface ListProps {
  type: 'ul' | 'ol';
  listItems?: HTMLLIElement[] | HTMLLIElement;
  className?: string;
}
