/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button.ts":
/*!**********************************!*\
  !*** ./src/components/button.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   button: () => (/* binding */ button)
/* harmony export */ });
const button = ({ type = 'button', text = '', onClick, className = '' }) => {
    const btn = document.createElement('button');
    btn.className = className;
    btn.type = type;
    btn.textContent = text;
    if (onClick) {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            onClick();
        });
    }
    return btn;
};


/***/ }),

/***/ "./src/components/form.ts":
/*!********************************!*\
  !*** ./src/components/form.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanForm: () => (/* binding */ cleanForm),
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   inputField: () => (/* binding */ inputField)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button.ts");

const inputField = ({ type, value, id, placeholder, disabled, className }) => {
    const input = document.createElement('input');
    input.type = type;
    if (placeholder)
        input.placeholder = placeholder;
    if (value)
        input.value = value;
    if (id)
        input.id = id;
    if (disabled)
        input.disabled = disabled;
    if (className)
        input.className = className;
    return input;
};
const form = ({ formClass, formSubmitFun, cleanFormFun, inputFields, btnClass, btnText, }) => {
    const formElem = document.createElement('form');
    if (formClass)
        formElem.className = formClass;
    inputFields.forEach((input) => {
        formElem.append(input);
    });
    const btn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'submit', text: btnText });
    if (btnClass)
        btn.className = btnClass;
    formElem.append(btn);
    formElem.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputValues = inputFields.map((input) => input.value);
        formSubmitFun(...inputValues);
        if (cleanFormFun)
            cleanFormFun();
    });
    return formElem;
};
function cleanForm(...classNames) {
    classNames.forEach((className) => {
        const input = document.querySelector(`.${className}`);
        if (!input)
            return;
        if (input.type === 'color') {
            input.value = '#ffffff';
        }
        else if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        }
        else {
            input.value = '';
        }
    });
}


/***/ }),

/***/ "./src/components/list.ts":
/*!********************************!*\
  !*** ./src/components/list.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   listItem: () => (/* binding */ listItem),
/* harmony export */   removeCarFromList: () => (/* binding */ removeCarFromList),
/* harmony export */   updateCarList: () => (/* binding */ updateCarList),
/* harmony export */   updateCarListItem: () => (/* binding */ updateCarListItem)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");


const listItem = (car, className) => {
    const li = document.createElement('li');
    li.dataset.id = `${car.id}`;
    if (className)
        li.className = className;
    const div = document.createElement('div');
    div.className = 'liContainer';
    li.append(div);
    const upperPart = document.createElement('div');
    upperPart.className = 'upperPartContainer';
    const lowerPart = document.createElement('div');
    lowerPart.className = 'lowerPartContainer';
    div.append(upperPart, lowerPart);
    const selectCarBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'select', onClick: () => (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.selectCar)(car) });
    const removeCarBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'remove', onClick: () => (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.removeCar)(car.id) });
    const startEngineBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'A', onClick: () => (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.startStopCarEngine)(car.id, 'started') });
    const stopEngineBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'B', onClick: () => (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.startStopCarEngine)(car.id, 'stopped') });
    const carName = document.createElement('span');
    carName.className = 'carName';
    carName.textContent = car.name;
    upperPart.append(selectCarBtn, removeCarBtn, carName);
    const imgCar = document.createElement('div');
    imgCar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
    const imgFlag = document.createElement('div');
    imgFlag.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 24h-2v-24h2v24zm18-16l-16-6v12l16-6z" fill="ff0000"/>
    </svg>
  `;
    lowerPart.append(startEngineBtn, stopEngineBtn, imgCar, imgFlag);
    return li;
};
const list = ({ type, listItems, className }) => {
    const list = document.createElement(`${type}`);
    if (className)
        list.className = className;
    if (Array.isArray(listItems)) {
        listItems.forEach((item) => {
            list.append(item);
        });
    }
    else if (listItems) {
        list.append(listItems);
    }
    return list;
};
const updateCarList = (car) => {
    const carList = document.querySelector('.carList');
    if (carList) {
        if (Array.isArray(car)) {
            const carItems = car.map((item) => listItem(item));
            carList.innerHTML = '';
            carList.append(...carItems);
        }
        else {
            const carItem = listItem(car);
            carList.append(carItem);
        }
    }
};
const updateCarListItem = (car) => {
    const carItem = document.querySelector(`[data-id='${car.id}']`);
    if (carItem) {
        const name = carItem.querySelector('.carName');
        if (name)
            name.textContent = car.name;
        const path = carItem.querySelector('.svgCar');
        if (path)
            path.setAttribute('fill', car.color);
    }
};
const removeCarFromList = (id) => {
    const carList = document.querySelector('.carList');
    const carItem = document.querySelector(`[data-id='${id}']`);
    if (carList && carItem)
        carList.removeChild(carItem);
};


/***/ }),

/***/ "./src/requests/requests.ts":
/*!**********************************!*\
  !*** ./src/requests/requests.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCar: () => (/* binding */ createCar),
/* harmony export */   generateCars: () => (/* binding */ generateCars),
/* harmony export */   getCars: () => (/* binding */ getCars),
/* harmony export */   removeCar: () => (/* binding */ removeCar),
/* harmony export */   resetCars: () => (/* binding */ resetCars),
/* harmony export */   selectCar: () => (/* binding */ selectCar),
/* harmony export */   startRace: () => (/* binding */ startRace),
/* harmony export */   startStopCarEngine: () => (/* binding */ startStopCarEngine),
/* harmony export */   updateCar: () => (/* binding */ updateCar)
/* harmony export */ });
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");

function getCars() {
    const page = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('garagePage');
    const limit = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('limitCars');
    const url = `http://localhost:3000/garage?_page=${page}&_limit=${limit}`;
    fetch(url, { method: 'GET' })
        .then((response) => {
        const total = Number(response.headers.get('X-Total-Count'));
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(total, 'cars');
        return response.json();
    })
        .then((data) => {
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setCars)(data);
    })
        .catch((error) => {
        alert(`Failed to get cars: ${error}`);
    });
}
function generateCars() {
    const brands = ['BMW', 'Fiat', 'Ford', 'Hyundai', 'Kia', 'Lancia', 'Opel', 'Renault', 'Suzuki', 'Volvo'];
    const models = [['iX2', 'i5', '5 Series G60', 'XM Label Red', 'X1 M35i xDrive', 'M2 G87', '3 Series Facelift (G20 LCI)', 'i7 M70 xDrive', 'X5 LCI', 'X6 LCI'], ['Topolino EV', 'Panda Hybrid', '600e', '500e Abarth', '500X Hybrid', 'Tipo Cross', 'Doblo', 'Ulysse', 'Scudo', '500 RED Edition'], ['Explorer EV', 'Mustang Mach-E Rally', 'Mustang (S650)', 'Ranger Raptor', 'F-150 Lightning', 'Transit Custom', 'Puma ST Powershift', 'Bronco', 'E-Tourneo Custom', 'Fiesta Final Edition'], ['Ioniq 6', 'Kona Electric', 'Santa Fe', 'Tucson Hybrid', 'Ioniq 5 N', 'Elantra N', 'Bayon', 'Staria', 'Venue', 'Grandeur'], ['EV9', 'EV6 GT', 'Sportage Hybrid', 'Niro EV', 'Sorento', 'K3', 'Picanto', 'Carnival Hi-Limousine', 'Seltos', 'Telluride'], ['Ypsilon Hybrid', 'Ypsilon Alberta Ferretti', 'Ypsilon EcoChic GPL', 'Ypsilon Unyca', 'Ypsilon Hybrid EcoChic', 'Ypsilon Monogram', 'Ypsilon Black & Noir', 'Ypsilon Elefantino', 'Ypsilon Mya', 'Ypsilon Platinum'], ['Astra Electric', 'Mokka Electric', 'Corsa Electric', 'Grandland GSe', 'Astra Sports Tourer', 'Combo Electric', 'Zafira-e Life', 'Rocks-e', 'Movano Electric', 'Vivaro-e Hydrogen'], ['Scenic E-Tech Electric', '5 Electric', 'Austral', 'Rafale', 'Kangoo E-Tech', 'Clio V Facelift', 'Megane E-Tech Electric', 'Arkana', 'Captur E-Tech', 'Twingo Electric'], ['Swift', 'Fronx', 'Jimny 5-Door', 'Grand Vitara', 'Baleno', 'S-Cross Hybrid', 'Vitara Strong Hybrid', 'Ignis Hybrid', 'Across Plug-in Hybrid', 'Swace'], ['EX30', 'EX90', 'XC40 Recharge Facelift', 'C40 Recharge', 'V60 Cross Country', 'S60', 'XC90 Plug-in Hybrid', 'V90', 'V60 Recharge', 'XC60']];
    const total = 100;
    const range = 10;
    const base = 16;
    const largestHexadecimal = 16777215;
    const promises = [];
    let totalCreated = 0;
    for (let i = 0; i < total; i += 1) {
        const randomBrand = Math.floor(Math.random() * range);
        const randomModel = Math.floor(Math.random() * range);
        const randomColor = '#' + Math.floor(Math.random() * largestHexadecimal).toString(base);
        const name = `${brands[randomBrand]} ${models[randomBrand]?.[randomModel]}`;
        const car = { name: name, color: randomColor };
        const promise = fetch('http://localhost:3000/garage', {
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
            result.value.json()
                .then((data) => {
                totalCreated += 1;
                (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setCars)(data);
            })
                .catch((error) => console.error(`Error parsing car ${index + 1}`, error));
        }
        else {
            console.error(`Failed to create a car ${index + 1}:`, result.reason);
        }
    }));
    let currentTotal = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalCars');
    currentTotal += totalCreated;
    (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(currentTotal, 'cars');
}
function createCar(name, color) {
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
        .then((response) => response.json())
        .then((data) => {
        let total = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalCars');
        total += 1;
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(total, 'cars');
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setCars)(data);
    })
        .catch((error) => alert(`Failed to create a car: ${error}`));
}
function updateCar(id, name, color) {
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
        }
        else {
            throw new Error(`Car is not found: ${response.status}`);
        }
    })
        .then((data) => {
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setUpdatedCar)(data);
    })
        .catch((error) => alert(`Failed to update a car: ${error}`));
}
function removeCar(id) {
    const url = `http://localhost:3000/garage/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to delete a car: ${response.status}`);
        }
        else {
            let total = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalCars');
            total -= 1;
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(total, 'cars');
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setId)(id, 'remove');
        }
    })
        .catch((error) => alert(`Failed to delete a car: ${error}`));
}
function selectCar(car) {
    (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setId)(car.id, 'select');
    const id = document.querySelector('.updateId');
    const name = document.querySelector('.updateName');
    const color = document.querySelector('.updateColor');
    if (id && name && color) {
        id.value = `${car.id}`;
        name.value = car.name;
        color.value = car.color;
    }
}
function startStopCarEngine(id, status) {
    const url = `http://localhost:3000/engine?id=${id}&status=${status}`;
    fetch(url, {
        method: 'PATCH',
    })
        .then((response) => {
        if (response.ok) {
            driveCar(id);
        }
        else if (response.status === 400) {
            throw new Error(`Wrong parameters: ${response.status}`);
        }
        else if (response.status === 404) {
            throw new Error(`Car is not found: ${response.status}`);
        }
    })
        .catch((error) => alert(`Failed to start/stop car's engine: ${error}`));
}
function driveCar(id) {
    const url = `http://localhost:3000/engine?id=${id}&status=drive`;
    fetch(url, {
        method: 'PATCH',
    })
        .then((response) => {
        if (response.status === 400) {
            throw new Error(`Wrong parameters: ${response.status}`);
        }
        else if (response.status === 404) {
            throw new Error(`Engine params are not found: ${response.status}`);
        }
        else if (response.status === 429) {
            throw new Error(`Drive in progress: ${response.status}`);
        }
        else if (response.status === 500) {
            throw new Error(`Car has been stopped suddenly. It's engine was broken down: ${response.status}`);
        }
    })
        .catch((error) => alert(`Failed to start driving a car: ${error}`));
}
function startRace() {
    //const cars = getState('cars');
    //const limit = getState('limitCars');
    //if (cars.length > limit) {
    //  cars.splice(limit + 1, cars.length - limit);
    //}
    //const promises: Promise<Response>[] = cars.map((car) => s)
    console.log('Implement startRace');
}
function resetCars() {
    console.log('Implement resetCars');
}


