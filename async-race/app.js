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
  gap: 5px;
}

.imgFlag {
  width: 10%;
}





`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,UAAU;AACZ","sourcesContent":["main {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nul li {\n  list-style: none;\n}\n.carList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 0;\n}\n.liContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: dashed black 2px;\n}\n\n.upperPartContainer {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.lowerPartContainer {\n  display: flex;\n  flex-direction: row;\n}\n\n.group {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 90%;\n  gap: 5px;\n}\n\n.imgFlag {\n  width: 10%;\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
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
    const total = 100, range = 10, base = 16;
    const largestHexadecimal = 16777215;
    const promises = [];
    for (let i = 0; i < total; i += 1) {
        const randomBrand = Math.floor(Math.random() * range);
        const randomModel = Math.floor(Math.random() * range);
        const randomColor = '#' + Math.floor(Math.random() * largestHexadecimal).toString(base);
        const name = `${brands[randomBrand]} ${models[randomBrand]?.[randomModel]}`;
        const car = { name: name, color: randomColor };
        const promise = fetch('http://localhost:3000/garage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        });
        promises.push(promise);
    }
    Promise.allSettled(promises).then((results) => {
        const createdCars = [];
        let count = 0;
        const jsonPromises = results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return result.value.json().then((data) => {
                    createdCars.push(data);
                    count += 1;
                }).catch((error) => console.error(`Error parsing car ${index + 1}`, error));
            }
            else {
                console.error(`Failed to create a car ${index + 1}:`, result.reason);
            }
        });
        Promise.all(jsonPromises).then(() => {
            const currentTotal = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalCars');
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(currentTotal + count, 'cars');
            getCars();
        });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNkLENBQUM7QUFFTSxTQUFTLGtCQUFrQjtJQUM5QixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBeUIsQ0FBQztJQUNyRixZQUFZLENBQUMsV0FBVyxHQUFHLGtCQUFrQix1REFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7QUFDMUUsQ0FBQzs7Ozs7OztVQ3BDSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUM1QjtBQUV0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2pELCtEQUFVLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZXF1ZXN0cy9yZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JvdXRpbmcvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0YXRlL3N0YXRlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3ZpZXctbWFuYWdlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY2FyTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmxpQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgYmxhY2sgMnB4O1xufVxuXG4udXBwZXJQYXJ0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubG93ZXJQYXJ0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogOTAlO1xuICBnYXA6IDVweDtcbn1cblxuLmltZ0ZsYWcge1xuICB3aWR0aDogMTAlO1xufVxuXG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLmNhckxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5saUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCBibGFjayAycHg7XFxufVxcblxcbi51cHBlclBhcnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb3dlclBhcnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiA5MCU7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmltZ0ZsYWcge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gKHsgdHlwZSA9ICdidXR0b24nLCB0ZXh0ID0gJycsIG9uQ2xpY2ssIGNsYXNzTmFtZSA9ICcnIH06IEJ1dHRvblByb3BzKTogSFRNTEJ1dHRvbkVsZW1lbnQgPT4ge1xuICBjb25zdCBidG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGJ0bi50eXBlID0gdHlwZTtcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgaWYgKG9uQ2xpY2spIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJ0bjtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEZvcm1Qcm9wcywgSW5wdXRQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEZpZWxkID0gKHsgdHlwZSwgdmFsdWUsIGlkLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIGNsYXNzTmFtZSB9OiBJbnB1dFByb3BzKTogSFRNTElucHV0RWxlbWVudCA9PiB7XG4gIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlmIChwbGFjZWhvbGRlcikgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgaWYgKHZhbHVlKSBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlmIChkaXNhYmxlZCkgaW5wdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgaWYgKGNsYXNzTmFtZSkgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybSA9ICh7XG4gIGZvcm1DbGFzcyxcbiAgZm9ybVN1Ym1pdEZ1bixcbiAgY2xlYW5Gb3JtRnVuLFxuICBpbnB1dEZpZWxkcyxcbiAgYnRuQ2xhc3MsXG4gIGJ0blRleHQsXG59OiBGb3JtUHJvcHMpOiBIVE1MRm9ybUVsZW1lbnQgPT4ge1xuICBjb25zdCBmb3JtRWxlbTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBpZiAoZm9ybUNsYXNzKSBmb3JtRWxlbS5jbGFzc05hbWUgPSBmb3JtQ2xhc3M7XG5cbiAgaW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBmb3JtRWxlbS5hcHBlbmQoaW5wdXQpO1xuICB9KTtcblxuICBjb25zdCBidG4gPSBidXR0b24oeyB0eXBlOiAnc3VibWl0JywgdGV4dDogYnRuVGV4dCB9KTtcbiAgaWYgKGJ0bkNsYXNzKSBidG4uY2xhc3NOYW1lID0gYnRuQ2xhc3M7XG4gIGZvcm1FbGVtLmFwcGVuZChidG4pO1xuXG4gIGZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZXM6IHN0cmluZ1tdID0gaW5wdXRGaWVsZHMubWFwKChpbnB1dCkgPT4gaW5wdXQudmFsdWUpO1xuICAgIGZvcm1TdWJtaXRGdW4oLi4uaW5wdXRWYWx1ZXMpO1xuICAgIGlmIChjbGVhbkZvcm1GdW4pIGNsZWFuRm9ybUZ1bigpO1xuICB9KTtcbiAgcmV0dXJuIGZvcm1FbGVtO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuRm9ybSguLi5jbGFzc05hbWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG5cbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ2NvbG9yJykge1xuICAgICAgaW5wdXQudmFsdWUgPSAnI2ZmZmZmZic7XG4gICAgfSBlbHNlIGlmIChpbnB1dC50eXBlID09PSAnY2hlY2tib3gnIHx8IGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHsgc2VsZWN0Q2FyLCByZW1vdmVDYXIsIHN0YXJ0U3RvcENhckVuZ2luZSB9IGZyb20gJy4uL3JlcXVlc3RzL3JlcXVlc3RzJztcbmltcG9ydCB0eXBlIHsgQ2FyLCBMaXN0UHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgbGlzdEl0ZW0gPSAoY2FyOiBDYXIsIGNsYXNzTmFtZT86IHN0cmluZyk6IEhUTUxMSUVsZW1lbnQgPT4ge1xuICBjb25zdCBsaTogSFRNTExJRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmRhdGFzZXQuaWQgPSBgJHtjYXIuaWR9YDtcbiAgaWYgKGNsYXNzTmFtZSkgbGkuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBjb25zdCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSAnbGlDb250YWluZXInO1xuICBsaS5hcHBlbmQoZGl2KTtcbiAgY29uc3QgdXBwZXJQYXJ0OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB1cHBlclBhcnQuY2xhc3NOYW1lID0gJ3VwcGVyUGFydENvbnRhaW5lcic7XG4gIGNvbnN0IGxvd2VyUGFydDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG93ZXJQYXJ0LmNsYXNzTmFtZSA9ICdsb3dlclBhcnRDb250YWluZXInO1xuICBkaXYuYXBwZW5kKHVwcGVyUGFydCwgbG93ZXJQYXJ0KTtcbiAgY29uc3Qgc2VsZWN0Q2FyQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdzZWxlY3QnLCBvbkNsaWNrOiAoKSA9PiBzZWxlY3RDYXIoY2FyKX0pO1xuICBjb25zdCByZW1vdmVDYXJCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3JlbW92ZScsIG9uQ2xpY2s6ICgpID0+IHJlbW92ZUNhcihjYXIuaWQpIH0pO1xuICBjb25zdCBzdGFydEVuZ2luZUJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnQScsIG9uQ2xpY2s6ICgpID0+IHN0YXJ0U3RvcENhckVuZ2luZShjYXIuaWQsICdzdGFydGVkJykgfSk7XG4gIGNvbnN0IHN0b3BFbmdpbmVCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ0InLCBvbkNsaWNrOiAoKSA9PiBzdGFydFN0b3BDYXJFbmdpbmUoY2FyLmlkLCAnc3RvcHBlZCcpIH0pO1xuICBjb25zdCBjYXJOYW1lOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNhck5hbWUuY2xhc3NOYW1lID0gJ2Nhck5hbWUnO1xuICBjYXJOYW1lLnRleHRDb250ZW50ID0gY2FyLm5hbWU7XG4gIHVwcGVyUGFydC5hcHBlbmQoc2VsZWN0Q2FyQnRuLCByZW1vdmVDYXJCdG4sIGNhck5hbWUpO1xuICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncm91cC5jbGFzc05hbWUgPSAnZ3JvdXAnO1xuICBjb25zdCBpbWdDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nQ2FyLmNsYXNzTmFtZSA9ICdpbWdDYXInO1xuICBpbWdDYXIuaW5uZXJIVE1MID0gYFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBkPVwiTTIxLjczOSAxMC45MjFjLTEuMzQ3LS4zOS0xLjg4NS0uNTM4LTMuNTUyLS45MjEgMCAwLTIuMzc5LTIuMzU5LTIuODMyLTIuODE2LS41NjgtLjU3Mi0xLjA0My0xLjE4NC0yLjk0OS0xLjE4NGgtNy44OTRjLS41MTEgMC0uNzM2LjU0Ny0uMDcgMS0uNzQyLjYwMi0xLjYxOSAxLjM4LTIuMjU4IDIuMDI3LTEuNDM1IDEuNDU1LTIuMTg0IDIuMzg1LTIuMTg0IDQuMjU1IDAgMS43NiAxLjA0MiAzLjcxOCAzLjE3NCAzLjcxOGguMDFjLjQxMyAxLjE2MiAxLjUxMiAyIDIuODE2IDIgMS4zMDQgMCAyLjQwMy0uODM4IDIuODE2LTJoNi4zNjdjLjQxMyAxLjE2MiAxLjUxMiAyIDIuODE2IDJzMi40MDMtLjgzOCAyLjgxNi0yaC42ODVjMS45OTQgMCAyLjUtMS43NzYgMi41LTMuMTY1IDAtMi4wNDEtMS4xMjMtMi41ODQtMi4yNjEtMi45MTR6bS0xNS43MzkgNi4yNzljLS42NjIgMC0xLjItLjUzOC0xLjItMS4ycy41MzgtMS4yIDEuMi0xLjIgMS4yLjUzOCAxLjIgMS4yLS41MzggMS4yLTEuMiAxLjJ6bTMuNTc2LTYuMmMtMS4wNzEgMC0zLjUtLjEwNi01LjIxOS0uNzUuNTc4LS43NS45OTgtMS4yMjIgMS4yNy0xLjUzNi4zMTgtLjM2OC44NzMtLjcxNCAxLjU2MS0uNzE0aDIuMzg4djN6bTEtM2gxLjgzNWMuODgyIDAgMS40MjguNDkzIDIuMDIyIDEuMTA1LjQ1Mi40NjYgMS43MzIgMS44OTUgMS43MzIgMS44OTVoLTUuNTg4di0zem03LjQyNCA5LjJjLS42NjIgMC0xLjItLjUzOC0xLjItMS4ycy41MzgtMS4yIDEuMi0xLjIgMS4yLjUzOCAxLjIgMS4yLS41MzggMS4yLTEuMiAxLjJ6XCIgZmlsbD0ke2Nhci5jb2xvcn0gY2xhc3M9J3N2Z0NhcicvPlxuICAgIDwvc3ZnPlxuICBgO1xuICBjb25zdCBpbWdGbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZ0ZsYWcuY2xhc3NOYW1lID0gJ2ltZ0ZsYWcnO1xuICBpbWdGbGFnLmlubmVySFRNTCA9IGBcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZD1cIk00IDI0aC0ydi0yNGgydjI0em0xOC0xNmwtMTYtNnYxMmwxNi02elwiIGZpbGw9XCIjZmYwMDAwXCIvPlxuICAgIDwvc3ZnPlxuICBgO1xuICBncm91cC5hcHBlbmQoc3RhcnRFbmdpbmVCdG4sIHN0b3BFbmdpbmVCdG4sIGltZ0Nhcik7XG4gIGxvd2VyUGFydC5hcHBlbmQoZ3JvdXAsIGltZ0ZsYWcpO1xuICByZXR1cm4gbGk7XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdCA9ICh7IHR5cGUsIGxpc3RJdGVtcywgY2xhc3NOYW1lIH06IExpc3RQcm9wcyk6IEhUTUxVTGlzdEVsZW1lbnQgPT4ge1xuICBjb25zdCBsaXN0OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICBpZiAoY2xhc3NOYW1lKSBsaXN0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobGlzdEl0ZW1zKSkge1xuICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBsaXN0LmFwcGVuZChpdGVtKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsaXN0SXRlbXMpIHtcbiAgICBsaXN0LmFwcGVuZChsaXN0SXRlbXMpO1xuICB9XG4gIHJldHVybiBsaXN0O1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNhckxpc3QgPSAoY2FyOiBDYXIgfCBDYXJbXSk6IHZvaWQgPT4ge1xuICBjb25zdCBjYXJMaXN0OiBIVE1MVUxpc3RFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJMaXN0Jyk7XG4gIGlmIChjYXJMaXN0KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2FyKSkge1xuICAgICAgY29uc3QgY2FySXRlbXM6IEhUTUxMSUVsZW1lbnRbXSA9IGNhci5tYXAoKGl0ZW0pID0+IGxpc3RJdGVtKGl0ZW0pKTtcbiAgICAgIGNhckxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICBjYXJMaXN0LmFwcGVuZCguLi5jYXJJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNhckl0ZW0gPSBsaXN0SXRlbShjYXIpO1xuICAgICAgY2FyTGlzdC5hcHBlbmQoY2FySXRlbSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FyTGlzdEl0ZW0gPSAoY2FyOiBDYXIpOiB2b2lkID0+IHtcbiAgY29uc3QgY2FySXRlbTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtjYXIuaWR9J11gKTtcbiAgaWYgKGNhckl0ZW0pIHtcbiAgICBjb25zdCBuYW1lOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSBjYXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJOYW1lJyk7XG4gICAgaWYgKG5hbWUpIG5hbWUudGV4dENvbnRlbnQgPSBjYXIubmFtZTtcbiAgICBjb25zdCBwYXRoOiBTVkdQYXRoRWxlbWVudCB8IG51bGwgPSBjYXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zdmdDYXInKTtcbiAgICBpZiAocGF0aCkgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBjYXIuY29sb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2FyRnJvbUxpc3QgPSAoaWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuICBjb25zdCBjYXJMaXN0OiBIVE1MVUxpc3RFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJMaXN0Jyk7XG4gIGNvbnN0IGNhckl0ZW06IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J11gKTtcbiAgaWYgKGNhckxpc3QgJiYgY2FySXRlbSkgY2FyTGlzdC5yZW1vdmVDaGlsZChjYXJJdGVtKTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0Q2Fycywgc2V0SWQsIHNldFRvdGFsLCBzZXRVcGRhdGVkQ2FyIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnMoKTogdm9pZCB7XG4gIGNvbnN0IHBhZ2UgPSBnZXRTdGF0ZSgnZ2FyYWdlUGFnZScpO1xuICBjb25zdCBsaW1pdCA9IGdldFN0YXRlKCdsaW1pdENhcnMnKTtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYXJhZ2U/X3BhZ2U9JHtwYWdlfSZfbGltaXQ9JHtsaW1pdH1gO1xuICBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KVxuICAgIC50aGVuKChyZXNwb25zZSk6IFByb21pc2U8Q2FyPiA9PiB7XG4gICAgICBjb25zdCB0b3RhbCA9IE51bWJlcihyZXNwb25zZS5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpKTtcbiAgICAgIHNldFRvdGFsKHRvdGFsLCAnY2FycycpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRDYXJzKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgYWxlcnQoYEZhaWxlZCB0byBnZXQgY2FyczogJHtlcnJvcn1gKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ2FycygpOiB2b2lkIHtcbiAgY29uc3QgYnJhbmRzOiBzdHJpbmdbXSA9IFsnQk1XJywgJ0ZpYXQnLCAnRm9yZCcsICdIeXVuZGFpJywgJ0tpYScsICdMYW5jaWEnLCAnT3BlbCcsICdSZW5hdWx0JywgJ1N1enVraScsICdWb2x2byddO1xuICBjb25zdCBtb2RlbHM6IHN0cmluZ1tdW10gPSBbWydpWDInLCAnaTUnLCAnNSBTZXJpZXMgRzYwJywgJ1hNIExhYmVsIFJlZCcsICdYMSBNMzVpIHhEcml2ZScsICdNMiBHODcnLCAnMyBTZXJpZXMgRmFjZWxpZnQgKEcyMCBMQ0kpJywgJ2k3IE03MCB4RHJpdmUnLCAnWDUgTENJJywgJ1g2IExDSSddLCBbJ1RvcG9saW5vIEVWJywgJ1BhbmRhIEh5YnJpZCcsICc2MDBlJywgJzUwMGUgQWJhcnRoJywgJzUwMFggSHlicmlkJywgJ1RpcG8gQ3Jvc3MnLCAnRG9ibG8nLCAnVWx5c3NlJywgJ1NjdWRvJywgJzUwMCBSRUQgRWRpdGlvbiddLCBbJ0V4cGxvcmVyIEVWJywgJ011c3RhbmcgTWFjaC1FIFJhbGx5JywgJ011c3RhbmcgKFM2NTApJywgJ1JhbmdlciBSYXB0b3InLCAnRi0xNTAgTGlnaHRuaW5nJywgJ1RyYW5zaXQgQ3VzdG9tJywgJ1B1bWEgU1QgUG93ZXJzaGlmdCcsICdCcm9uY28nLCAnRS1Ub3VybmVvIEN1c3RvbScsICdGaWVzdGEgRmluYWwgRWRpdGlvbiddLCBbICdJb25pcSA2JywgJ0tvbmEgRWxlY3RyaWMnLCAnU2FudGEgRmUnLCAnVHVjc29uIEh5YnJpZCcsICdJb25pcSA1IE4nLCAnRWxhbnRyYSBOJywgJ0JheW9uJywgJ1N0YXJpYScsICdWZW51ZScsICdHcmFuZGV1ciddLCBbJ0VWOScsICdFVjYgR1QnLCAnU3BvcnRhZ2UgSHlicmlkJywgJ05pcm8gRVYnLCAnU29yZW50bycsICdLMycsICdQaWNhbnRvJywgJ0Nhcm5pdmFsIEhpLUxpbW91c2luZScsICdTZWx0b3MnLCAnVGVsbHVyaWRlJ10sIFsnWXBzaWxvbiBIeWJyaWQnLCAnWXBzaWxvbiBBbGJlcnRhIEZlcnJldHRpJywgJ1lwc2lsb24gRWNvQ2hpYyBHUEwnLCAnWXBzaWxvbiBVbnljYScsICdZcHNpbG9uIEh5YnJpZCBFY29DaGljJywgJ1lwc2lsb24gTW9ub2dyYW0nLCAnWXBzaWxvbiBCbGFjayAmIE5vaXInLCAnWXBzaWxvbiBFbGVmYW50aW5vJywgJ1lwc2lsb24gTXlhJywgJ1lwc2lsb24gUGxhdGludW0nXSwgWydBc3RyYSBFbGVjdHJpYycsICdNb2trYSBFbGVjdHJpYycsICdDb3JzYSBFbGVjdHJpYycsICdHcmFuZGxhbmQgR1NlJywgJ0FzdHJhIFNwb3J0cyBUb3VyZXInLCAnQ29tYm8gRWxlY3RyaWMnLCAnWmFmaXJhLWUgTGlmZScsICdSb2Nrcy1lJywgJ01vdmFubyBFbGVjdHJpYycsICdWaXZhcm8tZSBIeWRyb2dlbiddLCBbJ1NjZW5pYyBFLVRlY2ggRWxlY3RyaWMnLCAnNSBFbGVjdHJpYycsICdBdXN0cmFsJywgJ1JhZmFsZScsICdLYW5nb28gRS1UZWNoJywgJ0NsaW8gViBGYWNlbGlmdCcsICdNZWdhbmUgRS1UZWNoIEVsZWN0cmljJywgJ0Fya2FuYScsICdDYXB0dXIgRS1UZWNoJywgJ1R3aW5nbyBFbGVjdHJpYyddLCBbJ1N3aWZ0JywgJ0Zyb254JywgJ0ppbW55IDUtRG9vcicsICdHcmFuZCBWaXRhcmEnLCAnQmFsZW5vJywgJ1MtQ3Jvc3MgSHlicmlkJywgJ1ZpdGFyYSBTdHJvbmcgSHlicmlkJywgJ0lnbmlzIEh5YnJpZCcsICdBY3Jvc3MgUGx1Zy1pbiBIeWJyaWQnLCAnU3dhY2UnXSwgWydFWDMwJywgJ0VYOTAnLCAnWEM0MCBSZWNoYXJnZSBGYWNlbGlmdCcsICdDNDAgUmVjaGFyZ2UnLCAnVjYwIENyb3NzIENvdW50cnknLCAnUzYwJywgJ1hDOTAgUGx1Zy1pbiBIeWJyaWQnLCAnVjkwJywgJ1Y2MCBSZWNoYXJnZScsICdYQzYwJ11dO1xuICBjb25zdCB0b3RhbCA9IDEwMCwgcmFuZ2UgPSAxMCwgYmFzZSA9IDE2O1xuICBjb25zdCBsYXJnZXN0SGV4YWRlY2ltYWwgPSAxNjc3NzIxNTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2U+W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tQnJhbmQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICBjb25zdCByYW5kb21Nb2RlbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yOiBzdHJpbmcgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsYXJnZXN0SGV4YWRlY2ltYWwpLnRvU3RyaW5nKGJhc2UpO1xuICAgIGNvbnN0IG5hbWUgPSBgJHticmFuZHNbcmFuZG9tQnJhbmRdfSAke21vZGVsc1tyYW5kb21CcmFuZF0/LltyYW5kb21Nb2RlbF19YDtcbiAgICBjb25zdCBjYXIgPSB7IG5hbWU6IG5hbWUsIGNvbG9yOiByYW5kb21Db2xvciB9O1xuICAgIGNvbnN0IHByb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhciksXG4gICAgfSk7XG4gICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgfVxuICBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICBjb25zdCBjcmVhdGVkQ2FyczogQ2FyW10gPSBbXTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IGpzb25Qcm9taXNlcyA9IHJlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY3JlYXRlZENhcnMucHVzaChkYXRhKTtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIGNhciAke2luZGV4ICsgMX1gLCBlcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgYSBjYXIgJHtpbmRleCArIDF9OmAsIHJlc3VsdC5yZWFzb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgUHJvbWlzZS5hbGwoanNvblByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUb3RhbCA9IGdldFN0YXRlKCd0b3RhbENhcnMnKTtcbiAgICAgIHNldFRvdGFsKGN1cnJlbnRUb3RhbCArIGNvdW50LCAnY2FycycpO1xuICAgICAgZ2V0Q2FycygpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcihuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGNvbG9yOiBjb2xvcixcbiAgfTtcbiAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYXJhZ2UnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSk6IFByb21pc2U8Q2FyPiA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGE6IENhcikgPT4ge1xuICAgICAgbGV0IHRvdGFsID0gZ2V0U3RhdGUoJ3RvdGFsQ2FycycpO1xuICAgICAgdG90YWwgKz0gMTtcbiAgICAgIHNldFRvdGFsKHRvdGFsLCAnY2FycycpO1xuICAgICAgc2V0Q2FycyhkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IGFsZXJ0KGBGYWlsZWQgdG8gY3JlYXRlIGEgY2FyOiAke2Vycm9yfWApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhcihpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9nYXJhZ2UvJHtpZH1gO1xuICBjb25zdCBkYXRhID0ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgY29sb3I6IGNvbG9yLFxuICB9O1xuICBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQVVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYXIgaXMgbm90IGZvdW5kOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChkYXRhOiBDYXIpID0+IHtcbiAgICAgIHNldFVwZGF0ZWRDYXIoZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiBhbGVydChgRmFpbGVkIHRvIHVwZGF0ZSBhIGNhcjogJHtlcnJvcn1gKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYXIoaWQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZS8ke2lkfWA7XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGRlbGV0ZSBhIGNhcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxDYXJzJyk7XG4gICAgICAgIHRvdGFsIC09IDE7XG4gICAgICAgIHNldFRvdGFsKHRvdGFsLCAnY2FycycpO1xuICAgICAgICBzZXRJZChpZCwgJ3JlbW92ZScpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4gYWxlcnQoYEZhaWxlZCB0byBkZWxldGUgYSBjYXI6ICR7ZXJyb3J9YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0Q2FyKGNhcjogQ2FyKTogdm9pZCB7XG4gIHNldElkKGNhci5pZCwgJ3NlbGVjdCcpO1xuICBjb25zdCBpZDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlSWQnKTtcbiAgY29uc3QgbmFtZTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlTmFtZScpO1xuICBjb25zdCBjb2xvcjogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBkYXRlQ29sb3InKTtcbiAgaWYgKGlkICYmIG5hbWUgJiYgY29sb3IpIHtcbiAgICBpZC52YWx1ZSA9IGAke2Nhci5pZH1gO1xuICAgIG5hbWUudmFsdWUgPSBjYXIubmFtZTtcbiAgICBjb2xvci52YWx1ZSA9IGNhci5jb2xvcjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wQ2FyRW5naW5lKGlkOiBudW1iZXIsIHN0YXR1czogJ3N0YXJ0ZWQnIHwgJ3N0b3BwZWQnKTogdm9pZCB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZW5naW5lP2lkPSR7aWR9JnN0YXR1cz0ke3N0YXR1c31gO1xuICBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgZHJpdmVDYXIoaWQpO1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHBhcmFtZXRlcnM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhciBpcyBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4gYWxlcnQoYEZhaWxlZCB0byBzdGFydC9zdG9wIGNhcidzIGVuZ2luZTogJHtlcnJvcn1gKSk7XG59XG5cbmZ1bmN0aW9uIGRyaXZlQ2FyKGlkOiBudW1iZXIpOiB2b2lkIHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmU/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYDtcbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUEFUQ0gnLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3JvbmcgcGFyYW1ldGVyczogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRW5naW5lIHBhcmFtcyBhcmUgbm90IGZvdW5kOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEcml2ZSBpbiBwcm9ncmVzczogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FyIGhhcyBiZWVuIHN0b3BwZWQgc3VkZGVubHkuIEl0J3MgZW5naW5lIHdhcyBicm9rZW4gZG93bjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiBhbGVydChgRmFpbGVkIHRvIHN0YXJ0IGRyaXZpbmcgYSBjYXI6ICR7ZXJyb3J9YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRSYWNlKCk6IHZvaWQge1xuICAvL2NvbnN0IGNhcnMgPSBnZXRTdGF0ZSgnY2FycycpO1xuICAvL2NvbnN0IGxpbWl0ID0gZ2V0U3RhdGUoJ2xpbWl0Q2FycycpO1xuICAvL2lmIChjYXJzLmxlbmd0aCA+IGxpbWl0KSB7XG4gIC8vICBjYXJzLnNwbGljZShsaW1pdCArIDEsIGNhcnMubGVuZ3RoIC0gbGltaXQpO1xuICAvL31cbiAgLy9jb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZT5bXSA9IGNhcnMubWFwKChjYXIpID0+IHMpXG4gIGNvbnNvbGUubG9nKCdJbXBsZW1lbnQgc3RhcnRSYWNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENhcnMoKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKCdJbXBsZW1lbnQgcmVzZXRDYXJzJyk7XG59XG4iLCJpbXBvcnQgeyBnZXRTdGF0ZSwgc2V0R2FyYWdlUGFnZSwgc2V0Vmlldywgc2V0V2lubmVyc1BhZ2UgfSBmcm9tIFwiLi4vc3RhdGUvc3RhdGVzXCI7XG5pbXBvcnQgeyByZW5kZXJWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL3ZpZXctbWFuYWdlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJldlBhZ2UoKTogdm9pZCB7XG4gIGNvbnN0IG5leHRQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgbGV0IGN1cnJQYWdlOiBudW1iZXIgPSAwO1xuICBjb25zdCBjdXJyVmlldyA9IGdldFN0YXRlKCd2aWV3Jyk7XG4gIGlmIChjdXJyVmlldyA9PT0gJ2dhcmFnZScpIHtcbiAgICBjdXJyUGFnZSA9IGdldFN0YXRlKCdnYXJhZ2VQYWdlJyk7XG4gIH0gZWxzZSB7XG4gICAgY3VyclBhZ2UgPSBnZXRTdGF0ZSgnd2lubmVyc1BhZ2UnKTtcbiAgfVxuICBsZXQgcHJldlBhZ2U6IG51bWJlciA9IDA7XG4gIGlmIChjdXJyUGFnZSA+IDEpIHtcbiAgICBwcmV2UGFnZSA9IGN1cnJQYWdlIC0gMTtcbiAgICBjdXJyVmlldyA9PT0gJ2dhcmFnZScgPyBzZXRHYXJhZ2VQYWdlKHByZXZQYWdlKTogc2V0V2lubmVyc1BhZ2UocHJldlBhZ2UpO1xuICAgIGlmIChuZXh0UGFnZUJ0bj8uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmFjdGl2ZScpKSBuZXh0UGFnZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpbmFjdGl2ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgY29uc3QgcHJldlBhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldkJ1dHRvbicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICBjb25zdCBuZXh0UGFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGxldCBjdXJyUGFnZTogbnVtYmVyID0gMDtcbiAgbGV0IHRvdGFsUGFnZXNWaWV3OiBudW1iZXIgPSAwO1xuICBjb25zdCBjdXJyVmlldyA9IGdldFN0YXRlKCd2aWV3Jyk7XG4gIGlmIChjdXJyVmlldyA9PT0gJ2dhcmFnZScpIHtcbiAgICBjdXJyUGFnZSA9IGdldFN0YXRlKCdnYXJhZ2VQYWdlJyk7XG4gICAgdG90YWxQYWdlc1ZpZXcgPSBnZXRTdGF0ZSgndG90YWxQYWdlc0dhcmFnZScpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJQYWdlID0gZ2V0U3RhdGUoJ3dpbm5lcnNQYWdlJyk7XG4gICAgdG90YWxQYWdlc1ZpZXcgPSBnZXRTdGF0ZSgndG90YWxQYWdlc1dpbm5lcnMnKTtcbiAgfVxuICBsZXQgbmV4dFBhZ2U6IG51bWJlciA9IDA7XG4gIGlmIChjdXJyUGFnZSA8IHRvdGFsUGFnZXNWaWV3KSB7XG4gICAgbmV4dFBhZ2UgPSBjdXJyUGFnZSArIDE7XG4gICAgY3VyclZpZXcgPT09ICdnYXJhZ2UnID8gc2V0R2FyYWdlUGFnZShuZXh0UGFnZSk6IHNldFdpbm5lcnNQYWdlKG5leHRQYWdlKTtcbiAgICBpZiAocHJldlBhZ2VCdG4/LmNsYXNzTGlzdC5jb250YWlucygnaW5hY3RpdmUnKSkgcHJldlBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICBpZiAobmV4dFBhZ2UgPT09IHRvdGFsUGFnZXNWaWV3KSBuZXh0UGFnZUJ0bi5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb1RvR2FyYWdlKCkge1xuICBzZXRWaWV3KCdnYXJhZ2UnKTtcbiAgcmVuZGVyVmlldygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29Ub1dpbm5lcnMoKSB7XG4gIHNldFZpZXcoJ3dpbm5lcnMnKTtcbiAgcmVuZGVyVmlldygpO1xufSIsImltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyByZW1vdmVDYXJGcm9tTGlzdCwgdXBkYXRlQ2FyTGlzdCwgdXBkYXRlQ2FyTGlzdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0XCI7XG5pbXBvcnQgeyBnZXRDYXJzIH0gZnJvbSBcIi4uL3JlcXVlc3RzL3JlcXVlc3RzXCI7XG5pbXBvcnQgeyB1cGRhdGVUb3RhbENhcnMsIHVwZGF0ZUN1cnJQYWdlIH0gZnJvbSBcIi4uL3ZpZXdzL2dhcmFnZVwiO1xuaW1wb3J0IHsgdXBkYXRlVG90YWxXaW5uZXJzIH0gZnJvbSBcIi4uL3ZpZXdzL3dpbm5lcnNcIjtcblxuY29uc3Qgc3RhdGU6IEFwcFN0YXRlID0ge1xuICB2aWV3OiAnZ2FyYWdlJyxcbiAgY2FyczogW10sXG4gIHdpbm5lcnM6IFtdLFxuICBnYXJhZ2VQYWdlOiAxLFxuICB3aW5uZXJzUGFnZTogMSxcbiAgdG90YWxDYXJzOiAwLFxuICB0b3RhbFdpbm5lcnM6IDAsXG4gIHRvdGFsUGFnZXNHYXJhZ2U6IDAsXG4gIHRvdGFsUGFnZXNXaW5uZXJzOiAwLFxuICBsaW1pdENhcnM6IDcsXG4gIGxpbWl0V2lubmVyczogMTAsXG4gIHNlbGVjdElkOiBudWxsLFxuICByZW1vdmVJZDogbnVsbCxcbiAgc29ydGluZ09yZGVyOiAnYXNjJyxcbiAgc29ydEJ5OiAndGltZScsXG4gIGdldFN0YXRlKHByb3ApIHtcbiAgICByZXR1cm4gdGhpc1twcm9wXTtcbiAgfSxcbiAgc2V0Vmlldyh2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfSxcbiAgc2V0Q2FycyhjYXIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYXIpKSB7XG4gICAgICB0aGlzLmNhcnMgPSBjYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2Fycy5wdXNoKGNhcik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhcnMubGVuZ3RoIDw9IHRoaXMubGltaXRDYXJzKSB7XG4gICAgICB1cGRhdGVDYXJMaXN0KGNhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHRQYWdlID0gdGhpcy5nYXJhZ2VQYWdlICsgMTtcbiAgICAgIHRoaXMuc2V0R2FyYWdlUGFnZShuZXh0UGFnZSk7XG4gICAgfVxuICB9LFxuICBzZXRVcGRhdGVkQ2FyKHVwZGF0ZWRDYXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2Fycy5maW5kSW5kZXgoKGNhcikgPT4gY2FyLmlkID09PSB1cGRhdGVkQ2FyLmlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmNhcnNbaW5kZXhdID0gdXBkYXRlZENhcjtcbiAgICAgIHVwZGF0ZUNhckxpc3RJdGVtKHVwZGF0ZWRDYXIpO1xuICAgIH1cbiAgfSxcbiAgc2V0V2lubmVycyh3aW5uZXIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh3aW5uZXIpKSB7XG4gICAgICB0aGlzLndpbm5lcnMgPSB3aW5uZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2lubmVycy5wdXNoKHdpbm5lcik7XG4gICAgfVxuICB9LFxuICBzZXRUb3RhbCh0b3RhbCwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSAnY2FycycpIHtcbiAgICAgIHRoaXMudG90YWxDYXJzID0gdG90YWw7XG4gICAgICB0aGlzLnNldFRvdGFsUGFnZXNHYXJhZ2UoKTtcbiAgICAgIHVwZGF0ZVRvdGFsQ2FycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsV2lubmVycyA9IHRvdGFsO1xuICAgICAgdGhpcy5zZXRUb3RhbFBhZ2VzV2lubmVycygpO1xuICAgICAgdXBkYXRlVG90YWxXaW5uZXJzKCk7XG4gICAgfVxuICB9LFxuICBzZXRUb3RhbFBhZ2VzR2FyYWdlKCkge1xuICAgIHRoaXMudG90YWxQYWdlc0dhcmFnZSA9IE1hdGguY2VpbCh0aGlzLnRvdGFsQ2FycyAvIHRoaXMubGltaXRDYXJzKTtcbiAgfSxcbiAgc2V0VG90YWxQYWdlc1dpbm5lcnMoKSB7XG4gICAgdGhpcy50b3RhbFBhZ2VzV2lubmVycyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsV2lubmVycyAvIHRoaXMubGltaXRXaW5uZXJzKTtcbiAgfSxcbiAgc2V0R2FyYWdlUGFnZShwYWdlKSB7XG4gICAgdGhpcy5nYXJhZ2VQYWdlID0gcGFnZTtcbiAgICB1cGRhdGVDdXJyUGFnZSgnZ2FyYWdlUGFnZScpO1xuICAgIGdldENhcnMoKTtcbiAgfSxcbiAgc2V0V2lubmVyc1BhZ2UocGFnZSkge1xuICAgIHRoaXMud2lubmVyc1BhZ2UgPSBwYWdlO1xuICAgIHVwZGF0ZUN1cnJQYWdlKCd3aW5uZXJzUGFnZScpO1xuICAgIGdldENhcnMoKTtcbiAgfSxcbiAgc2V0SWQoaWQsIHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHRoaXMuc2VsZWN0SWQgPSBpZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVJZCA9IGlkO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNhcnMuZmluZEluZGV4KChjYXIpID0+IGNhci5pZCA9PT0gdGhpcy5yZW1vdmVJZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuY2Fycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZW1vdmVDYXJGcm9tTGlzdCh0aGlzLnJlbW92ZUlkKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNhcnMubGVuZ3RoID09PSAwICYmIHRoaXMuZ2FyYWdlUGFnZSA+IDEpIHtcbiAgICAgICAgY29uc3QgcHJldlBhZ2UgPSB0aGlzLmdhcmFnZVBhZ2UgLSAxO1xuICAgICAgICB0aGlzLnNldEdhcmFnZVBhZ2UocHJldlBhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc2V0U29ydGluZ09yZGVyKG9yZGVyKSB7XG4gICAgdGhpcy5zb3J0aW5nT3JkZXIgPSBvcmRlcjtcbiAgfSxcbiAgc2V0U29ydEJ5KHR5cGUpIHtcbiAgICB0aGlzLnNvcnRCeSA9IHR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRlID0gc3RhdGUuZ2V0U3RhdGUuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0VmlldyA9IHN0YXRlLnNldFZpZXcuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0Q2FycyA9IHN0YXRlLnNldENhcnMuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0VXBkYXRlZENhciA9IHN0YXRlLnNldFVwZGF0ZWRDYXIuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0V2lubmVycyA9IHN0YXRlLnNldFdpbm5lcnMuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0VG90YWwgPSBzdGF0ZS5zZXRUb3RhbC5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFBhZ2VzR2FyYWdlID0gc3RhdGUuc2V0VG90YWxQYWdlc0dhcmFnZS5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRUb3RhbFBhZ2VzV2lubmVycyA9IHN0YXRlLnNldFRvdGFsUGFnZXNXaW5uZXJzLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldEdhcmFnZVBhZ2UgPSBzdGF0ZS5zZXRHYXJhZ2VQYWdlLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFdpbm5lcnNQYWdlID0gc3RhdGUuc2V0V2lubmVyc1BhZ2UuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0SWQgPSBzdGF0ZS5zZXRJZC5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRTb3J0aW5nT3JkZXIgPSBzdGF0ZS5zZXRTb3J0aW5nT3JkZXIuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0U29ydEJ5ID0gc3RhdGUuc2V0U29ydEJ5LmJpbmQoc3RhdGUpOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IGNsZWFuRm9ybSwgaW5wdXRGaWVsZCwgZm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybSc7XG5pbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCB7IGNyZWF0ZUNhciwgZ2VuZXJhdGVDYXJzLCBnZXRDYXJzLCByZXNldENhcnMsIHN0YXJ0UmFjZSwgdXBkYXRlQ2FyIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdHMnO1xuaW1wb3J0IHsgbmV4dFBhZ2UsIHByZXZQYWdlIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdvVG9HYXJhZ2UsIGdvVG9XaW5uZXJzIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhcmFnZSgpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IG1haW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBkaXZXaXRoVmlld05hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRpdldpdGhSYWNlQW5kR2VuZXJhdG9yOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWN0aW9uV2l0aEZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBzZWN0aW9uV2l0aExpc3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBkaXZXaXRoUGFnZU5hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uYXBwZW5kKGRpdldpdGhWaWV3TmF2aWdhdGlvbiwgc2VjdGlvbldpdGhGb3JtLCBzZWN0aW9uV2l0aExpc3QsIGRpdldpdGhQYWdlTmF2aWdhdGlvbik7XG4gIC8vIENyZWF0ZSBidXR0b25zIHRvIHN3aXRjaCB2aWV3c1xuICBjb25zdCBnYXJhZ2VCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ2dhcmFnZScsIG9uQ2xpY2s6IGdvVG9HYXJhZ2UsIGNsYXNzTmFtZTogJ2dhcmFnZUJ0bicgfSk7XG4gIGNvbnN0IHdpbm5lcnNCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3dpbm5lcnMnLCBvbkNsaWNrOiBnb1RvV2lubmVycywgY2xhc3NOYW1lOiAnd2lubmVyc0J0bicgfSk7XG4gIGRpdldpdGhWaWV3TmF2aWdhdGlvbi5hcHBlbmQoZ2FyYWdlQnRuLCB3aW5uZXJzQnRuKTtcbiAgLy8gQ3JlYXRlIGZvcm0gdG8gY3JlYXRlIGEgY2FyXG4gIGNvbnN0IGlucHV0RmllbGRzMSA9IGNyZWF0ZUNhcklucHV0cygpO1xuICBjb25zdCBjcmVhdGVDYXJGb3JtID0gZm9ybSh7IGZvcm1TdWJtaXRGdW46IGNyZWF0ZUNhciwgY2xlYW5Gb3JtRnVuOiAoKSA9PiBjbGVhbkZvcm0oJ2NyZWF0ZU5hbWUnLCAnY3JlYXRlQ29sb3InKSwgaW5wdXRGaWVsZHM6IGlucHV0RmllbGRzMSwgYnRuVGV4dDogJ2NyZWF0ZScgfSk7XG4gIHNlY3Rpb25XaXRoRm9ybS5hcHBlbmQoY3JlYXRlQ2FyRm9ybSk7XG4gIC8vIENyZWF0ZSBmb3JtIHRvIHVwZGF0ZSBhIGNhclxuICBjb25zdCBpbnB1dEZpZWxkczIgPSB1cGRhdGVDYXJJbnB1dHMoKTtcbiAgY29uc3QgdXBkYXRlQ2FyRm9ybSA9IGZvcm0oeyBmb3JtU3VibWl0RnVuOiB1cGRhdGVDYXIsIGNsZWFuRm9ybUZ1bjogKCkgPT4gY2xlYW5Gb3JtKCd1cGRhdGVOYW1lJywgJ3VwZGF0ZUNvbG9yJyksIGlucHV0RmllbGRzOiBpbnB1dEZpZWxkczIsIGJ0blRleHQ6ICd1cGRhdGUnIH0pO1xuICBzZWN0aW9uV2l0aEZvcm0uYXBwZW5kKHVwZGF0ZUNhckZvcm0pO1xuICAvLyBDcmVhdGUgcmFjZSwgcmVzZXQsIGdlbmVyYXRlIGNhcnMgYnV0dG9uXG4gIGNvbnN0IHJhY2VCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3JhY2UnLCBvbkNsaWNrOiBzdGFydFJhY2UsIGNsYXNzTmFtZTogJ3JhY2VCdG4nIH0pO1xuICBjb25zdCByZXNldEJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAncmVzZXQnLCBvbkNsaWNrOiByZXNldENhcnMsIGNsYXNzTmFtZTogJ3Jlc2V0QnRuJyB9KTtcbiAgY29uc3QgZ2VuZXJhdGVDYXJzQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdnZW5lcmF0ZScsIG9uQ2xpY2s6IGdlbmVyYXRlQ2FycywgY2xhc3NOYW1lOiAnZ2VuZXJhdGVCdG4nIH0pO1xuICBkaXZXaXRoUmFjZUFuZEdlbmVyYXRvci5hcHBlbmQocmFjZUJ0biwgcmVzZXRCdG4sIGdlbmVyYXRlQ2Fyc0J0bik7XG4gIHNlY3Rpb25XaXRoRm9ybS5hcHBlbmQoZGl2V2l0aFJhY2VBbmRHZW5lcmF0b3IpO1xuICAvLyBDcmVhdGUgbGlzdFxuICBjb25zdCBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0dhcmFnZSc7XG4gIGNvbnN0IHRvdGFsQ2FyczogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGN1cnJlbnRQYWdlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG90YWxDYXJzLnRleHRDb250ZW50ID0gYFRvdGFsIGNhcnM6ICR7Z2V0U3RhdGUoJ3RvdGFsQ2FycycpfWA7XG4gIHRvdGFsQ2Fycy5jbGFzc05hbWUgPSAndG90YWxDYXJzJztcbiAgY3VycmVudFBhZ2UudGV4dENvbnRlbnQgPSBgQ3VycmVudCBwYWdlOiAke2dldFN0YXRlKCdnYXJhZ2VQYWdlJyl9YDtcbiAgY3VycmVudFBhZ2UuY2xhc3NOYW1lID0gJ2N1cnJlbnRQYWdlJztcbiAgY29uc3QgbXlDYXJzTGlzdCA9IGxpc3QoeyB0eXBlOiAndWwnLCBjbGFzc05hbWU6ICdjYXJMaXN0JyB9KTtcbiAgc2VjdGlvbldpdGhMaXN0LmFwcGVuZChoZWFkaW5nLCB0b3RhbENhcnMsIGN1cnJlbnRQYWdlLCBteUNhcnNMaXN0KTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gbmF2aWdhdGUgYmV0d2VlbiBsaXN0IHBhZ2VzXG4gIGNvbnN0IHByZXZCdXR0b24gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3ByZXYnLCBvbkNsaWNrOiBwcmV2UGFnZSwgY2xhc3NOYW1lOiAncHJldkJ1dHRvbicgfSk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ25leHQnLCBvbkNsaWNrOiBuZXh0UGFnZSwgY2xhc3NOYW1lOiAnbmV4dEJ1dHRvbicgfSk7XG4gIGRpdldpdGhQYWdlTmF2aWdhdGlvbi5hcHBlbmQocHJldkJ1dHRvbiwgbmV4dEJ1dHRvbik7XG4gIC8vIEZpbGwgdGhlIGNhciBsaXN0XG4gIGdldENhcnMoKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbENhcnMoKTogdm9pZCB7XG4gIGNvbnN0IHRvdGFsQ2FyczogSFRNTFBhcmFncmFwaEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsQ2FycycpO1xuICBpZiAodG90YWxDYXJzKSB0b3RhbENhcnMudGV4dENvbnRlbnQgPSBgVG90YWwgY2FyczogJHtnZXRTdGF0ZSgndG90YWxDYXJzJyl9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUN1cnJQYWdlKHZpZXdQYWdlOiAnZ2FyYWdlUGFnZScgfCAnd2lubmVyc1BhZ2UnKTogdm9pZCB7XG4gIGNvbnN0IGN1cnJQYWdlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFBhZ2UnKTtcbiAgaWYgKGN1cnJQYWdlKSBjdXJyUGFnZS50ZXh0Q29udGVudCA9IGBDdXJyZW50IHBhZ2U6ICR7Z2V0U3RhdGUoYCR7dmlld1BhZ2V9YCl9YDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FySW5wdXRzKCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XG4gIGNvbnN0IGlucHV0RmllbGRzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXTtcbiAgY29uc3QgdGV4dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICd0ZXh0JywgY2xhc3NOYW1lOiAnY3JlYXRlTmFtZScgfSk7XG4gIGNvbnN0IGNvbG9yRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAnY3JlYXRlQ29sb3InIH0pO1xuICBpbnB1dEZpZWxkcy5wdXNoKHRleHRGaWVsZCwgY29sb3JGaWVsZCk7XG4gIHJldHVybiBpbnB1dEZpZWxkcztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FySW5wdXRzKCk6IEhUTUxJbnB1dEVsZW1lbnRbXSB7XG4gIGNvbnN0IGlucHV0RmllbGRzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXTtcbiAgY29uc3QgaGlkZGVuSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ2hpZGRlbicsIGNsYXNzTmFtZTogJ3VwZGF0ZUlkJyB9KTtcbiAgY29uc3QgdGV4dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICd0ZXh0JywgY2xhc3NOYW1lOiAndXBkYXRlTmFtZScgfSk7XG4gIGNvbnN0IGNvbG9yRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBpbnB1dEZpZWxkKHsgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjZmZmZmZmJywgY2xhc3NOYW1lOiAndXBkYXRlQ29sb3InIH0pO1xuICBpbnB1dEZpZWxkcy5wdXNoKGhpZGRlbklucHV0LCB0ZXh0RmllbGQsIGNvbG9yRmllbGQpO1xuICByZXR1cm4gaW5wdXRGaWVsZHM7XG59XG4iLCJpbXBvcnQgeyBnZXRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3N0YXRlcyc7XG5pbXBvcnQgeyByZW5kZXJHYXJhZ2UgfSBmcm9tICcuL2dhcmFnZSc7XG5pbXBvcnQgeyByZW5kZXJXaW5uZXJzIH0gZnJvbSAnLi93aW5uZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclZpZXcoKSB7XG4gIGNvbnN0IHZpZXcgPSBnZXRTdGF0ZSgndmlldycpO1xuICBjb25zdCBib2R5OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gIGJvZHkuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBjb250ZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGlmICh2aWV3ID09PSAnZ2FyYWdlJykge1xuICAgIGNvbnRlbnQgPSByZW5kZXJHYXJhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gcmVuZGVyV2lubmVycygpO1xuICB9XG4gIGJvZHkuYXBwZW5kKGNvbnRlbnQpO1xufVxuIiwiaW1wb3J0IHsgYnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBuZXh0UGFnZSwgcHJldlBhZ2UgfSBmcm9tIFwiLi4vcm91dGluZy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBnb1RvR2FyYWdlLCBnb1RvV2lubmVycyB9IGZyb20gXCIuLi9yb3V0aW5nL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL3N0YXRlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2lubmVycygpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IG1haW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBkaXZXaXRoVmlld05hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlY3Rpb25XaXRoVGFibGU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBkaXZXaXRoUGFnZU5hdmlnYXRpb246IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uYXBwZW5kKGRpdldpdGhWaWV3TmF2aWdhdGlvbiwgc2VjdGlvbldpdGhUYWJsZSwgZGl2V2l0aFBhZ2VOYXZpZ2F0aW9uKTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gc3dpdGNoIHZpZXdzXG4gIGNvbnN0IGdhcmFnZUJ0biA9IGJ1dHRvbih7dHlwZTogJ2J1dHRvbicsIHRleHQ6ICdnYXJhZ2UnLCBvbkNsaWNrOiBnb1RvR2FyYWdlLCBjbGFzc05hbWU6ICdnYXJhZ2VCdG4nfSk7XG4gIGNvbnN0IHdpbm5lcnNCdG4gPSBidXR0b24oe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAnd2lubmVycycsIG9uQ2xpY2s6IGdvVG9XaW5uZXJzLCBjbGFzc05hbWU6ICd3aW5uZXJzQnRuJ30pO1xuICBkaXZXaXRoVmlld05hdmlnYXRpb24uYXBwZW5kKGdhcmFnZUJ0biwgd2lubmVyc0J0bik7XG4gIC8vIENyZWF0ZSB0YWJsZVxuICBjb25zdCBoZWFkaW5nOiBIVE1MSGVhZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dpbm5lcnMnO1xuICBjb25zdCB0b3RhbFdpbm5lcnM6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBjdXJyZW50UGFnZTogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvdGFsV2lubmVycy50ZXh0Q29udGVudCA9IGBUb3RhbCB3aW5uZXJzOiAke2dldFN0YXRlKCd0b3RhbFdpbm5lcnMnKX1gO1xuICB0b3RhbFdpbm5lcnMuY2xhc3NOYW1lID0gJ3RvdGFsV2lubmVycyc7XG4gIGN1cnJlbnRQYWdlLnRleHRDb250ZW50ID0gYEN1cnJlbnQgcGFnZTogJHtnZXRTdGF0ZSgnd2lubmVyc1BhZ2UnKX1gO1xuICBjdXJyZW50UGFnZS5jbGFzc05hbWUgPSAnY3VycmVudFBhZ2UnO1xuICBzZWN0aW9uV2l0aFRhYmxlLmFwcGVuZChoZWFkaW5nLCB0b3RhbFdpbm5lcnMsIGN1cnJlbnRQYWdlKTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gbmF2aWdhdGUgYmV0d2VlbiBsaXN0IHBhZ2VzXG4gIGNvbnN0IHByZXZCdXR0b24gPSBidXR0b24oe3R5cGU6ICdidXR0b24nLCB0ZXh0OiAncHJldicsIG9uQ2xpY2s6IHByZXZQYWdlLCBjbGFzc05hbWU6ICdwcmV2QnV0dG9uJ30pO1xuICBjb25zdCBuZXh0QnV0dG9uID0gYnV0dG9uKHt0eXBlOiAnYnV0dG9uJywgdGV4dDogJ25leHQnLCBvbkNsaWNrOiBuZXh0UGFnZSwgY2xhc3NOYW1lOiAnbmV4dEJ1dHRvbid9KTtcbiAgZGl2V2l0aFBhZ2VOYXZpZ2F0aW9uLmFwcGVuZChwcmV2QnV0dG9uLCBuZXh0QnV0dG9uKTtcbiAgLy8gRmlsbCB0aGUgdGFibGVcbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbFdpbm5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgdG90YWxXaW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsV2lubmVycycpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xuICAgIHRvdGFsV2lubmVycy50ZXh0Q29udGVudCA9IGBUb3RhbCB3aW5uZXJzOiAke2dldFN0YXRlKCd0b3RhbFdpbm5lcnMnKX1gO1xuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gJy4vdmlld3Mvdmlldy1tYW5hZ2VyJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgcmVuZGVyVmlldygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=