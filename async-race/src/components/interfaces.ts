interface Car {
  name: string,
  color: string,
  id: number,
}

interface Winner {
  id: number,
  wins: number,
  time: number,
}

export interface AppState {
  view: string,
  cars: Car[],
  winners: Winner[],
  garagePage: number,
  winnersPage: number,
  selectedId: number | null,
  sortingOrder: 'asc' | 'desc',
  sortBy: 'wins' | 'time',
  getState: <K extends keyof Omit<AppState, 'getState'>>(prop: K) => AppState[K];
  setView: (view: string) => void,
  setCars: (car: Car | Car[]) => void,
  setWinners: (winners: Winner | Winner[]) => void,
  setGaragePage: (page: number) => void,
  setWinnersPage: (page: number) => void,
  setId: (id: number) => void,
  setSortingOrder: (order: 'asc' | 'desc') => void,
  setSortBy: (type: 'wins' | 'time') => void,
}

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset',
  text?: string,
  onClick?: () => void,
  className?: string,
}

export interface InputProps {
  type: string,
  value?: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
}

export interface FormProps {
  formSubmitFun: (...args: string[]) => Promise<Car>,
  inputFields: HTMLInputElement[],
  formClass?: string,
  btnClass?: string,
  btnText: string,
}