/***/ }),

/***/ "./src/routing/navigation.ts":
/*!***********************************!*\
  !*** ./src/routing/navigation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   goToGarage: () => (/* binding */ goToGarage),
/* harmony export */   goToWinners: () => (/* binding */ goToWinners),
/* harmony export */   nextPage: () => (/* binding */ nextPage),
/* harmony export */   prevPage: () => (/* binding */ prevPage)
/* harmony export */ });
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");

function prevPage() {
    const nextPageBtn = document.querySelector('.nextButton');
    let currPage = 0;
    const currView = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('view');
    if (currView === 'garage') {
        currPage = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('garagePage');
    }
    else {
        currPage = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('winnersPage');
    }
    let prevPage = 0;
    if (currPage > 1) {
        prevPage = currPage - 1;
        currView === 'garage' ? (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setGaragePage)(prevPage) : (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setWinnersPage)(prevPage);
        if (nextPageBtn?.classList.contains('inactive'))
            nextPageBtn.classList.remove('inactive');
    }
}
function nextPage() {
    const prevPageBtn = document.querySelector('.prevButton');
    const nextPageBtn = document.querySelector('.nextButton');
    let currPage = 0;
    let totalPagesView = 0;
    const currView = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('view');
    if (currView === 'garage') {
        currPage = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('garagePage');
        totalPagesView = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalPagesGarage');
    }
    else {
        currPage = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('winnersPage');
        totalPagesView = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalPagesWinners');
    }
    let nextPage = 0;
    if (currPage < totalPagesView) {
        nextPage = currPage + 1;
        currView === 'garage' ? (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setGaragePage)(nextPage) : (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setWinnersPage)(nextPage);
        if (prevPageBtn?.classList.contains('inactive'))
            prevPageBtn.classList.remove('inactive');
        if (nextPage === totalPagesView)
            nextPageBtn.classList.add('inactive');
    }
}
function goToGarage() {
    (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setView)('garage');
}
function goToWinners() {
    (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setView)('winners');
}


/***/ }),

/***/ "./src/state/states.ts":
/*!*****************************!*\
  !*** ./src/state/states.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   setCars: () => (/* binding */ setCars),
/* harmony export */   setGaragePage: () => (/* binding */ setGaragePage),
/* harmony export */   setId: () => (/* binding */ setId),
/* harmony export */   setSortBy: () => (/* binding */ setSortBy),
/* harmony export */   setSortingOrder: () => (/* binding */ setSortingOrder),
/* harmony export */   setTotal: () => (/* binding */ setTotal),
/* harmony export */   setTotalPagesGarage: () => (/* binding */ setTotalPagesGarage),
/* harmony export */   setTotalPagesWinners: () => (/* binding */ setTotalPagesWinners),
/* harmony export */   setUpdatedCar: () => (/* binding */ setUpdatedCar),
/* harmony export */   setView: () => (/* binding */ setView),
/* harmony export */   setWinners: () => (/* binding */ setWinners),
/* harmony export */   setWinnersPage: () => (/* binding */ setWinnersPage)
/* harmony export */ });
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/list */ "./src/components/list.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _views_garage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/garage */ "./src/views/garage.ts");
/* harmony import */ var _views_winners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/winners */ "./src/views/winners.ts");




const state = {
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
        if (this.view === 'garage') {
            (0,_views_garage__WEBPACK_IMPORTED_MODULE_2__.renderGarage)();
        }
        else {
            (0,_views_winners__WEBPACK_IMPORTED_MODULE_3__.renderWinners)();
        }
    },
    setCars(car) {
        if (Array.isArray(car)) {
            this.cars = car;
        }
        else {
            this.cars.push(car);
        }
        if (this.cars.length <= this.limitCars) {
            (0,_components_list__WEBPACK_IMPORTED_MODULE_0__.updateCarList)(car);
        }
        else {
            const nextPage = this.garagePage + 1;
            this.setGaragePage(nextPage);
        }
    },
    setUpdatedCar(updatedCar) {
        const index = this.cars.findIndex((car) => car.id === updatedCar.id);
        if (index !== -1) {
            this.cars[index] = updatedCar;
            (0,_components_list__WEBPACK_IMPORTED_MODULE_0__.updateCarListItem)(updatedCar);
        }
    },
    setWinners(winner) {
        if (Array.isArray(winner)) {
            this.winners = winner;
        }
        else {
            this.winners.push(winner);
        }
    },
    setTotal(total, prop) {
        if (prop === 'cars') {
            this.totalCars = total;
            this.setTotalPagesGarage();
            (0,_views_garage__WEBPACK_IMPORTED_MODULE_2__.updateTotalCars)();
        }
        else {
            this.totalWinners = total;
            this.setTotalPagesWinners();
            (0,_views_winners__WEBPACK_IMPORTED_MODULE_3__.updateTotalWinners)();
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
        (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.getCars)();
    },
    setWinnersPage(page) {
        this.winnersPage = page;
        (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.getCars)();
    },
    setId(id, type) {
        if (type === 'select') {
            this.selectId = id;
        }
        else {
            this.removeId = id;
            const index = this.cars.findIndex((car) => car.id === this.removeId);
            if (index !== -1) {
                this.cars.splice(index, 1);
                (0,_components_list__WEBPACK_IMPORTED_MODULE_0__.removeCarFromList)(this.removeId);
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
};
const getState = state.getState.bind(state);
const setView = state.setView.bind(state);
const setCars = state.setCars.bind(state);
const setUpdatedCar = state.setUpdatedCar.bind(state);
const setWinners = state.setWinners.bind(state);
const setTotal = state.setTotal.bind(state);
const setTotalPagesGarage = state.setTotalPagesGarage.bind(state);
const setTotalPagesWinners = state.setTotalPagesWinners.bind(state);
const setGaragePage = state.setGaragePage.bind(state);
const setWinnersPage = state.setWinnersPage.bind(state);
const setId = state.setId.bind(state);
const setSortingOrder = state.setSortingOrder.bind(state);
const setSortBy = state.setSortBy.bind(state);


/***/ }),

/***/ "./src/views/garage.ts":
/*!*****************************!*\
  !*** ./src/views/garage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGarage: () => (/* binding */ renderGarage),
