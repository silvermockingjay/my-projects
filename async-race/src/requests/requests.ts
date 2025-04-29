import type { Car, DriveProps, Racer, Winner } from '../components/interfaces';
import { getState, setCars, setId, setTotal, setUpdatedCar, setWinners, setUpdatedWinner } from '../state/states';
import { animateCar, stopCar, resetCar } from '../components/list';
import { removeWinnerFromTable } from '../components/table';

export function getCars(): void {
  const page = getState('garagePage');
  const limit = getState('limitCars');
  const url = `http://localhost:3000/garage?_page=${page}&_limit=${limit}`;
  fetch(url, { method: 'GET' })
    .then((response): Promise<Car[]> => {
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
  const promises: Promise<Response>[] = createGeneratedCarsPromises();
  Promise.allSettled(promises)
    .then((results) => {
      const createdCars: Car[] = [];
      let count = 0;
      const jsonPromises = results.map((result, index) => {
        if (result.status === 'fulfilled') {
          return result.value
            .json()
            .then((data: Car) => {
              createdCars.push(data);
              count += 1;
            })
            .catch((error: unknown) => {
              if (error instanceof Error) console.error(`Error parsing car ${index}`, error);
            });
        } else {
          console.error(`Failed to create a car ${index}:`, result.reason);
        }
      });
      Promise.all(jsonPromises)
        .then(() => {
          const currentTotal = getState('totalCars');
          setTotal(currentTotal + count, 'cars');
          getCars();
        })
        .catch((error: unknown) => {
          if (error instanceof Error) console.error('Failed to update total amount of cars', error);
        });
    })
    .catch((error: unknown) => {
      if (error instanceof Error) console.error('Failed to create  cars', error);
    });
}

function createGeneratedCarsPromises(): Promise<Response>[] {
  const brands: string[] = ['BMW', 'Fiat', 'Ford', 'Hyundai', 'Kia', 'Lancia', 'Opel', 'Renault', 'Suzuki', 'Volvo'];
  const models: string[][] = [
    ['iX2', 'i5', '5 Series G60', 'XM Label Red', 'X1 M35i xDrive', 'M2 G87', '3 Series Facelift (G20 LCI)', 'i7 M70 xDrive', 'X5 LCI', 'X6 LCI'],
    ['Topolino EV', 'Panda Hybrid', '600e', '500e Abarth', '500X Hybrid', 'Tipo Cross', 'Doblo', 'Ulysse', 'Scudo', '500 RED Edition'],
    ['Explorer EV', 'Mustang Mach-E Rally', 'Mustang (S650)', 'Ranger Raptor', 'F-150 Lightning', 'Transit Custom', 'Puma ST Powershift', 'Bronco', 'E-Tourneo Custom', 'Fiesta Final Edition'],
    ['Ioniq 6', 'Kona Electric', 'Santa Fe', 'Tucson Hybrid', 'Ioniq 5 N', 'Elantra N', 'Bayon', 'Staria', 'Venue', 'Grandeur'],
    ['EV9', 'EV6 GT', 'Sportage Hybrid', 'Niro EV', 'Sorento', 'K3', 'Picanto', 'Carnival Hi-Limousine', 'Seltos', 'Telluride'],
    ['Ypsilon Hybrid', 'Ypsilon Alberta Ferretti', 'Ypsilon EcoChic GPL', 'Ypsilon Unyca', 'Ypsilon Hybrid EcoChic', 'Ypsilon Monogram', 'Ypsilon Black & Noir', 'Ypsilon Elefantino', 'Ypsilon Mya', 'Ypsilon Platinum'],
    ['Astra Electric', 'Mokka Electric', 'Corsa Electric', 'Grandland GSe', 'Astra Sports Tourer', 'Combo Electric', 'Zafira-e Life', 'Rocks-e', 'Movano Electric', 'Vivaro-e Hydrogen'],
    ['Scenic E-Tech Electric', '5 Electric', 'Austral', 'Rafale', 'Kangoo E-Tech', 'Clio V Facelift', 'Megane E-Tech Electric', 'Arkana', 'Captur E-Tech', 'Twingo Electric'],
    ['Swift', 'Fronx', 'Jimny 5-Door', 'Grand Vitara', 'Baleno', 'S-Cross Hybrid', 'Vitara Strong Hybrid', 'Ignis Hybrid', 'Across Plug-in Hybrid', 'Swace'],
    ['EX30', 'EX90', 'XC40 Recharge Facelift', 'C40 Recharge', 'V60 Cross Country', 'S60', 'XC90 Plug-in Hybrid', 'V90', 'V60 Recharge', 'XC60']
  ];
  const total = 100;
  const range = 10;
  const base = 16;
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    promises.push(promise);
  }
  return promises;
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
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to create a car');
      }
    });
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
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to update a car');
      }
    });
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
        removeWinner(id);
      }
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to delete a car');
      }
    });
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

