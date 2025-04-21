/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

ul li {
  list-style: none;
}
.carList {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
}
.liContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: dashed black 2px;
}

.upperPartContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.lowerPartContainer {
  display: flex;
  flex-direction: row;
}

.group {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
}

.imgFlag {
  width: 10%;
}





`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ","sourcesContent":["main {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nul li {\n  list-style: none;\n}\n.carList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 0;\n}\n.liContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: dashed black 2px;\n}\n\n.upperPartContainer {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.lowerPartContainer {\n  display: flex;\n  flex-direction: row;\n}\n\n.group {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 90%;\n}\n\n.imgFlag {\n  width: 10%;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
    const group = document.createElement('div');
    group.className = 'group';
    const imgCar = document.createElement('div');
    imgCar.className = 'imgCar';
    imgCar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
    const imgFlag = document.createElement('div');
    imgFlag.className = 'imgFlag';
    imgFlag.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 24h-2v-24h2v24zm18-16l-16-6v12l16-6z" fill="#ff0000"/>
    </svg>
  `;
    group.append(startEngineBtn, stopEngineBtn, imgCar);
    lowerPart.append(group, imgFlag);
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
/* harmony import */ var _views_view_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/view-manager */ "./src/views/view-manager.ts");


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
    (0,_views_view_manager__WEBPACK_IMPORTED_MODULE_1__.renderView)();
}
function goToWinners() {
    (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setView)('winners');
    (0,_views_view_manager__WEBPACK_IMPORTED_MODULE_1__.renderView)();
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
        (0,_views_garage__WEBPACK_IMPORTED_MODULE_2__.updateCurrPage)('garagePage');
        (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.getCars)();
    },
    setWinnersPage(page) {
        this.winnersPage = page;
        (0,_views_garage__WEBPACK_IMPORTED_MODULE_2__.updateCurrPage)('winnersPage');
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/views/garage.ts":
/*!*****************************!*\
  !*** ./src/views/garage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGarage: () => (/* binding */ renderGarage),
/* harmony export */   updateCurrPage: () => (/* binding */ updateCurrPage),
/* harmony export */   updateTotalCars: () => (/* binding */ updateTotalCars)
/* harmony export */ });
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button */ "./src/components/button.ts");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/form */ "./src/components/form.ts");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/list */ "./src/components/list.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _routing_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routing/navigation */ "./src/routing/navigation.ts");
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");







function renderGarage() {
    const main = document.createElement('main');
    const divWithViewNavigation = document.createElement('div');
    const divWithRaceAndGenerator = document.createElement('div');
    const sectionWithForm = document.createElement('section');
    const sectionWithList = document.createElement('section');
    const divWithPageNavigation = document.createElement('div');
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
    const totalCars = document.createElement('p');
    const currentPage = document.createElement('p');
    totalCars.textContent = `Total cars: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_5__.getState)('totalCars')}`;
    totalCars.className = 'totalCars';
    currentPage.textContent = `Current page: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_5__.getState)('garagePage')}`;
    currentPage.className = 'currentPage';
    const myCarsList = (0,_components_list__WEBPACK_IMPORTED_MODULE_2__.list)({ type: 'ul', className: 'carList' });
    sectionWithList.append(heading, totalCars, currentPage, myCarsList);
    // Create buttons to navigate between list pages
    const prevButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'prev', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_4__.prevPage, className: 'prevButton' });
    const nextButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'next', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_4__.nextPage, className: 'nextButton' });
    divWithPageNavigation.append(prevButton, nextButton);
    // Fill the car list
    (0,_requests_requests__WEBPACK_IMPORTED_MODULE_3__.getCars)();
    return main;
}
function updateTotalCars() {
    const totalCars = document.querySelector('.totalCars');
    if (totalCars)
        totalCars.textContent = `Total cars: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_5__.getState)('totalCars')}`;
}
function updateCurrPage(viewPage) {
    const currPage = document.querySelector('.currentPage');
    if (currPage)
        currPage.textContent = `Current page: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_5__.getState)(`${viewPage}`)}`;
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

/***/ "./src/views/view-manager.ts":
/*!***********************************!*\
  !*** ./src/views/view-manager.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderView: () => (/* binding */ renderView)
/* harmony export */ });
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");
/* harmony import */ var _garage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./garage */ "./src/views/garage.ts");
/* harmony import */ var _winners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winners */ "./src/views/winners.ts");



function renderView() {
    const view = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('view');
    const body = document.body;
    body.innerHTML = '';
    let content;
    if (view === 'garage') {
        content = (0,_garage__WEBPACK_IMPORTED_MODULE_1__.renderGarage)();
    }
    else {
        content = (0,_winners__WEBPACK_IMPORTED_MODULE_2__.renderWinners)();
    }
    body.append(content);
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
    const main = document.createElement('main');
    const divWithViewNavigation = document.createElement('div');
    const sectionWithTable = document.createElement('section');
    const divWithPageNavigation = document.createElement('div');
    main.append(divWithViewNavigation, sectionWithTable, divWithPageNavigation);
    // Create buttons to switch views
    const garageBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'garage', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.goToGarage, className: 'garageBtn' });
    const winnersBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'winners', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.goToWinners, className: 'winnersBtn' });
    divWithViewNavigation.append(garageBtn, winnersBtn);
    // Create table
    const heading = document.createElement('h1');
    heading.textContent = 'Winners';
    const totalWinners = document.createElement('p');
    const currentPage = document.createElement('p');
    totalWinners.textContent = `Total winners: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_2__.getState)('totalWinners')}`;
    totalWinners.className = 'totalWinners';
    currentPage.textContent = `Current page: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_2__.getState)('winnersPage')}`;
    currentPage.className = 'currentPage';
    sectionWithTable.append(heading, totalWinners, currentPage);
    // Create buttons to navigate between list pages
    const prevButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'prev', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.prevPage, className: 'prevButton' });
    const nextButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'next', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_1__.nextPage, className: 'nextButton' });
    divWithPageNavigation.append(prevButton, nextButton);
    // Fill the table
    return main;
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _views_view_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/view-manager */ "./src/views/view-manager.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


