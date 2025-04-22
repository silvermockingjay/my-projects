import type { Car } from '../components/interfaces';
import { getState, setCars, setId, setTotal, setUpdatedCar } from '../state/states';

export function getCars(): void {
  const page = String(getState('garagePage'));
  const limit = String(getState('limitCars'));
  const url = `http://localhost:3000/garage?_page=${page}&_limit=${limit}`;
  fetch(url, { method: 'GET' })
    .then((response): Promise<Car> => {
      const total = Number(response.headers.get('X-Total-Count'));
      setTotal(total, 'cars');
      return response.json();
    })
    .then((data) => {
      setCars(data);
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Failed to get cars:', error);
      }
    });
}

export function generateCars(): void {
  const brands: string[] = ['BMW', 'Fiat', 'Ford', 'Hyundai', 'Kia', 'Lancia', 'Opel', 'Renault', 'Suzuki', 'Volvo'];
  const models: string[][] = [['iX2', 'i5', '5 Series G60', 'XM Label Red', 'X1 M35i xDrive', 'M2 G87', '3 Series Facelift (G20 LCI)', 'i7 M70 xDrive', 'X5 LCI', 'X6 LCI'], ['Topolino EV', 'Panda Hybrid', '600e', '500e Abarth', '500X Hybrid', 'Tipo Cross', 'Doblo', 'Ulysse', 'Scudo', '500 RED Edition'], ['Explorer EV', 'Mustang Mach-E Rally', 'Mustang (S650)', 'Ranger Raptor', 'F-150 Lightning', 'Transit Custom', 'Puma ST Powershift', 'Bronco', 'E-Tourneo Custom', 'Fiesta Final Edition'], [ 'Ioniq 6', 'Kona Electric', 'Santa Fe', 'Tucson Hybrid', 'Ioniq 5 N', 'Elantra N', 'Bayon', 'Staria', 'Venue', 'Grandeur'], ['EV9', 'EV6 GT', 'Sportage Hybrid', 'Niro EV', 'Sorento', 'K3', 'Picanto', 'Carnival Hi-Limousine', 'Seltos', 'Telluride'], ['Ypsilon Hybrid', 'Ypsilon Alberta Ferretti', 'Ypsilon EcoChic GPL', 'Ypsilon Unyca', 'Ypsilon Hybrid EcoChic', 'Ypsilon Monogram', 'Ypsilon Black & Noir', 'Ypsilon Elefantino', 'Ypsilon Mya', 'Ypsilon Platinum'], ['Astra Electric', 'Mokka Electric', 'Corsa Electric', 'Grandland GSe', 'Astra Sports Tourer', 'Combo Electric', 'Zafira-e Life', 'Rocks-e', 'Movano Electric', 'Vivaro-e Hydrogen'], ['Scenic E-Tech Electric', '5 Electric', 'Austral', 'Rafale', 'Kangoo E-Tech', 'Clio V Facelift', 'Megane E-Tech Electric', 'Arkana', 'Captur E-Tech', 'Twingo Electric'], ['Swift', 'Fronx', 'Jimny 5-Door', 'Grand Vitara', 'Baleno', 'S-Cross Hybrid', 'Vitara Strong Hybrid', 'Ignis Hybrid', 'Across Plug-in Hybrid', 'Swace'], ['EX30', 'EX90', 'XC40 Recharge Facelift', 'C40 Recharge', 'V60 Cross Country', 'S60', 'XC90 Plug-in Hybrid', 'V90', 'V60 Recharge', 'XC60']];
  const total = 100, range = 10, base = 16;
  const largestHexadecimal = 16777215;
  const promises: Promise<Response>[] = [];
  for (let i = 0; i < total; i += 1) {
    const randomBrand: number = Math.floor(Math.random() * range);
    const randomModel: number = Math.floor(Math.random() * range);
    const randomColor: string = '#' + Math.floor(Math.random() * largestHexadecimal).toString(base);
    const name = `${brands[randomBrand]} ${models[randomBrand]?.[randomModel]}`;
    const car = { name: name, color: randomColor };
    const promise = fetch('http://localhost:3000/garage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(car),
    });
    promises.push(promise);
  }
  Promise.allSettled(promises).then((results) => {
    const createdCars: Car[] = [];
    let count = 0;
    const jsonPromises = results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value.json().then((data) => {
            createdCars.push(data);
            count += 1;
          }).catch((error) => console.error(`Error parsing car ${index + 1}`, error));
        } else {
          console.error(`Failed to create a car ${index + 1}:`, result.reason);
        }
    });
    Promise.all(jsonPromises).then(() => {
      const currentTotal = getState('totalCars');
      setTotal(currentTotal + count, 'cars');
      getCars();
    });
  });
}