const errors = {
  badRequest: 400,
  notFound: 404,
  manyRequests: 429,
  serverError: 500,
};

export function startStopCarEngine(id: number, status: 'started' | 'stopped'): void {
  const url = `http://localhost:3000/engine?id=${id}&status=${status}`;
  fetch(url, {
    method: 'PATCH',
  })
    .then((response) => {
      if (response.ok) {
        return response.json().then((data: DriveProps) => {
          if (status === 'started') {
            animateCar({ id: id, velocity: data.velocity, distance: data.distance });
            driveCar(id).catch((error: unknown) => {
              if (error instanceof Error) {
                console.error('Failed to drive a car:', error);
              }
            });
          } else {
            resetCar(id);
          }
        });
      } else if (response.status === errors.badRequest) {
        throw new Error(`Wrong parameters: ${response.status}`);
      } else if (response.status === errors.notFound) {
        throw new Error(`Car is not found: ${response.status}`);
      }
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert("Failed to start/stop car's engine");
      }
    });
}

function driveCar(id: number): Promise<Response> {
  const url = `http://localhost:3000/engine?id=${id}&status=drive`;
  return fetch(url, {
    method: 'PATCH',
  }).then((response) => {
    if (response.status === errors.badRequest) {
      throw new Error(`Wrong parameters: ${response.status}`);
    } else if (response.status === errors.notFound) {
      throw new Error(`Engine params are not found: ${response.status}`);
    } else if (response.status === errors.manyRequests) {
      throw new Error(`Drive in progress: ${response.status}`);
    } else if (response.status === errors.serverError) {
      stopCar(id);
      throw new Error(`Car has been stopped suddenly. It's engine was broken down: ${response.status}`);
    }
    return response;
  });
}

export function startRace(): void {
  getCars();
  const cars = getState('cars');
  const promises: Promise<Response>[] = cars.map((car) => {
    const url = `http://localhost:3000/engine?id=${car.id}&status=started`;
    return fetch(url, { method: 'PATCH' });
  });
  const racers: Promise<Racer>[] = [];
  Promise.allSettled(promises)
    .then((results) => {
      const racerPromises: Promise<void>[] = [];
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          const racerPromise = result.value
            .json()
            .then((data: DriveProps) => {
              const myCar = cars[index];
              if (myCar) {
                const racer = createRacerPromise(myCar, data.velocity, data.distance);
                racers.push(racer);
              }
            })
            .catch((error: unknown) => {
              if (error instanceof Error) console.error('Failed to start race:', error);
            });
          racerPromises.push(racerPromise);
        } else console.error('Failed to start race', result.reason);
      });
      return Promise.all(racerPromises);
    })
    .then(() => {
      announceWinner(racers);
    })
    .catch((error: unknown) => {
      if (error instanceof Error) console.error('Failed to start race:', error);
    });
}

function createRacerPromise(car: Car, velocity: number, distance: number): Promise<Racer> {
  return new Promise((resolve, reject) => {
    const time = distance / velocity;
    const racer: Racer = {
      id: car.id,
      name: car.name,
      time: time,
    };
    const idTimeout = setTimeout(() => {
      resolve(racer);
    }, time);
    animateCar({ id: car.id, velocity: velocity, distance: distance });
    driveCar(car.id).catch((error: unknown) => {
      if (error instanceof Error) {
        clearTimeout(idTimeout);
        reject(error);
      }
    });
  });
}

