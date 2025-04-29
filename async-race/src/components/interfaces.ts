export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface DriveProps {
  velocity: number;
  distance: number;
}

export interface AnimateProps {
  id: number;
  velocity: number;
  distance: number;
}

export interface Racer {
  id: number;
  name: string;
  time: number;
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
  currWinnerNum: number;
  totalPagesGarage: number;
  totalPagesWinners: number;
  totalCars: number;
  totalWinners: number;
  limitCars: number;
  limitWinners: number;
  selectId: number | null;
  removeId: number | null;
  sortingOrder: 'ASC' | 'DESC';
  sortBy: 'id' | 'wins' | 'time';
  animations: Map<number, Animation>;
  getState: <K extends keyof Omit<AppState, 'getState'>>(prop: K) => AppState[K];
  setView: (view: string) => void;
  setCars: (car: Car | Car[]) => void;
  setUpdatedCar: (car: Car) => void;
  setWinners: (winners: Winner | Winner[], car: Car | Car[]) => void;
  setUpdatedWinner: (winner: Winner) => void;
  setCurWinnerNum: (num: number) => void;
  setTotal: (total: number, prop: 'cars' | 'winners') => void;
  setTotalPagesGarage: () => void;
  setTotalPagesWinners: () => void;
  setGaragePage: (page: number) => void;
  setWinnersPage: (page: number) => void;
  setId: (id: number, type: 'select' | 'remove') => void;
  setAnimations: (id: number, animation: Animation) => void;
  setSortingOrder: (order: 'ASC' | 'DESC') => void;
  setSortBy: (type: 'id' | 'wins' | 'time') => void;
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

export interface TableRowProps {
  car: Car;
  winner: Winner;
  className?: string;
}

export interface TableProps {
  tableRows: HTMLTableRowElement | HTMLTableRowElement[];
  className?: string;
}

export interface DivProps {
  className?: string;
  text?: string;
}

export interface ParagraphProps {
  className?: string;
  text?: string;
}

export interface SpanProps {
  className?: string;
  text?: string;
}