document.addEventListener('DOMContentLoaded', () => {
    (0,_views_view_manager__WEBPACK_IMPORTED_MODULE_0__.renderView)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7OztVQ3BDSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUM1QjtBQUV0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2pELCtEQUFVLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZXF1ZXN0cy9yZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JvdXRpbmcvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0YXRlL3N0YXRlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3ZpZXctbWFuYWdlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY2FyTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmxpQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgYmxhY2sgMnB4O1xufVxuXG4udXBwZXJQYXJ0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubG93ZXJQYXJ0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogOTAlO1xufVxuXG4uaW1nRmxhZyB7XG4gIHdpZHRoOiAxMCU7XG59XG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbnVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5jYXJMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubGlDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiBkYXNoZWQgYmxhY2sgMnB4O1xcbn1cXG5cXG4udXBwZXJQYXJ0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubG93ZXJQYXJ0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaW1nRmxhZyB7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHR5cGUgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBidXR0b24gPSAoeyB0eXBlID0gJ2J1dHRvbicsIHRleHQgPSAnJywgb25DbGljaywgY2xhc3NOYW1lID0gJycgfTogQnV0dG9uUHJvcHMpOiBIVE1MQnV0dG9uRWxlbWVudCA9PiB7XG4gIGNvbnN0IGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgYnRuLnR5cGUgPSB0eXBlO1xuICBidG4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBpZiAob25DbGljaykge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYnRuO1xufTtcbiIsImltcG9ydCB0eXBlIHsgRm9ybVByb3BzLCBJbnB1dFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcblxuZXhwb3J0IGNvbnN0IGlucHV0RmllbGQgPSAoeyB0eXBlLCB2YWx1ZSwgaWQsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCwgY2xhc3NOYW1lIH06IElucHV0UHJvcHMpOiBIVE1MSW5wdXRFbGVtZW50ID0+IHtcbiAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaWYgKHBsYWNlaG9sZGVyKSBpbnB1dC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICBpZiAodmFsdWUpIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIGlmIChpZCkgaW5wdXQuaWQgPSBpZDtcbiAgaWYgKGRpc2FibGVkKSBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICBpZiAoY2xhc3NOYW1lKSBpbnB1dC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtID0gKHtcbiAgZm9ybUNsYXNzLFxuICBmb3JtU3VibWl0RnVuLFxuICBjbGVhbkZvcm1GdW4sXG4gIGlucHV0RmllbGRzLFxuICBidG5DbGFzcyxcbiAgYnRuVGV4dCxcbn06IEZvcm1Qcm9wcyk6IEhUTUxGb3JtRWxlbWVudCA9PiB7XG4gIGNvbnN0IGZvcm1FbGVtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGlmIChmb3JtQ2xhc3MpIGZvcm1FbGVtLmNsYXNzTmFtZSA9IGZvcm1DbGFzcztcblxuICBpbnB1dEZpZWxkcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGZvcm1FbGVtLmFwcGVuZChpbnB1dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0biA9IGJ1dHRvbih7IHR5cGU6ICdzdWJtaXQnLCB0ZXh0OiBidG5UZXh0IH0pO1xuICBpZiAoYnRuQ2xhc3MpIGJ0bi5jbGFzc05hbWUgPSBidG5DbGFzcztcbiAgZm9ybUVsZW0uYXBwZW5kKGJ0bik7XG5cbiAgZm9ybUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlczogc3RyaW5nW10gPSBpbnB1dEZpZWxkcy5tYXAoKGlucHV0KSA9PiBpbnB1dC52YWx1ZSk7XG4gICAgZm9ybVN1Ym1pdEZ1biguLi5pbnB1dFZhbHVlcyk7XG4gICAgaWYgKGNsZWFuRm9ybUZ1bikgY2xlYW5Gb3JtRnVuKCk7XG4gIH0pO1xuICByZXR1cm4gZm9ybUVsZW07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Gb3JtKC4uLmNsYXNzTmFtZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y2xhc3NOYW1lfWApO1xuICAgIGlmICghaW5wdXQpIHJldHVybjtcblxuICAgIGlmIChpbnB1dC50eXBlID09PSAnY29sb3InKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcjZmZmZmZmJztcbiAgICB9IGVsc2UgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBidXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBzZWxlY3RDYXIsIHJlbW92ZUNhciwgc3RhcnRTdG9wQ2FyRW5naW5lIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdHMnO1xuaW1wb3J0IHR5cGUgeyBDYXIsIExpc3RQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjb25zdCBsaXN0SXRlbSA9IChjYXI6IENhciwgY2xhc3NOYW1lPzogc3RyaW5nKTogSFRNTExJRWxlbWVudCA9PiB7XG4gIGNvbnN0IGxpOiBIVE1MTElFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuZGF0YXNldC5pZCA9IGAke2Nhci5pZH1gO1xuICBpZiAoY2xhc3NOYW1lKSBsaS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGNvbnN0IGRpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9ICdsaUNvbnRhaW5lcic7XG4gIGxpLmFwcGVuZChkaXYpO1xuICBjb25zdCB1cHBlclBhcnQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVwcGVyUGFydC5jbGFzc05hbWUgPSAndXBwZXJQYXJ0Q29udGFpbmVyJztcbiAgY29uc3QgbG93ZXJQYXJ0OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb3dlclBhcnQuY2xhc3NOYW1lID0gJ2xvd2VyUGFydENvbnRhaW5lcic7XG4gIGRpdi5hcHBlbmQodXBwZXJQYXJ0LCBsb3dlclBhcnQpO1xuICBjb25zdCBzZWxlY3RDYXJCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3NlbGVjdCcsIG9uQ2xpY2s6ICgpID0+IHNlbGVjdENhcihjYXIpfSk7XG4gIGNvbnN0IHJlbW92ZUNhckJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAncmVtb3ZlJywgb25DbGljazogKCkgPT4gcmVtb3ZlQ2FyKGNhci5pZCkgfSk7XG4gIGNvbnN0IHN0YXJ0RW5naW5lQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdBJywgb25DbGljazogKCkgPT4gc3RhcnRTdG9wQ2FyRW5naW5lKGNhci5pZCwgJ3N0YXJ0ZWQnKSB9KTtcbiAgY29uc3Qgc3RvcEVuZ2luZUJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnQicsIG9uQ2xpY2s6ICgpID0+IHN0YXJ0U3RvcENhckVuZ2luZShjYXIuaWQsICdzdG9wcGVkJykgfSk7XG4gIGNvbnN0IGNhck5hbWU6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2FyTmFtZS5jbGFzc05hbWUgPSAnY2FyTmFtZSc7XG4gIGNhck5hbWUudGV4dENvbnRlbnQgPSBjYXIubmFtZTtcbiAgdXBwZXJQYXJ0LmFwcGVuZChzZWxlY3RDYXJCdG4sIHJlbW92ZUNhckJ0biwgY2FyTmFtZSk7XG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyb3VwLmNsYXNzTmFtZSA9ICdncm91cCc7XG4gIGNvbnN0IGltZ0NhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWdDYXIuY2xhc3NOYW1lID0gJ2ltZ0Nhcic7XG4gIGltZ0Nhci5pbm5lckhUTUwgPSBgXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxwYXRoIGQ9XCJNMjEuNzM5IDEwLjkyMWMtMS4zNDctLjM5LTEuODg1LS41MzgtMy41NTItLjkyMSAwIDAtMi4zNzktMi4zNTktMi44MzItMi44MTYtLjU2OC0uNTcyLTEuMDQzLTEuMTg0LTIuOTQ5LTEuMTg0aC03Ljg5NGMtLjUxMSAwLS43MzYuNTQ3LS4wNyAxLS43NDIuNjAyLTEuNjE5IDEuMzgtMi4yNTggMi4wMjctMS40MzUgMS40NTUtMi4xODQgMi4zODUtMi4xODQgNC4yNTUgMCAxLjc2IDEuMDQyIDMuNzE4IDMuMTc0IDMuNzE4aC4wMWMuNDEzIDEuMTYyIDEuNTEyIDIgMi44MTYgMiAxLjMwNCAwIDIuNDAzLS44MzggMi44MTYtMmg2LjM2N2MuNDEzIDEuMTYyIDEuNTEyIDIgMi44MTYgMnMyLjQwMy0uODM4IDIuODE2LTJoLjY4NWMxLjk5NCAwIDIuNS0xLjc3NiAyLjUtMy4xNjUgMC0yLjA0MS0xLjEyMy0yLjU4NC0yLjI2MS0yLjkxNHptLTE1LjczOSA2LjI3OWMtLjY2MiAwLTEuMi0uNTM4LTEuMi0xLjJzLjUzOC0xLjIgMS4yLTEuMiAxLjIuNTM4IDEuMiAxLjItLjUzOCAxLjItMS4yIDEuMnptMy41NzYtNi4yYy0xLjA3MSAwLTMuNS0uMTA2LTUuMjE5LS43NS41NzgtLjc1Ljk5OC0xLjIyMiAxLjI3LTEuNTM2LjMxOC0uMzY4Ljg3My0uNzE0IDEuNTYxLS43MTRoMi4zODh2M3ptMS0zaDEuODM1Yy44ODIgMCAxLjQyOC40OTMgMi4wMjIgMS4xMDUuNDUyLjQ2NiAxLjczMiAxLjg5NSAxLjczMiAxLjg5NWgtNS41ODh2LTN6bTcuNDI0IDkuMmMtLjY2MiAwLTEuMi0uNTM4LTEuMi0xLjJzLjUzOC0xLjIgMS4yLTEuMiAxLjIuNTM4IDEuMiAxLjItLjUzOCAxLjItMS4yIDEuMnpcIiBmaWxsPSR7Y2FyLmNvbG9yfSBjbGFzcz0nc3ZnQ2FyJy8+XG4gICAgPC9zdmc+XG4gIGA7XG4gIGNvbnN0IGltZ0ZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nRmxhZy5jbGFzc05hbWUgPSAnaW1nRmxhZyc7XG4gIGltZ0ZsYWcuaW5uZXJIVE1MID0gYFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBkPVwiTTQgMjRoLTJ2LTI0aDJ2MjR6bTE4LTE2bC0xNi02djEybDE2LTZ6XCIgZmlsbD1cIiNmZjAwMDBcIi8+XG4gICAgPC9zdmc+XG4gIGA7XG4gIGdyb3VwLmFwcGVuZChzdGFydEVuZ2luZUJ0biwgc3RvcEVuZ2luZUJ0biwgaW1nQ2FyKTtcbiAgbG93ZXJQYXJ0LmFwcGVuZChncm91cCwgaW1nRmxhZyk7XG4gIHJldHVybiBsaTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gKHsgdHlwZSwgbGlzdEl0ZW1zLCBjbGFzc05hbWUgfTogTGlzdFByb3BzKTogSFRNTFVMaXN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IGxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChjbGFzc05hbWUpIGxpc3QuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShsaXN0SXRlbXMpKSB7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGxpc3QuYXBwZW5kKGl0ZW0pO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxpc3RJdGVtcykge1xuICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtcyk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FyTGlzdCA9IChjYXI6IENhciB8IENhcltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNhckxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhckxpc3QnKTtcbiAgaWYgKGNhckxpc3QpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYXIpKSB7XG4gICAgICBjb25zdCBjYXJJdGVtczogSFRNTExJRWxlbWVudFtdID0gY2FyLm1hcCgoaXRlbSkgPT4gbGlzdEl0ZW0oaXRlbSkpO1xuICAgICAgY2FyTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNhckxpc3QuYXBwZW5kKC4uLmNhckl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2FySXRlbSA9IGxpc3RJdGVtKGNhcik7XG4gICAgICBjYXJMaXN0LmFwcGVuZChjYXJJdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJMaXN0SXRlbSA9IChjYXI6IENhcik6IHZvaWQgPT4ge1xuICBjb25zdCBjYXJJdGVtOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2Nhci5pZH0nXWApO1xuICBpZiAoY2FySXRlbSkge1xuICAgIGNvbnN0IG5hbWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLmNhck5hbWUnKTtcbiAgICBpZiAobmFtZSkgbmFtZS50ZXh0Q29udGVudCA9IGNhci5uYW1lO1xuICAgIGNvbnN0IHBhdGg6IFNWR1BhdGhFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLnN2Z0NhcicpO1xuICAgIGlmIChwYXRoKSBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNhci5jb2xvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJGcm9tTGlzdCA9IChpZDogbnVtYmVyKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNhckxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhckxpc3QnKTtcbiAgY29uc3QgY2FySXRlbTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nXWApO1xuICBpZiAoY2FyTGlzdCAmJiBjYXJJdGVtKSBjYXJMaXN0LnJlbW92ZUNoaWxkKGNhckl0ZW0pO1xufTtcbiIsImltcG9ydCB0eXBlIHsgQ2FyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldFN0YXRlLCBzZXRDYXJzLCBzZXRJZCwgc2V0VG90YWwsIHNldFVwZGF0ZWRDYXIgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FycygpOiB2b2lkIHtcbiAgY29uc3QgcGFnZSA9IGdldFN0YXRlKCdnYXJhZ2VQYWdlJyk7XG4gIGNvbnN0IGxpbWl0ID0gZ2V0U3RhdGUoJ2xpbWl0Q2FycycpO1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fWA7XG4gIGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxDYXI+ID0+IHtcbiAgICAgIGNvbnN0IHRvdGFsID0gTnVtYmVyKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLVRvdGFsLUNvdW50JykpO1xuICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHNldENhcnMoZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIGdldCBjYXJzOiAke2Vycm9yfWApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDYXJzKCk6IHZvaWQge1xuICBjb25zdCBicmFuZHM6IHN0cmluZ1tdID0gWydCTVcnLCAnRmlhdCcsICdGb3JkJywgJ0h5dW5kYWknLCAnS2lhJywgJ0xhbmNpYScsICdPcGVsJywgJ1JlbmF1bHQnLCAnU3V6dWtpJywgJ1ZvbHZvJ107XG4gIGNvbnN0IG1vZGVsczogc3RyaW5nW11bXSA9IFtbJ2lYMicsICdpNScsICc1IFNlcmllcyBHNjAnLCAnWE0gTGFiZWwgUmVkJywgJ1gxIE0zNWkgeERyaXZlJywgJ00yIEc4NycsICczIFNlcmllcyBGYWNlbGlmdCAoRzIwIExDSSknLCAnaTcgTTcwIHhEcml2ZScsICdYNSBMQ0knLCAnWDYgTENJJ10sIFsnVG9wb2xpbm8gRVYnLCAnUGFuZGEgSHlicmlkJywgJzYwMGUnLCAnNTAwZSBBYmFydGgnLCAnNTAwWCBIeWJyaWQnLCAnVGlwbyBDcm9zcycsICdEb2JsbycsICdVbHlzc2UnLCAnU2N1ZG8nLCAnNTAwIFJFRCBFZGl0aW9uJ10sIFsnRXhwbG9yZXIgRVYnLCAnTXVzdGFuZyBNYWNoLUUgUmFsbHknLCAnTXVzdGFuZyAoUzY1MCknLCAnUmFuZ2VyIFJhcHRvcicsICdGLTE1MCBMaWdodG5pbmcnLCAnVHJhbnNpdCBDdXN0b20nLCAnUHVtYSBTVCBQb3dlcnNoaWZ0JywgJ0Jyb25jbycsICdFLVRvdXJuZW8gQ3VzdG9tJywgJ0ZpZXN0YSBGaW5hbCBFZGl0aW9uJ10sIFsgJ0lvbmlxIDYnLCAnS29uYSBFbGVjdHJpYycsICdTYW50YSBGZScsICdUdWNzb24gSHlicmlkJywgJ0lvbmlxIDUgTicsICdFbGFudHJhIE4nLCAnQmF5b24nLCAnU3RhcmlhJywgJ1ZlbnVlJywgJ0dyYW5kZXVyJ10sIFsnRVY5JywgJ0VWNiBHVCcsICdTcG9ydGFnZSBIeWJyaWQnLCAnTmlybyBFVicsICdTb3JlbnRvJywgJ0szJywgJ1BpY2FudG8nLCAnQ2Fybml2YWwgSGktTGltb3VzaW5lJywgJ1NlbHRvcycsICdUZWxsdXJpZGUnXSwgWydZcHNpbG9uIEh5YnJpZCcsICdZcHNpbG9uIEFsYmVydGEgRmVycmV0dGknLCAnWXBzaWxvbiBFY29DaGljIEdQTCcsICdZcHNpbG9uIFVueWNhJywgJ1lwc2lsb24gSHlicmlkIEVjb0NoaWMnLCAnWXBzaWxvbiBNb25vZ3JhbScsICdZcHNpbG9uIEJsYWNrICYgTm9pcicsICdZcHNpbG9uIEVsZWZhbnRpbm8nLCAnWXBzaWxvbiBNeWEnLCAnWXBzaWxvbiBQbGF0aW51bSddLCBbJ0FzdHJhIEVsZWN0cmljJywgJ01va2thIEVsZWN0cmljJywgJ0NvcnNhIEVsZWN0cmljJywgJ0dyYW5kbGFuZCBHU2UnLCAnQXN0cmEgU3BvcnRzIFRvdXJlcicsICdDb21ibyBFbGVjdHJpYycsICdaYWZpcmEtZSBMaWZlJywgJ1JvY2tzLWUnLCAnTW92YW5vIEVsZWN0cmljJywgJ1ZpdmFyby1lIEh5ZHJvZ2VuJ10sIFsnU2NlbmljIEUtVGVjaCBFbGVjdHJpYycsICc1IEVsZWN0cmljJywgJ0F1c3RyYWwnLCAnUmFmYWxlJywgJ0thbmdvbyBFLVRlY2gnLCAnQ2xpbyBWIEZhY2VsaWZ0JywgJ01lZ2FuZSBFLVRlY2ggRWxlY3RyaWMnLCAnQXJrYW5hJywgJ0NhcHR1ciBFLVRlY2gnLCAnVHdpbmdvIEVsZWN0cmljJ10sIFsnU3dpZnQnLCAnRnJvbngnLCAnSmltbnkgNS1Eb29yJywgJ0dyYW5kIFZpdGFyYScsICdCYWxlbm8nLCAnUy1Dcm9zcyBIeWJyaWQnLCAnVml0YXJhIFN0cm9uZyBIeWJyaWQnLCAnSWduaXMgSHlicmlkJywgJ0Fjcm9zcyBQbHVnLWluIEh5YnJpZCcsICdTd2FjZSddLCBbJ0VYMzAnLCAnRVg5MCcsICdYQzQwIFJlY2hhcmdlIEZhY2VsaWZ0JywgJ0M0MCBSZWNoYXJnZScsICdWNjAgQ3Jvc3MgQ291bnRyeScsICdTNjAnLCAnWEM5MCBQbHVnLWluIEh5YnJpZCcsICdWOTAnLCAnVjYwIFJlY2hhcmdlJywgJ1hDNjAnXV07XG4gIGNvbnN0IHRvdGFsID0gMTAwO1xuICBjb25zdCByYW5nZSA9IDEwO1xuICBjb25zdCBiYXNlID0gMTY7XG4gIGNvbnN0IGxhcmdlc3RIZXhhZGVjaW1hbCA9IDE2Nzc3MjE1O1xuICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZT5bXSA9IFtdO1xuICBsZXQgdG90YWxDcmVhdGVkID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tQnJhbmQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICBjb25zdCByYW5kb21Nb2RlbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yOiBzdHJpbmcgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsYXJnZXN0SGV4YWRlY2ltYWwpLnRvU3RyaW5nKGJhc2UpO1xuICAgIGNvbnN0IG5hbWUgPSBgJHticmFuZHNbcmFuZG9tQnJhbmRdfSAke21vZGVsc1tyYW5kb21CcmFuZF0/LltyYW5kb21Nb2RlbF19YDtcbiAgICBjb25zdCBjYXIgPSB7IG5hbWU6IG5hbWUsIGNvbG9yOiByYW5kb21Db2xvciB9O1xuICAgIGNvbnN0IHByb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gICAgfSk7XG4gICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgfVxuICBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgcmVzdWx0LnZhbHVlLmpzb24oKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdG90YWxDcmVhdGVkICs9IDE7XG4gICAgICAgIHNldENhcnMoZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIGNhciAke2luZGV4ICsgMX1gLCBlcnJvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGEgY2FyICR7aW5kZXggKyAxfTpgLCByZXN1bHQucmVhc29uKTtcbiAgICB9XG4gIH0pKTtcbiAgbGV0IGN1cnJlbnRUb3RhbCA9IGdldFN0YXRlKCd0b3RhbENhcnMnKTtcbiAgY3VycmVudFRvdGFsICs9IHRvdGFsQ3JlYXRlZDtcbiAgc2V0VG90YWwoY3VycmVudFRvdGFsLCAnY2FycycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkYXRhID0ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgY29sb3I6IGNvbG9yLFxuICB9O1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxDYXI+ID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YTogQ2FyKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxDYXJzJyk7XG4gICAgICB0b3RhbCArPSAxO1xuICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICBzZXRDYXJzKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4gYWxlcnQoYEZhaWxlZCB0byBjcmVhdGUgYSBjYXI6ICR7ZXJyb3J9YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FyKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZS8ke2lkfWA7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBjb2xvcjogY29sb3IsXG4gIH07XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhciBpcyBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGE6IENhcikgPT4ge1xuICAgICAgc2V0VXBkYXRlZENhcihkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IGFsZXJ0KGBGYWlsZWQgdG8gdXBkYXRlIGEgY2FyOiAke2Vycm9yfWApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNhcihpZDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlLyR7aWR9YDtcbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZGVsZXRlIGEgY2FyOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b3RhbCA9IGdldFN0YXRlKCd0b3RhbENhcnMnKTtcbiAgICAgICAgdG90YWwgLT0gMTtcbiAgICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICAgIHNldElkKGlkLCAncmVtb3ZlJyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiBhbGVydChgRmFpbGVkIHRvIGRlbGV0ZSBhIGNhcjogJHtlcnJvcn1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RDYXIoY2FyOiBDYXIpOiB2b2lkIHtcbiAgc2V0SWQoY2FyLmlkLCAnc2VsZWN0Jyk7XG4gIGNvbnN0IGlkOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVJZCcpO1xuICBjb25zdCBuYW1lOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVOYW1lJyk7XG4gIGNvbnN0IGNvbG9yOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVDb2xvcicpO1xuICBpZiAoaWQgJiYgbmFtZSAmJiBjb2xvcikge1xuICAgIGlkLnZhbHVlID0gYCR7Y2FyLmlkfWA7XG4gICAgbmFtZS52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGNvbG9yLnZhbHVlID0gY2FyLmNvbG9yO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3BDYXJFbmdpbmUoaWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpOiB2b2lkIHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmU/aWQ9JHtpZH0mc3RhdHVzPSR7c3RhdHVzfWA7XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBkcml2ZUNhcihpZCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3JvbmcgcGFyYW1ldGVyczogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FyIGlzIG5vdCBmb3VuZDogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiBhbGVydChgRmFpbGVkIHRvIHN0YXJ0L3N0b3AgY2FyJ3MgZW5naW5lOiAke2Vycm9yfWApKTtcbn1cblxuZnVuY3Rpb24gZHJpdmVDYXIoaWQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2VuZ2luZT9pZD0ke2lkfSZzdGF0dXM9ZHJpdmVgO1xuICBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyBwYXJhbWV0ZXJzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbmdpbmUgcGFyYW1zIGFyZSBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERyaXZlIGluIHByb2dyZXNzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYXIgaGFzIGJlZW4gc3RvcHBlZCBzdWRkZW5seS4gSXQncyBlbmdpbmUgd2FzIGJyb2tlbiBkb3duOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IGFsZXJ0KGBGYWlsZWQgdG8gc3RhcnQgZHJpdmluZyBhIGNhcjogJHtlcnJvcn1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJhY2UoKTogdm9pZCB7XG4gIC8vY29uc3QgY2FycyA9IGdldFN0YXRlKCdjYXJzJyk7XG4gIC8vY29uc3QgbGltaXQgPSBnZXRTdGF0ZSgnbGltaXRDYXJzJyk7XG4gIC8vaWYgKGNhcnMubGVuZ3RoID4gbGltaXQpIHtcbiAgLy8gIGNhcnMuc3BsaWNlKGxpbWl0ICsgMSwgY2Fycy5sZW5ndGggLSBsaW1pdCk7XG4gIC8vfVxuICAvL2NvbnN0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlPltdID0gY2Fycy5tYXAoKGNhcikgPT4gcylcbiAgY29uc29sZS5sb2coJ0ltcGxlbWVudCBzdGFydFJhY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q2FycygpOiB2b2lkIHtcbiAgY29uc29sZS5sb2coJ0ltcGxlbWVudCByZXNldENhcnMnKTtcbn1cbiIsImltcG9ydCB7IGdldFN0YXRlLCBzZXRHYXJhZ2VQYWdlLCBzZXRWaWV3LCBzZXRXaW5uZXJzUGFnZSB9IGZyb20gXCIuLi9zdGF0ZS9zdGF0ZXNcIjtcbmltcG9ydCB7IHJlbmRlclZpZXcgfSBmcm9tIFwiLi4vdmlld3Mvdmlldy1tYW5hZ2VyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2UGFnZSgpOiB2b2lkIHtcbiAgY29uc3QgbmV4dFBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBsZXQgY3VyclBhZ2U6IG51bWJlciA9IDA7XG4gIGNvbnN0IGN1cnJWaWV3ID0gZ2V0U3RhdGUoJ3ZpZXcnKTtcbiAgaWYgKGN1cnJWaWV3ID09PSAnZ2FyYWdlJykge1xuICAgIGN1cnJQYWdlID0gZ2V0U3RhdGUoJ2dhcmFnZVBhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyUGFnZSA9IGdldFN0YXRlKCd3aW5uZXJzUGFnZScpO1xuICB9XG4gIGxldCBwcmV2UGFnZTogbnVtYmVyID0gMDtcbiAgaWYgKGN1cnJQYWdlID4gMSkge1xuICAgIHByZXZQYWdlID0gY3VyclBhZ2UgLSAxO1xuICAgIGN1cnJWaWV3ID09PSAnZ2FyYWdlJyA/IHNldEdhcmFnZVBhZ2UocHJldlBhZ2UpOiBzZXRXaW5uZXJzUGFnZShwcmV2UGFnZSk7XG4gICAgaWYgKG5leHRQYWdlQnRuPy5jbGFzc0xpc3QuY29udGFpbnMoJ2luYWN0aXZlJykpIG5leHRQYWdlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2luYWN0aXZlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRQYWdlKCk6IHZvaWQge1xuICBjb25zdCBwcmV2UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2QnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgbGV0IGN1cnJQYWdlOiBudW1iZXIgPSAwO1xuICBsZXQgdG90YWxQYWdlc1ZpZXc6IG51bWJlciA9IDA7XG4gIGNvbnN0IGN1cnJWaWV3ID0gZ2V0U3RhdGUoJ3ZpZXcnKTtcbiAgaWYgKGN1cnJWaWV3ID09PSAnZ2FyYWdlJykge1xuICAgIGN1cnJQYWdlID0gZ2V0U3RhdGUoJ2dhcmFnZVBhZ2UnKTtcbiAgICB0b3RhbFBhZ2VzVmlldyA9IGdldFN0YXRlKCd0b3RhbFBhZ2VzR2FyYWdlJyk7XG4gIH0gZWxzZSB7XG4gICAgY3VyclBhZ2UgPSBnZXRTdGF0ZSgnd2lubmVyc1BhZ2UnKTtcbiAgICB0b3RhbFBhZ2VzVmlldyA9IGdldFN0YXRlKCd0b3RhbFBhZ2VzV2lubmVycycpO1xuICB9XG4gIGxldCBuZXh0UGFnZTogbnVtYmVyID0gMDtcbiAgaWYgKGN1cnJQYWdlIDwgdG90YWxQYWdlc1ZpZXcpIHtcbiAgICBuZXh0UGFnZSA9IGN1cnJQYWdlICsgMTtcbiAgICBjdXJyVmlldyA9PT0gJ2dhcmFnZScgPyBzZXRHYXJhZ2VQYWdlKG5leHRQYWdlKTogc2V0V2lubmVyc1BhZ2UobmV4dFBhZ2UpO1xuICAgIGlmIChwcmV2UGFnZUJ0bj8uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpKSBwcmV2UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICAgIGlmIChuZXh0UGFnZSA9PT0gdG90YWxQYWdlc1ZpZXcpIG5leHRQYWdlQnRuLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9HYXJhZ2UoKSB7XG4gIHNldFZpZXcoJ2dhcmFnZScpO1xuICByZW5kZXJWaWV3KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb1RvV2lubmVycygpIHtcbiAgc2V0Vmlldygnd2lubmVycycpO1xuICByZW5kZXJWaWV3KCk7XG59IiwiaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IHJlbW92ZUNhckZyb21MaXN0LCB1cGRhdGVDYXJMaXN0LCB1cGRhdGVDYXJMaXN0SXRlbSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xpc3RcIjtcbmltcG9ydCB7IGdldENhcnMgfSBmcm9tIFwiLi4vcmVxdWVzdHMvcmVxdWVzdHNcIjtcbmltcG9ydCB7IHVwZGF0ZVRvdGFsQ2FycywgdXBkYXRlQ3VyclBhZ2UgfSBmcm9tIFwiLi4vdmlld3MvZ2FyYWdlXCI7XG5pbXBvcnQgeyB1cGRhdGVUb3RhbFdpbm5lcnMgfSBmcm9tIFwiLi4vdmlld3Mvd2lubmVyc1wiO1xuXG5jb25zdCBzdGF0ZTogQXBwU3RhdGUgPSB7XG4gIHZpZXc6ICdnYXJhZ2UnLFxuICBjYXJzOiBbXSxcbiAgd2lubmVyczogW10sXG4gIGdhcmFnZVBhZ2U6IDEsXG4gIHdpbm5lcnNQYWdlOiAxLFxuICB0b3RhbENhcnM6IDAsXG4gIHRvdGFsV2lubmVyczogMCxcbiAgdG90YWxQYWdlc0dhcmFnZTogMCxcbiAgdG90YWxQYWdlc1dpbm5lcnM6IDAsXG4gIGxpbWl0Q2FyczogNyxcbiAgbGltaXRXaW5uZXJzOiAxMCxcbiAgc2VsZWN0SWQ6IG51bGwsXG4gIHJlbW92ZUlkOiBudWxsLFxuICBzb3J0aW5nT3JkZXI6ICdhc2MnLFxuICBzb3J0Qnk6ICd0aW1lJyxcbiAgZ2V0U3RhdGUocHJvcCkge1xuICAgIHJldHVybiB0aGlzW3Byb3BdO1xuICB9LFxuICBzZXRWaWV3KHZpZXcpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICB9LFxuICBzZXRDYXJzKGNhcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNhcikpIHtcbiAgICAgIHRoaXMuY2FycyA9IGNhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJzLnB1c2goY2FyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2Fycy5sZW5ndGggPD0gdGhpcy5saW1pdENhcnMpIHtcbiAgICAgIHVwZGF0ZUNhckxpc3QoY2FyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLmdhcmFnZVBhZ2UgKyAxO1xuICAgICAgdGhpcy5zZXRHYXJhZ2VQYWdlKG5leHRQYWdlKTtcbiAgICB9XG4gIH0sXG4gIHNldFVwZGF0ZWRDYXIodXBkYXRlZENhcikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJzLmZpbmRJbmRleCgoY2FyKSA9PiBjYXIuaWQgPT09IHVwZGF0ZWRDYXIuaWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuY2Fyc1tpbmRleF0gPSB1cGRhdGVkQ2FyO1xuICAgICAgdXBkYXRlQ2FyTGlzdEl0ZW0odXBkYXRlZENhcik7XG4gICAgfVxuICB9LFxuICBzZXRXaW5uZXJzKHdpbm5lcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHdpbm5lcikpIHtcbiAgICAgIHRoaXMud2lubmVycyA9IHdpbm5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aW5uZXJzLnB1c2god2lubmVyKTtcbiAgICB9XG4gIH0sXG4gIHNldFRvdGFsKHRvdGFsLCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICdjYXJzJykge1xuICAgICAgdGhpcy50b3RhbENhcnMgPSB0b3RhbDtcbiAgICAgIHRoaXMuc2V0VG90YWxQYWdlc0dhcmFnZSgpO1xuICAgICAgdXBkYXRlVG90YWxDYXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxXaW5uZXJzID0gdG90YWw7XG4gICAgICB0aGlzLnNldFRvdGFsUGFnZXNXaW5uZXJzKCk7XG4gICAgICB1cGRhdGVUb3RhbFdpbm5lcnMoKTtcbiAgICB9XG4gIH0sXG4gIHNldFRvdGFsUGFnZXNHYXJhZ2UoKSB7XG4gICAgdGhpcy50b3RhbFBhZ2VzR2FyYWdlID0gTWF0aC5jZWlsKHRoaXMudG90YWxDYXJzIC8gdGhpcy5saW1pdENhcnMpO1xuICB9LFxuICBzZXRUb3RhbFBhZ2VzV2lubmVycygpIHtcbiAgICB0aGlzLnRvdGFsUGFnZXNXaW5uZXJzID0gTWF0aC5jZWlsKHRoaXMudG90YWxXaW5uZXJzIC8gdGhpcy5saW1pdFdpbm5lcnMpO1xuICB9LFxuICBzZXRHYXJhZ2VQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLmdhcmFnZVBhZ2UgPSBwYWdlO1xuICAgIHVwZGF0ZUN1cnJQYWdlKCdnYXJhZ2VQYWdlJyk7XG4gICAgZ2V0Q2FycygpO1xuICB9LFxuICBzZXRXaW5uZXJzUGFnZShwYWdlKSB7XG4gICAgdGhpcy53aW5uZXJzUGFnZSA9IHBhZ2U7XG4gICAgdXBkYXRlQ3VyclBhZ2UoJ3dpbm5lcnNQYWdlJyk7XG4gICAgZ2V0Q2FycygpO1xuICB9LFxuICBzZXRJZChpZCwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgdGhpcy5zZWxlY3RJZCA9IGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUlkID0gaWQ7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2Fycy5maW5kSW5kZXgoKGNhcikgPT4gY2FyLmlkID09PSB0aGlzLnJlbW92ZUlkKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5jYXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJlbW92ZUNhckZyb21MaXN0KHRoaXMucmVtb3ZlSWQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2Fycy5sZW5ndGggPT09IDAgJiYgdGhpcy5nYXJhZ2VQYWdlID4gMSkge1xuICAgICAgICBjb25zdCBwcmV2UGFnZSA9IHRoaXMuZ2FyYWdlUGFnZSAtIDE7XG4gICAgICAgIHRoaXMuc2V0R2FyYWdlUGFnZShwcmV2UGFnZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXRTb3J0aW5nT3JkZXIob3JkZXIpIHtcbiAgICB0aGlzLnNvcnRpbmdPcmRlciA9IG9yZGVyO1xuICB9LFxuICBzZXRTb3J0QnkodHlwZSkge1xuICAgIHRoaXMuc29ydEJ5ID0gdHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGUgPSBzdGF0ZS5nZXRTdGF0ZS5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRWaWV3ID0gc3RhdGUuc2V0Vmlldy5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRDYXJzID0gc3RhdGUuc2V0Q2Fycy5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRVcGRhdGVkQ2FyID0gc3RhdGUuc2V0VXBkYXRlZENhci5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRXaW5uZXJzID0gc3RhdGUuc2V0V2lubmVycy5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRUb3RhbCA9IHN0YXRlLnNldFRvdGFsLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFRvdGFsUGFnZXNHYXJhZ2UgPSBzdGF0ZS5zZXRUb3RhbFBhZ2VzR2FyYWdlLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFRvdGFsUGFnZXNXaW5uZXJzID0gc3RhdGUuc2V0VG90YWxQYWdlc1dpbm5lcnMuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0R2FyYWdlUGFnZSA9IHN0YXRlLnNldEdhcmFnZVBhZ2UuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0V2lubmVyc1BhZ2UgPSBzdGF0ZS5zZXRXaW5uZXJzUGFnZS5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRJZCA9IHN0YXRlLnNldElkLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFNvcnRpbmdPcmRlciA9IHN0YXRlLnNldFNvcnRpbmdPcmRlci5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRTb3J0QnkgPSBzdGF0ZS5zZXRTb3J0QnkuYmluZChzdGF0ZSk7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHsgY2xlYW5Gb3JtLCBpbnB1dEZpZWxkLCBmb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtJztcbmltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpc3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2FyLCBnZW5lcmF0ZUNhcnMsIGdldENhcnMsIHJlc2V0Q2Fycywgc3RhcnRSYWNlLCB1cGRhdGVDYXIgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBuZXh0UGFnZSwgcHJldlBhZ2UgfSBmcm9tICcuLi9yb3V0aW5nL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgZ29Ub0dhcmFnZSwgZ29Ub1dpbm5lcnMgfSBmcm9tICcuLi9yb3V0aW5nL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FyYWdlKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgbWFpbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGRpdldpdGhWaWV3TmF2aWdhdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGl2V2l0aFJhY2VBbmRHZW5lcmF0b3I6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlY3Rpb25XaXRoRm9ybTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IHNlY3Rpb25XaXRoTGlzdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGRpdldpdGhQYWdlTmF2aWdhdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5hcHBlbmQoZGl2V2l0aFZpZXdOYXZpZ2F0aW9uLCBzZWN0aW9uV2l0aEZvcm0sIHNlY3Rpb25XaXRoTGlzdCwgZGl2V2l0aFBhZ2VOYXZpZ2F0aW9uKTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gc3dpdGNoIHZpZXdzXG4gIGNvbnN0IGdhcmFnZUJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnZ2FyYWdlJywgb25DbGljazogZ29Ub0dhcmFnZSwgY2xhc3NOYW1lOiAnZ2FyYWdlQnRuJyB9KTtcbiAgY29uc3Qgd2lubmVyc0J0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnd2lubmVycycsIG9uQ2xpY2s6IGdvVG9XaW5uZXJzLCBjbGFzc05hbWU6ICd3aW5uZXJzQnRuJyB9KTtcbiAgZGl2V2l0aFZpZXdOYXZpZ2F0aW9uLmFwcGVuZChnYXJhZ2VCdG4sIHdpbm5lcnNCdG4pO1xuICAvLyBDcmVhdGUgZm9ybSB0byBjcmVhdGUgYSBjYXJcbiAgY29uc3QgaW5wdXRGaWVsZHMxID0gY3JlYXRlQ2FySW5wdXRzKCk7XG4gIGNvbnN0IGNyZWF0ZUNhckZvcm0gPSBmb3JtKHsgZm9ybVN1Ym1pdEZ1bjogY3JlYXRlQ2FyLCBjbGVhbkZvcm1GdW46ICgpID0+IGNsZWFuRm9ybSgnY3JlYXRlTmFtZScsICdjcmVhdGVDb2xvcicpLCBpbnB1dEZpZWxkczogaW5wdXRGaWVsZHMxLCBidG5UZXh0OiAnY3JlYXRlJyB9KTtcbiAgc2VjdGlvbldpdGhGb3JtLmFwcGVuZChjcmVhdGVDYXJGb3JtKTtcbiAgLy8gQ3JlYXRlIGZvcm0gdG8gdXBkYXRlIGEgY2FyXG4gIGNvbnN0IGlucHV0RmllbGRzMiA9IHVwZGF0ZUNhcklucHV0cygpO1xuICBjb25zdCB1cGRhdGVDYXJGb3JtID0gZm9ybSh7IGZvcm1TdWJtaXRGdW46IHVwZGF0ZUNhciwgY2xlYW5Gb3JtRnVuOiAoKSA9PiBjbGVhbkZvcm0oJ3VwZGF0ZU5hbWUnLCAndXBkYXRlQ29sb3InKSwgaW5wdXRGaWVsZHM6IGlucHV0RmllbGRzMiwgYnRuVGV4dDogJ3VwZGF0ZScgfSk7XG4gIHNlY3Rpb25XaXRoRm9ybS5hcHBlbmQodXBkYXRlQ2FyRm9ybSk7XG4gIC8vIENyZWF0ZSByYWNlLCByZXNldCwgZ2VuZXJhdGUgY2FycyBidXR0b25cbiAgY29uc3QgcmFjZUJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAncmFjZScsIG9uQ2xpY2s6IHN0YXJ0UmFjZSwgY2xhc3NOYW1lOiAncmFjZUJ0bicgfSk7XG4gIGNvbnN0IHJlc2V0QnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdyZXNldCcsIG9uQ2xpY2s6IHJlc2V0Q2FycywgY2xhc3NOYW1lOiAncmVzZXRCdG4nIH0pO1xuICBjb25zdCBnZW5lcmF0ZUNhcnNCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ2dlbmVyYXRlJywgb25DbGljazogZ2VuZXJhdGVDYXJzLCBjbGFzc05hbWU6ICdnZW5lcmF0ZUJ0bicgfSk7XG4gIGRpdldpdGhSYWNlQW5kR2VuZXJhdG9yLmFwcGVuZChyYWNlQnRuLCByZXNldEJ0biwgZ2VuZXJhdGVDYXJzQnRuKTtcbiAgc2VjdGlvbldpdGhGb3JtLmFwcGVuZChkaXZXaXRoUmFjZUFuZEdlbmVyYXRvcik7XG4gIC8vIENyZWF0ZSBsaXN0XG4gIGNvbnN0IGhlYWRpbmc6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnR2FyYWdlJztcbiAgY29uc3QgdG90YWxDYXJzOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgY3VycmVudFBhZ2U6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b3RhbENhcnMudGV4dENvbnRlbnQgPSBgVG90YWwgY2FyczogJHtnZXRTdGF0ZSgndG90YWxDYXJzJyl9YDtcbiAgdG90YWxDYXJzLmNsYXNzTmFtZSA9ICd0b3RhbENhcnMnO1xuICBjdXJyZW50UGFnZS50ZXh0Q29udGVudCA9IGBDdXJyZW50IHBhZ2U6ICR7Z2V0U3RhdGUoJ2dhcmFnZVBhZ2UnKX1gO1xuICBjdXJyZW50UGFnZS5jbGFzc05hbWUgPSAnY3VycmVudFBhZ2UnO1xuICBjb25zdCBteUNhcnNMaXN0ID0gbGlzdCh7IHR5cGU6ICd1bCcsIGNsYXNzTmFtZTogJ2Nhckxpc3QnIH0pO1xuICBzZWN0aW9uV2l0aExpc3QuYXBwZW5kKGhlYWRpbmcsIHRvdGFsQ2FycywgY3VycmVudFBhZ2UsIG15Q2Fyc0xpc3QpO1xuICAvLyBDcmVhdGUgYnV0dG9ucyB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGxpc3QgcGFnZXNcbiAgY29uc3QgcHJldkJ1dHRvbiA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAncHJldicsIG9uQ2xpY2s6IHByZXZQYWdlLCBjbGFzc05hbWU6ICdwcmV2QnV0dG9uJyB9KTtcbiAgY29uc3QgbmV4dEJ1dHRvbiA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnbmV4dCcsIG9uQ2xpY2s6IG5leHRQYWdlLCBjbGFzc05hbWU6ICduZXh0QnV0dG9uJyB9KTtcbiAgZGl2V2l0aFBhZ2VOYXZpZ2F0aW9uLmFwcGVuZChwcmV2QnV0dG9uLCBuZXh0QnV0dG9uKTtcbiAgLy8gRmlsbCB0aGUgY2FyIGxpc3RcbiAgZ2V0Q2FycygpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvdGFsQ2FycygpOiB2b2lkIHtcbiAgY29uc3QgdG90YWxDYXJzOiBIVE1MUGFyYWdyYXBoRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWxDYXJzJyk7XG4gIGlmICh0b3RhbENhcnMpIHRvdGFsQ2Fycy50ZXh0Q29udGVudCA9IGBUb3RhbCBjYXJzOiAke2dldFN0YXRlKCd0b3RhbENhcnMnKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ3VyclBhZ2Uodmlld1BhZ2U6ICdnYXJhZ2VQYWdlJyB8ICd3aW5uZXJzUGFnZScpOiB2b2lkIHtcbiAgY29uc3QgY3VyclBhZ2U6IEhUTUxQYXJhZ3JhcGhFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50UGFnZScpO1xuICBpZiAoY3VyclBhZ2UpIGN1cnJQYWdlLnRleHRDb250ZW50ID0gYEN1cnJlbnQgcGFnZTogJHtnZXRTdGF0ZShgJHt2aWV3UGFnZX1gKX1gO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJJbnB1dHMoKTogSFRNTElucHV0RWxlbWVudFtdIHtcbiAgY29uc3QgaW5wdXRGaWVsZHM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFtdO1xuICBjb25zdCB0ZXh0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ3RleHQnLCBjbGFzc05hbWU6ICdjcmVhdGVOYW1lJyB9KTtcbiAgY29uc3QgY29sb3JGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGlucHV0RmllbGQoeyB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNmZmZmZmYnLCBjbGFzc05hbWU6ICdjcmVhdGVDb2xvcicgfSk7XG4gIGlucHV0RmllbGRzLnB1c2godGV4dEZpZWxkLCBjb2xvckZpZWxkKTtcbiAgcmV0dXJuIGlucHV0RmllbGRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDYXJJbnB1dHMoKTogSFRNTElucHV0RWxlbWVudFtdIHtcbiAgY29uc3QgaW5wdXRGaWVsZHM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFtdO1xuICBjb25zdCBoaWRkZW5JbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGlucHV0RmllbGQoeyB0eXBlOiAnaGlkZGVuJywgY2xhc3NOYW1lOiAndXBkYXRlSWQnIH0pO1xuICBjb25zdCB0ZXh0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ3RleHQnLCBjbGFzc05hbWU6ICd1cGRhdGVOYW1lJyB9KTtcbiAgY29uc3QgY29sb3JGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGlucHV0RmllbGQoeyB0eXBlOiAnY29sb3InLCB2YWx1ZTogJyNmZmZmZmYnLCBjbGFzc05hbWU6ICd1cGRhdGVDb2xvcicgfSk7XG4gIGlucHV0RmllbGRzLnB1c2goaGlkZGVuSW5wdXQsIHRleHRGaWVsZCwgY29sb3JGaWVsZCk7XG4gIHJldHVybiBpbnB1dEZpZWxkcztcbn1cbiIsImltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcbmltcG9ydCB7IHJlbmRlckdhcmFnZSB9IGZyb20gJy4vZ2FyYWdlJztcbmltcG9ydCB7IHJlbmRlcldpbm5lcnMgfSBmcm9tICcuL3dpbm5lcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVmlldygpIHtcbiAgY29uc3QgdmlldyA9IGdldFN0YXRlKCd2aWV3Jyk7XG4gIGNvbnN0IGJvZHk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgYm9keS5pbm5lckhUTUwgPSAnJztcbiAgbGV0IGNvbnRlbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgaWYgKHZpZXcgPT09ICdnYXJhZ2UnKSB7XG4gICAgY29udGVudCA9IHJlbmRlckdhcmFnZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnQgPSByZW5kZXJXaW5uZXJzKCk7XG4gIH1cbiAgYm9keS5hcHBlbmQoY29udGVudCk7XG59XG4iLCJpbXBvcnQgeyBidXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IG5leHRQYWdlLCBwcmV2UGFnZSB9IGZyb20gXCIuLi9yb3V0aW5nL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGdvVG9HYXJhZ2UsIGdvVG9XaW5uZXJzIH0gZnJvbSBcIi4uL3JvdXRpbmcvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvc3RhdGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXaW5uZXJzKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgbWFpbjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGNvbnN0IGRpdldpdGhWaWV3TmF2aWdhdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VjdGlvbldpdGhUYWJsZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGRpdldpdGhQYWdlTmF2aWdhdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbi5hcHBlbmQoZGl2V2l0aFZpZXdOYXZpZ2F0aW9uLCBzZWN0aW9uV2l0aFRhYmxlLCBkaXZXaXRoUGFnZU5hdmlnYXRpb24pO1xuICAvLyBDcmVhdGUgYnV0dG9ucyB0byBzd2l0Y2ggdmlld3NcbiAgY29uc3QgZ2FyYWdlQnRuID0gYnV0dG9uKHt0eXBlOiAnYnV0dG9uJywgdGV4dDogJ2dhcmFnZScsIG9uQ2xpY2s6IGdvVG9HYXJhZ2UsIGNsYXNzTmFtZTogJ2dhcmFnZUJ0bid9KTtcbiAgY29uc3Qgd2lubmVyc0J0biA9IGJ1dHRvbih7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICd3aW5uZXJzJywgb25DbGljazogZ29Ub1dpbm5lcnMsIGNsYXNzTmFtZTogJ3dpbm5lcnNCdG4nfSk7XG4gIGRpdldpdGhWaWV3TmF2aWdhdGlvbi5hcHBlbmQoZ2FyYWdlQnRuLCB3aW5uZXJzQnRuKTtcbiAgLy8gQ3JlYXRlIHRhYmxlXG4gIGNvbnN0IGhlYWRpbmc6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2lubmVycyc7XG4gIGNvbnN0IHRvdGFsV2lubmVyczogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGN1cnJlbnRQYWdlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG90YWxXaW5uZXJzLnRleHRDb250ZW50ID0gYFRvdGFsIHdpbm5lcnM6ICR7Z2V0U3RhdGUoJ3RvdGFsV2lubmVycycpfWA7XG4gIHRvdGFsV2lubmVycy5jbGFzc05hbWUgPSAndG90YWxXaW5uZXJzJztcbiAgY3VycmVudFBhZ2UudGV4dENvbnRlbnQgPSBgQ3VycmVudCBwYWdlOiAke2dldFN0YXRlKCd3aW5uZXJzUGFnZScpfWA7XG4gIGN1cnJlbnRQYWdlLmNsYXNzTmFtZSA9ICdjdXJyZW50UGFnZSc7XG4gIHNlY3Rpb25XaXRoVGFibGUuYXBwZW5kKGhlYWRpbmcsIHRvdGFsV2lubmVycywgY3VycmVudFBhZ2UpO1xuICAvLyBDcmVhdGUgYnV0dG9ucyB0byBuYXZpZ2F0ZSBiZXR3ZWVuIGxpc3QgcGFnZXNcbiAgY29uc3QgcHJldkJ1dHRvbiA9IGJ1dHRvbih7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICdwcmV2Jywgb25DbGljazogcHJldlBhZ2UsIGNsYXNzTmFtZTogJ3ByZXZCdXR0b24nfSk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBidXR0b24oe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnbmV4dCcsIG9uQ2xpY2s6IG5leHRQYWdlLCBjbGFzc05hbWU6ICduZXh0QnV0dG9uJ30pO1xuICBkaXZXaXRoUGFnZU5hdmlnYXRpb24uYXBwZW5kKHByZXZCdXR0b24sIG5leHRCdXR0b24pO1xuICAvLyBGaWxsIHRoZSB0YWJsZVxuICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvdGFsV2lubmVycygpOiB2b2lkIHtcbiAgICBjb25zdCB0b3RhbFdpbm5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWxXaW5uZXJzJykgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gICAgdG90YWxXaW5uZXJzLnRleHRDb250ZW50ID0gYFRvdGFsIHdpbm5lcnM6ICR7Z2V0U3RhdGUoJ3RvdGFsV2lubmVycycpfWA7XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJWaWV3IH0gZnJvbSAnLi92aWV3cy92aWV3LW1hbmFnZXInO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICByZW5kZXJWaWV3KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==