import type { Car } from "../components/interfaces";
import { setCars, setId } from "../state/states";

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
  const id = document.querySelector("updateId") as HTMLInputElement;
  const name = document.querySelector("updateName") as HTMLInputElement;
  const color = document.querySelector("updateColor") as HTMLInputElement;
  id.value = `${car.id}`;
  name.value = car.name;
  color.value = car.color;
}
