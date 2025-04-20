import type { Car } from "../components/interfaces";
import { getState, setCars, setId, setTotal, setUpdatedCar } from "../state/states";

export function getCars(): void {
  const page = getState('garagePage');
  const limit = getState('limitCars');
  let url = `http://127.0.0.1:3000/garage?_page=${page}&_limit=${limit}`;
  fetch(url, {method: 'GET'})
  .then((response) => {
    const total = Number(response.headers.get('X-Total-Count'));
    setTotal(total, 'cars');
    return response.json();
  })
  .then((data) => setCars(data))
  .catch((error) => alert(`Failed to get cars: ${error}`))
}

export function generateCars(): void {
  const brands: string[] = ['BMW', 'Fiat', 'Ford', 'Hyundai', 'Kia', 'Lancia', 'Opel', 'Renault', 'Suzuki', 'Volvo'];
  const models: string[][] = [
    [
      'iX2',
      'i5',
      '5 Series G60',
      'XM Label Red',
      'X1 M35i xDrive',
      'M2 G87',
      '3 Series Facelift (G20 LCI)',
      'i7 M70 xDrive',
      'X5 LCI',
      'X6 LCI'
    ],
    [
      'Topolino EV',
      'Panda Hybrid',
      '600e',
      '500e Abarth',
      '500X Hybrid',
      'Tipo Cross',
      'Doblo',
      'Ulysse',
      'Scudo',
      '500 RED Edition'
    ],
    [
      'Explorer EV',
      'Mustang Mach-E Rally',
      'Mustang (S650)',
      'Ranger Raptor',
      'F-150 Lightning',
      'Transit Custom',
      'Puma ST Powershift',
      'Bronco',
      'E-Tourneo Custom',
      'Fiesta Final Edition'
    ],
    [
      'Ioniq 6',
      'Kona Electric',
      'Santa Fe',
      'Tucson Hybrid',
      'Ioniq 5 N',
      'Elantra N',
      'Bayon',
      'Staria',
      'Venue',
      'Grandeur'
    ],
    [
      'EV9',
      'EV6 GT',
      'Sportage Hybrid',
      'Niro EV',
      'Sorento',
      'K3',
      'Picanto',
      'Carnival Hi-Limousine',
      'Seltos',
      'Telluride'
    ],
    [
      'Ypsilon Hybrid',
      'Ypsilon Alberta Ferretti',
      'Ypsilon EcoChic GPL',
      'Ypsilon Unyca',
      'Ypsilon Hybrid EcoChic',
      'Ypsilon Monogram',
      'Ypsilon Black & Noir',
      'Ypsilon Elefantino',
      'Ypsilon Mya',
      'Ypsilon Platinum'
    ],
    [
      'Astra Electric',
      'Mokka Electric',
      'Corsa Electric',
      'Grandland GSe',
      'Astra Sports Tourer',
      'Combo Electric',
      'Zafira-e Life',
      'Rocks-e',
      'Movano Electric',
      'Vivaro-e Hydrogen'
    ],
    [
      'Scenic E-Tech Electric',
      '5 Electric',
      'Austral',
      'Rafale',
      'Kangoo E-Tech',
      'Clio V Facelift',
      'Megane E-Tech Electric',
      'Arkana',
      'Captur E-Tech',
      'Twingo Electric'
    ],
    [
      'Swift',
      'Fronx',
      'Jimny 5-Door',
      'Grand Vitara',
      'Baleno',
      'S-Cross Hybrid',
      'Vitara Strong Hybrid',
      'Ignis Hybrid',
      'Across Plug-in Hybrid',
      'Swace'
    ],
    [
      'EX30',
      'EX90',
      'XC40 Recharge Facelift',
      'C40 Recharge',
      'V60 Cross Country',
      'S60',
      'XC90 Plug-in Hybrid',
      'V90',
      'V60 Recharge',
      'XC60'
    ]
  ];
  const total = 100;
  const range: number = 10;
  const base: number = 16;
  const largestHexadecimal: number = 16777215;
  let promises: Promise<Response>[] = [];
  for (let i = 0; i < total; i += 1) {
    const randomBrand: number = Math.floor(Math.random() * range);
    const randomModel: number = Math.floor(Math.random() * range);
    const randomColor: string = '#' + Math.floor(Math.random() * largestHexadecimal).toString(base);
    const name = `${brands[randomBrand]} ${models[randomBrand]?.[randomModel]}`;
    const car = {
      name: name,
      color: randomColor,
    }
    const promise = fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    promises.push(promise);
  }
  Promise.allSettled(promises).then((results) => results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      result.value.json().then((data) => setCars(data))
      .catch((error) => console.error(`Error parsing car ${index + 1}`, error));
    } else {
      console.error(`Failed to create a car ${index + 1}:`, result.reason);
    }
  }));
}

export function createCar(name: string, color: string): void {
  const data = {
    name: name, 
    color: color,
  };
  fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data: Car) => {
    setCars(data);
  })
  .catch((error) => alert(`Failed to create a car: ${error}`));
} 

export function updateCar(id: number, name: string, color: string): void {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const data = {
    name: name,
    color: color
  };
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Car is not found: ${response.status}`);
    }
  })
  .then((data) => setUpdatedCar(data))
  .catch((error) => alert(`Failed to update a car: ${error}`));
}

export function removeCar(id: number): void {
  const url = `http://127.0.0.1:3000/garage/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to delete a car: ${response.status}`);
    } else {
      setId(id, 'remove');
    }
  })
  .catch((error) => alert(`Failed to delete a car: ${error}`));
}

export function selectCar(car: Car): void {
  setId(car.id, 'select');
  const id = document.querySelector('.updateId') as HTMLInputElement;
  const name = document.querySelector('.updateName') as HTMLInputElement;
  const color = document.querySelector('.updateColor') as HTMLInputElement;
  id.value = `${car.id}`;
  name.value = car.name;
  color.value = car.color;
}

export function startStopCarEngine(id: number, status: 'started' | 'stopped'): void {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=${status}`;
  fetch(url, { 
    method: 'PATCH',
  })
  .then((response) => {
    if (response.ok) {
      response.json();
      driveCar(id);
    } else if (response.status === 400) {
      throw new Error(`Wrong parameters: ${response.status}`);
    } else if (response.status === 404) {
      throw new Error (`Car is not found: ${response.status}`);
    }
  })
  .catch((error) => alert(`Failed to start/stop car's engine: ${error}`));
}

function driveCar(id: number): void {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;
  fetch(url, { 
    method: 'PATCH',
  })
  .then((response) => {
    if (response.status === 400) {
      throw new Error(`Wrong parameters: ${response.status}`);
    } else if (response.status === 404) {
      throw new Error(`Engine params are not found: ${response.status}`);
    } else if (response.status === 429) {
      throw new Error (`Drive in progress: ${response.status}`);
    } else if (response.status === 500) {
      throw new Error (`Car has been stopped suddenly. It\'s engine was broken down: ${response.status}`);
    }
  })
  .catch((error) => alert(`Failed to start driving a car: ${error}`));
}