/* harmony export */   updateTotalCars: () => (/* binding */ updateTotalCars)
/* harmony export */ });
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button */ "./src/components/button.ts");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form.ts");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/list */ "./src/components/list.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _routing_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routing/navigation */ "./src/routing/navigation.ts");
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");







function renderGarage() {
    const body = document.body;
    const main = document.createElement('main');
    const divWithViewNavigation = document.createElement('div');
    const divWithRaceAndGenerator = document.createElement('div');
    const sectionWithForm = document.createElement('section');
    const sectionWithList = document.createElement('section');
    const divWithPageNavigation = document.createElement('div');
    body.append(main);
    main.append(divWithViewNavigation, sectionWithForm, sectionWithList, divWithPageNavigation);
    // Create buttons to switch views
    const garageBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'garage', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_4__.goToGarage, className: 'garageBtn' });
    const winnersBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'winners', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_4__.goToWinners, className: 'winnersBtn' });
    divWithViewNavigation.append(garageBtn, winnersBtn);
    // Create form to create a car
    const inputFields1 = createCarInputs();
    const createCarForm = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.form)({ formSubmitFun: _requests_requests__WEBPACK_IMPORTED_MODULE_3__.createCar, cleanFormFun: () => (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.cleanForm)('createName', 'createColor'), inputFields: inputFields1, btnText: 'create' });
    sectionWithForm.append(createCarForm);
    // Create form to update a car
    const inputFields2 = updateCarInputs();
    const updateCarForm = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.form)({ formSubmitFun: _requests_requests__WEBPACK_IMPORTED_MODULE_3__.updateCar, cleanFormFun: () => (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.cleanForm)('updateName', 'updateColor'), inputFields: inputFields2, btnText: 'update' });
    sectionWithForm.append(updateCarForm);
    // Create race, reset, generate cars button
    const raceBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'race', onClick: _requests_requests__WEBPACK_IMPORTED_MODULE_3__.startRace, className: 'raceBtn' });
    const resetBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'reset', onClick: _requests_requests__WEBPACK_IMPORTED_MODULE_3__.resetCars, className: 'resetBtn' });
    const generateCarsBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'generate', onClick: _requests_requests__WEBPACK_IMPORTED_MODULE_3__.generateCars, className: 'generateBtn' });
    divWithRaceAndGenerator.append(raceBtn, resetBtn, generateCarsBtn);
    sectionWithForm.append(divWithRaceAndGenerator);
    // Create list
    const heading = document.createElement('h1');
    heading.textContent = 'Garage';
    const paragraph = document.createElement('p');
    paragraph.textContent = `Total cars: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_5__.getState)('totalCars')}`;
    paragraph.className = 'totalCars';
    const myCarsList = (0,_components_list__WEBPACK_IMPORTED_MODULE_2__.list)({ type: 'ul', className: 'carList' });
    sectionWithList.append(heading, paragraph, myCarsList);
    // Create buttons to navigate between list pages
    const prevButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'prev', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_4__.prevPage, className: 'prevButton' });
    const nextButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'next', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_4__.nextPage, className: 'nextButton' });
    divWithPageNavigation.append(prevButton, nextButton);
    // Fill the car list
    (0,_requests_requests__WEBPACK_IMPORTED_MODULE_3__.getCars)();
}
function updateTotalCars() {
    const totalCars = document.querySelector('.totalCars');
    if (totalCars)
        totalCars.textContent = `Total cars: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_5__.getState)('totalCars')}`;
}
function createCarInputs() {
    const inputFields = [];
    const textField = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.inputField)({ type: 'text', className: 'createName' });
    const colorField = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.inputField)({ type: 'color', value: '#ffffff', className: 'createColor' });
    inputFields.push(textField, colorField);
    return inputFields;
}
function updateCarInputs() {
    const inputFields = [];
    const hiddenInput = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.inputField)({ type: 'hidden', className: 'updateId' });
    const textField = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.inputField)({ type: 'text', className: 'updateName' });
    const colorField = (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.inputField)({ type: 'color', value: '#ffffff', className: 'updateColor' });
    inputFields.push(hiddenInput, textField, colorField);
    return inputFields;
}


/***/ }),

/***/ "./src/views/winners.ts":
/*!******************************!*\
  !*** ./src/views/winners.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderWinners: () => (/* binding */ renderWinners),
/* harmony export */   updateTotalWinners: () => (/* binding */ updateTotalWinners)
/* harmony export */ });
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button */ "./src/components/button.ts");
/* harmony import */ var _routing_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routing/navigation */ "./src/routing/navigation.ts");
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");




function renderWinners() {
    const body = document.body;
    const main = document.createElement('main');
    const divWithViewNavigation = document.createElement('div');
    const sectionWithTable = document.createElement('section');
    const divWithPageNavigation = document.createElement('div');
    body.append(main);
    main.append(divWithViewNavigation, sectionWithTable, divWithPageNavigation);
    // Create buttons to switch views
    const garageBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'garage', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.goToGarage, className: 'garageBtn' });
    const winnersBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'winners', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.goToWinners, className: 'winnersBtn' });
    divWithViewNavigation.append(garageBtn, winnersBtn);
    // Create table
    const heading = document.createElement('h1');
    heading.textContent = 'Winners';
    const paragraph = document.createElement('p');
    paragraph.textContent = `Total winners: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_2__.getState)('totalWinners')}`;
    paragraph.className = 'totalWinners';
    // Create buttons to navigate between list pages
    const prevButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'prev', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.prevPage, className: 'prevButton' });
    const nextButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'next', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.nextPage, className: 'nextButton' });
    divWithPageNavigation.append(prevButton, nextButton);
    // Fill the table
}
function updateTotalWinners() {
    const totalWinners = document.querySelector('.totalWinners');
    totalWinners.textContent = `Total winners: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_2__.getState)('totalWinners')}`;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_garage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/garage */ "./src/views/garage.ts");