export function createCar(name: string, color: string): void {
  const data = {
    name: name,
    color: color,
  };
  fetch('http://localhost:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response): Promise<Car> => response.json())
    .then((data: Car) => {
      let total = getState('totalCars');
      total += 1;
      setTotal(total, 'cars');
      setCars(data);
    })
    .catch((error: unknown) => alert(`Failed to create a car: ${error}`));
}

export function updateCar(id: string, name: string, color: string): void {
  const url = `http://localhost:3000/garage/${id}`;
  const data = {
    name: name,
    color: color,
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
    .then((data: Car) => {
      setUpdatedCar(data);
    })
    .catch((error: unknown) => alert(`Failed to update a car: ${error}`));
}

export function removeCar(id: number): void {
  const url = `http://localhost:3000/garage/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to delete a car: ${response.status}`);
      } else {
        let total = getState('totalCars');
        total -= 1;
        setTotal(total, 'cars');
        setId(id, 'remove');
      }
    })
    .catch((error: unknown) => alert(`Failed to delete a car: ${error}`));
}

export function selectCar(car: Car): void {
  setId(car.id, 'select');
  const id: HTMLInputElement | null = document.querySelector('.updateId');
  const name: HTMLInputElement | null = document.querySelector('.updateName');
  const color: HTMLInputElement | null = document.querySelector('.updateColor');
  if (id && name && color) {
    id.value = `${car.id}`;
    name.value = car.name;
    color.value = car.color;
  }
}

export function startStopCarEngine(id: number, status: 'started' | 'stopped'): void {
  const url = `http://localhost:3000/engine?id=${id}&status=${status}`;
  fetch(url, {
    method: 'PATCH',
  })
    .then((response) => {
      if (response.ok) {
        driveCar(id);
      } else if (response.status === 400) {
        throw new Error(`Wrong parameters: ${response.status}`);
      } else if (response.status === 404) {
        throw new Error(`Car is not found: ${response.status}`);
      }
    })
    .catch((error: unknown) => alert(`Failed to start/stop car's engine: ${error}`));
}

function driveCar(id: number): void {
  const url = `http://localhost:3000/engine?id=${id}&status=drive`;
  fetch(url, {
    method: 'PATCH',
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error(`Wrong parameters: ${response.status}`);
      } else if (response.status === 404) {
        throw new Error(`Engine params are not found: ${response.status}`);
      } else if (response.status === 429) {
        throw new Error(`Drive in progress: ${response.status}`);
      } else if (response.status === 500) {
        throw new Error(`Car has been stopped suddenly. It's engine was broken down: ${response.status}`);
      }
    })
    .catch((error: unknown) => alert(`Failed to start driving a car: ${error}`));
}

export function startRace(): void {
  //const cars = getState('cars');
  //const limit = getState('limitCars');
  //if (cars.length > limit) {
  //  cars.splice(limit + 1, cars.length - limit);
  //}
  //const promises: Promise<Response>[] = cars.map((car) => s)
  console.log('Implement startRace');
}

export function resetCars(): void {
  console.log('Implement resetCars');
}
