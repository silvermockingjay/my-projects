import type { Car } from "../components/interfaces";
import { setCars, setId, setUpdatedCar } from "../state/states";

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
      throw new Error('Wrong parameters');
    } else if (response.status === 404) {
      throw new Error ('Car is not found');
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
      throw new Error('Wrong parameters');
    } else if (response.status === 404) {
      throw new Error('Engine params are not found');
    } else if (response.status === 429) {
      throw new Error ('Drive in progress');
    } else if (response.status === 500) {
      throw new Error ('Car has been stopped suddenly. It\'s engine was broken down.')
    }
  })
  .catch((error) => alert(`Failed to start driving a car: ${error}`));
}