(0,_views_garage__WEBPACK_IMPORTED_MODULE_0__.renderGarage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLHlEQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDdEcsTUFBTSxVQUFVLEdBQUcsMERBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUseURBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztJQUN0RyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELGlCQUFpQjtBQUVuQixDQUFDO0FBRU0sU0FBUyxrQkFBa0I7SUFDOUIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXlCLENBQUM7SUFDckYsWUFBWSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsdURBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO0FBQzFFLENBQUM7Ozs7Ozs7VUNsQ0g7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044QztBQUM5QywyREFBWSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9mb3JtLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9saXN0LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvcmVxdWVzdHMvcmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yb3V0aW5nL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdGF0ZS9zdGF0ZXMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3cy9nYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy92aWV3cy93aW5uZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9ICh7IHR5cGUgPSAnYnV0dG9uJywgdGV4dCA9ICcnLCBvbkNsaWNrLCBjbGFzc05hbWUgPSAnJyB9OiBCdXR0b25Qcm9wcyk6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcbiAgY29uc3QgYnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBidG4udHlwZSA9IHR5cGU7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGlmIChvbkNsaWNrKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25DbGljaygpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBidG47XG59O1xuIiwiaW1wb3J0IHR5cGUgeyBGb3JtUHJvcHMsIElucHV0UHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuXG5leHBvcnQgY29uc3QgaW5wdXRGaWVsZCA9ICh7IHR5cGUsIHZhbHVlLCBpZCwgcGxhY2Vob2xkZXIsIGRpc2FibGVkLCBjbGFzc05hbWUgfTogSW5wdXRQcm9wcyk6IEhUTUxJbnB1dEVsZW1lbnQgPT4ge1xuICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAocGxhY2Vob2xkZXIpIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gIGlmICh2YWx1ZSkgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgaWYgKGlkKSBpbnB1dC5pZCA9IGlkO1xuICBpZiAoZGlzYWJsZWQpIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIGlmIChjbGFzc05hbWUpIGlucHV0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoe1xuICBmb3JtQ2xhc3MsXG4gIGZvcm1TdWJtaXRGdW4sXG4gIGNsZWFuRm9ybUZ1bixcbiAgaW5wdXRGaWVsZHMsXG4gIGJ0bkNsYXNzLFxuICBidG5UZXh0LFxufTogRm9ybVByb3BzKTogSFRNTEZvcm1FbGVtZW50ID0+IHtcbiAgY29uc3QgZm9ybUVsZW06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgaWYgKGZvcm1DbGFzcykgZm9ybUVsZW0uY2xhc3NOYW1lID0gZm9ybUNsYXNzO1xuXG4gIGlucHV0RmllbGRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgZm9ybUVsZW0uYXBwZW5kKGlucHV0KTtcbiAgfSk7XG5cbiAgY29uc3QgYnRuID0gYnV0dG9uKHsgdHlwZTogJ3N1Ym1pdCcsIHRleHQ6IGJ0blRleHQgfSk7XG4gIGlmIChidG5DbGFzcykgYnRuLmNsYXNzTmFtZSA9IGJ0bkNsYXNzO1xuICBmb3JtRWxlbS5hcHBlbmQoYnRuKTtcblxuICBmb3JtRWxlbS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0VmFsdWVzOiBzdHJpbmdbXSA9IGlucHV0RmllbGRzLm1hcCgoaW5wdXQpID0+IGlucHV0LnZhbHVlKTtcbiAgICBmb3JtU3VibWl0RnVuKC4uLmlucHV0VmFsdWVzKTtcbiAgICBpZiAoY2xlYW5Gb3JtRnVuKSBjbGVhbkZvcm1GdW4oKTtcbiAgfSk7XG4gIHJldHVybiBmb3JtRWxlbTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbkZvcm0oLi4uY2xhc3NOYW1lczogc3RyaW5nW10pOiB2b2lkIHtcbiAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuXG4gICAgaWYgKGlucHV0LnR5cGUgPT09ICdjb2xvcicpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyNmZmZmZmYnO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcbmltcG9ydCB7IHNlbGVjdENhciwgcmVtb3ZlQ2FyLCBzdGFydFN0b3BDYXJFbmdpbmUgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0cyc7XG5pbXBvcnQgdHlwZSB7IENhciwgTGlzdFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IGxpc3RJdGVtID0gKGNhcjogQ2FyLCBjbGFzc05hbWU/OiBzdHJpbmcpOiBIVE1MTElFbGVtZW50ID0+IHtcbiAgY29uc3QgbGk6IEhUTUxMSUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5kYXRhc2V0LmlkID0gYCR7Y2FyLmlkfWA7XG4gIGlmIChjbGFzc05hbWUpIGxpLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgY29uc3QgZGl2OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ2xpQ29udGFpbmVyJztcbiAgbGkuYXBwZW5kKGRpdik7XG4gIGNvbnN0IHVwcGVyUGFydDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdXBwZXJQYXJ0LmNsYXNzTmFtZSA9ICd1cHBlclBhcnRDb250YWluZXInO1xuICBjb25zdCBsb3dlclBhcnQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvd2VyUGFydC5jbGFzc05hbWUgPSAnbG93ZXJQYXJ0Q29udGFpbmVyJztcbiAgZGl2LmFwcGVuZCh1cHBlclBhcnQsIGxvd2VyUGFydCk7XG4gIGNvbnN0IHNlbGVjdENhckJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnc2VsZWN0Jywgb25DbGljazogKCkgPT4gc2VsZWN0Q2FyKGNhcil9KTtcbiAgY29uc3QgcmVtb3ZlQ2FyQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdyZW1vdmUnLCBvbkNsaWNrOiAoKSA9PiByZW1vdmVDYXIoY2FyLmlkKSB9KTtcbiAgY29uc3Qgc3RhcnRFbmdpbmVCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ0EnLCBvbkNsaWNrOiAoKSA9PiBzdGFydFN0b3BDYXJFbmdpbmUoY2FyLmlkLCAnc3RhcnRlZCcpIH0pO1xuICBjb25zdCBzdG9wRW5naW5lQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdCJywgb25DbGljazogKCkgPT4gc3RhcnRTdG9wQ2FyRW5naW5lKGNhci5pZCwgJ3N0b3BwZWQnKSB9KTtcbiAgY29uc3QgY2FyTmFtZTogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjYXJOYW1lLmNsYXNzTmFtZSA9ICdjYXJOYW1lJztcbiAgY2FyTmFtZS50ZXh0Q29udGVudCA9IGNhci5uYW1lO1xuICB1cHBlclBhcnQuYXBwZW5kKHNlbGVjdENhckJ0biwgcmVtb3ZlQ2FyQnRuLCBjYXJOYW1lKTtcbiAgY29uc3QgaW1nQ2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZ0Nhci5pbm5lckhUTUwgPSBgXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGQ9XCJNMjEuNzM5IDEwLjkyMWMtMS4zNDctLjM5LTEuODg1LS41MzgtMy41NTItLjkyMSAwIDAtMi4zNzktMi4zNTktMi44MzItMi44MTYtLjU2OC0uNTcyLTEuMDQzLTEuMTg0LTIuOTQ5LTEuMTg0aC03Ljg5NGMtLjUxMSAwLS43MzYuNTQ3LS4wNyAxLS43NDIuNjAyLTEuNjE5IDEuMzgtMi4yNTggMi4wMjctMS40MzUgMS40NTUtMi4xODQgMi4zODUtMi4xODQgNC4yNTUgMCAxLjc2IDEuMDQyIDMuNzE4IDMuMTc0IDMuNzE4aC4wMWMuNDEzIDEuMTYyIDEuNTEyIDIgMi44MTYgMiAxLjMwNCAwIDIuNDAzLS44MzggMi44MTYtMmg2LjM2N2MuNDEzIDEuMTYyIDEuNTEyIDIgMi44MTYgMnMyLjQwMy0uODM4IDIuODE2LTJoLjY4NWMxLjk5NCAwIDIuNS0xLjc3NiAyLjUtMy4xNjUgMC0yLjA0MS0xLjEyMy0yLjU4NC0yLjI2MS0yLjkxNHptLTE1LjczOSA2LjI3OWMtLjY2MiAwLTEuMi0uNTM4LTEuMi0xLjJzLjUzOC0xLjIgMS4yLTEuMiAxLjIuNTM4IDEuMiAxLjItLjUzOCAxLjItMS4yIDEuMnptMy41NzYtNi4yYy0xLjA3MSAwLTMuNS0uMTA2LTUuMjE5LS43NS41NzgtLjc1Ljk5OC0xLjIyMiAxLjI3LTEuNTM2LjMxOC0uMzY4Ljg3My0uNzE0IDEuNTYxLS43MTRoMi4zODh2M3ptMS0zaDEuODM1Yy44ODIgMCAxLjQyOC40OTMgMi4wMjIgMS4xMDUuNDUyLjQ2NiAxLjczMiAxLjg5NSAxLjczMiAxLjg5NWgtNS41ODh2LTN6bTcuNDI0IDkuMmMtLjY2MiAwLTEuMi0uNTM4LTEuMi0xLjJzLjUzOC0xLjIgMS4yLTEuMiAxLjIuNTM4IDEuMiAxLjItLjUzOCAxLjItMS4yIDEuMnpcIiBmaWxsPSR7Y2FyLmNvbG9yfSBjbGFzcz0nc3ZnQ2FyJy8+XG4gICAgPC9zdmc+XG4gIGA7XG4gIGNvbnN0IGltZ0ZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nRmxhZy5pbm5lckhUTUwgPSBgXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGQ9XCJNNCAyNGgtMnYtMjRoMnYyNHptMTgtMTZsLTE2LTZ2MTJsMTYtNnpcIiBmaWxsPVwiZmYwMDAwXCIvPlxuICAgIDwvc3ZnPlxuICBgO1xuICBsb3dlclBhcnQuYXBwZW5kKHN0YXJ0RW5naW5lQnRuLCBzdG9wRW5naW5lQnRuLCBpbWdDYXIsIGltZ0ZsYWcpO1xuICByZXR1cm4gbGk7XG59XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gKHsgdHlwZSwgbGlzdEl0ZW1zLCBjbGFzc05hbWUgfTogTGlzdFByb3BzKTogSFRNTFVMaXN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IGxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChjbGFzc05hbWUpIGxpc3QuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShsaXN0SXRlbXMpKSB7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGxpc3QuYXBwZW5kKGl0ZW0pO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxpc3RJdGVtcykge1xuICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtcyk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FyTGlzdCA9IChjYXI6IENhciB8IENhcltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNhckxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhckxpc3QnKTtcbiAgaWYgKGNhckxpc3QpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYXIpKSB7XG4gICAgICBjb25zdCBjYXJJdGVtczogSFRNTExJRWxlbWVudFtdID0gY2FyLm1hcCgoaXRlbSkgPT4gbGlzdEl0ZW0oaXRlbSkpO1xuICAgICAgY2FyTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNhckxpc3QuYXBwZW5kKC4uLmNhckl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2FySXRlbSA9IGxpc3RJdGVtKGNhcik7XG4gICAgICBjYXJMaXN0LmFwcGVuZChjYXJJdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJMaXN0SXRlbSA9IChjYXI6IENhcik6IHZvaWQgPT4ge1xuICBjb25zdCBjYXJJdGVtOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2Nhci5pZH0nXWApO1xuICBpZiAoY2FySXRlbSkge1xuICAgIGNvbnN0IG5hbWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLmNhck5hbWUnKTtcbiAgICBpZiAobmFtZSkgbmFtZS50ZXh0Q29udGVudCA9IGNhci5uYW1lO1xuICAgIGNvbnN0IHBhdGg6IFNWR1BhdGhFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLnN2Z0NhcicpO1xuICAgIGlmIChwYXRoKSBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNhci5jb2xvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJGcm9tTGlzdCA9IChpZDogbnVtYmVyKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNhckxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhckxpc3QnKTtcbiAgY29uc3QgY2FySXRlbTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nXWApO1xuICBpZiAoY2FyTGlzdCAmJiBjYXJJdGVtKSBjYXJMaXN0LnJlbW92ZUNoaWxkKGNhckl0ZW0pO1xufTtcbiIsImltcG9ydCB0eXBlIHsgQ2FyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRDYXJzLCBzZXRJZCwgc2V0VG90YWwsIHNldFVwZGF0ZWRDYXIgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FycygpOiB2b2lkIHtcbiAgY29uc3QgcGFnZSA9IGdldFN0YXRlKCdnYXJhZ2VQYWdlJyk7XG4gIGNvbnN0IGxpbWl0ID0gZ2V0U3RhdGUoJ2xpbWl0Q2FycycpO1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fWA7XG4gIGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxDYXI+ID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50JykpO1xuICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldENhcnMoZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIGdldCBjYXJzOiAke2Vycm9yfWApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDYXJzKCk6IHZvaWQge1xuICBjb25zdCBicmFuZHM6IHN0cmluZ1tdID0gWydCTVcnLCAnRmlhdCcsICdGb3JkJywgJ0h5dW5kYWknLCAnS2lhJywgJ0xhbmNpYScsICdPcGVsJywgJ1JlbmF1bHQnLCAnU3V6dWtpJywgJ1ZvbHZvJ107XG4gIGNvbnN0IG1vZGVsczogc3RyaW5nW11bXSA9IFtbJ2lYMicsICdpNScsICc1IFNlcmllcyBHNjAnLCAnWE0gTGFiZWwgUmVkJywgJ1gxIE0zNWkgeERyaXZlJywgJ00yIEc4NycsICczIFNlcmllcyBGYWNlbGlmdCAoRzIwIExDSSknLCAnaTcgTTcwIHhEcml2ZScsICdYNSBMQ0knLCAnWDYgTENJJ10sIFsnVG9wb2xpbm8gRVYnLCAnUGFuZGEgSHlicmlkJywgJzYwMGUnLCAnNTAwZSBBYmFydGgnLCAnNTAwWCBIeWJyaWQnLCAnVGlwbyBDcm9zcycsICdEb2JsbycsICdVbHlzc2UnLCAnU2N1ZG8nLCAnNTAwIFJFRCBFZGl0aW9uJ10sIFsnRXhwbG9yZXIgRVYnLCAnTXVzdGFuZyBNYWNoLUUgUmFsbHknLCAnTXVzdGFuZyAoUzY1MCknLCAnUmFuZ2VyIFJhcHRvcicsICdGLTE1MCBMaWdodG5pbmcnLCAnVHJhbnNpdCBDdXN0b20nLCAnUHVtYSBTVCBQb3dlcnNoaWZ0JywgJ0Jyb25jbycsICdFLVRvdXJuZW8gQ3VzdG9tJywgJ0ZpZXN0YSBGaW5hbCBFZGl0aW9uJ10sIFsgJ0lvbmlxIDYnLCAnS29uYSBFbGVjdHJpYycsICdTYW50YSBGZScsICdUdWNzb24gSHlicmlkJywgJ0lvbmlxIDUgTicsICdFbGFudHJhIE4nLCAnQmF5b24nLCAnU3RhcmlhJywgJ1ZlbnVlJywgJ0dyYW5kZXVyJ10sIFsnRVY5JywgJ0VWNiBHVCcsICdTcG9ydGFnZSBIeWJyaWQnLCAnTmlybyBFVicsICdTb3JlbnRvJywgJ0szJywgJ1BpY2FudG8nLCAnQ2Fybml2YWwgSGktTGltb3VzaW5lJywgJ1NlbHRvcycsICdUZWxsdXJpZGUnXSwgWydZcHNpbG9uIEh5YnJpZCcsICdZcHNpbG9uIEFsYmVydGEgRmVycmV0dGknLCAnWXBzaWxvbiBFY29DaGljIEdQTCcsICdZcHNpbG9uIFVueWNhJywgJ1lwc2lsb24gSHlicmlkIEVjb0NoaWMnLCAnWXBzaWxvbiBNb25vZ3JhbScsICdZcHNpbG9uIEJsYWNrICYgTm9pcicsICdZcHNpbG9uIEVsZWZhbnRpbm8nLCAnWXBzaWxvbiBNeWEnLCAnWXBzaWxvbiBQbGF0aW51bSddLCBbJ0FzdHJhIEVsZWN0cmljJywgJ01va2thIEVsZWN0cmljJywgJ0NvcnNhIEVsZWN0cmljJywgJ0dyYW5kbGFuZCBHU2UnLCAnQXN0cmEgU3BvcnRzIFRvdXJlcicsICdDb21ibyBFbGVjdHJpYycsICdaYWZpcmEtZSBMaWZlJywgJ1JvY2tzLWUnLCAnTW92YW5vIEVsZWN0cmljJywgJ1ZpdmFyby1lIEh5ZHJvZ2VuJ10sIFsnU2NlbmljIEUtVGVjaCBFbGVjdHJpYycsICc1IEVsZWN0cmljJywgJ0F1c3RyYWwnLCAnUmFmYWxlJywgJ0thbmdvbyBFLVRlY2gnLCAnQ2xpbyBWIEZhY2VsaWZ0JywgJ01lZ2FuZSBFLVRlY2ggRWxlY3RyaWMnLCAnQXJrYW5hJywgJ0NhcHR1ciBFLVRlY2gnLCAnVHdpbmdvIEVsZWN0cmljJ10sIFsnU3dpZnQnLCAnRnJvbngnLCAnSmltbnkgNS1Eb29yJywgJ0dyYW5kIFZpdGFyYScsICdCYWxlbm8nLCAnUy1Dcm9zcyBIeWJyaWQnLCAnVml0YXJhIFN0cm9uZyBIeWJyaWQnLCAnSWduaXMgSHlicmlkJywgJ0Fjcm9zcyBQbHVnLWluIEh5YnJpZCcsICdTd2FjZSddLCBbJ0VYMzAnLCAnRVg5MCcsICdYQzQwIFJlY2hhcmdlIEZhY2VsaWZ0JywgJ0M0MCBSZWNoYXJnZScsICdWNjAgQ3Jvc3MgQ291bnRyeScsICdTNjAnLCAnWEM5MCBQbHVnLWluIEh5YnJpZCcsICdWOTAnLCAnVjYwIFJlY2hhcmdlJywgJ1hDNjAnXV07XG4gIGNvbnN0IHRvdGFsID0gMTAwO1xuICBjb25zdCByYW5nZSA9IDEwO1xuICBjb25zdCBiYXNlID0gMTY7XG4gIGNvbnN0IGxhcmdlc3RIZXhhZGVjaW1hbCA9IDE2Nzc3MjE1O1xuICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZT5bXSA9IFtdO1xuICBsZXQgdG90YWxDcmVhdGVkID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tQnJhbmQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICBjb25zdCByYW5kb21Nb2RlbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yOiBzdHJpbmcgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsYXJnZXN0SGV4YWRlY2ltYWwpLnRvU3RyaW5nKGJhc2UpO1xuICAgIGNvbnN0IG5hbWUgPSBgJHticmFuZHNbcmFuZG9tQnJhbmRdfSAke21vZGVsc1tyYW5kb21CcmFuZF0/LltyYW5kb21Nb2RlbF19YDtcbiAgICBjb25zdCBjYXIgPSB7IG5hbWU6IG5hbWUsIGNvbG9yOiByYW5kb21Db2xvciB9O1xuICAgIGNvbnN0IHByb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gICAgfSk7XG4gICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgfVxuICBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgcmVzdWx0LnZhbHVlLmpzb24oKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdG90YWxDcmVhdGVkICs9IDE7XG4gICAgICAgIHNldENhcnMoZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIGNhciAke2luZGV4ICsgMX1gLCBlcnJvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGEgY2FyICR7aW5kZXggKyAxfTpgLCByZXN1bHQucmVhc29uKTtcbiAgICB9XG4gIH0pKTtcbiAgbGV0IGN1cnJlbnRUb3RhbCA9IGdldFN0YXRlKCd0b3RhbENhcnMnKTtcbiAgY3VycmVudFRvdGFsICs9IHRvdGFsQ3JlYXRlZDtcbiAgc2V0VG90YWwoY3VycmVudFRvdGFsLCAnY2FycycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkYXRhID0ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgY29sb3I6IGNvbG9yLFxuICB9O1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxDYXI+ID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YTogQ2FyKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxDYXJzJyk7XG4gICAgICB0b3RhbCArPSAxO1xuICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICBzZXRDYXJzKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4gYWxlcnQoYEZhaWxlZCB0byBjcmVhdGUgYSBjYXI6ICR7ZXJyb3J9YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZS8ke2lkfWA7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBjb2xvcjogY29sb3IsXG4gIH07XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhciBpcyBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGE6IENhcikgPT4ge1xuICAgICAgc2V0VXBkYXRlZENhcihkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IGFsZXJ0KGBGYWlsZWQgdG8gdXBkYXRlIGEgY2FyOiAke2Vycm9yfWApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhcihpZDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlLyR7aWR9YDtcbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZGVsZXRlIGEgY2FyOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b3RhbCA9IGdldFN0YXRlKCd0b3RhbENhcnMnKTtcbiAgICAgICAgdG90YWwgLT0gMTtcbiAgICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICAgIHNldElkKGlkLCAncmVtb3ZlJyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiBhbGVydChgRmFpbGVkIHRvIGRlbGV0ZSBhIGNhcjogJHtlcnJvcn1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RDYXIoY2FyOiBDYXIpOiB2b2lkIHtcbiAgc2V0SWQoY2FyLmlkLCAnc2VsZWN0Jyk7XG4gIGNvbnN0IGlkOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVJZCcpO1xuICBjb25zdCBuYW1lOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVOYW1lJyk7XG4gIGNvbnN0IGNvbG9yOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVDb2xvcicpO1xuICBpZiAoaWQgJiYgbmFtZSAmJiBjb2xvcikge1xuICAgIGlkLnZhbHVlID0gYCR7Y2FyLmlkfWA7XG4gICAgbmFtZS52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGNvbG9yLnZhbHVlID0gY2FyLmNvbG9yO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3BDYXJFbmdpbmUoaWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpOiB2b2lkIHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmU/aWQ9JHtpZH0mc3RhdHVzPSR7c3RhdHVzfWA7XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBkcml2ZUNhcihpZCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3JvbmcgcGFyYW1ldGVyczogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FyIGlzIG5vdCBmb3VuZDogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiBhbGVydChgRmFpbGVkIHRvIHN0YXJ0L3N0b3AgY2FyJ3MgZW5naW5lOiAke2Vycm9yfWApKTtcbn1cblxuZnVuY3Rpb24gZHJpdmVDYXIoaWQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2VuZ2luZT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgO1xuICBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyBwYXJhbWV0ZXJzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbmdpbmUgcGFyYW1zIGFyZSBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERyaXZlIGluIHByb2dyZXNzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYXIgaGFzIGJlZW4gc3RvcHBlZCBzdWRkZW5seS4gSXQncyBlbmdpbmUgd2FzIGJyb2tlbiBkb3duOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IGFsZXJ0KGBGYWlsZWQgdG8gc3RhcnQgZHJpdmluZyBhIGNhcjogJHtlcnJvcn1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJhY2UoKTogdm9pZCB7XG4gIC8vY29uc3QgY2FycyA9IGdldFN0YXRlKCdjYXJzJyk7XG4gIC8vY29uc3QgbGltaXQgPSBnZXRTdGF0ZSgnbGltaXRDYXJzJyk7XG4gIC8vaWYgKGNhcnMubGVuZ3RoID4gbGltaXQpIHtcbiAgLy8gIGNhcnMuc3BsaWNlKGxpbWl0ICsgMSwgY2Fycy5sZW5ndGggLSBsaW1pdCk7XG4gIC8vfVxuICAvL2NvbnN0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlPltdID0gY2Fycy5tYXAoKGNhcikgPT4gcylcbiAgY29uc29sZS5sb2coJ0ltcGxlbWVudCBzdGFydFJhY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2FycygpOiB2b2lkIHtcbiAgY29uc29sZS5sb2coJ0ltcGxlbWVudCByZXNldENhcnMnKTtcbn1cbiIsImltcG9ydCB7IGdldFN0YXRlLCBzZXRHYXJhZ2VQYWdlLCBzZXRWaWV3LCBzZXRXaW5uZXJzUGFnZSB9IGZyb20gXCIuLi9zdGF0ZS9zdGF0ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZQYWdlKCk6IHZvaWQge1xuICBjb25zdCBuZXh0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGxldCBjdXJyUGFnZTogbnVtYmVyID0gMDtcbiAgY29uc3QgY3VyclZpZXcgPSBnZXRTdGF0ZSgndmlldycpO1xuICBpZiAoY3VyclZpZXcgPT09ICdnYXJhZ2UnKSB7XG4gICAgY3VyclBhZ2UgPSBnZXRTdGF0ZSgnZ2FyYWdlUGFnZScpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJQYWdlID0gZ2V0U3RhdGUoJ3dpbm5lcnNQYWdlJyk7XG4gIH1cbiAgbGV0IHByZXZQYWdlOiBudW1iZXIgPSAwO1xuICBpZiAoY3VyclBhZ2UgPiAxKSB7XG4gICAgcHJldlBhZ2UgPSBjdXJyUGFnZSAtIDE7XG4gICAgY3VyclZpZXcgPT09ICdnYXJhZ2UnID8gc2V0R2FyYWdlUGFnZShwcmV2UGFnZSk6IHNldFdpbm5lcnNQYWdlKHByZXZQYWdlKTtcbiAgICBpZiAobmV4dFBhZ2VCdG4/LmNsYXNzTGlzdC5jb250YWlucygnaW5hY3RpdmUnKSkgbmV4dFBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dFBhZ2UoKTogdm9pZCB7XG4gIGNvbnN0IHByZXZQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZCdXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgY29uc3QgbmV4dFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBsZXQgY3VyclBhZ2U6IG51bWJlciA9IDA7XG4gIGxldCB0b3RhbFBhZ2VzVmlldzogbnVtYmVyID0gMDtcbiAgY29uc3QgY3VyclZpZXcgPSBnZXRTdGF0ZSgndmlldycpO1xuICBpZiAoY3VyclZpZXcgPT09ICdnYXJhZ2UnKSB7XG4gICAgY3VyclBhZ2UgPSBnZXRTdGF0ZSgnZ2FyYWdlUGFnZScpO1xuICAgIHRvdGFsUGFnZXNWaWV3ID0gZ2V0U3RhdGUoJ3RvdGFsUGFnZXNHYXJhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyUGFnZSA9IGdldFN0YXRlKCd3aW5uZXJzUGFnZScpO1xuICAgIHRvdGFsUGFnZXNWaWV3ID0gZ2V0U3RhdGUoJ3RvdGFsUGFnZXNXaW5uZXJzJyk7XG4gIH1cbiAgbGV0IG5leHRQYWdlOiBudW1iZXIgPSAwO1xuICBpZiAoY3VyclBhZ2UgPCB0b3RhbFBhZ2VzVmlldykge1xuICAgIG5leHRQYWdlID0gY3VyclBhZ2UgKyAxO1xuICAgIGN1cnJWaWV3ID09PSAnZ2FyYWdlJyA/IHNldEdhcmFnZVBhZ2UobmV4dFBhZ2UpOiBzZXRXaW5uZXJzUGFnZShuZXh0UGFnZSk7XG4gICAgaWYgKHByZXZQYWdlQnRuPy5jbGFzc0xpc3QuY29udGFpbnMoJ2luYWN0aXZlJykpIHByZXZQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gICAgaWYgKG5leHRQYWdlID09PSB0b3RhbFBhZ2VzVmlldykgbmV4dFBhZ2VCdG4uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0dhcmFnZSgpIHtcbiAgc2V0VmlldygnZ2FyYWdlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb1RvV2lubmVycygpIHtcbiAgc2V0Vmlldygnd2lubmVycycpO1xufSIsImltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyByZW1vdmVDYXJGcm9tTGlzdCwgdXBkYXRlQ2FyTGlzdCwgdXBkYXRlQ2FyTGlzdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0XCI7XG5pbXBvcnQgeyBnZXRDYXJzIH0gZnJvbSBcIi4uL3JlcXVlc3RzL3JlcXVlc3RzXCI7XG5pbXBvcnQgeyByZW5kZXJHYXJhZ2UsIHVwZGF0ZVRvdGFsQ2FycyB9IGZyb20gXCIuLi92aWV3cy9nYXJhZ2VcIjtcbmltcG9ydCB7IHJlbmRlcldpbm5lcnMsIHVwZGF0ZVRvdGFsV2lubmVycyB9IGZyb20gXCIuLi92aWV3cy93aW5uZXJzXCI7XG5cbmNvbnN0IHN0YXRlOiBBcHBTdGF0ZSA9IHtcbiAgdmlldzogJ2dhcmFnZScsXG4gIGNhcnM6IFtdLFxuICB3aW5uZXJzOiBbXSxcbiAgZ2FyYWdlUGFnZTogMSxcbiAgd2lubmVyc1BhZ2U6IDEsXG4gIHRvdGFsQ2FyczogMCxcbiAgdG90YWxXaW5uZXJzOiAwLFxuICB0b3RhbFBhZ2VzR2FyYWdlOiAwLFxuICB0b3RhbFBhZ2VzV2lubmVyczogMCxcbiAgbGltaXRDYXJzOiA3LFxuICBsaW1pdFdpbm5lcnM6IDEwLFxuICBzZWxlY3RJZDogbnVsbCxcbiAgcmVtb3ZlSWQ6IG51bGwsXG4gIHNvcnRpbmdPcmRlcjogJ2FzYycsXG4gIHNvcnRCeTogJ3RpbWUnLFxuICBnZXRTdGF0ZShwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXNbcHJvcF07XG4gIH0sXG4gIHNldFZpZXcodmlldykge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgaWYgKHRoaXMudmlldyA9PT0gJ2dhcmFnZScpIHtcbiAgICAgIHJlbmRlckdhcmFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJXaW5uZXJzKCk7XG4gICAgfVxuICB9LFxuICBzZXRDYXJzKGNhcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNhcikpIHtcbiAgICAgIHRoaXMuY2FycyA9IGNhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJzLnB1c2goY2FyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2Fycy5sZW5ndGggPD0gdGhpcy5saW1pdENhcnMpIHtcbiAgICAgIHVwZGF0ZUNhckxpc3QoY2FyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLmdhcmFnZVBhZ2UgKyAxO1xuICAgICAgdGhpcy5zZXRHYXJhZ2VQYWdlKG5leHRQYWdlKTtcbiAgICB9XG4gIH0sXG4gIHNldFVwZGF0ZWRDYXIodXBkYXRlZENhcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJzLmZpbmRJbmRleCgoY2FyKSA9PiBjYXIuaWQgPT09IHVwZGF0ZWRDYXIuaWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuY2Fyc1tpbmRleF0gPSB1cGRhdGVkQ2FyO1xuICAgICAgdXBkYXRlQ2FyTGlzdEl0ZW0odXBkYXRlZENhcik7XG4gICAgfVxuICB9LFxuICBzZXRXaW5uZXJzKHdpbm5lcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHdpbm5lcikpIHtcbiAgICAgIHRoaXMud2lubmVycyA9IHdpbm5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aW5uZXJzLnB1c2god2lubmVyKTtcbiAgICB9XG4gIH0sXG4gIHNldFRvdGFsKHRvdGFsLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICdjYXJzJykge1xuICAgICAgdGhpcy50b3RhbENhcnMgPSB0b3RhbDtcbiAgICAgIHRoaXMuc2V0VG90YWxQYWdlc0dhcmFnZSgpO1xuICAgICAgdXBkYXRlVG90YWxDYXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxXaW5uZXJzID0gdG90YWw7XG4gICAgICB0aGlzLnNldFRvdGFsUGFnZXNXaW5uZXJzKCk7XG4gICAgICB1cGRhdGVUb3RhbFdpbm5lcnMoKTtcbiAgICB9XG4gIH0sXG4gIHNldFRvdGFsUGFnZXNHYXJhZ2UoKSB7XG4gICAgdGhpcy50b3RhbFBhZ2VzR2FyYWdlID0gTWF0aC5jZWlsKHRoaXMudG90YWxDYXJzIC8gdGhpcy5saW1pdENhcnMpO1xuICB9LFxuICBzZXRUb3RhbFBhZ2VzV2lubmVycygpIHtcbiAgICB0aGlzLnRvdGFsUGFnZXNXaW5uZXJzID0gTWF0aC5jZWlsKHRoaXMudG90YWxXaW5uZXJzIC8gdGhpcy5saW1pdFdpbm5lcnMpO1xuICB9LFxuICBzZXRHYXJhZ2VQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLmdhcmFnZVBhZ2UgPSBwYWdlO1xuICAgIGdldENhcnMoKTtcbiAgfSxcbiAgc2V0V2lubmVyc1BhZ2UocGFnZSkge1xuICAgIHRoaXMud2lubmVyc1BhZ2UgPSBwYWdlO1xuICAgIGdldENhcnMoKTtcbiAgfSxcbiAgc2V0SWQoaWQsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0SWQgPSBpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVJZCA9IGlkO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNhcnMuZmluZEluZGV4KChjYXIpID0+IGNhci5pZCA9PT0gdGhpcy5yZW1vdmVJZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY2Fycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZW1vdmVDYXJGcm9tTGlzdCh0aGlzLnJlbW92ZUlkKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNhcnMubGVuZ3RoID09PSAwICYmIHRoaXMuZ2FyYWdlUGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldlBhZ2UgPSB0aGlzLmdhcmFnZVBhZ2UgLSAxO1xuICAgICAgICB0aGlzLnNldEdhcmFnZVBhZ2UocHJldlBhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0U29ydGluZ09yZGVyKG9yZGVyKSB7XG4gICAgdGhpcy5zb3J0aW5nT3JkZXIgPSBvcmRlcjtcbiAgfSxcbiAgc2V0U29ydEJ5KHR5cGUpIHtcbiAgICB0aGlzLnNvcnRCeSA9IHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRlID0gc3RhdGUuZ2V0U3RhdGUuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0VmlldyA9IHN0YXRlLnNldFZpZXcuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0Q2FycyA9IHN0YXRlLnNldENhcnMuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0VXBkYXRlZENhciA9IHN0YXRlLnNldFVwZGF0ZWRDYXIuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0V2lubmVycyA9IHN0YXRlLnNldFdpbm5lcnMuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0VG90YWwgPSBzdGF0ZS5zZXRUb3RhbC5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFBhZ2VzR2FyYWdlID0gc3RhdGUuc2V0VG90YWxQYWdlc0dhcmFnZS5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFBhZ2VzV2lubmVycyA9IHN0YXRlLnNldFRvdGFsUGFnZXNXaW5uZXJzLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldEdhcmFnZVBhZ2UgPSBzdGF0ZS5zZXRHYXJhZ2VQYWdlLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFdpbm5lcnNQYWdlID0gc3RhdGUuc2V0V2lubmVyc1BhZ2UuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0SWQgPSBzdGF0ZS5zZXRJZC5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRTb3J0aW5nT3JkZXIgPSBzdGF0ZS5zZXRTb3J0aW5nT3JkZXIuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0U29ydEJ5ID0gc3RhdGUuc2V0U29ydEJ5LmJpbmQoc3RhdGUpOyIsImltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IGNsZWFuRm9ybSwgaW5wdXRGaWVsZCwgZm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCB7IGNyZWF0ZUNhciwgZ2VuZXJhdGVDYXJzLCBnZXRDYXJzLCByZXNldENhcnMsIHN0YXJ0UmFjZSwgdXBkYXRlQ2FyIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdHMnO1xuaW1wb3J0IHsgbmV4dFBhZ2UsIHByZXZQYWdlIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdvVG9HYXJhZ2UsIGdvVG9XaW5uZXJzIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhcmFnZSgpOiB2b2lkIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IG1haW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBkaXZXaXRoVmlld05hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRpdldpdGhSYWNlQW5kR2VuZXJhdG9yOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWN0aW9uV2l0aEZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBzZWN0aW9uV2l0aExpc3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBkaXZXaXRoUGFnZU5hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvZHkuYXBwZW5kKG1haW4pO1xuICBtYWluLmFwcGVuZChkaXZXaXRoVmlld05hdmlnYXRpb24sIHNlY3Rpb25XaXRoRm9ybSwgc2VjdGlvbldpdGhMaXN0LCBkaXZXaXRoUGFnZU5hdmlnYXRpb24pO1xuICAvLyBDcmVhdGUgYnV0dG9ucyB0byBzd2l0Y2ggdmlld3NcbiAgY29uc3QgZ2FyYWdlQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdnYXJhZ2UnLCBvbkNsaWNrOiBnb1RvR2FyYWdlLCBjbGFzc05hbWU6ICdnYXJhZ2VCdG4nIH0pO1xuICBjb25zdCB3aW5uZXJzQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICd3aW5uZXJzJywgb25DbGljazogZ29Ub1dpbm5lcnMsIGNsYXNzTmFtZTogJ3dpbm5lcnNCdG4nIH0pO1xuICBkaXZXaXRoVmlld05hdmlnYXRpb24uYXBwZW5kKGdhcmFnZUJ0biwgd2lubmVyc0J0bik7XG4gIC8vIENyZWF0ZSBmb3JtIHRvIGNyZWF0ZSBhIGNhclxuICBjb25zdCBpbnB1dEZpZWxkczEgPSBjcmVhdGVDYXJJbnB1dHMoKTtcbiAgY29uc3QgY3JlYXRlQ2FyRm9ybSA9IGZvcm0oeyBmb3JtU3VibWl0RnVuOiBjcmVhdGVDYXIsIGNsZWFuRm9ybUZ1bjogKCkgPT4gY2xlYW5Gb3JtKCdjcmVhdGVOYW1lJywgJ2NyZWF0ZUNvbG9yJyksIGlucHV0RmllbGRzOiBpbnB1dEZpZWxkczEsIGJ0blRleHQ6ICdjcmVhdGUnIH0pO1xuICBzZWN0aW9uV2l0aEZvcm0uYXBwZW5kKGNyZWF0ZUNhckZvcm0pO1xuICAvLyBDcmVhdGUgZm9ybSB0byB1cGRhdGUgYSBjYXJcbiAgY29uc3QgaW5wdXRGaWVsZHMyID0gdXBkYXRlQ2FySW5wdXRzKCk7XG4gIGNvbnN0IHVwZGF0ZUNhckZvcm0gPSBmb3JtKHsgZm9ybVN1Ym1pdEZ1bjogdXBkYXRlQ2FyLCBjbGVhbkZvcm1GdW46ICgpID0+IGNsZWFuRm9ybSgndXBkYXRlTmFtZScsICd1cGRhdGVDb2xvcicpLCBpbnB1dEZpZWxkczogaW5wdXRGaWVsZHMyLCBidG5UZXh0OiAndXBkYXRlJyB9KTtcbiAgc2VjdGlvbldpdGhGb3JtLmFwcGVuZCh1cGRhdGVDYXJGb3JtKTtcbiAgLy8gQ3JlYXRlIHJhY2UsIHJlc2V0LCBnZW5lcmF0ZSBjYXJzIGJ1dHRvblxuICBjb25zdCByYWNlQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdyYWNlJywgb25DbGljazogc3RhcnRSYWNlLCBjbGFzc05hbWU6ICdyYWNlQnRuJyB9KTtcbiAgY29uc3QgcmVzZXRCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3Jlc2V0Jywgb25DbGljazogcmVzZXRDYXJzLCBjbGFzc05hbWU6ICdyZXNldEJ0bicgfSk7XG4gIGNvbnN0IGdlbmVyYXRlQ2Fyc0J0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnZ2VuZXJhdGUnLCBvbkNsaWNrOiBnZW5lcmF0ZUNhcnMsIGNsYXNzTmFtZTogJ2dlbmVyYXRlQnRuJyB9KTtcbiAgZGl2V2l0aFJhY2VBbmRHZW5lcmF0b3IuYXBwZW5kKHJhY2VCdG4sIHJlc2V0QnRuLCBnZW5lcmF0ZUNhcnNCdG4pO1xuICBzZWN0aW9uV2l0aEZvcm0uYXBwZW5kKGRpdldpdGhSYWNlQW5kR2VuZXJhdG9yKTtcbiAgLy8gQ3JlYXRlIGxpc3RcbiAgY29uc3QgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdHYXJhZ2UnO1xuICBjb25zdCBwYXJhZ3JhcGg6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgVG90YWwgY2FyczogJHtnZXRTdGF0ZSgndG90YWxDYXJzJyl9YDtcbiAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9ICd0b3RhbENhcnMnO1xuICBjb25zdCBteUNhcnNMaXN0ID0gbGlzdCh7IHR5cGU6ICd1bCcsIGNsYXNzTmFtZTogJ2Nhckxpc3QnIH0pO1xuICBzZWN0aW9uV2l0aExpc3QuYXBwZW5kKGhlYWRpbmcsIHBhcmFncmFwaCwgbXlDYXJzTGlzdCk7XG4gIC8vIENyZWF0ZSBidXR0b25zIHRvIG5hdmlnYXRlIGJldHdlZW4gbGlzdCBwYWdlc1xuICBjb25zdCBwcmV2QnV0dG9uID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdwcmV2Jywgb25DbGljazogcHJldlBhZ2UsIGNsYXNzTmFtZTogJ3ByZXZCdXR0b24nIH0pO1xuICBjb25zdCBuZXh0QnV0dG9uID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICduZXh0Jywgb25DbGljazogbmV4dFBhZ2UsIGNsYXNzTmFtZTogJ25leHRCdXR0b24nIH0pO1xuICBkaXZXaXRoUGFnZU5hdmlnYXRpb24uYXBwZW5kKHByZXZCdXR0b24sIG5leHRCdXR0b24pO1xuICAvLyBGaWxsIHRoZSBjYXIgbGlzdFxuICBnZXRDYXJzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbENhcnMoKTogdm9pZCB7XG4gIGNvbnN0IHRvdGFsQ2FyczogSFRNTFBhcmFncmFwaEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsQ2FycycpO1xuICBpZiAodG90YWxDYXJzKSB0b3RhbENhcnMudGV4dENvbnRlbnQgPSBgVG90YWwgY2FyczogJHtnZXRTdGF0ZSgndG90YWxDYXJzJyl9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FySW5wdXRzKCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XG4gIGNvbnN0IGlucHV0RmllbGRzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXTtcbiAgY29uc3QgdGV4dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICd0ZXh0JywgY2xhc3NOYW1lOiAnY3JlYXRlTmFtZScgfSk7XG4gIGNvbnN0IGNvbG9yRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAnY3JlYXRlQ29sb3InIH0pO1xuICBpbnB1dEZpZWxkcy5wdXNoKHRleHRGaWVsZCwgY29sb3JGaWVsZCk7XG4gIHJldHVybiBpbnB1dEZpZWxkcztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FySW5wdXRzKCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XG4gIGNvbnN0IGlucHV0RmllbGRzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXTtcbiAgY29uc3QgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ2hpZGRlbicsIGNsYXNzTmFtZTogJ3VwZGF0ZUlkJyB9KTtcbiAgY29uc3QgdGV4dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICd0ZXh0JywgY2xhc3NOYW1lOiAndXBkYXRlTmFtZScgfSk7XG4gIGNvbnN0IGNvbG9yRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAndXBkYXRlQ29sb3InIH0pO1xuICBpbnB1dEZpZWxkcy5wdXNoKGhpZGRlbklucHV0LCB0ZXh0RmllbGQsIGNvbG9yRmllbGQpO1xuICByZXR1cm4gaW5wdXRGaWVsZHM7XG59XG4iLCJpbXBvcnQgeyBidXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IG5leHRQYWdlLCBwcmV2UGFnZSB9IGZyb20gXCIuLi9yb3V0aW5nL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGdvVG9HYXJhZ2UsIGdvVG9XaW5uZXJzIH0gZnJvbSBcIi4uL3JvdXRpbmcvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvc3RhdGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaW5uZXJzKCk6IHZvaWQge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgbWFpbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGRpdldpdGhWaWV3TmF2aWdhdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VjdGlvbldpdGhUYWJsZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGRpdldpdGhQYWdlTmF2aWdhdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9keS5hcHBlbmQobWFpbik7XG4gIG1haW4uYXBwZW5kKGRpdldpdGhWaWV3TmF2aWdhdGlvbiwgc2VjdGlvbldpdGhUYWJsZSwgZGl2V2l0aFBhZ2VOYXZpZ2F0aW9uKTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gc3dpdGNoIHZpZXdzXG4gIGNvbnN0IGdhcmFnZUJ0biA9IGJ1dHRvbih7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICdnYXJhZ2UnLCBvbkNsaWNrOiBnb1RvR2FyYWdlLCBjbGFzc05hbWU6ICdnYXJhZ2VCdG4nfSk7XG4gIGNvbnN0IHdpbm5lcnNCdG4gPSBidXR0b24oe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnd2lubmVycycsIG9uQ2xpY2s6IGdvVG9XaW5uZXJzLCBjbGFzc05hbWU6ICd3aW5uZXJzQnRuJ30pO1xuICBkaXZXaXRoVmlld05hdmlnYXRpb24uYXBwZW5kKGdhcmFnZUJ0biwgd2lubmVyc0J0bik7XG4gIC8vIENyZWF0ZSB0YWJsZVxuICBjb25zdCBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbm5lcnMnO1xuICBjb25zdCBwYXJhZ3JhcGg6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgVG90YWwgd2lubmVyczogJHtnZXRTdGF0ZSgndG90YWxXaW5uZXJzJyl9YDtcbiAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9ICd0b3RhbFdpbm5lcnMnO1xuICAvLyBDcmVhdGUgYnV0dG9ucyB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGxpc3QgcGFnZXNcbiAgY29uc3QgcHJldkJ1dHRvbiA9IGJ1dHRvbih7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICdwcmV2Jywgb25DbGljazogcHJldlBhZ2UsIGNsYXNzTmFtZTogJ3ByZXZCdXR0b24nfSk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBidXR0b24oe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnbmV4dCcsIG9uQ2xpY2s6IG5leHRQYWdlLCBjbGFzc05hbWU6ICduZXh0QnV0dG9uJ30pO1xuICBkaXZXaXRoUGFnZU5hdmlnYXRpb24uYXBwZW5kKHByZXZCdXR0b24sIG5leHRCdXR0b24pO1xuICAvLyBGaWxsIHRoZSB0YWJsZVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbFdpbm5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgdG90YWxXaW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsV2lubmVycycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuICAgIHRvdGFsV2lubmVycy50ZXh0Q29udGVudCA9IGBUb3RhbCB3aW5uZXJzOiAke2dldFN0YXRlKCd0b3RhbFdpbm5lcnMnKX1gO1xuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZW5kZXJHYXJhZ2UgfSBmcm9tICcuL3ZpZXdzL2dhcmFnZSc7XG5yZW5kZXJHYXJhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==