function announceWinner(racers: Promise<Racer>[]): void {
  Promise.any(racers)
    .then((value) => {
      const ms = 1000;
      const fixedNum = 2;
      const time = Number((value.time / ms).toFixed(fixedNum));
      const winner = {
        id: value.id,
        wins: 1,
        time: time,
      };
      alert(`${value.name} wins with time ${time}s`);
      checkWinner(winner);
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Failed to start race:', error);
      }
    });
}

export function resetCars(): void {
  const cars = getState('cars');
  const promises: Promise<Response>[] = cars.map((car) => {
    const url = `http://localhost:3000/engine?id=${car.id}&status=stopped`;
    return fetch(url, { method: 'PATCH' });
  });
  Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          const myCar = cars[index];
          if (myCar) {
            resetCar(myCar.id);
          }
        } else {
          console.error('Failed to reset cars', result.reason);
        }
      });
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Failed to reset cars:', error);
      }
    });
}

function createWinner(winner: Winner) {
  fetch('http://localhost:3000/winners', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winner),
  })
    .then((response): Promise<Winner> => response.json())
    .then((data: Winner) => {
      let total = getState('totalWinners');
      total += 1;
      setTotal(total, 'winners');
      getCar(data.id)
        .then((value) => value.json())
        .then((car: Car) => {
          setWinners(winner, car);
        })
        .catch((error: unknown) => {
          if (error instanceof Error) console.error('Failed to get winner car data', error);
        });
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to create a winner');
      }
    });
}

function updateWinner(winner: Winner): void {
  const url = `http://localhost:3000/winners/${winner.id}`;
  const data = {
    wins: winner.wins,
    time: winner.time,
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
        throw new Error(`Winner is not found: ${response.status}`);
      }
    })
    .then((data: Winner) => {
      setUpdatedWinner(data);
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to update a car');
      }
    });
}

function checkWinner(winner: Winner): void {
  const url = `http://localhost:3000/winners/${winner.id}`;
  fetch(url, { method: 'GET' })
    .then((response) => {
      if (response.ok) {
        response
          .json()
          .then((data: Winner) => {
            const totalWins = data.wins++;
            const bestTime = Math.min(winner.time, data.time);
            const updatedWinner = {
              id: data.id,
              wins: totalWins,
              time: bestTime,
            };
            updateWinner(updatedWinner);
          })
          .catch((error: unknown) => {
            if (error instanceof Error) {
              console.error('Error', error);
              alert('Failed to update a winner');
            }
          });
      } else {
        createWinner(winner);
      }
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to create/update a winner');
      }
    });
}

function getCar(id: number): Promise<Response> {
  const url = `http://localhost:3000/garage/${id}`;
  return fetch(url, { method: 'GET' }).then((response) => {
    if (response.status === errors.notFound) {
      throw new Error(`Car params are not found: ${response.status}`);
    }
    return response;
  });
}

export function getWinners(): void {
  const page = getState('winnersPage');
  const limit = getState('limitWinners');
  const sort = getState('sortingOrder');
  const order = getState('sortBy');
  const url = `http://localhost:3000/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
  fetch(url, { method: 'GET' })
    .then((response): Promise<Winner[]> => {
      const total = Number(response.headers.get('X-Total-Count'));
      setTotal(total, 'winners');
      return response.json();
    })
    .then((winners) => {
      const promises: Promise<Car | undefined>[] = winners.map((winner) => {
        return getCar(winner.id)
          .then((res) => (res.ok ? (res.json() as Promise<Car>) : undefined))
          .catch(() => undefined);
      });
      Promise.all(promises)
        .then((carsRaw) => {
          const cars: Car[] = carsRaw.filter((car): car is Car => car !== undefined);
          setWinners(winners, cars);
        })
        .catch((error: unknown) => {
          if (error instanceof Error) {
            console.error('Failed to get cars:', error);
          }
        });
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Failed to get winners:', error);
      }
    });
}

export function removeWinner(id: number): void {
  const url = `http://localhost:3000/winners/${id}`;
  fetch(url, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to delete a winner: ${response.status}`);
      } else {
        let total = getState('totalWinners');
        total -= 1;
        setTotal(total, 'winners');
        removeWinnerFromTable(id);
      }
    })
    .catch((error: unknown) => {
      if (error instanceof Error) {
        console.error('Error', error);
        alert('Failed to delete a winner');
      }
    });
}
