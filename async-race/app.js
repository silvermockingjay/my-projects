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

.startEngine {
  background-color: #2ecc71 ;
  color: #ffffff;
}
.stopEngine {
  background-color: #FF4433;
  color: #ffffff;
}

button:disabled {
  background-color: #D3D3D3;
  color: #000000;
  cursor: none;
}




`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0BAA0B;EAC1B,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,YAAY;AACd","sourcesContent":["main {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nul li {\n  list-style: none;\n}\n.carList {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 0;\n}\n.liContainer {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-bottom: dashed black 2px;\n}\n\n.upperPartContainer {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n}\n\n.lowerPartContainer {\n  display: flex;\n  flex-direction: row;\n}\n\n.group {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 90%;\n  gap: 5px;\n}\n\n.imgFlag {\n  width: 10%;\n}\n\n.startEngine {\n  background-color: #2ecc71 ;\n  color: #ffffff;\n}\n.stopEngine {\n  background-color: #FF4433;\n  color: #ffffff;\n}\n\nbutton:disabled {\n  background-color: #D3D3D3;\n  color: #000000;\n  cursor: none;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/components/div_span.ts":
/*!************************************!*\
  !*** ./src/components/div_span.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   divElem: () => (/* binding */ divElem),
/* harmony export */   spanElem: () => (/* binding */ spanElem)
/* harmony export */ });
const divElem = ({ className, text }) => {
    const elem = document.createElement('div');
    if (className)
        elem.className = className;
    if (text)
        elem.textContent = text;
    return elem;
};
const spanElem = ({ className, text }) => {
    const elem = document.createElement('span');
    if (className)
        elem.className = className;
    if (text)
        elem.textContent = text;
    return elem;
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
        if (input?.type === 'color') {
            input.value = '#ffffff';
        }
        else if (input?.type === 'checkbox' || input?.type === 'radio') {
            input.checked = false;
        }
        else if (input) {
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
/* harmony export */   animateCar: () => (/* binding */ animateCar),
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   listItem: () => (/* binding */ listItem),
/* harmony export */   listItemBtns: () => (/* binding */ listItemBtns),
/* harmony export */   removeCarFromList: () => (/* binding */ removeCarFromList),
/* harmony export */   resetCar: () => (/* binding */ resetCar),
/* harmony export */   stopCar: () => (/* binding */ stopCar),
/* harmony export */   updateCarList: () => (/* binding */ updateCarList),
/* harmony export */   updateCarListItem: () => (/* binding */ updateCarListItem)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");
/* harmony import */ var _div_span__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./div_span */ "./src/components/div_span.ts");




const listItemBtns = (car) => {
    const selectBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({
        type: 'button',
        text: 'select',
        onClick: () => {
            (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.selectCar)(car);
        },
    });
    const removeBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({
        type: 'button',
        text: 'remove',
        onClick: () => {
            (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.removeCar)(car.id);
        },
    });
    const startBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({
        type: 'button',
        text: 'A',
        onClick: () => {
            (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.startStopCarEngine)(car.id, 'started');
        },
        className: 'startEngine',
    });
    const stopBtn = (0,_button__WEBPACK_IMPORTED_MODULE_0__.button)({
        type: 'button',
        text: 'B',
        onClick: () => {
            (0,_requests_requests__WEBPACK_IMPORTED_MODULE_1__.startStopCarEngine)(car.id, 'stopped');
        },
        className: 'stopEngine',
    });
    return [selectBtn, removeBtn, startBtn, stopBtn];
};
const listItem = (car, className) => {
    const li = document.createElement('li');
    li.dataset.id = `${car.id}`;
    if (className)
        li.className = className;
    const div = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.divElem)({ className: 'liContainer' });
    li.append(div);
    const upperPart = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.divElem)({ className: 'upperPartContainer' });
    const lowerPart = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.divElem)({ className: 'lowerPartContainer' });
    div.append(upperPart, lowerPart);
    const [selectCarBtn, removeCarBtn, startEngineBtn, stopEngineBtn] = listItemBtns(car);
    stopEngineBtn.disabled = true;
    const carName = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.spanElem)({ className: 'carName', text: car.name });
    upperPart.append(selectCarBtn, removeCarBtn, carName);
    const group = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.divElem)({ className: 'group' });
    const imgCar = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.divElem)({ className: 'imgCar' });
    imgCar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
    const imgFlag = (0,_div_span__WEBPACK_IMPORTED_MODULE_3__.divElem)({ className: 'imgFlag' });
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
    const list = document.createElement(type);
    if (className)
        list.className = className;
    if (Array.isArray(listItems)) {
        list.append(...listItems);
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
const animateCar = ({ id, velocity, distance }) => {
    const carItem = document.querySelector(`[data-id='${id}']`);
    if (carItem) {
        const imgCar = carItem.querySelector('.imgCar');
        const imgFlag = carItem.querySelector('.imgFlag');
        if (imgCar && imgFlag) {
            const time = distance / velocity;
            const rectFlag = imgFlag.getBoundingClientRect();
            const rectCar = imgCar.getBoundingClientRect();
            const distanceToFlag = rectFlag.left - rectCar.left + rectCar.width;
            const animation = imgCar.animate([{ transform: 'translateX(0px)' }, { transform: `translateX(${distanceToFlag}px)` }], {
                duration: time,
                iterations: 1,
                fill: 'forwards',
                easing: 'linear',
            });
            (0,_state_states__WEBPACK_IMPORTED_MODULE_2__.setAnimations)(id, animation);
            animation.play();
            const startBtn = carItem.querySelector('.startEngine');
            const stopBtn = carItem.querySelector('.stopEngine');
            if (startBtn)
                startBtn.disabled = true;
            if (stopBtn)
                stopBtn.disabled = false;
        }
    }
};
const stopCar = (id) => {
    const animations = (0,_state_states__WEBPACK_IMPORTED_MODULE_2__.getState)('animations');
    const animation = animations.get(id);
    if (animation)
        animation.pause();
};
const resetCar = (id) => {
    const animations = (0,_state_states__WEBPACK_IMPORTED_MODULE_2__.getState)('animations');
    const animation = animations.get(id);
    if (animation)
        animation.cancel();
    const carItem = document.querySelector(`[data-id='${id}']`);
    if (carItem) {
        const startBtn = carItem.querySelector('.startEngine');
        const stopBtn = carItem.querySelector('.stopEngine');
        if (startBtn)
            startBtn.disabled = false;
        if (stopBtn)
            stopBtn.disabled = true;
    }
};


/***/ }),

/***/ "./src/components/paragraph.ts":
/*!*************************************!*\
  !*** ./src/components/paragraph.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pElem: () => (/* binding */ pElem)
/* harmony export */ });
const pElem = ({ className, text }) => {
    const elem = document.createElement('p');
    if (className)
        elem.className = className;
    if (text)
        elem.textContent = text;
    return elem;
};


/***/ }),

/***/ "./src/components/table.ts":
/*!*********************************!*\
  !*** ./src/components/table.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeWinnerFromTable: () => (/* binding */ removeWinnerFromTable),
/* harmony export */   table: () => (/* binding */ table),
/* harmony export */   tableRow: () => (/* binding */ tableRow),
/* harmony export */   updateWinnerRow: () => (/* binding */ updateWinnerRow),
/* harmony export */   updateWinnerTable: () => (/* binding */ updateWinnerTable)
/* harmony export */ });
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");

const tableRow = ({ winner, car, className }) => {
    const tr = document.createElement('tr');
    if (className)
        tr.className = className;
    tr.dataset.id = `${winner.id}`;
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    td1.className = 'countNum';
    td1.textContent = `${(0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('currWinnerNum')}`;
    td2.className = 'carImg';
    td2.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21.739 10.921c-1.347-.39-1.885-.538-3.552-.921 0 0-2.379-2.359-2.832-2.816-.568-.572-1.043-1.184-2.949-1.184h-7.894c-.511 0-.736.547-.07 1-.742.602-1.619 1.38-2.258 2.027-1.435 1.455-2.184 2.385-2.184 4.255 0 1.76 1.042 3.718 3.174 3.718h.01c.413 1.162 1.512 2 2.816 2 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2s2.403-.838 2.816-2h.685c1.994 0 2.5-1.776 2.5-3.165 0-2.041-1.123-2.584-2.261-2.914zm-15.739 6.279c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm3.576-6.2c-1.071 0-3.5-.106-5.219-.75.578-.75.998-1.222 1.27-1.536.318-.368.873-.714 1.561-.714h2.388v3zm1-3h1.835c.882 0 1.428.493 2.022 1.105.452.466 1.732 1.895 1.732 1.895h-5.588v-3zm7.424 9.2c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2z" fill=${car.color} class='svgCar'/>
    </svg>
  `;
    td3.className = 'carName';
    td3.textContent = car.name;
    td4.className = 'carWins';
    td4.textContent = `${winner.wins}`;
    td5.textContent = `${winner.time}`;
    td5.className = 'carTime';
    tr.append(td1, td2, td3, td4, td5);
    return tr;
};
const table = ({ tableRows, className }) => {
    const tableElem = document.createElement('table');
    if (className)
        tableElem.className = className;
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    tbody.className = 'tableBody';
    const headers = [];
    const totalCol = 5;
    for (let i = 0; i < totalCol; i++) {
        const th = document.createElement('th');
        headers.push(th);
    }
    const headerNames = ['Number', 'Car', 'Name', 'Wins', 'Best time, s'];
    headers.forEach((item, index) => {
        item.textContent = headerNames[index] ?? '';
    });
    thead.append(...headers);
    if (Array.isArray(tableRows)) {
        tbody.append(...tableRows);
    }
    else if (tableRows) {
        tbody.append(tableRows);
    }
    tableElem.append(thead, tbody);
    return tableElem;
};
const updateWinnerTable = (winner, car) => {
    const tbody = document.querySelector('tbody');
    if (tbody) {
        if (Array.isArray(winner) && Array.isArray(car)) {
            const tableRows = winner.map((item, index) => {
                const defaultCar = {
                    id: 0,
                    name: 'noName',
                    color: '#000000',
                };
                const myCar = car[index] ?? defaultCar;
                return tableRow({ winner: item, car: myCar });
            });
            tbody.innerHTML = '';
            tbody.append(...tableRows);
        }
        else if (!Array.isArray(winner) && !Array.isArray(car)) {
            const tableRowElem = tableRow({ winner: winner, car: car });
            tbody.append(tableRowElem);
        }
    }
};
const updateWinnerRow = (winner) => {
    const tableRow = document.querySelector(`[data-id='${winner.id}']`);
    if (tableRow) {
        const wins = tableRow.querySelector('.carWins');
        if (wins)
            wins.textContent = `${winner.wins}`;
        const time = tableRow.querySelector('.carTime');
        if (time)
            time.textContent = `${winner.time}`;
    }
};
const removeWinnerFromTable = (id) => {
    const tbody = document.querySelector('.tableBody');
    const trow = document.querySelector(`[data-id='${id}']`);
    if (tbody && trow)
        tbody.removeChild(trow);
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
/* harmony export */   getWinners: () => (/* binding */ getWinners),
/* harmony export */   removeCar: () => (/* binding */ removeCar),
/* harmony export */   removeWinner: () => (/* binding */ removeWinner),
/* harmony export */   resetCars: () => (/* binding */ resetCars),
/* harmony export */   selectCar: () => (/* binding */ selectCar),
/* harmony export */   startRace: () => (/* binding */ startRace),
/* harmony export */   startStopCarEngine: () => (/* binding */ startStopCarEngine),
/* harmony export */   updateCar: () => (/* binding */ updateCar)
/* harmony export */ });
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/list */ "./src/components/list.ts");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/table */ "./src/components/table.ts");



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
        if (error instanceof Error) {
            console.error('Failed to get cars:', error);
        }
    });
}
function generateCars() {
    const promises = createGeneratedCarsPromises();
    Promise.allSettled(promises)
        .then((results) => {
        const createdCars = [];
        let count = 0;
        const jsonPromises = results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return result.value
                    .json()
                    .then((data) => {
                    createdCars.push(data);
                    count += 1;
                })
                    .catch((error) => {
                    if (error instanceof Error)
                        console.error(`Error parsing car ${index}`, error);
                });
            }
            else {
                console.error(`Failed to create a car ${index}:`, result.reason);
            }
        });
        Promise.all(jsonPromises)
            .then(() => {
            const currentTotal = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalCars');
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(currentTotal + count, 'cars');
            getCars();
        })
            .catch((error) => {
            if (error instanceof Error)
                console.error('Failed to update total amount of cars', error);
        });
    })
        .catch((error) => {
        if (error instanceof Error)
            console.error('Failed to create  cars', error);
    });
}
function createGeneratedCarsPromises() {
    const brands = ['BMW', 'Fiat', 'Ford', 'Hyundai', 'Kia', 'Lancia', 'Opel', 'Renault', 'Suzuki', 'Volvo'];
    const models = [
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
    return promises;
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
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to create a car');
        }
    });
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
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to update a car');
        }
    });
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
            removeWinner(id);
        }
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to delete a car');
        }
    });
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
const errors = {
    badRequest: 400,
    notFound: 404,
    manyRequests: 429,
    serverError: 500,
};
function startStopCarEngine(id, status) {
    const url = `http://localhost:3000/engine?id=${id}&status=${status}`;
    fetch(url, {
        method: 'PATCH',
    })
        .then((response) => {
        if (response.ok) {
            return response.json().then((data) => {
                if (status === 'started') {
                    (0,_components_list__WEBPACK_IMPORTED_MODULE_1__.animateCar)({ id: id, velocity: data.velocity, distance: data.distance });
                    driveCar(id).catch((error) => {
                        if (error instanceof Error) {
                            console.error('Failed to drive a car:', error);
                        }
                    });
                }
                else {
                    (0,_components_list__WEBPACK_IMPORTED_MODULE_1__.resetCar)(id);
                }
            });
        }
        else if (response.status === errors.badRequest) {
            throw new Error(`Wrong parameters: ${response.status}`);
        }
        else if (response.status === errors.notFound) {
            throw new Error(`Car is not found: ${response.status}`);
        }
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert("Failed to start/stop car's engine");
        }
    });
}
function driveCar(id) {
    const url = `http://localhost:3000/engine?id=${id}&status=drive`;
    return fetch(url, {
        method: 'PATCH',
    }).then((response) => {
        if (response.status === errors.badRequest) {
            throw new Error(`Wrong parameters: ${response.status}`);
        }
        else if (response.status === errors.notFound) {
            throw new Error(`Engine params are not found: ${response.status}`);
        }
        else if (response.status === errors.manyRequests) {
            throw new Error(`Drive in progress: ${response.status}`);
        }
        else if (response.status === errors.serverError) {
            (0,_components_list__WEBPACK_IMPORTED_MODULE_1__.stopCar)(id);
            throw new Error(`Car has been stopped suddenly. It's engine was broken down: ${response.status}`);
        }
        return response;
    });
}
function startRace() {
    getCars();
    const cars = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('cars');
    const promises = cars.map((car) => {
        const url = `http://localhost:3000/engine?id=${car.id}&status=started`;
        return fetch(url, { method: 'PATCH' });
    });
    const racers = [];
    Promise.allSettled(promises)
        .then((results) => {
        const racerPromises = [];
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                const racerPromise = result.value
                    .json()
                    .then((data) => {
                    const myCar = cars[index];
                    if (myCar) {
                        const racer = createRacerPromise(myCar, data.velocity, data.distance);
                        racers.push(racer);
                    }
                })
                    .catch((error) => {
                    if (error instanceof Error)
                        console.error('Failed to start race:', error);
                });
                racerPromises.push(racerPromise);
            }
            else
                console.error('Failed to start race', result.reason);
        });
        return Promise.all(racerPromises);
    })
        .then(() => {
        announceWinner(racers);
    })
        .catch((error) => {
        if (error instanceof Error)
            console.error('Failed to start race:', error);
    });
}
function createRacerPromise(car, velocity, distance) {
    return new Promise((resolve, reject) => {
        const time = distance / velocity;
        const racer = {
            id: car.id,
            name: car.name,
            time: time,
        };
        const idTimeout = setTimeout(() => {
            resolve(racer);
        }, time);
        (0,_components_list__WEBPACK_IMPORTED_MODULE_1__.animateCar)({ id: car.id, velocity: velocity, distance: distance });
        driveCar(car.id).catch((error) => {
            if (error instanceof Error) {
                clearTimeout(idTimeout);
                reject(error);
            }
        });
    });
}
function announceWinner(racers) {
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
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Failed to start race:', error);
        }
    });
}
function resetCars() {
    const cars = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('cars');
    const promises = cars.map((car) => {
        const url = `http://localhost:3000/engine?id=${car.id}&status=stopped`;
        return fetch(url, { method: 'PATCH' });
    });
    Promise.allSettled(promises)
        .then((results) => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                const myCar = cars[index];
                if (myCar) {
                    (0,_components_list__WEBPACK_IMPORTED_MODULE_1__.resetCar)(myCar.id);
                }
            }
            else {
                console.error('Failed to reset cars', result.reason);
            }
        });
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Failed to reset cars:', error);
        }
    });
}
function createWinner(winner) {
    fetch('http://localhost:3000/winners', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(winner),
    })
        .then((response) => response.json())
        .then((data) => {
        let total = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalWinners');
        total += 1;
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(total, 'winners');
        getCar(data.id)
            .then((value) => value.json())
            .then((car) => {
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setWinners)(winner, car);
        })
            .catch((error) => {
            if (error instanceof Error)
                console.error('Failed to get winner car data', error);
        });
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to create a winner');
        }
    });
}
function updateWinner(winner) {
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
        }
        else {
            throw new Error(`Winner is not found: ${response.status}`);
        }
    })
        .then((data) => {
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setUpdatedWinner)(data);
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to update a car');
        }
    });
}
function checkWinner(winner) {
    const url = `http://localhost:3000/winners/${winner.id}`;
    fetch(url, { method: 'GET' })
        .then((response) => {
        if (response.ok) {
            response
                .json()
                .then((data) => {
                const totalWins = data.wins + 1;
                const bestTime = Math.min(winner.time, data.time);
                const updatedWinner = {
                    id: data.id,
                    wins: totalWins,
                    time: bestTime,
                };
                updateWinner(updatedWinner);
            })
                .catch((error) => {
                if (error instanceof Error) {
                    console.error('Error', error);
                    alert('Failed to update a winner');
                }
            });
        }
        else {
            createWinner(winner);
        }
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to create/update a winner');
        }
    });
}
function getCar(id) {
    const url = `http://localhost:3000/garage/${id}`;
    return fetch(url, { method: 'GET' }).then((response) => {
        if (response.status === errors.notFound) {
            throw new Error(`Car params are not found: ${response.status}`);
        }
        return response;
    });
}
function getWinners() {
    const page = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('winnersPage');
    const limit = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('limitWinners');
    const sort = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('sortingOrder');
    const order = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('sortBy');
    const url = `http://localhost:3000/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
    fetch(url, { method: 'GET' })
        .then((response) => {
        const total = Number(response.headers.get('X-Total-Count'));
        (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(total, 'winners');
        return response.json();
    })
        .then((winners) => {
        const promises = winners.map((winner) => {
            return getCar(winner.id)
                .then((res) => (res.ok ? res.json() : undefined))
                .catch(() => undefined);
        });
        Promise.all(promises)
            .then((carsRaw) => {
            const cars = carsRaw.filter((car) => car !== undefined);
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setWinners)(winners, cars);
        })
            .catch((error) => {
            if (error instanceof Error) {
                console.error('Failed to get cars:', error);
            }
        });
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Failed to get winners:', error);
        }
    });
}
function removeWinner(id) {
    const url = `http://localhost:3000/winners/${id}`;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to delete a winner: ${response.status}`);
        }
        else {
            let total = (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.getState)('totalWinners');
            total -= 1;
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setTotal)(total, 'winners');
            (0,_components_table__WEBPACK_IMPORTED_MODULE_2__.removeWinnerFromTable)(id);
        }
    })
        .catch((error) => {
        if (error instanceof Error) {
            console.error('Error', error);
            alert('Failed to delete a winner');
        }
    });
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
        if (currView === 'garage') {
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setGaragePage)(prevPage);
        }
        else {
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setWinnersPage)(prevPage);
        }
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
        if (currView === 'garage') {
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setGaragePage)(nextPage);
        }
        else {
            (0,_state_states__WEBPACK_IMPORTED_MODULE_0__.setWinnersPage)(nextPage);
        }
        if (prevPageBtn?.classList.contains('inactive'))
            prevPageBtn.classList.remove('inactive');
        if (nextPage === totalPagesView)
            nextPageBtn?.classList.add('inactive');
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
/* harmony export */   setAnimations: () => (/* binding */ setAnimations),
/* harmony export */   setCars: () => (/* binding */ setCars),
/* harmony export */   setCurWinnerNum: () => (/* binding */ setCurWinnerNum),
/* harmony export */   setGaragePage: () => (/* binding */ setGaragePage),
/* harmony export */   setId: () => (/* binding */ setId),
/* harmony export */   setSortBy: () => (/* binding */ setSortBy),
/* harmony export */   setSortingOrder: () => (/* binding */ setSortingOrder),
/* harmony export */   setTotal: () => (/* binding */ setTotal),
/* harmony export */   setTotalPagesGarage: () => (/* binding */ setTotalPagesGarage),
/* harmony export */   setTotalPagesWinners: () => (/* binding */ setTotalPagesWinners),
/* harmony export */   setUpdatedCar: () => (/* binding */ setUpdatedCar),
/* harmony export */   setUpdatedWinner: () => (/* binding */ setUpdatedWinner),
/* harmony export */   setView: () => (/* binding */ setView),
/* harmony export */   setWinners: () => (/* binding */ setWinners),
/* harmony export */   setWinnersPage: () => (/* binding */ setWinnersPage)
/* harmony export */ });
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/list */ "./src/components/list.ts");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/table */ "./src/components/table.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _views_garage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/garage */ "./src/views/garage.ts");
/* harmony import */ var _views_winners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/winners */ "./src/views/winners.ts");





const notFoundIndex = -1;
const state = {
    view: 'garage',
    cars: [],
    winners: [],
    garagePage: 1,
    winnersPage: 1,
    totalCars: 0,
    totalWinners: 0,
    currWinnerNum: 1,
    totalPagesGarage: 0,
    totalPagesWinners: 0,
    limitCars: 7,
    limitWinners: 10,
    selectId: null,
    removeId: null,
    sortingOrder: 'ASC',
    sortBy: 'time',
    animations: new Map(),
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
        if (index !== notFoundIndex) {
            this.cars[index] = updatedCar;
            (0,_components_list__WEBPACK_IMPORTED_MODULE_0__.updateCarListItem)(updatedCar);
        }
    },
    setUpdatedWinner(updatedWinner) {
        const index = this.winners.findIndex((winner) => winner.id === updatedWinner.id);
        if (index !== notFoundIndex) {
            this.winners[index] = updatedWinner;
            (0,_components_table__WEBPACK_IMPORTED_MODULE_1__.updateWinnerRow)(updatedWinner);
        }
    },
    setWinners(winner, car) {
        if (Array.isArray(winner)) {
            this.winners = winner;
        }
        else {
            this.winners.push(winner);
        }
        if (this.winners.length <= this.limitWinners) {
            (0,_components_table__WEBPACK_IMPORTED_MODULE_1__.updateWinnerTable)(winner, car);
        }
        else {
            const nextPage = this.winnersPage + 1;
            this.setWinnersPage(nextPage);
        }
    },
    setCurWinnerNum(num) {
        this.currWinnerNum = num;
    },
    setTotal(total, prop) {
        if (prop === 'cars') {
            this.totalCars = total;
            this.setTotalPagesGarage();
            (0,_views_garage__WEBPACK_IMPORTED_MODULE_3__.updateTotalCars)();
        }
        else {
            this.totalWinners = total;
            this.setTotalPagesWinners();
            (0,_views_winners__WEBPACK_IMPORTED_MODULE_4__.updateTotalWinners)();
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
        (0,_views_garage__WEBPACK_IMPORTED_MODULE_3__.updateCurrPage)('garagePage');
        (0,_requests_requests__WEBPACK_IMPORTED_MODULE_2__.getCars)();
    },
    setWinnersPage(page) {
        this.winnersPage = page;
        (0,_views_garage__WEBPACK_IMPORTED_MODULE_3__.updateCurrPage)('winnersPage');
        (0,_requests_requests__WEBPACK_IMPORTED_MODULE_2__.getWinners)();
    },
    setId(id, type) {
        if (type === 'select') {
            this.selectId = id;
        }
        else {
            this.removeId = id;
            const index = this.cars.findIndex((car) => car.id === this.removeId);
            if (index !== notFoundIndex) {
                this.cars.splice(index, 1);
                (0,_components_list__WEBPACK_IMPORTED_MODULE_0__.removeCarFromList)(this.removeId);
            }
            if (!this.cars.length && this.garagePage > 1) {
                const prevPage = this.garagePage - 1;
                this.setGaragePage(prevPage);
            }
        }
    },
    setAnimations(id, animation) {
        this.animations.set(id, animation);
    },
    setSortingOrder(order) {
        this.sortingOrder = order;
    },
    setSortBy(type) {
        this.sortBy = type;
    },
};
const getState = state.getState.bind(state);
const setView = state.setView.bind(state);
const setCars = state.setCars.bind(state);
const setUpdatedCar = state.setUpdatedCar.bind(state);
const setWinners = state.setWinners.bind(state);
const setUpdatedWinner = state.setUpdatedWinner.bind(state);
const setCurWinnerNum = state.setCurWinnerNum.bind(state);
const setTotal = state.setTotal.bind(state);
const setTotalPagesGarage = state.setTotalPagesGarage.bind(state);
const setTotalPagesWinners = state.setTotalPagesWinners.bind(state);
const setGaragePage = state.setGaragePage.bind(state);
const setWinnersPage = state.setWinnersPage.bind(state);
const setId = state.setId.bind(state);
const setAnimations = state.setAnimations.bind(state);
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
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _routing_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routing/navigation */ "./src/routing/navigation.ts");
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");








function renderGarage() {
    const main = document.createElement('main');
    const [divNavView, divRace, sectionWithForm, sectionWithList, divNavPage] = createContainers();
    main.append(divNavView, sectionWithForm, sectionWithList, divNavPage);
    // Create buttons to switch views
    const garageBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'garage', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_5__.goToGarage, className: 'garageBtn' });
    const winnersBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'winners', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_5__.goToWinners, className: 'winnersBtn' });
    divNavView.append(garageBtn, winnersBtn);
    // Create form to create a car
    const inputFields1 = createCarInputs();
    const carCreationForm = createCarForm(inputFields1);
    sectionWithForm.append(carCreationForm);
    // Create form to update a car
    const inputFields2 = updateCarInputs();
    const carUpdateForm = updateCarForm(inputFields2);
    sectionWithForm.append(carUpdateForm);
    // Create race, reset, generate cars button
    const raceBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'race', onClick: _requests_requests__WEBPACK_IMPORTED_MODULE_4__.startRace, className: 'raceBtn' });
    const resetBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'reset', onClick: _requests_requests__WEBPACK_IMPORTED_MODULE_4__.resetCars, className: 'resetBtn' });
    const generateCarsBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'generate', onClick: _requests_requests__WEBPACK_IMPORTED_MODULE_4__.generateCars, className: 'generateBtn' });
    divRace.append(raceBtn, resetBtn, generateCarsBtn);
    sectionWithForm.append(divRace);
    // Create list
    const heading = document.createElement('h1');
    heading.textContent = 'Garage';
    const totalCars = (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.pElem)({ className: 'totalCars', text: `Total cars: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_6__.getState)('totalCars')}` });
    const currentPage = (0,_components_paragraph__WEBPACK_IMPORTED_MODULE_3__.pElem)({ className: 'currentPage', text: `Current page: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_6__.getState)('garagePage')}` });
    const myCarsList = (0,_components_list__WEBPACK_IMPORTED_MODULE_2__.list)({ type: 'ul', className: 'carList' });
    sectionWithList.append(heading, totalCars, currentPage, myCarsList);
    // Create buttons to navigate between list pages
    const prevButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'prev', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_5__.prevPage, className: 'prevButton' });
    const nextButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'next', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_5__.nextPage, className: 'nextButton' });
    divNavPage.append(prevButton, nextButton);
    // Fill the car list
    (0,_requests_requests__WEBPACK_IMPORTED_MODULE_4__.getCars)();
    return main;
}
function createContainers() {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const section1 = document.createElement('section');
    const section2 = document.createElement('section');
    const div3 = document.createElement('div');
    return [div1, div2, section1, section2, div3];
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
function createCarForm(inputs) {
    return (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.form)({
        formSubmitFun: _requests_requests__WEBPACK_IMPORTED_MODULE_4__.createCar,
        cleanFormFun: () => {
            (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.cleanForm)('createName', 'createColor');
        },
        inputFields: inputs,
        btnText: 'create',
    });
}
function updateCarForm(inputs) {
    return (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.form)({
        formSubmitFun: _requests_requests__WEBPACK_IMPORTED_MODULE_4__.updateCar,
        cleanFormFun: () => {
            (0,_components_form__WEBPACK_IMPORTED_MODULE_1__.cleanForm)('updateName', 'updateColor');
        },
        inputFields: inputs,
        btnText: 'update',
    });
}
function updateTotalCars() {
    const totalCars = document.querySelector('.totalCars');
    if (totalCars)
        totalCars.textContent = `Total cars: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_6__.getState)('totalCars')}`;
}
function updateCurrPage(viewPage) {
    const currPage = document.querySelector('.currentPage');
    if (currPage)
        currPage.textContent = `Current page: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_6__.getState)(viewPage)}`;
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
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/table */ "./src/components/table.ts");
/* harmony import */ var _requests_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../requests/requests */ "./src/requests/requests.ts");
/* harmony import */ var _routing_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/navigation */ "./src/routing/navigation.ts");
/* harmony import */ var _state_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/states */ "./src/state/states.ts");






function renderWinners() {
    const main = document.createElement('main');
    const divWithViewNavigation = document.createElement('div');
    const sectionWithTable = document.createElement('section');
    const divWithPageNavigation = document.createElement('div');
    main.append(divWithViewNavigation, sectionWithTable, divWithPageNavigation);
    // Create buttons to switch views
    const garageBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'garage', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_3__.goToGarage, className: 'garageBtn' });
    const winnersBtn = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'winners', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_3__.goToWinners, className: 'winnersBtn' });
    divWithViewNavigation.append(garageBtn, winnersBtn);
    // Create table
    const heading = document.createElement('h1');
    heading.textContent = 'Winners';
    const totalWinners = document.createElement('p');
    const currentPage = document.createElement('p');
    totalWinners.textContent = `Total winners: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_4__.getState)('totalWinners')}`;
    totalWinners.className = 'totalWinners';
    currentPage.textContent = `Current page: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_4__.getState)('winnersPage')}`;
    currentPage.className = 'currentPage';
    const tableWinners = (0,_components_table__WEBPACK_IMPORTED_MODULE_1__.table)({});
    sectionWithTable.append(heading, totalWinners, currentPage, tableWinners);
    // Create buttons to navigate between list pages
    const prevButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'prev', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_3__.prevPage, className: 'prevButton' });
    const nextButton = (0,_components_button__WEBPACK_IMPORTED_MODULE_0__.button)({ type: 'button', text: 'next', onClick: _routing_navigation__WEBPACK_IMPORTED_MODULE_3__.nextPage, className: 'nextButton' });
    divWithPageNavigation.append(prevButton, nextButton);
    // Fill the table
    (0,_requests_requests__WEBPACK_IMPORTED_MODULE_2__.getWinners)();
    return main;
}
function updateTotalWinners() {
    const totalWinners = document.querySelector('.totalWinners');
    if (totalWinners)
        totalWinners.textContent = `Total winners: ${(0,_state_states__WEBPACK_IMPORTED_MODULE_4__.getState)('totalWinners')}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLE9BQU8saUZBQWlGLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsK0JBQStCLGtCQUFrQiwyQkFBMkIsZUFBZSxzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsYUFBYSxlQUFlLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsY0FBYyxvQ0FBb0MsR0FBRyx5QkFBeUIsa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0IsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsZ0NBQWdDLGVBQWUsYUFBYSxHQUFHLGNBQWMsZUFBZSxHQUFHLGtCQUFrQiwrQkFBK0IsbUJBQW1CLEdBQUcsZUFBZSw4QkFBOEIsbUJBQW1CLEdBQUcscUJBQXFCLDhCQUE4QixtQkFBbUIsaUJBQWlCLEdBQUcsNkJBQTZCO0FBQ3Y5QztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3hFMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNYTyxNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLFFBQVEsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFlLEVBQXFCLEVBQUU7SUFDaEgsTUFBTSxHQUFHLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEUsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDMUIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDaEIsR0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDdkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNaLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLO1lBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkssTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQVksRUFBa0IsRUFBRTtJQUN2RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksU0FBUztRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFDLElBQUksSUFBSTtRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUssTUFBTSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWEsRUFBbUIsRUFBRTtJQUMxRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksU0FBUztRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFDLElBQUksSUFBSTtRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZ0M7QUFFM0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFjLEVBQW9CLEVBQUU7SUFDaEgsTUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsSUFBSSxXQUFXO1FBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakQsSUFBSSxLQUFLO1FBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDL0IsSUFBSSxFQUFFO1FBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEIsSUFBSSxRQUFRO1FBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDeEMsSUFBSSxTQUFTO1FBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDM0MsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFFSyxNQUFNLElBQUksR0FBRyxDQUFDLEVBQ25CLFNBQVMsRUFDVCxhQUFhLEVBQ2IsWUFBWSxFQUNaLFdBQVcsRUFDWCxRQUFRLEVBQ1IsT0FBTyxHQUNHLEVBQW1CLEVBQUU7SUFDL0IsTUFBTSxRQUFRLEdBQW9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakUsSUFBSSxTQUFTO1FBQUUsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFFOUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEdBQUcsR0FBRywrQ0FBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0RCxJQUFJLFFBQVE7UUFBRSxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXJCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxLQUFLO1FBQ2pELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNLFdBQVcsR0FBYSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBSSxZQUFZO1lBQUUsWUFBWSxFQUFFLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFSyxTQUFTLFNBQVMsQ0FBQyxHQUFHLFVBQW9CO0lBQy9DLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUMvQixNQUFNLEtBQUssR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDL0UsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFBTSxJQUFJLEtBQUssRUFBRSxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssRUFBRSxJQUFJLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDakUsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzthQUFNLElBQUksS0FBSyxFQUFFLENBQUM7WUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRpQztBQUM4QztBQUV0QjtBQUNYO0FBSXhDLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBUSxFQUFzQixFQUFFO0lBQzNELE1BQU0sU0FBUyxHQUFHLCtDQUFNLENBQUM7UUFDdkIsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDWiw2REFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7S0FDRixDQUFDLENBQUM7SUFDSCxNQUFNLFNBQVMsR0FBRywrQ0FBTSxDQUFDO1FBQ3ZCLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ1osNkRBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sUUFBUSxHQUFHLCtDQUFNLENBQUM7UUFDdEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUUsR0FBRztRQUNULE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDWixzRUFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxTQUFTLEVBQUUsYUFBYTtLQUN6QixDQUFDLENBQUM7SUFDSCxNQUFNLE9BQU8sR0FBRywrQ0FBTSxDQUFDO1FBQ3JCLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFLEdBQUc7UUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ1osc0VBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsU0FBUyxFQUFFLFlBQVk7S0FDeEIsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUVLLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBUSxFQUFFLFNBQWtCLEVBQWlCLEVBQUU7SUFDdEUsTUFBTSxFQUFFLEdBQWtCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDNUIsSUFBSSxTQUFTO1FBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDeEMsTUFBTSxHQUFHLEdBQW1CLGtEQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNsRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsTUFBTSxTQUFTLEdBQW1CLGtEQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sU0FBUyxHQUFtQixrREFBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMvRSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDLEdBQXVCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUM5QixNQUFNLE9BQU8sR0FBb0IsbURBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxNQUFNLEtBQUssR0FBRyxrREFBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDOUMsTUFBTSxNQUFNLEdBQUcsa0RBQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUc7Oyt4QkFFMHdCLEdBQUcsQ0FBQyxLQUFLOztHQUVyeUIsQ0FBQztJQUNGLE1BQU0sT0FBTyxHQUFHLGtEQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNsRCxPQUFPLENBQUMsU0FBUyxHQUFHOzs7O0dBSW5CLENBQUM7SUFDRixLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFFSyxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWEsRUFBb0IsRUFBRTtJQUNsRixNQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxJQUFJLFNBQVM7UUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztTQUFNLElBQUksU0FBUyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFSyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQWdCLEVBQVEsRUFBRTtJQUN0RCxNQUFNLE9BQU8sR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ1osSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxRQUFRLEdBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEdBQVEsRUFBUSxFQUFFO0lBQ2xELE1BQU0sT0FBTyxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEYsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNaLE1BQU0sSUFBSSxHQUEwQixPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QyxNQUFNLElBQUksR0FBMEIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVLLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxFQUFVLEVBQVEsRUFBRTtJQUNwRCxNQUFNLE9BQU8sR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1RSxNQUFNLE9BQU8sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEYsSUFBSSxPQUFPLElBQUksT0FBTztRQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDO0FBRUssTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFnQixFQUFRLEVBQUU7SUFDM0UsTUFBTSxPQUFPLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xGLElBQUksT0FBTyxFQUFFLENBQUM7UUFDWixNQUFNLE1BQU0sR0FBeUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxNQUFNLE9BQU8sR0FBeUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RSxJQUFJLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN0QixNQUFNLElBQUksR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2pELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9DLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3BFLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQzlCLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxjQUFjLGNBQWMsS0FBSyxFQUFFLENBQUMsRUFDcEY7Z0JBQ0UsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxRQUFRO2FBQ2pCLENBQ0YsQ0FBQztZQUNGLDREQUFhLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixNQUFNLFFBQVEsR0FBNkIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRixNQUFNLE9BQU8sR0FBNkIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRSxJQUFJLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDdkMsSUFBSSxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUssTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFVLEVBQVEsRUFBRTtJQUMxQyxNQUFNLFVBQVUsR0FBRyx1REFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsSUFBSSxTQUFTO1FBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVLLE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBVSxFQUFRLEVBQUU7SUFDM0MsTUFBTSxVQUFVLEdBQUcsdURBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLElBQUksU0FBUztRQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxNQUFNLE9BQU8sR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEYsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNaLE1BQU0sUUFBUSxHQUE2QixPQUFPLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sT0FBTyxHQUE2QixPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksUUFBUTtZQUFFLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQUksT0FBTztZQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7QUFDSCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlKSyxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBa0IsRUFBd0IsRUFBRTtJQUNqRixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQUksU0FBUztRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFDLElBQUksSUFBSTtRQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ055QztBQUVwQyxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQWlCLEVBQXVCLEVBQUU7SUFDekYsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFJLFNBQVM7UUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUN4QyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMvQixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFDM0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLHVEQUFRLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztJQUNqRCxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUN6QixHQUFHLENBQUMsU0FBUyxHQUFHOzsreEJBRTZ3QixHQUFHLENBQUMsS0FBSzs7R0FFcnlCLENBQUM7SUFDRixHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMxQixHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDM0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDMUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUssTUFBTSxLQUFLLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWMsRUFBb0IsRUFBRTtJQUM5RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELElBQUksU0FBUztRQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9DLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxLQUFLLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztJQUM5QixNQUFNLE9BQU8sR0FBMkIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbEMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxNQUFNLFdBQVcsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN0RSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUN6QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDN0IsQ0FBQztTQUFNLElBQUksU0FBUyxFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE1BQXlCLEVBQUUsR0FBZ0IsRUFBUSxFQUFFO0lBQ3JGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNWLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEQsTUFBTSxTQUFTLEdBQTBCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2xFLE1BQU0sVUFBVSxHQUFHO29CQUNqQixFQUFFLEVBQUUsQ0FBQztvQkFDTCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxLQUFLLEVBQUUsU0FBUztpQkFDakIsQ0FBQztnQkFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDO2dCQUN2QyxPQUFPLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDN0IsQ0FBQzthQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3pELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVLLE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBYyxFQUFRLEVBQUU7SUFDdEQsTUFBTSxRQUFRLEdBQStCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2IsTUFBTSxJQUFJLEdBQWdDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0UsSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxNQUFNLElBQUksR0FBZ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hELENBQUM7QUFDSCxDQUFDLENBQUM7QUFFSyxNQUFNLHFCQUFxQixHQUFHLENBQUMsRUFBVSxFQUFRLEVBQUU7SUFDeEQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNuRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxJQUFJLEtBQUssSUFBSSxJQUFJO1FBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRmdIO0FBQy9DO0FBQ1A7QUFFckQsU0FBUyxPQUFPO0lBQ3JCLE1BQU0sSUFBSSxHQUFHLHVEQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEMsTUFBTSxLQUFLLEdBQUcsdURBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwQyxNQUFNLEdBQUcsR0FBRyxzQ0FBc0MsSUFBSSxXQUFXLEtBQUssRUFBRSxDQUFDO0lBQ3pFLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDMUIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFrQixFQUFFO1FBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzVELHVEQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2Isc0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUN4QixJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLFlBQVk7SUFDMUIsTUFBTSxRQUFRLEdBQXdCLDJCQUEyQixFQUFFLENBQUM7SUFDcEUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDekIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDaEIsTUFBTSxXQUFXLEdBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLE1BQU0sQ0FBQyxLQUFLO3FCQUNoQixJQUFJLEVBQUU7cUJBQ04sSUFBSSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7b0JBQ2xCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO29CQUN4QixJQUFJLEtBQUssWUFBWSxLQUFLO3dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNqRixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7aUJBQU0sQ0FBQztnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLDBCQUEwQixLQUFLLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7YUFDdEIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULE1BQU0sWUFBWSxHQUFHLHVEQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0MsdURBQVEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxLQUFLLFlBQVksS0FBSztnQkFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxLQUFLLFlBQVksS0FBSztZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsU0FBUywyQkFBMkI7SUFDbEMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuSCxNQUFNLE1BQU0sR0FBZTtRQUN6QixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDN0ksQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztRQUNsSSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO1FBQzNMLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQzNILENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztRQUMzSCxDQUFDLGdCQUFnQixFQUFFLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7UUFDck4sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztRQUNwTCxDQUFDLHdCQUF3QixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO1FBQ3pLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDO1FBQ3hKLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDO0tBQzdJLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbEIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztJQUNwQyxNQUFNLFFBQVEsR0FBd0IsRUFBRSxDQUFDO0lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlELE1BQU0sV0FBVyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlELE1BQU0sV0FBVyxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRyxNQUFNLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQzVFLE1BQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDL0MsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLDhCQUE4QixFQUFFO1lBQ3BELE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUMxQixDQUFDLENBQUM7UUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsSUFBWSxFQUFFLEtBQWE7SUFDbkQsTUFBTSxJQUFJLEdBQUc7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxLQUFLO0tBQ2IsQ0FBQztJQUNGLEtBQUssQ0FBQyw4QkFBOEIsRUFBRTtRQUNwQyxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDM0IsQ0FBQztTQUNDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqRCxJQUFJLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtRQUNsQixJQUFJLEtBQUssR0FBRyx1REFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDWCx1REFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4QixzREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxFQUFVLEVBQUUsSUFBWSxFQUFFLEtBQWE7SUFDL0QsTUFBTSxHQUFHLEdBQUcsZ0NBQWdDLEVBQUUsRUFBRSxDQUFDO0lBQ2pELE1BQU0sSUFBSSxHQUFHO1FBQ1gsSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsS0FBSztLQUNiLENBQUM7SUFDRixLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQzNCLENBQUM7U0FDQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNqQixJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtRQUNsQiw0REFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxFQUFVO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLGdDQUFnQyxFQUFFLEVBQUUsQ0FBQztJQUNqRCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsTUFBTSxFQUFFLFFBQVE7S0FDakIsQ0FBQztTQUNDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDaEUsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLEtBQUssR0FBRyx1REFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCx1REFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4QixvREFBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwQixZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLFNBQVMsQ0FBQyxHQUFRO0lBQ2hDLG9EQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QixNQUFNLEVBQUUsR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RSxNQUFNLElBQUksR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RSxNQUFNLEtBQUssR0FBNEIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7UUFDeEIsRUFBRSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxNQUFNLEdBQUc7SUFDYixVQUFVLEVBQUUsR0FBRztJQUNmLFFBQVEsRUFBRSxHQUFHO0lBQ2IsWUFBWSxFQUFFLEdBQUc7SUFDakIsV0FBVyxFQUFFLEdBQUc7Q0FDakIsQ0FBQztBQUVLLFNBQVMsa0JBQWtCLENBQUMsRUFBVSxFQUFFLE1BQTZCO0lBQzFFLE1BQU0sR0FBRyxHQUFHLG1DQUFtQyxFQUFFLFdBQVcsTUFBTSxFQUFFLENBQUM7SUFDckUsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULE1BQU0sRUFBRSxPQUFPO0tBQ2hCLENBQUM7U0FDQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNqQixJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7Z0JBQy9DLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUN6Qiw0REFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ3pFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTt3QkFDcEMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7NEJBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ2pELENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztxQkFBTSxDQUFDO29CQUNOLDBEQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzthQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQzthQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUNILENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxFQUFVO0lBQzFCLE1BQU0sR0FBRyxHQUFHLG1DQUFtQyxFQUFFLGVBQWUsQ0FBQztJQUNqRSxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDaEIsTUFBTSxFQUFFLE9BQU87S0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ25CLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQzthQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQzthQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkQsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQzthQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEQseURBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLENBQUM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLFNBQVM7SUFDdkIsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLElBQUksR0FBRyx1REFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE1BQU0sUUFBUSxHQUF3QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDckQsTUFBTSxHQUFHLEdBQUcsbUNBQW1DLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1FBQ3ZFLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxNQUFNLEdBQXFCLEVBQUUsQ0FBQztJQUNwQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6QixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNoQixNQUFNLGFBQWEsR0FBb0IsRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRSxDQUFDO2dCQUNsQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSztxQkFDOUIsSUFBSSxFQUFFO3FCQUNOLElBQUksQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRTtvQkFDekIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixJQUFJLEtBQUssRUFBRSxDQUFDO3dCQUNWLE1BQU0sS0FBSyxHQUFHLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQztnQkFDSCxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7b0JBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUs7d0JBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuQyxDQUFDOztnQkFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUs7WUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsR0FBUSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7SUFDdEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxNQUFNLElBQUksR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLE1BQU0sS0FBSyxHQUFVO1lBQ25CLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNWLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztRQUNGLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULDREQUFVLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7Z0JBQzNCLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXdCO0lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ2hCLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2QsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sTUFBTSxHQUFHO1lBQ2IsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFDRixLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxtQkFBbUIsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUMvQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRU0sU0FBUyxTQUFTO0lBQ3ZCLE1BQU0sSUFBSSxHQUFHLHVEQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsTUFBTSxRQUFRLEdBQXdCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNyRCxNQUFNLEdBQUcsR0FBRyxtQ0FBbUMsR0FBRyxDQUFDLEVBQUUsaUJBQWlCLENBQUM7UUFDdkUsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN6QixJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNoQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNWLDBEQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO1lBQ0gsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQWM7SUFDbEMsS0FBSyxDQUFDLCtCQUErQixFQUFFO1FBQ3JDLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztLQUM3QixDQUFDO1NBQ0MsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BELElBQUksQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1FBQ3JCLElBQUksS0FBSyxHQUFHLHVEQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNYLHVEQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ1osSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDN0IsSUFBSSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDakIseURBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxLQUFLLFlBQVksS0FBSztnQkFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsWUFBWSxDQUFDLE1BQWM7SUFDbEMsTUFBTSxHQUFHLEdBQUcsaUNBQWlDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6RCxNQUFNLElBQUksR0FBRztRQUNYLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7S0FDbEIsQ0FBQztJQUNGLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDM0IsQ0FBQztTQUNDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2pCLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztJQUNILENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1FBQ3JCLCtEQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxNQUFjO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLGlDQUFpQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDekQsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMxQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNqQixJQUFJLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoQixRQUFRO2lCQUNMLElBQUksRUFBRTtpQkFDTixJQUFJLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtnQkFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sYUFBYSxHQUFHO29CQUNwQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ1gsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLFFBQVE7aUJBQ2YsQ0FBQztnQkFDRixZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzlCLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO2FBQU0sQ0FBQztZQUNOLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEVBQVU7SUFDeEIsTUFBTSxHQUFHLEdBQUcsZ0NBQWdDLEVBQUUsRUFBRSxDQUFDO0lBQ2pELE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3JELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsVUFBVTtJQUN4QixNQUFNLElBQUksR0FBRyx1REFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLHVEQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsTUFBTSxJQUFJLEdBQUcsdURBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN0QyxNQUFNLEtBQUssR0FBRyx1REFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLE1BQU0sR0FBRyxHQUFHLHVDQUF1QyxJQUFJLFdBQVcsS0FBSyxVQUFVLElBQUksV0FBVyxLQUFLLEVBQUUsQ0FBQztJQUN4RyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzFCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBcUIsRUFBRTtRQUNwQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUM1RCx1REFBUSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzQixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNoQixNQUFNLFFBQVEsR0FBK0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2xFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBRSxHQUFHLENBQUMsSUFBSSxFQUFtQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbEUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7YUFDbEIsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQVUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBYyxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQzNFLHlEQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO2dCQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzlDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUFDLEVBQVU7SUFDckMsTUFBTSxHQUFHLEdBQUcsaUNBQWlDLEVBQUUsRUFBRSxDQUFDO0lBQ2xELEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxNQUFNLEVBQUUsUUFBUTtLQUNqQixDQUFDO1NBQ0MsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksS0FBSyxHQUFHLHVEQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUNYLHVEQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzNCLHdFQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtRQUN4QixJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RnQmtGO0FBQ2hDO0FBRTVDLFNBQVMsUUFBUTtJQUN0QixNQUFNLFdBQVcsR0FBNkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsTUFBTSxRQUFRLEdBQUcsdURBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLFFBQVEsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMxQixRQUFRLEdBQUcsdURBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO1NBQU0sQ0FBQztRQUNOLFFBQVEsR0FBRyx1REFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDakIsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDMUIsNERBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBQU0sQ0FBQztZQUNOLDZEQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksV0FBVyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUYsQ0FBQztBQUNILENBQUM7QUFFTSxTQUFTLFFBQVE7SUFDdEIsTUFBTSxXQUFXLEdBQTZCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEYsTUFBTSxXQUFXLEdBQTZCLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixNQUFNLFFBQVEsR0FBRyx1REFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzFCLFFBQVEsR0FBRyx1REFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLGNBQWMsR0FBRyx1REFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEQsQ0FBQztTQUFNLENBQUM7UUFDTixRQUFRLEdBQUcsdURBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxjQUFjLEdBQUcsdURBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxRQUFRLEdBQUcsY0FBYyxFQUFFLENBQUM7UUFDOUIsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDMUIsNERBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixDQUFDO2FBQU0sQ0FBQztZQUNOLDZEQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksV0FBVyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUYsSUFBSSxRQUFRLEtBQUssY0FBYztZQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7QUFDSCxDQUFDO0FBRU0sU0FBUyxVQUFVO0lBQ3hCLHNEQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEIsK0RBQVUsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVNLFNBQVMsV0FBVztJQUN6QixzREFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25CLCtEQUFVLEVBQUUsQ0FBQztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekR3RjtBQUNoQjtBQUNkO0FBQ087QUFDWjtBQUV0RCxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUV6QixNQUFNLEtBQUssR0FBYTtJQUN0QixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxFQUFFO0lBQ1IsT0FBTyxFQUFFLEVBQUU7SUFDWCxVQUFVLEVBQUUsQ0FBQztJQUNiLFdBQVcsRUFBRSxDQUFDO0lBQ2QsU0FBUyxFQUFFLENBQUM7SUFDWixZQUFZLEVBQUUsQ0FBQztJQUNmLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixTQUFTLEVBQUUsQ0FBQztJQUNaLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxZQUFZLEVBQUUsS0FBSztJQUNuQixNQUFNLEVBQUUsTUFBTTtJQUNkLFVBQVUsRUFBRSxJQUFJLEdBQUcsRUFBRTtJQUNyQixRQUFRLENBQUMsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxPQUFPLENBQUMsR0FBRztRQUNULElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLCtEQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBQ0QsYUFBYSxDQUFDLFVBQVU7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQzlCLG1FQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsYUFBYTtRQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxLQUFLLEtBQUssYUFBYSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxhQUFhLENBQUM7WUFDcEMsa0VBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUNELFVBQVUsQ0FBQyxNQUFNLEVBQUUsR0FBRztRQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM3QyxvRUFBaUIsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQzthQUFNLENBQUM7WUFDTixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBQ0QsZUFBZSxDQUFDLEdBQUc7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUNELFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNsQixJQUFJLElBQUksS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQiw4REFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixrRUFBa0IsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNELGFBQWEsQ0FBQyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDZEQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsMkRBQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGNBQWMsQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLDZEQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUIsOERBQVUsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNELEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSTtRQUNaLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLG1FQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELGFBQWEsQ0FBQyxFQUFVLEVBQUUsU0FBb0I7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxlQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBQ0QsU0FBUyxDQUFDLElBQUk7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQztBQUVLLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RCxNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEUsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BFLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKckQsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIvQjtBQUNtQjtBQUN2QjtBQUNNO0FBQ3lEO0FBQzlDO0FBQ0s7QUFDckI7QUFFcEMsU0FBUyxZQUFZO0lBQzFCLE1BQU0sSUFBSSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDLEdBQTBCLGdCQUFnQixFQUFFLENBQUM7SUFDdEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RSxpQ0FBaUM7SUFDakMsTUFBTSxTQUFTLEdBQUcsMERBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsMkRBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMxRyxNQUFNLFVBQVUsR0FBRywwREFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSw0REFBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQzlHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLDhCQUE4QjtJQUM5QixNQUFNLFlBQVksR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUN2QyxNQUFNLGVBQWUsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN4Qyw4QkFBOEI7SUFDOUIsTUFBTSxZQUFZLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDdkMsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELGVBQWUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsMkNBQTJDO0lBQzNDLE1BQU0sT0FBTyxHQUFHLDBEQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLHlEQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkcsTUFBTSxRQUFRLEdBQUcsMERBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUseURBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN0RyxNQUFNLGVBQWUsR0FBRywwREFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSw0REFBWSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3RILE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNuRCxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLGNBQWM7SUFDZCxNQUFNLE9BQU8sR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxPQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztJQUMvQixNQUFNLFNBQVMsR0FBRyw0REFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsZUFBZSx1REFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLE1BQU0sV0FBVyxHQUFHLDREQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxpQkFBaUIsdURBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RyxNQUFNLFVBQVUsR0FBRyxzREFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM5RCxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLGdEQUFnRDtJQUNoRCxNQUFNLFVBQVUsR0FBRywwREFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSx5REFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3hHLE1BQU0sVUFBVSxHQUFHLDBEQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLHlEQUFRLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDeEcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUMsb0JBQW9CO0lBQ3BCLDJEQUFPLEVBQUUsQ0FBQztJQUNWLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUlELFNBQVMsZ0JBQWdCO0lBQ3ZCLE1BQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELE1BQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELE1BQU0sUUFBUSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sUUFBUSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sSUFBSSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsZUFBZTtJQUN0QixNQUFNLFdBQVcsR0FBdUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sU0FBUyxHQUFxQiw0REFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxRixNQUFNLFVBQVUsR0FBcUIsNERBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxlQUFlO0lBQ3RCLE1BQU0sV0FBVyxHQUF1QixFQUFFLENBQUM7SUFDM0MsTUFBTSxXQUFXLEdBQXFCLDREQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLE1BQU0sU0FBUyxHQUFxQiw0REFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxRixNQUFNLFVBQVUsR0FBcUIsNERBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckQsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLE1BQTBCO0lBQy9DLE9BQU8sc0RBQUksQ0FBQztRQUNWLGFBQWEsRUFBRSx5REFBUztRQUN4QixZQUFZLEVBQUUsR0FBRyxFQUFFO1lBQ2pCLDJEQUFTLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxXQUFXLEVBQUUsTUFBTTtRQUNuQixPQUFPLEVBQUUsUUFBUTtLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsTUFBMEI7SUFDL0MsT0FBTyxzREFBSSxDQUFDO1FBQ1YsYUFBYSxFQUFFLHlEQUFTO1FBQ3hCLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDakIsMkRBQVMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELFdBQVcsRUFBRSxNQUFNO1FBQ25CLE9BQU8sRUFBRSxRQUFRO0tBQ2xCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLGVBQWU7SUFDN0IsTUFBTSxTQUFTLEdBQWdDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDcEYsSUFBSSxTQUFTO1FBQUUsU0FBUyxDQUFDLFdBQVcsR0FBRyxlQUFlLHVEQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztBQUNoRixDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsUUFBc0M7SUFDbkUsTUFBTSxRQUFRLEdBQWdDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckYsSUFBSSxRQUFRO1FBQUUsUUFBUSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsdURBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0FBQzdFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHMEM7QUFDSDtBQUNFO0FBRW5DLFNBQVMsVUFBVTtJQUN4QixNQUFNLElBQUksR0FBRyx1REFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE1BQU0sSUFBSSxHQUFnQixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLElBQUksT0FBMkIsQ0FBQztJQUNoQyxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUN0QixPQUFPLEdBQUcscURBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxHQUFHLHVEQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkM7QUFDRjtBQUNNO0FBQ1M7QUFDSztBQUNyQjtBQUVwQyxTQUFTLGFBQWE7SUFDM0IsTUFBTSxJQUFJLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsTUFBTSxxQkFBcUIsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RSxNQUFNLGdCQUFnQixHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0scUJBQXFCLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVFLGlDQUFpQztJQUNqQyxNQUFNLFNBQVMsR0FBRywwREFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSwyREFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLE1BQU0sVUFBVSxHQUFHLDBEQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDREQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUcscUJBQXFCLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRCxlQUFlO0lBQ2YsTUFBTSxPQUFPLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakUsT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7SUFDaEMsTUFBTSxZQUFZLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkUsTUFBTSxXQUFXLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEUsWUFBWSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsdURBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO0lBQ3hFLFlBQVksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLHVEQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUNyRSxXQUFXLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUN0QyxNQUFNLFlBQVksR0FBRyx3REFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRSxnREFBZ0Q7SUFDaEQsTUFBTSxVQUFVLEdBQUcsMERBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUseURBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUN4RyxNQUFNLFVBQVUsR0FBRywwREFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSx5REFBUSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3hHLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckQsaUJBQWlCO0lBQ2pCLDhEQUFVLEVBQUUsQ0FBQztJQUNiLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVNLFNBQVMsa0JBQWtCO0lBQ2hDLE1BQU0sWUFBWSxHQUFnQyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFGLElBQUksWUFBWTtRQUFFLFlBQVksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLHVEQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztBQUM1RixDQUFDOzs7Ozs7O1VDeENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQzVCO0FBRXRCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDakQsK0RBQVUsRUFBRSxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvZGl2X3NwYW4udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2xpc3QudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3BhcmFncmFwaC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9yZXF1ZXN0cy9yZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3JvdXRpbmcvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0YXRlL3N0YXRlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3ZpZXctbWFuYWdlci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3ZpZXdzL3dpbm5lcnMudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY2FyTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmxpQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiBkYXNoZWQgYmxhY2sgMnB4O1xufVxuXG4udXBwZXJQYXJ0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubG93ZXJQYXJ0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogOTAlO1xuICBnYXA6IDVweDtcbn1cblxuLmltZ0ZsYWcge1xuICB3aWR0aDogMTAlO1xufVxuXG4uc3RhcnRFbmdpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxIDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc3RvcEVuZ2luZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjQ0MzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgY3Vyc29yOiBub25lO1xufVxuXG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLmNhckxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5saUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCBibGFjayAycHg7XFxufVxcblxcbi51cHBlclBhcnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sb3dlclBhcnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5ncm91cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiA5MCU7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmltZ0ZsYWcge1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLnN0YXJ0RW5naW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzEgO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbi5zdG9wRW5naW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjQ0MzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0QzRDM7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0eXBlIHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uID0gKHsgdHlwZSA9ICdidXR0b24nLCB0ZXh0ID0gJycsIG9uQ2xpY2ssIGNsYXNzTmFtZSA9ICcnIH06IEJ1dHRvblByb3BzKTogSFRNTEJ1dHRvbkVsZW1lbnQgPT4ge1xuICBjb25zdCBidG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGJ0bi50eXBlID0gdHlwZTtcbiAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgaWYgKG9uQ2xpY2spIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGJ0bjtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IERpdlByb3BzLCBTcGFuUHJvcHMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgZGl2RWxlbSA9ICh7IGNsYXNzTmFtZSwgdGV4dCB9OiBEaXZQcm9wcyk6IEhUTUxEaXZFbGVtZW50ID0+IHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpZiAoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHQpIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gZWxlbTtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGFuRWxlbSA9ICh7IGNsYXNzTmFtZSwgdGV4dCB9OiBTcGFuUHJvcHMpOiBIVE1MU3BhbkVsZW1lbnQgPT4ge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBpZiAoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHQpIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gZWxlbTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEZvcm1Qcm9wcywgSW5wdXRQcm9wcyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBidXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEZpZWxkID0gKHsgdHlwZSwgdmFsdWUsIGlkLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQsIGNsYXNzTmFtZSB9OiBJbnB1dFByb3BzKTogSFRNTElucHV0RWxlbWVudCA9PiB7XG4gIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlmIChwbGFjZWhvbGRlcikgaW5wdXQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgaWYgKHZhbHVlKSBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlmIChkaXNhYmxlZCkgaW5wdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgaWYgKGNsYXNzTmFtZSkgaW5wdXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybSA9ICh7XG4gIGZvcm1DbGFzcyxcbiAgZm9ybVN1Ym1pdEZ1bixcbiAgY2xlYW5Gb3JtRnVuLFxuICBpbnB1dEZpZWxkcyxcbiAgYnRuQ2xhc3MsXG4gIGJ0blRleHQsXG59OiBGb3JtUHJvcHMpOiBIVE1MRm9ybUVsZW1lbnQgPT4ge1xuICBjb25zdCBmb3JtRWxlbTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBpZiAoZm9ybUNsYXNzKSBmb3JtRWxlbS5jbGFzc05hbWUgPSBmb3JtQ2xhc3M7XG5cbiAgaW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBmb3JtRWxlbS5hcHBlbmQoaW5wdXQpO1xuICB9KTtcblxuICBjb25zdCBidG4gPSBidXR0b24oeyB0eXBlOiAnc3VibWl0JywgdGV4dDogYnRuVGV4dCB9KTtcbiAgaWYgKGJ0bkNsYXNzKSBidG4uY2xhc3NOYW1lID0gYnRuQ2xhc3M7XG4gIGZvcm1FbGVtLmFwcGVuZChidG4pO1xuXG4gIGZvcm1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZXM6IHN0cmluZ1tdID0gaW5wdXRGaWVsZHMubWFwKChpbnB1dCkgPT4gaW5wdXQudmFsdWUpO1xuICAgIGZvcm1TdWJtaXRGdW4oLi4uaW5wdXRWYWx1ZXMpO1xuICAgIGlmIChjbGVhbkZvcm1GdW4pIGNsZWFuRm9ybUZ1bigpO1xuICB9KTtcbiAgcmV0dXJuIGZvcm1FbGVtO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuRm9ybSguLi5jbGFzc05hbWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzTmFtZX1gKTtcbiAgICBpZiAoaW5wdXQ/LnR5cGUgPT09ICdjb2xvcicpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyNmZmZmZmYnO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQ/LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQ/LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBidXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBzZWxlY3RDYXIsIHJlbW92ZUNhciwgc3RhcnRTdG9wQ2FyRW5naW5lIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdHMnO1xuaW1wb3J0IHR5cGUgeyBBbmltYXRlUHJvcHMsIENhciwgTGlzdFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNldEFuaW1hdGlvbnMsIGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcbmltcG9ydCB7IGRpdkVsZW0sIHNwYW5FbGVtIH0gZnJvbSAnLi9kaXZfc3Bhbic7XG5cbnR5cGUgRGVzdHJ1Y3R1cmVCdXR0b25zID0gW0hUTUxCdXR0b25FbGVtZW50LCBIVE1MQnV0dG9uRWxlbWVudCwgSFRNTEJ1dHRvbkVsZW1lbnQsIEhUTUxCdXR0b25FbGVtZW50XTtcblxuZXhwb3J0IGNvbnN0IGxpc3RJdGVtQnRucyA9IChjYXI6IENhcik6IERlc3RydWN0dXJlQnV0dG9ucyA9PiB7XG4gIGNvbnN0IHNlbGVjdEJ0biA9IGJ1dHRvbih7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGV4dDogJ3NlbGVjdCcsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2VsZWN0Q2FyKGNhcik7XG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlbW92ZUJ0biA9IGJ1dHRvbih7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgdGV4dDogJ3JlbW92ZScsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgcmVtb3ZlQ2FyKGNhci5pZCk7XG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHN0YXJ0QnRuID0gYnV0dG9uKHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICB0ZXh0OiAnQScsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc3RhcnRTdG9wQ2FyRW5naW5lKGNhci5pZCwgJ3N0YXJ0ZWQnKTtcbiAgICB9LFxuICAgIGNsYXNzTmFtZTogJ3N0YXJ0RW5naW5lJyxcbiAgfSk7XG4gIGNvbnN0IHN0b3BCdG4gPSBidXR0b24oe1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIHRleHQ6ICdCJyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBzdGFydFN0b3BDYXJFbmdpbmUoY2FyLmlkLCAnc3RvcHBlZCcpO1xuICAgIH0sXG4gICAgY2xhc3NOYW1lOiAnc3RvcEVuZ2luZScsXG4gIH0pO1xuICByZXR1cm4gW3NlbGVjdEJ0biwgcmVtb3ZlQnRuLCBzdGFydEJ0biwgc3RvcEJ0bl07XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdEl0ZW0gPSAoY2FyOiBDYXIsIGNsYXNzTmFtZT86IHN0cmluZyk6IEhUTUxMSUVsZW1lbnQgPT4ge1xuICBjb25zdCBsaTogSFRNTExJRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmRhdGFzZXQuaWQgPSBgJHtjYXIuaWR9YDtcbiAgaWYgKGNsYXNzTmFtZSkgbGkuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBjb25zdCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZGl2RWxlbSh7IGNsYXNzTmFtZTogJ2xpQ29udGFpbmVyJyB9KTtcbiAgbGkuYXBwZW5kKGRpdik7XG4gIGNvbnN0IHVwcGVyUGFydDogSFRNTERpdkVsZW1lbnQgPSBkaXZFbGVtKHsgY2xhc3NOYW1lOiAndXBwZXJQYXJ0Q29udGFpbmVyJyB9KTtcbiAgY29uc3QgbG93ZXJQYXJ0OiBIVE1MRGl2RWxlbWVudCA9IGRpdkVsZW0oeyBjbGFzc05hbWU6ICdsb3dlclBhcnRDb250YWluZXInIH0pO1xuICBkaXYuYXBwZW5kKHVwcGVyUGFydCwgbG93ZXJQYXJ0KTtcbiAgY29uc3QgW3NlbGVjdENhckJ0biwgcmVtb3ZlQ2FyQnRuLCBzdGFydEVuZ2luZUJ0biwgc3RvcEVuZ2luZUJ0bl06IERlc3RydWN0dXJlQnV0dG9ucyA9IGxpc3RJdGVtQnRucyhjYXIpO1xuICBzdG9wRW5naW5lQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgY29uc3QgY2FyTmFtZTogSFRNTFNwYW5FbGVtZW50ID0gc3BhbkVsZW0oeyBjbGFzc05hbWU6ICdjYXJOYW1lJywgdGV4dDogY2FyLm5hbWUgfSk7XG4gIHVwcGVyUGFydC5hcHBlbmQoc2VsZWN0Q2FyQnRuLCByZW1vdmVDYXJCdG4sIGNhck5hbWUpO1xuICBjb25zdCBncm91cCA9IGRpdkVsZW0oeyBjbGFzc05hbWU6ICdncm91cCcgfSk7XG4gIGNvbnN0IGltZ0NhciA9IGRpdkVsZW0oeyBjbGFzc05hbWU6ICdpbWdDYXInIH0pO1xuICBpbWdDYXIuaW5uZXJIVE1MID0gYFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aCBkPVwiTTIxLjczOSAxMC45MjFjLTEuMzQ3LS4zOS0xLjg4NS0uNTM4LTMuNTUyLS45MjEgMCAwLTIuMzc5LTIuMzU5LTIuODMyLTIuODE2LS41NjgtLjU3Mi0xLjA0My0xLjE4NC0yLjk0OS0xLjE4NGgtNy44OTRjLS41MTEgMC0uNzM2LjU0Ny0uMDcgMS0uNzQyLjYwMi0xLjYxOSAxLjM4LTIuMjU4IDIuMDI3LTEuNDM1IDEuNDU1LTIuMTg0IDIuMzg1LTIuMTg0IDQuMjU1IDAgMS43NiAxLjA0MiAzLjcxOCAzLjE3NCAzLjcxOGguMDFjLjQxMyAxLjE2MiAxLjUxMiAyIDIuODE2IDIgMS4zMDQgMCAyLjQwMy0uODM4IDIuODE2LTJoNi4zNjdjLjQxMyAxLjE2MiAxLjUxMiAyIDIuODE2IDJzMi40MDMtLjgzOCAyLjgxNi0yaC42ODVjMS45OTQgMCAyLjUtMS43NzYgMi41LTMuMTY1IDAtMi4wNDEtMS4xMjMtMi41ODQtMi4yNjEtMi45MTR6bS0xNS43MzkgNi4yNzljLS42NjIgMC0xLjItLjUzOC0xLjItMS4ycy41MzgtMS4yIDEuMi0xLjIgMS4yLjUzOCAxLjIgMS4yLS41MzggMS4yLTEuMiAxLjJ6bTMuNTc2LTYuMmMtMS4wNzEgMC0zLjUtLjEwNi01LjIxOS0uNzUuNTc4LS43NS45OTgtMS4yMjIgMS4yNy0xLjUzNi4zMTgtLjM2OC44NzMtLjcxNCAxLjU2MS0uNzE0aDIuMzg4djN6bTEtM2gxLjgzNWMuODgyIDAgMS40MjguNDkzIDIuMDIyIDEuMTA1LjQ1Mi40NjYgMS43MzIgMS44OTUgMS43MzIgMS44OTVoLTUuNTg4di0zem03LjQyNCA5LjJjLS42NjIgMC0xLjItLjUzOC0xLjItMS4ycy41MzgtMS4yIDEuMi0xLjIgMS4yLjUzOCAxLjIgMS4yLS41MzggMS4yLTEuMiAxLjJ6XCIgZmlsbD0ke2Nhci5jb2xvcn0gY2xhc3M9J3N2Z0NhcicvPlxuICAgIDwvc3ZnPlxuICBgO1xuICBjb25zdCBpbWdGbGFnID0gZGl2RWxlbSh7IGNsYXNzTmFtZTogJ2ltZ0ZsYWcnIH0pO1xuICBpbWdGbGFnLmlubmVySFRNTCA9IGBcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZD1cIk00IDI0aC0ydi0yNGgydjI0em0xOC0xNmwtMTYtNnYxMmwxNi02elwiIGZpbGw9XCIjZmYwMDAwXCIvPlxuICAgIDwvc3ZnPlxuICBgO1xuICBncm91cC5hcHBlbmQoc3RhcnRFbmdpbmVCdG4sIHN0b3BFbmdpbmVCdG4sIGltZ0Nhcik7XG4gIGxvd2VyUGFydC5hcHBlbmQoZ3JvdXAsIGltZ0ZsYWcpO1xuICByZXR1cm4gbGk7XG59O1xuXG5leHBvcnQgY29uc3QgbGlzdCA9ICh7IHR5cGUsIGxpc3RJdGVtcywgY2xhc3NOYW1lIH06IExpc3RQcm9wcyk6IEhUTUxVTGlzdEVsZW1lbnQgPT4ge1xuICBjb25zdCBsaXN0OiBIVE1MVUxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGNsYXNzTmFtZSkgbGlzdC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmIChBcnJheS5pc0FycmF5KGxpc3RJdGVtcykpIHtcbiAgICBsaXN0LmFwcGVuZCguLi5saXN0SXRlbXMpO1xuICB9IGVsc2UgaWYgKGxpc3RJdGVtcykge1xuICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtcyk7XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FyTGlzdCA9IChjYXI6IENhciB8IENhcltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNhckxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhckxpc3QnKTtcbiAgaWYgKGNhckxpc3QpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYXIpKSB7XG4gICAgICBjb25zdCBjYXJJdGVtczogSFRNTExJRWxlbWVudFtdID0gY2FyLm1hcCgoaXRlbSkgPT4gbGlzdEl0ZW0oaXRlbSkpO1xuICAgICAgY2FyTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNhckxpc3QuYXBwZW5kKC4uLmNhckl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY2FySXRlbSA9IGxpc3RJdGVtKGNhcik7XG4gICAgICBjYXJMaXN0LmFwcGVuZChjYXJJdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDYXJMaXN0SXRlbSA9IChjYXI6IENhcik6IHZvaWQgPT4ge1xuICBjb25zdCBjYXJJdGVtOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2Nhci5pZH0nXWApO1xuICBpZiAoY2FySXRlbSkge1xuICAgIGNvbnN0IG5hbWU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLmNhck5hbWUnKTtcbiAgICBpZiAobmFtZSkgbmFtZS50ZXh0Q29udGVudCA9IGNhci5uYW1lO1xuICAgIGNvbnN0IHBhdGg6IFNWR1BhdGhFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLnN2Z0NhcicpO1xuICAgIGlmIChwYXRoKSBwYXRoLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNhci5jb2xvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDYXJGcm9tTGlzdCA9IChpZDogbnVtYmVyKTogdm9pZCA9PiB7XG4gIGNvbnN0IGNhckxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhckxpc3QnKTtcbiAgY29uc3QgY2FySXRlbTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nXWApO1xuICBpZiAoY2FyTGlzdCAmJiBjYXJJdGVtKSBjYXJMaXN0LnJlbW92ZUNoaWxkKGNhckl0ZW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFuaW1hdGVDYXIgPSAoeyBpZCwgdmVsb2NpdHksIGRpc3RhbmNlIH06IEFuaW1hdGVQcm9wcyk6IHZvaWQgPT4ge1xuICBjb25zdCBjYXJJdGVtOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSddYCk7XG4gIGlmIChjYXJJdGVtKSB7XG4gICAgY29uc3QgaW1nQ2FyOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLmltZ0NhcicpO1xuICAgIGNvbnN0IGltZ0ZsYWc6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gY2FySXRlbS5xdWVyeVNlbGVjdG9yKCcuaW1nRmxhZycpO1xuICAgIGlmIChpbWdDYXIgJiYgaW1nRmxhZykge1xuICAgICAgY29uc3QgdGltZSA9IGRpc3RhbmNlIC8gdmVsb2NpdHk7XG4gICAgICBjb25zdCByZWN0RmxhZyA9IGltZ0ZsYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByZWN0Q2FyID0gaW1nQ2FyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZGlzdGFuY2VUb0ZsYWcgPSByZWN0RmxhZy5sZWZ0IC0gcmVjdENhci5sZWZ0ICsgcmVjdENhci53aWR0aDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGltZ0Nhci5hbmltYXRlKFxuICAgICAgICBbeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDBweCknIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2Rpc3RhbmNlVG9GbGFnfXB4KWAgfV0sXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGltZSxcbiAgICAgICAgICBpdGVyYXRpb25zOiAxLFxuICAgICAgICAgIGZpbGw6ICdmb3J3YXJkcycsXG4gICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHNldEFuaW1hdGlvbnMoaWQsIGFuaW1hdGlvbik7XG4gICAgICBhbmltYXRpb24ucGxheSgpO1xuICAgICAgY29uc3Qgc3RhcnRCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLnN0YXJ0RW5naW5lJyk7XG4gICAgICBjb25zdCBzdG9wQnRuOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBjYXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zdG9wRW5naW5lJyk7XG4gICAgICBpZiAoc3RhcnRCdG4pIHN0YXJ0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGlmIChzdG9wQnRuKSBzdG9wQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcENhciA9IChpZDogbnVtYmVyKTogdm9pZCA9PiB7XG4gIGNvbnN0IGFuaW1hdGlvbnMgPSBnZXRTdGF0ZSgnYW5pbWF0aW9ucycpO1xuICBjb25zdCBhbmltYXRpb24gPSBhbmltYXRpb25zLmdldChpZCk7XG4gIGlmIChhbmltYXRpb24pIGFuaW1hdGlvbi5wYXVzZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FyID0gKGlkOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgY29uc3QgYW5pbWF0aW9ucyA9IGdldFN0YXRlKCdhbmltYXRpb25zJyk7XG4gIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGlvbnMuZ2V0KGlkKTtcbiAgaWYgKGFuaW1hdGlvbikgYW5pbWF0aW9uLmNhbmNlbCgpO1xuICBjb25zdCBjYXJJdGVtOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSddYCk7XG4gIGlmIChjYXJJdGVtKSB7XG4gICAgY29uc3Qgc3RhcnRCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IGNhckl0ZW0ucXVlcnlTZWxlY3RvcignLnN0YXJ0RW5naW5lJyk7XG4gICAgY29uc3Qgc3RvcEJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gY2FySXRlbS5xdWVyeVNlbGVjdG9yKCcuc3RvcEVuZ2luZScpO1xuICAgIGlmIChzdGFydEJ0bikgc3RhcnRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBpZiAoc3RvcEJ0bikgc3RvcEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn07XG4iLCJpbXBvcnQgdHlwZSB7IFBhcmFncmFwaFByb3BzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNvbnN0IHBFbGVtID0gKHsgY2xhc3NOYW1lLCB0ZXh0IH06IFBhcmFncmFwaFByb3BzKTogSFRNTFBhcmFncmFwaEVsZW1lbnQgPT4ge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpZiAoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYgKHRleHQpIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gZWxlbTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENhciwgVGFibGVSb3dQcm9wcywgVGFibGVQcm9wcywgV2lubmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcblxuZXhwb3J0IGNvbnN0IHRhYmxlUm93ID0gKHsgd2lubmVyLCBjYXIsIGNsYXNzTmFtZSB9OiBUYWJsZVJvd1Byb3BzKTogSFRNTFRhYmxlUm93RWxlbWVudCA9PiB7XG4gIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgaWYgKGNsYXNzTmFtZSkgdHIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB0ci5kYXRhc2V0LmlkID0gYCR7d2lubmVyLmlkfWA7XG4gIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIHRkMS5jbGFzc05hbWUgPSAnY291bnROdW0nO1xuICB0ZDEudGV4dENvbnRlbnQgPSBgJHtnZXRTdGF0ZSgnY3Vycldpbm5lck51bScpfWA7XG4gIHRkMi5jbGFzc05hbWUgPSAnY2FySW1nJztcbiAgdGQyLmlubmVySFRNTCA9IGBcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHBhdGggZD1cIk0yMS43MzkgMTAuOTIxYy0xLjM0Ny0uMzktMS44ODUtLjUzOC0zLjU1Mi0uOTIxIDAgMC0yLjM3OS0yLjM1OS0yLjgzMi0yLjgxNi0uNTY4LS41NzItMS4wNDMtMS4xODQtMi45NDktMS4xODRoLTcuODk0Yy0uNTExIDAtLjczNi41NDctLjA3IDEtLjc0Mi42MDItMS42MTkgMS4zOC0yLjI1OCAyLjAyNy0xLjQzNSAxLjQ1NS0yLjE4NCAyLjM4NS0yLjE4NCA0LjI1NSAwIDEuNzYgMS4wNDIgMy43MTggMy4xNzQgMy43MThoLjAxYy40MTMgMS4xNjIgMS41MTIgMiAyLjgxNiAyIDEuMzA0IDAgMi40MDMtLjgzOCAyLjgxNi0yaDYuMzY3Yy40MTMgMS4xNjIgMS41MTIgMiAyLjgxNiAyczIuNDAzLS44MzggMi44MTYtMmguNjg1YzEuOTk0IDAgMi41LTEuNzc2IDIuNS0zLjE2NSAwLTIuMDQxLTEuMTIzLTIuNTg0LTIuMjYxLTIuOTE0em0tMTUuNzM5IDYuMjc5Yy0uNjYyIDAtMS4yLS41MzgtMS4yLTEuMnMuNTM4LTEuMiAxLjItMS4yIDEuMi41MzggMS4yIDEuMi0uNTM4IDEuMi0xLjIgMS4yem0zLjU3Ni02LjJjLTEuMDcxIDAtMy41LS4xMDYtNS4yMTktLjc1LjU3OC0uNzUuOTk4LTEuMjIyIDEuMjctMS41MzYuMzE4LS4zNjguODczLS43MTQgMS41NjEtLjcxNGgyLjM4OHYzem0xLTNoMS44MzVjLjg4MiAwIDEuNDI4LjQ5MyAyLjAyMiAxLjEwNS40NTIuNDY2IDEuNzMyIDEuODk1IDEuNzMyIDEuODk1aC01LjU4OHYtM3ptNy40MjQgOS4yYy0uNjYyIDAtMS4yLS41MzgtMS4yLTEuMnMuNTM4LTEuMiAxLjItMS4yIDEuMi41MzggMS4yIDEuMi0uNTM4IDEuMi0xLjIgMS4yelwiIGZpbGw9JHtjYXIuY29sb3J9IGNsYXNzPSdzdmdDYXInLz5cbiAgICA8L3N2Zz5cbiAgYDtcbiAgdGQzLmNsYXNzTmFtZSA9ICdjYXJOYW1lJztcbiAgdGQzLnRleHRDb250ZW50ID0gY2FyLm5hbWU7XG4gIHRkNC5jbGFzc05hbWUgPSAnY2FyV2lucyc7XG4gIHRkNC50ZXh0Q29udGVudCA9IGAke3dpbm5lci53aW5zfWA7XG4gIHRkNS50ZXh0Q29udGVudCA9IGAke3dpbm5lci50aW1lfWA7XG4gIHRkNS5jbGFzc05hbWUgPSAnY2FyVGltZSc7XG4gIHRyLmFwcGVuZCh0ZDEsIHRkMiwgdGQzLCB0ZDQsIHRkNSk7XG4gIHJldHVybiB0cjtcbn07XG5cbmV4cG9ydCBjb25zdCB0YWJsZSA9ICh7IHRhYmxlUm93cywgY2xhc3NOYW1lIH06IFRhYmxlUHJvcHMpOiBIVE1MVGFibGVFbGVtZW50ID0+IHtcbiAgY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgaWYgKGNsYXNzTmFtZSkgdGFibGVFbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gIHRib2R5LmNsYXNzTmFtZSA9ICd0YWJsZUJvZHknO1xuICBjb25zdCBoZWFkZXJzOiBIVE1MVGFibGVDZWxsRWxlbWVudFtdID0gW107XG4gIGNvbnN0IHRvdGFsQ29sID0gNTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbENvbDsgaSsrKSB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGhlYWRlcnMucHVzaCh0aCk7XG4gIH1cbiAgY29uc3QgaGVhZGVyTmFtZXMgPSBbJ051bWJlcicsICdDYXInLCAnTmFtZScsICdXaW5zJywgJ0Jlc3QgdGltZSwgcyddO1xuICBoZWFkZXJzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaXRlbS50ZXh0Q29udGVudCA9IGhlYWRlck5hbWVzW2luZGV4XSA/PyAnJztcbiAgfSk7XG4gIHRoZWFkLmFwcGVuZCguLi5oZWFkZXJzKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGFibGVSb3dzKSkge1xuICAgIHRib2R5LmFwcGVuZCguLi50YWJsZVJvd3MpO1xuICB9IGVsc2UgaWYgKHRhYmxlUm93cykge1xuICAgIHRib2R5LmFwcGVuZCh0YWJsZVJvd3MpO1xuICB9XG4gIHRhYmxlRWxlbS5hcHBlbmQodGhlYWQsIHRib2R5KTtcbiAgcmV0dXJuIHRhYmxlRWxlbTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVXaW5uZXJUYWJsZSA9ICh3aW5uZXI6IFdpbm5lciB8IFdpbm5lcltdLCBjYXI6IENhciB8IENhcltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcbiAgaWYgKHRib2R5KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkod2lubmVyKSAmJiBBcnJheS5pc0FycmF5KGNhcikpIHtcbiAgICAgIGNvbnN0IHRhYmxlUm93czogSFRNTFRhYmxlUm93RWxlbWVudFtdID0gd2lubmVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgZGVmYXVsdENhciA9IHtcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBuYW1lOiAnbm9OYW1lJyxcbiAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBteUNhciA9IGNhcltpbmRleF0gPz8gZGVmYXVsdENhcjtcbiAgICAgICAgcmV0dXJuIHRhYmxlUm93KHsgd2lubmVyOiBpdGVtLCBjYXI6IG15Q2FyIH0pO1xuICAgICAgfSk7XG4gICAgICB0Ym9keS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRib2R5LmFwcGVuZCguLi50YWJsZVJvd3MpO1xuICAgIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkod2lubmVyKSAmJiAhQXJyYXkuaXNBcnJheShjYXIpKSB7XG4gICAgICBjb25zdCB0YWJsZVJvd0VsZW0gPSB0YWJsZVJvdyh7IHdpbm5lcjogd2lubmVyLCBjYXI6IGNhciB9KTtcbiAgICAgIHRib2R5LmFwcGVuZCh0YWJsZVJvd0VsZW0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVdpbm5lclJvdyA9ICh3aW5uZXI6IFdpbm5lcik6IHZvaWQgPT4ge1xuICBjb25zdCB0YWJsZVJvdzogSFRNTFRhYmxlUm93RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHt3aW5uZXIuaWR9J11gKTtcbiAgaWYgKHRhYmxlUm93KSB7XG4gICAgY29uc3Qgd2luczogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgfCBudWxsID0gdGFibGVSb3cucXVlcnlTZWxlY3RvcignLmNhcldpbnMnKTtcbiAgICBpZiAod2lucykgd2lucy50ZXh0Q29udGVudCA9IGAke3dpbm5lci53aW5zfWA7XG4gICAgY29uc3QgdGltZTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgfCBudWxsID0gdGFibGVSb3cucXVlcnlTZWxlY3RvcignLmNhclRpbWUnKTtcbiAgICBpZiAodGltZSkgdGltZS50ZXh0Q29udGVudCA9IGAke3dpbm5lci50aW1lfWA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVXaW5uZXJGcm9tVGFibGUgPSAoaWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZUJvZHknKTtcbiAgY29uc3QgdHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSddYCk7XG4gIGlmICh0Ym9keSAmJiB0cm93KSB0Ym9keS5yZW1vdmVDaGlsZCh0cm93KTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IENhciwgRHJpdmVQcm9wcywgUmFjZXIsIFdpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBnZXRTdGF0ZSwgc2V0Q2Fycywgc2V0SWQsIHNldFRvdGFsLCBzZXRVcGRhdGVkQ2FyLCBzZXRXaW5uZXJzLCBzZXRVcGRhdGVkV2lubmVyIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcbmltcG9ydCB7IGFuaW1hdGVDYXIsIHN0b3BDYXIsIHJlc2V0Q2FyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCB7IHJlbW92ZVdpbm5lckZyb21UYWJsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FycygpOiB2b2lkIHtcbiAgY29uc3QgcGFnZSA9IGdldFN0YXRlKCdnYXJhZ2VQYWdlJyk7XG4gIGNvbnN0IGxpbWl0ID0gZ2V0U3RhdGUoJ2xpbWl0Q2FycycpO1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fWA7XG4gIGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxDYXJbXT4gPT4ge1xuICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIocmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKSk7XG4gICAgICBzZXRUb3RhbCh0b3RhbCwgJ2NhcnMnKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgc2V0Q2FycyhkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgY2FyczonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNhcnMoKTogdm9pZCB7XG4gIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlPltdID0gY3JlYXRlR2VuZXJhdGVkQ2Fyc1Byb21pc2VzKCk7XG4gIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcylcbiAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZENhcnM6IENhcltdID0gW107XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgY29uc3QganNvblByb21pc2VzID0gcmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgLmpzb24oKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IENhcikgPT4ge1xuICAgICAgICAgICAgICBjcmVhdGVkQ2Fycy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgY2FyICR7aW5kZXh9YCwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGNyZWF0ZSBhIGNhciAke2luZGV4fTpgLCByZXN1bHQucmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBQcm9taXNlLmFsbChqc29uUHJvbWlzZXMpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50VG90YWwgPSBnZXRTdGF0ZSgndG90YWxDYXJzJyk7XG4gICAgICAgICAgc2V0VG90YWwoY3VycmVudFRvdGFsICsgY291bnQsICdjYXJzJyk7XG4gICAgICAgICAgZ2V0Q2FycygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgdG90YWwgYW1vdW50IG9mIGNhcnMnLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgIGNhcnMnLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdlbmVyYXRlZENhcnNQcm9taXNlcygpOiBQcm9taXNlPFJlc3BvbnNlPltdIHtcbiAgY29uc3QgYnJhbmRzOiBzdHJpbmdbXSA9IFsnQk1XJywgJ0ZpYXQnLCAnRm9yZCcsICdIeXVuZGFpJywgJ0tpYScsICdMYW5jaWEnLCAnT3BlbCcsICdSZW5hdWx0JywgJ1N1enVraScsICdWb2x2byddO1xuICBjb25zdCBtb2RlbHM6IHN0cmluZ1tdW10gPSBbXG4gICAgWydpWDInLCAnaTUnLCAnNSBTZXJpZXMgRzYwJywgJ1hNIExhYmVsIFJlZCcsICdYMSBNMzVpIHhEcml2ZScsICdNMiBHODcnLCAnMyBTZXJpZXMgRmFjZWxpZnQgKEcyMCBMQ0kpJywgJ2k3IE03MCB4RHJpdmUnLCAnWDUgTENJJywgJ1g2IExDSSddLFxuICAgIFsnVG9wb2xpbm8gRVYnLCAnUGFuZGEgSHlicmlkJywgJzYwMGUnLCAnNTAwZSBBYmFydGgnLCAnNTAwWCBIeWJyaWQnLCAnVGlwbyBDcm9zcycsICdEb2JsbycsICdVbHlzc2UnLCAnU2N1ZG8nLCAnNTAwIFJFRCBFZGl0aW9uJ10sXG4gICAgWydFeHBsb3JlciBFVicsICdNdXN0YW5nIE1hY2gtRSBSYWxseScsICdNdXN0YW5nIChTNjUwKScsICdSYW5nZXIgUmFwdG9yJywgJ0YtMTUwIExpZ2h0bmluZycsICdUcmFuc2l0IEN1c3RvbScsICdQdW1hIFNUIFBvd2Vyc2hpZnQnLCAnQnJvbmNvJywgJ0UtVG91cm5lbyBDdXN0b20nLCAnRmllc3RhIEZpbmFsIEVkaXRpb24nXSxcbiAgICBbJ0lvbmlxIDYnLCAnS29uYSBFbGVjdHJpYycsICdTYW50YSBGZScsICdUdWNzb24gSHlicmlkJywgJ0lvbmlxIDUgTicsICdFbGFudHJhIE4nLCAnQmF5b24nLCAnU3RhcmlhJywgJ1ZlbnVlJywgJ0dyYW5kZXVyJ10sXG4gICAgWydFVjknLCAnRVY2IEdUJywgJ1Nwb3J0YWdlIEh5YnJpZCcsICdOaXJvIEVWJywgJ1NvcmVudG8nLCAnSzMnLCAnUGljYW50bycsICdDYXJuaXZhbCBIaS1MaW1vdXNpbmUnLCAnU2VsdG9zJywgJ1RlbGx1cmlkZSddLFxuICAgIFsnWXBzaWxvbiBIeWJyaWQnLCAnWXBzaWxvbiBBbGJlcnRhIEZlcnJldHRpJywgJ1lwc2lsb24gRWNvQ2hpYyBHUEwnLCAnWXBzaWxvbiBVbnljYScsICdZcHNpbG9uIEh5YnJpZCBFY29DaGljJywgJ1lwc2lsb24gTW9ub2dyYW0nLCAnWXBzaWxvbiBCbGFjayAmIE5vaXInLCAnWXBzaWxvbiBFbGVmYW50aW5vJywgJ1lwc2lsb24gTXlhJywgJ1lwc2lsb24gUGxhdGludW0nXSxcbiAgICBbJ0FzdHJhIEVsZWN0cmljJywgJ01va2thIEVsZWN0cmljJywgJ0NvcnNhIEVsZWN0cmljJywgJ0dyYW5kbGFuZCBHU2UnLCAnQXN0cmEgU3BvcnRzIFRvdXJlcicsICdDb21ibyBFbGVjdHJpYycsICdaYWZpcmEtZSBMaWZlJywgJ1JvY2tzLWUnLCAnTW92YW5vIEVsZWN0cmljJywgJ1ZpdmFyby1lIEh5ZHJvZ2VuJ10sXG4gICAgWydTY2VuaWMgRS1UZWNoIEVsZWN0cmljJywgJzUgRWxlY3RyaWMnLCAnQXVzdHJhbCcsICdSYWZhbGUnLCAnS2FuZ29vIEUtVGVjaCcsICdDbGlvIFYgRmFjZWxpZnQnLCAnTWVnYW5lIEUtVGVjaCBFbGVjdHJpYycsICdBcmthbmEnLCAnQ2FwdHVyIEUtVGVjaCcsICdUd2luZ28gRWxlY3RyaWMnXSxcbiAgICBbJ1N3aWZ0JywgJ0Zyb254JywgJ0ppbW55IDUtRG9vcicsICdHcmFuZCBWaXRhcmEnLCAnQmFsZW5vJywgJ1MtQ3Jvc3MgSHlicmlkJywgJ1ZpdGFyYSBTdHJvbmcgSHlicmlkJywgJ0lnbmlzIEh5YnJpZCcsICdBY3Jvc3MgUGx1Zy1pbiBIeWJyaWQnLCAnU3dhY2UnXSxcbiAgICBbJ0VYMzAnLCAnRVg5MCcsICdYQzQwIFJlY2hhcmdlIEZhY2VsaWZ0JywgJ0M0MCBSZWNoYXJnZScsICdWNjAgQ3Jvc3MgQ291bnRyeScsICdTNjAnLCAnWEM5MCBQbHVnLWluIEh5YnJpZCcsICdWOTAnLCAnVjYwIFJlY2hhcmdlJywgJ1hDNjAnXVxuICBdO1xuICBjb25zdCB0b3RhbCA9IDEwMDtcbiAgY29uc3QgcmFuZ2UgPSAxMDtcbiAgY29uc3QgYmFzZSA9IDE2O1xuICBjb25zdCBsYXJnZXN0SGV4YWRlY2ltYWwgPSAxNjc3NzIxNTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2U+W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tQnJhbmQ6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICBjb25zdCByYW5kb21Nb2RlbDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yOiBzdHJpbmcgPSAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsYXJnZXN0SGV4YWRlY2ltYWwpLnRvU3RyaW5nKGJhc2UpO1xuICAgIGNvbnN0IG5hbWUgPSBgJHticmFuZHNbcmFuZG9tQnJhbmRdfSAke21vZGVsc1tyYW5kb21CcmFuZF0/LltyYW5kb21Nb2RlbF19YDtcbiAgICBjb25zdCBjYXIgPSB7IG5hbWU6IG5hbWUsIGNvbG9yOiByYW5kb21Db2xvciB9O1xuICAgIGNvbnN0IHByb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICAgIH0pO1xuICAgIHByb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyKG5hbWU6IHN0cmluZywgY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBkYXRhID0ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgY29sb3I6IGNvbG9yLFxuICB9O1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZScsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxDYXI+ID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YTogQ2FyKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxDYXJzJyk7XG4gICAgICB0b3RhbCArPSAxO1xuICAgICAgc2V0VG90YWwodG90YWwsICdjYXJzJyk7XG4gICAgICBzZXRDYXJzKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gY3JlYXRlIGEgY2FyJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXIoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvZ2FyYWdlLyR7aWR9YDtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGNvbG9yOiBjb2xvcixcbiAgfTtcbiAgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FyIGlzIG5vdCBmb3VuZDogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoZGF0YTogQ2FyKSA9PiB7XG4gICAgICBzZXRVcGRhdGVkQ2FyKGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBkYXRlIGEgY2FyJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYXIoaWQ6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZS8ke2lkfWA7XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGRlbGV0ZSBhIGNhcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxDYXJzJyk7XG4gICAgICAgIHRvdGFsIC09IDE7XG4gICAgICAgIHNldFRvdGFsKHRvdGFsLCAnY2FycycpO1xuICAgICAgICBzZXRJZChpZCwgJ3JlbW92ZScpO1xuICAgICAgICByZW1vdmVXaW5uZXIoaWQpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gZGVsZXRlIGEgY2FyJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RDYXIoY2FyOiBDYXIpOiB2b2lkIHtcbiAgc2V0SWQoY2FyLmlkLCAnc2VsZWN0Jyk7XG4gIGNvbnN0IGlkOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVJZCcpO1xuICBjb25zdCBuYW1lOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVOYW1lJyk7XG4gIGNvbnN0IGNvbG9yOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGVDb2xvcicpO1xuICBpZiAoaWQgJiYgbmFtZSAmJiBjb2xvcikge1xuICAgIGlkLnZhbHVlID0gYCR7Y2FyLmlkfWA7XG4gICAgbmFtZS52YWx1ZSA9IGNhci5uYW1lO1xuICAgIGNvbG9yLnZhbHVlID0gY2FyLmNvbG9yO1xuICB9XG59XG5cbmNvbnN0IGVycm9ycyA9IHtcbiAgYmFkUmVxdWVzdDogNDAwLFxuICBub3RGb3VuZDogNDA0LFxuICBtYW55UmVxdWVzdHM6IDQyOSxcbiAgc2VydmVyRXJyb3I6IDUwMCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3BDYXJFbmdpbmUoaWQ6IG51bWJlciwgc3RhdHVzOiAnc3RhcnRlZCcgfCAnc3RvcHBlZCcpOiB2b2lkIHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmU/aWQ9JHtpZH0mc3RhdHVzPSR7c3RhdHVzfWA7XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oKGRhdGE6IERyaXZlUHJvcHMpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnc3RhcnRlZCcpIHtcbiAgICAgICAgICAgIGFuaW1hdGVDYXIoeyBpZDogaWQsIHZlbG9jaXR5OiBkYXRhLnZlbG9jaXR5LCBkaXN0YW5jZTogZGF0YS5kaXN0YW5jZSB9KTtcbiAgICAgICAgICAgIGRyaXZlQ2FyKGlkKS5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZHJpdmUgYSBjYXI6JywgZXJyb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRDYXIoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gZXJyb3JzLmJhZFJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyBwYXJhbWV0ZXJzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBlcnJvcnMubm90Rm91bmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYXIgaXMgbm90IGZvdW5kOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpO1xuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBzdGFydC9zdG9wIGNhcidzIGVuZ2luZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZHJpdmVDYXIoaWQ6IG51bWJlcik6IFByb21pc2U8UmVzcG9uc2U+IHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmU/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYDtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBlcnJvcnMuYmFkUmVxdWVzdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBXcm9uZyBwYXJhbWV0ZXJzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gZXJyb3JzLm5vdEZvdW5kKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVuZ2luZSBwYXJhbXMgYXJlIG5vdCBmb3VuZDogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IGVycm9ycy5tYW55UmVxdWVzdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRHJpdmUgaW4gcHJvZ3Jlc3M6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBlcnJvcnMuc2VydmVyRXJyb3IpIHtcbiAgICAgIHN0b3BDYXIoaWQpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYXIgaGFzIGJlZW4gc3RvcHBlZCBzdWRkZW5seS4gSXQncyBlbmdpbmUgd2FzIGJyb2tlbiBkb3duOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UmFjZSgpOiB2b2lkIHtcbiAgZ2V0Q2FycygpO1xuICBjb25zdCBjYXJzID0gZ2V0U3RhdGUoJ2NhcnMnKTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2U+W10gPSBjYXJzLm1hcCgoY2FyKSA9PiB7XG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbmdpbmU/aWQ9JHtjYXIuaWR9JnN0YXR1cz1zdGFydGVkYDtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BBVENIJyB9KTtcbiAgfSk7XG4gIGNvbnN0IHJhY2VyczogUHJvbWlzZTxSYWNlcj5bXSA9IFtdO1xuICBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpXG4gICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnN0IHJhY2VyUHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZnVsZmlsbGVkJykge1xuICAgICAgICAgIGNvbnN0IHJhY2VyUHJvbWlzZSA9IHJlc3VsdC52YWx1ZVxuICAgICAgICAgICAgLmpzb24oKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IERyaXZlUHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbXlDYXIgPSBjYXJzW2luZGV4XTtcbiAgICAgICAgICAgICAgaWYgKG15Q2FyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFjZXIgPSBjcmVhdGVSYWNlclByb21pc2UobXlDYXIsIGRhdGEudmVsb2NpdHksIGRhdGEuZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgIHJhY2Vycy5wdXNoKHJhY2VyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzdGFydCByYWNlOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHJhY2VyUHJvbWlzZXMucHVzaChyYWNlclByb21pc2UpO1xuICAgICAgICB9IGVsc2UgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHN0YXJ0IHJhY2UnLCByZXN1bHQucmVhc29uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJhY2VyUHJvbWlzZXMpO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgYW5ub3VuY2VXaW5uZXIocmFjZXJzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgcmFjZTonLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhY2VyUHJvbWlzZShjYXI6IENhciwgdmVsb2NpdHk6IG51bWJlciwgZGlzdGFuY2U6IG51bWJlcik6IFByb21pc2U8UmFjZXI+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0aW1lID0gZGlzdGFuY2UgLyB2ZWxvY2l0eTtcbiAgICBjb25zdCByYWNlcjogUmFjZXIgPSB7XG4gICAgICBpZDogY2FyLmlkLFxuICAgICAgbmFtZTogY2FyLm5hbWUsXG4gICAgICB0aW1lOiB0aW1lLFxuICAgIH07XG4gICAgY29uc3QgaWRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKHJhY2VyKTtcbiAgICB9LCB0aW1lKTtcbiAgICBhbmltYXRlQ2FyKHsgaWQ6IGNhci5pZCwgdmVsb2NpdHk6IHZlbG9jaXR5LCBkaXN0YW5jZTogZGlzdGFuY2UgfSk7XG4gICAgZHJpdmVDYXIoY2FyLmlkKS5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChpZFRpbWVvdXQpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIocmFjZXJzOiBQcm9taXNlPFJhY2VyPltdKTogdm9pZCB7XG4gIFByb21pc2UuYW55KHJhY2VycylcbiAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG1zID0gMTAwMDtcbiAgICAgIGNvbnN0IGZpeGVkTnVtID0gMjtcbiAgICAgIGNvbnN0IHRpbWUgPSBOdW1iZXIoKHZhbHVlLnRpbWUgLyBtcykudG9GaXhlZChmaXhlZE51bSkpO1xuICAgICAgY29uc3Qgd2lubmVyID0ge1xuICAgICAgICBpZDogdmFsdWUuaWQsXG4gICAgICAgIHdpbnM6IDEsXG4gICAgICAgIHRpbWU6IHRpbWUsXG4gICAgICB9O1xuICAgICAgYWxlcnQoYCR7dmFsdWUubmFtZX0gd2lucyB3aXRoIHRpbWUgJHt0aW1lfXNgKTtcbiAgICAgIGNoZWNrV2lubmVyKHdpbm5lcik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3RhcnQgcmFjZTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldENhcnMoKTogdm9pZCB7XG4gIGNvbnN0IGNhcnMgPSBnZXRTdGF0ZSgnY2FycycpO1xuICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZT5bXSA9IGNhcnMubWFwKChjYXIpID0+IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2VuZ2luZT9pZD0ke2Nhci5pZH0mc3RhdHVzPXN0b3BwZWRgO1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pO1xuICB9KTtcbiAgUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKVxuICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgY29uc3QgbXlDYXIgPSBjYXJzW2luZGV4XTtcbiAgICAgICAgICBpZiAobXlDYXIpIHtcbiAgICAgICAgICAgIHJlc2V0Q2FyKG15Q2FyLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHJlc2V0IGNhcnMnLCByZXN1bHQucmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcmVzZXQgY2FyczonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdpbm5lcih3aW5uZXI6IFdpbm5lcikge1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3dpbm5lcnMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHdpbm5lciksXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxXaW5uZXI+ID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YTogV2lubmVyKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxXaW5uZXJzJyk7XG4gICAgICB0b3RhbCArPSAxO1xuICAgICAgc2V0VG90YWwodG90YWwsICd3aW5uZXJzJyk7XG4gICAgICBnZXRDYXIoZGF0YS5pZClcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB2YWx1ZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChjYXI6IENhcikgPT4ge1xuICAgICAgICAgIHNldFdpbm5lcnMod2lubmVyLCBjYXIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZXQgd2lubmVyIGNhciBkYXRhJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpO1xuICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGNyZWF0ZSBhIHdpbm5lcicpO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXaW5uZXIod2lubmVyOiBXaW5uZXIpOiB2b2lkIHtcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93aW5uZXJzLyR7d2lubmVyLmlkfWA7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgd2luczogd2lubmVyLndpbnMsXG4gICAgdGltZTogd2lubmVyLnRpbWUsXG4gIH07XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdpbm5lciBpcyBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGE6IFdpbm5lcikgPT4ge1xuICAgICAgc2V0VXBkYXRlZFdpbm5lcihkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpO1xuICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwZGF0ZSBhIGNhcicpO1xuICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja1dpbm5lcih3aW5uZXI6IFdpbm5lcik6IHZvaWQge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3dpbm5lcnMvJHt3aW5uZXIuaWR9YDtcbiAgZmV0Y2godXJsLCB7IG1ldGhvZDogJ0dFVCcgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXNwb25zZVxuICAgICAgICAgIC5qc29uKClcbiAgICAgICAgICAudGhlbigoZGF0YTogV2lubmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3RhbFdpbnMgPSBkYXRhLndpbnMgKyAxO1xuICAgICAgICAgICAgY29uc3QgYmVzdFRpbWUgPSBNYXRoLm1pbih3aW5uZXIudGltZSwgZGF0YS50aW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRXaW5uZXIgPSB7XG4gICAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICB3aW5zOiB0b3RhbFdpbnMsXG4gICAgICAgICAgICAgIHRpbWU6IGJlc3RUaW1lLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHVwZGF0ZVdpbm5lcih1cGRhdGVkV2lubmVyKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHVwZGF0ZSBhIHdpbm5lcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlV2lubmVyKHdpbm5lcik7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yKTtcbiAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBjcmVhdGUvdXBkYXRlIGEgd2lubmVyJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENhcihpZDogbnVtYmVyKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2dhcmFnZS8ke2lkfWA7XG4gIHJldHVybiBmZXRjaCh1cmwsIHsgbWV0aG9kOiAnR0VUJyB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IGVycm9ycy5ub3RGb3VuZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYXIgcGFyYW1zIGFyZSBub3QgZm91bmQ6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2lubmVycygpOiB2b2lkIHtcbiAgY29uc3QgcGFnZSA9IGdldFN0YXRlKCd3aW5uZXJzUGFnZScpO1xuICBjb25zdCBsaW1pdCA9IGdldFN0YXRlKCdsaW1pdFdpbm5lcnMnKTtcbiAgY29uc3Qgc29ydCA9IGdldFN0YXRlKCdzb3J0aW5nT3JkZXInKTtcbiAgY29uc3Qgb3JkZXIgPSBnZXRTdGF0ZSgnc29ydEJ5Jyk7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvd2lubmVycz9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2xpbWl0fSZfc29ydD0ke3NvcnR9Jl9vcmRlcj0ke29yZGVyfWA7XG4gIGZldGNoKHVybCwgeyBtZXRob2Q6ICdHRVQnIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKTogUHJvbWlzZTxXaW5uZXJbXT4gPT4ge1xuICAgICAgY29uc3QgdG90YWwgPSBOdW1iZXIocmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKSk7XG4gICAgICBzZXRUb3RhbCh0b3RhbCwgJ3dpbm5lcnMnKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbigod2lubmVycykgPT4ge1xuICAgICAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8Q2FyIHwgdW5kZWZpbmVkPltdID0gd2lubmVycy5tYXAoKHdpbm5lcikgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0Q2FyKHdpbm5lci5pZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiAocmVzLm9rID8gKHJlcy5qc29uKCkgYXMgUHJvbWlzZTxDYXI+KSA6IHVuZGVmaW5lZCkpXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG4gICAgICB9KTtcbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAudGhlbigoY2Fyc1JhdykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhcnM6IENhcltdID0gY2Fyc1Jhdy5maWx0ZXIoKGNhcik6IGNhciBpcyBDYXIgPT4gY2FyICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgIHNldFdpbm5lcnMod2lubmVycywgY2Fycyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBjYXJzOicsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCB3aW5uZXJzOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdpbm5lcihpZDogbnVtYmVyKTogdm9pZCB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAvd2lubmVycy8ke2lkfWA7XG4gIGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGRlbGV0ZSBhIHdpbm5lcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG90YWwgPSBnZXRTdGF0ZSgndG90YWxXaW5uZXJzJyk7XG4gICAgICAgIHRvdGFsIC09IDE7XG4gICAgICAgIHNldFRvdGFsKHRvdGFsLCAnd2lubmVycycpO1xuICAgICAgICByZW1vdmVXaW5uZXJGcm9tVGFibGUoaWQpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcjogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvcik7XG4gICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gZGVsZXRlIGEgd2lubmVyJyk7XG4gICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRTdGF0ZSwgc2V0R2FyYWdlUGFnZSwgc2V0Vmlldywgc2V0V2lubmVyc1BhZ2UgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZXMnO1xuaW1wb3J0IHsgcmVuZGVyVmlldyB9IGZyb20gJy4uL3ZpZXdzL3ZpZXctbWFuYWdlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2UGFnZSgpOiB2b2lkIHtcbiAgY29uc3QgbmV4dFBhZ2VCdG46IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XG4gIGxldCBjdXJyUGFnZSA9IDA7XG4gIGNvbnN0IGN1cnJWaWV3ID0gZ2V0U3RhdGUoJ3ZpZXcnKTtcbiAgaWYgKGN1cnJWaWV3ID09PSAnZ2FyYWdlJykge1xuICAgIGN1cnJQYWdlID0gZ2V0U3RhdGUoJ2dhcmFnZVBhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyUGFnZSA9IGdldFN0YXRlKCd3aW5uZXJzUGFnZScpO1xuICB9XG4gIGxldCBwcmV2UGFnZSA9IDA7XG4gIGlmIChjdXJyUGFnZSA+IDEpIHtcbiAgICBwcmV2UGFnZSA9IGN1cnJQYWdlIC0gMTtcbiAgICBpZiAoY3VyclZpZXcgPT09ICdnYXJhZ2UnKSB7XG4gICAgICBzZXRHYXJhZ2VQYWdlKHByZXZQYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V2lubmVyc1BhZ2UocHJldlBhZ2UpO1xuICAgIH1cbiAgICBpZiAobmV4dFBhZ2VCdG4/LmNsYXNzTGlzdC5jb250YWlucygnaW5hY3RpdmUnKSkgbmV4dFBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dFBhZ2UoKTogdm9pZCB7XG4gIGNvbnN0IHByZXZQYWdlQnRuOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldkJ1dHRvbicpO1xuICBjb25zdCBuZXh0UGFnZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKTtcbiAgbGV0IGN1cnJQYWdlID0gMDtcbiAgbGV0IHRvdGFsUGFnZXNWaWV3ID0gMDtcbiAgY29uc3QgY3VyclZpZXcgPSBnZXRTdGF0ZSgndmlldycpO1xuICBpZiAoY3VyclZpZXcgPT09ICdnYXJhZ2UnKSB7XG4gICAgY3VyclBhZ2UgPSBnZXRTdGF0ZSgnZ2FyYWdlUGFnZScpO1xuICAgIHRvdGFsUGFnZXNWaWV3ID0gZ2V0U3RhdGUoJ3RvdGFsUGFnZXNHYXJhZ2UnKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyUGFnZSA9IGdldFN0YXRlKCd3aW5uZXJzUGFnZScpO1xuICAgIHRvdGFsUGFnZXNWaWV3ID0gZ2V0U3RhdGUoJ3RvdGFsUGFnZXNXaW5uZXJzJyk7XG4gIH1cbiAgbGV0IG5leHRQYWdlID0gMDtcbiAgaWYgKGN1cnJQYWdlIDwgdG90YWxQYWdlc1ZpZXcpIHtcbiAgICBuZXh0UGFnZSA9IGN1cnJQYWdlICsgMTtcbiAgICBpZiAoY3VyclZpZXcgPT09ICdnYXJhZ2UnKSB7XG4gICAgICBzZXRHYXJhZ2VQYWdlKG5leHRQYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0V2lubmVyc1BhZ2UobmV4dFBhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJldlBhZ2VCdG4/LmNsYXNzTGlzdC5jb250YWlucygnaW5hY3RpdmUnKSkgcHJldlBhZ2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaW5hY3RpdmUnKTtcbiAgICBpZiAobmV4dFBhZ2UgPT09IHRvdGFsUGFnZXNWaWV3KSBuZXh0UGFnZUJ0bj8uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29Ub0dhcmFnZSgpIHtcbiAgc2V0VmlldygnZ2FyYWdlJyk7XG4gIHJlbmRlclZpZXcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9XaW5uZXJzKCkge1xuICBzZXRWaWV3KCd3aW5uZXJzJyk7XG4gIHJlbmRlclZpZXcoKTtcbn1cbiIsImltcG9ydCB0eXBlIHsgQXBwU3RhdGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgcmVtb3ZlQ2FyRnJvbUxpc3QsIHVwZGF0ZUNhckxpc3QsIHVwZGF0ZUNhckxpc3RJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCB7IHVwZGF0ZVdpbm5lclRhYmxlLCB1cGRhdGVXaW5uZXJSb3cgfSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlJztcbmltcG9ydCB7IGdldENhcnMsIGdldFdpbm5lcnMgfSBmcm9tICcuLi9yZXF1ZXN0cy9yZXF1ZXN0cyc7XG5pbXBvcnQgeyB1cGRhdGVUb3RhbENhcnMsIHVwZGF0ZUN1cnJQYWdlIH0gZnJvbSAnLi4vdmlld3MvZ2FyYWdlJztcbmltcG9ydCB7IHVwZGF0ZVRvdGFsV2lubmVycyB9IGZyb20gJy4uL3ZpZXdzL3dpbm5lcnMnO1xuXG5jb25zdCBub3RGb3VuZEluZGV4ID0gLTE7XG5cbmNvbnN0IHN0YXRlOiBBcHBTdGF0ZSA9IHtcbiAgdmlldzogJ2dhcmFnZScsXG4gIGNhcnM6IFtdLFxuICB3aW5uZXJzOiBbXSxcbiAgZ2FyYWdlUGFnZTogMSxcbiAgd2lubmVyc1BhZ2U6IDEsXG4gIHRvdGFsQ2FyczogMCxcbiAgdG90YWxXaW5uZXJzOiAwLFxuICBjdXJyV2lubmVyTnVtOiAxLFxuICB0b3RhbFBhZ2VzR2FyYWdlOiAwLFxuICB0b3RhbFBhZ2VzV2lubmVyczogMCxcbiAgbGltaXRDYXJzOiA3LFxuICBsaW1pdFdpbm5lcnM6IDEwLFxuICBzZWxlY3RJZDogbnVsbCxcbiAgcmVtb3ZlSWQ6IG51bGwsXG4gIHNvcnRpbmdPcmRlcjogJ0FTQycsXG4gIHNvcnRCeTogJ3RpbWUnLFxuICBhbmltYXRpb25zOiBuZXcgTWFwKCksXG4gIGdldFN0YXRlKHByb3ApIHtcbiAgICByZXR1cm4gdGhpc1twcm9wXTtcbiAgfSxcbiAgc2V0Vmlldyh2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfSxcbiAgc2V0Q2FycyhjYXIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjYXIpKSB7XG4gICAgICB0aGlzLmNhcnMgPSBjYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2Fycy5wdXNoKGNhcik7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhcnMubGVuZ3RoIDw9IHRoaXMubGltaXRDYXJzKSB7XG4gICAgICB1cGRhdGVDYXJMaXN0KGNhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5leHRQYWdlID0gdGhpcy5nYXJhZ2VQYWdlICsgMTtcbiAgICAgIHRoaXMuc2V0R2FyYWdlUGFnZShuZXh0UGFnZSk7XG4gICAgfVxuICB9LFxuICBzZXRVcGRhdGVkQ2FyKHVwZGF0ZWRDYXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2Fycy5maW5kSW5kZXgoKGNhcikgPT4gY2FyLmlkID09PSB1cGRhdGVkQ2FyLmlkKTtcbiAgICBpZiAoaW5kZXggIT09IG5vdEZvdW5kSW5kZXgpIHtcbiAgICAgIHRoaXMuY2Fyc1tpbmRleF0gPSB1cGRhdGVkQ2FyO1xuICAgICAgdXBkYXRlQ2FyTGlzdEl0ZW0odXBkYXRlZENhcik7XG4gICAgfVxuICB9LFxuICBzZXRVcGRhdGVkV2lubmVyKHVwZGF0ZWRXaW5uZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMud2lubmVycy5maW5kSW5kZXgoKHdpbm5lcikgPT4gd2lubmVyLmlkID09PSB1cGRhdGVkV2lubmVyLmlkKTtcbiAgICBpZiAoaW5kZXggIT09IG5vdEZvdW5kSW5kZXgpIHtcbiAgICAgIHRoaXMud2lubmVyc1tpbmRleF0gPSB1cGRhdGVkV2lubmVyO1xuICAgICAgdXBkYXRlV2lubmVyUm93KHVwZGF0ZWRXaW5uZXIpO1xuICAgIH1cbiAgfSxcbiAgc2V0V2lubmVycyh3aW5uZXIsIGNhcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHdpbm5lcikpIHtcbiAgICAgIHRoaXMud2lubmVycyA9IHdpbm5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aW5uZXJzLnB1c2god2lubmVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lubmVycy5sZW5ndGggPD0gdGhpcy5saW1pdFdpbm5lcnMpIHtcbiAgICAgIHVwZGF0ZVdpbm5lclRhYmxlKHdpbm5lciwgY2FyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV4dFBhZ2UgPSB0aGlzLndpbm5lcnNQYWdlICsgMTtcbiAgICAgIHRoaXMuc2V0V2lubmVyc1BhZ2UobmV4dFBhZ2UpO1xuICAgIH1cbiAgfSxcbiAgc2V0Q3VyV2lubmVyTnVtKG51bSkge1xuICAgIHRoaXMuY3Vycldpbm5lck51bSA9IG51bTtcbiAgfSxcbiAgc2V0VG90YWwodG90YWwsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gJ2NhcnMnKSB7XG4gICAgICB0aGlzLnRvdGFsQ2FycyA9IHRvdGFsO1xuICAgICAgdGhpcy5zZXRUb3RhbFBhZ2VzR2FyYWdlKCk7XG4gICAgICB1cGRhdGVUb3RhbENhcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFdpbm5lcnMgPSB0b3RhbDtcbiAgICAgIHRoaXMuc2V0VG90YWxQYWdlc1dpbm5lcnMoKTtcbiAgICAgIHVwZGF0ZVRvdGFsV2lubmVycygpO1xuICAgIH1cbiAgfSxcbiAgc2V0VG90YWxQYWdlc0dhcmFnZSgpIHtcbiAgICB0aGlzLnRvdGFsUGFnZXNHYXJhZ2UgPSBNYXRoLmNlaWwodGhpcy50b3RhbENhcnMgLyB0aGlzLmxpbWl0Q2Fycyk7XG4gIH0sXG4gIHNldFRvdGFsUGFnZXNXaW5uZXJzKCkge1xuICAgIHRoaXMudG90YWxQYWdlc1dpbm5lcnMgPSBNYXRoLmNlaWwodGhpcy50b3RhbFdpbm5lcnMgLyB0aGlzLmxpbWl0V2lubmVycyk7XG4gIH0sXG4gIHNldEdhcmFnZVBhZ2UocGFnZSkge1xuICAgIHRoaXMuZ2FyYWdlUGFnZSA9IHBhZ2U7XG4gICAgdXBkYXRlQ3VyclBhZ2UoJ2dhcmFnZVBhZ2UnKTtcbiAgICBnZXRDYXJzKCk7XG4gIH0sXG4gIHNldFdpbm5lcnNQYWdlKHBhZ2UpIHtcbiAgICB0aGlzLndpbm5lcnNQYWdlID0gcGFnZTtcbiAgICB1cGRhdGVDdXJyUGFnZSgnd2lubmVyc1BhZ2UnKTtcbiAgICBnZXRXaW5uZXJzKCk7XG4gIH0sXG4gIHNldElkKGlkLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICB0aGlzLnNlbGVjdElkID0gaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlSWQgPSBpZDtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJzLmZpbmRJbmRleCgoY2FyKSA9PiBjYXIuaWQgPT09IHRoaXMucmVtb3ZlSWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSBub3RGb3VuZEluZGV4KSB7XG4gICAgICAgIHRoaXMuY2Fycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICByZW1vdmVDYXJGcm9tTGlzdCh0aGlzLnJlbW92ZUlkKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jYXJzLmxlbmd0aCAmJiB0aGlzLmdhcmFnZVBhZ2UgPiAxKSB7XG4gICAgICAgIGNvbnN0IHByZXZQYWdlID0gdGhpcy5nYXJhZ2VQYWdlIC0gMTtcbiAgICAgICAgdGhpcy5zZXRHYXJhZ2VQYWdlKHByZXZQYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldEFuaW1hdGlvbnMoaWQ6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24pIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMuc2V0KGlkLCBhbmltYXRpb24pO1xuICB9LFxuICBzZXRTb3J0aW5nT3JkZXIob3JkZXIpIHtcbiAgICB0aGlzLnNvcnRpbmdPcmRlciA9IG9yZGVyO1xuICB9LFxuICBzZXRTb3J0QnkodHlwZSkge1xuICAgIHRoaXMuc29ydEJ5ID0gdHlwZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0ZSA9IHN0YXRlLmdldFN0YXRlLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFZpZXcgPSBzdGF0ZS5zZXRWaWV3LmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldENhcnMgPSBzdGF0ZS5zZXRDYXJzLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFVwZGF0ZWRDYXIgPSBzdGF0ZS5zZXRVcGRhdGVkQ2FyLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFdpbm5lcnMgPSBzdGF0ZS5zZXRXaW5uZXJzLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFVwZGF0ZWRXaW5uZXIgPSBzdGF0ZS5zZXRVcGRhdGVkV2lubmVyLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldEN1cldpbm5lck51bSA9IHN0YXRlLnNldEN1cldpbm5lck51bS5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRUb3RhbCA9IHN0YXRlLnNldFRvdGFsLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFRvdGFsUGFnZXNHYXJhZ2UgPSBzdGF0ZS5zZXRUb3RhbFBhZ2VzR2FyYWdlLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFRvdGFsUGFnZXNXaW5uZXJzID0gc3RhdGUuc2V0VG90YWxQYWdlc1dpbm5lcnMuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0R2FyYWdlUGFnZSA9IHN0YXRlLnNldEdhcmFnZVBhZ2UuYmluZChzdGF0ZSk7XG5leHBvcnQgY29uc3Qgc2V0V2lubmVyc1BhZ2UgPSBzdGF0ZS5zZXRXaW5uZXJzUGFnZS5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRJZCA9IHN0YXRlLnNldElkLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldEFuaW1hdGlvbnMgPSBzdGF0ZS5zZXRBbmltYXRpb25zLmJpbmQoc3RhdGUpO1xuZXhwb3J0IGNvbnN0IHNldFNvcnRpbmdPcmRlciA9IHN0YXRlLnNldFNvcnRpbmdPcmRlci5iaW5kKHN0YXRlKTtcbmV4cG9ydCBjb25zdCBzZXRTb3J0QnkgPSBzdGF0ZS5zZXRTb3J0QnkuYmluZChzdGF0ZSk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBidXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBjbGVhbkZvcm0sIGlucHV0RmllbGQsIGZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0nO1xuaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCc7XG5pbXBvcnQgeyBwRWxlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJztcbmltcG9ydCB7IGNyZWF0ZUNhciwgZ2VuZXJhdGVDYXJzLCBnZXRDYXJzLCByZXNldENhcnMsIHN0YXJ0UmFjZSwgdXBkYXRlQ2FyIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdHMnO1xuaW1wb3J0IHsgbmV4dFBhZ2UsIHByZXZQYWdlIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdvVG9HYXJhZ2UsIGdvVG9XaW5uZXJzIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhcmFnZSgpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IG1haW46IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBbZGl2TmF2VmlldywgZGl2UmFjZSwgc2VjdGlvbldpdGhGb3JtLCBzZWN0aW9uV2l0aExpc3QsIGRpdk5hdlBhZ2VdOiBEZXN0cnVjdHVyZUNvbnRhaW5lcnMgPSBjcmVhdGVDb250YWluZXJzKCk7XG4gIG1haW4uYXBwZW5kKGRpdk5hdlZpZXcsIHNlY3Rpb25XaXRoRm9ybSwgc2VjdGlvbldpdGhMaXN0LCBkaXZOYXZQYWdlKTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gc3dpdGNoIHZpZXdzXG4gIGNvbnN0IGdhcmFnZUJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnZ2FyYWdlJywgb25DbGljazogZ29Ub0dhcmFnZSwgY2xhc3NOYW1lOiAnZ2FyYWdlQnRuJyB9KTtcbiAgY29uc3Qgd2lubmVyc0J0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAnd2lubmVycycsIG9uQ2xpY2s6IGdvVG9XaW5uZXJzLCBjbGFzc05hbWU6ICd3aW5uZXJzQnRuJyB9KTtcbiAgZGl2TmF2Vmlldy5hcHBlbmQoZ2FyYWdlQnRuLCB3aW5uZXJzQnRuKTtcbiAgLy8gQ3JlYXRlIGZvcm0gdG8gY3JlYXRlIGEgY2FyXG4gIGNvbnN0IGlucHV0RmllbGRzMSA9IGNyZWF0ZUNhcklucHV0cygpO1xuICBjb25zdCBjYXJDcmVhdGlvbkZvcm0gPSBjcmVhdGVDYXJGb3JtKGlucHV0RmllbGRzMSk7XG4gIHNlY3Rpb25XaXRoRm9ybS5hcHBlbmQoY2FyQ3JlYXRpb25Gb3JtKTtcbiAgLy8gQ3JlYXRlIGZvcm0gdG8gdXBkYXRlIGEgY2FyXG4gIGNvbnN0IGlucHV0RmllbGRzMiA9IHVwZGF0ZUNhcklucHV0cygpO1xuICBjb25zdCBjYXJVcGRhdGVGb3JtID0gdXBkYXRlQ2FyRm9ybShpbnB1dEZpZWxkczIpO1xuICBzZWN0aW9uV2l0aEZvcm0uYXBwZW5kKGNhclVwZGF0ZUZvcm0pO1xuICAvLyBDcmVhdGUgcmFjZSwgcmVzZXQsIGdlbmVyYXRlIGNhcnMgYnV0dG9uXG4gIGNvbnN0IHJhY2VCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3JhY2UnLCBvbkNsaWNrOiBzdGFydFJhY2UsIGNsYXNzTmFtZTogJ3JhY2VCdG4nIH0pO1xuICBjb25zdCByZXNldEJ0biA9IGJ1dHRvbih7IHR5cGU6ICdidXR0b24nLCB0ZXh0OiAncmVzZXQnLCBvbkNsaWNrOiByZXNldENhcnMsIGNsYXNzTmFtZTogJ3Jlc2V0QnRuJyB9KTtcbiAgY29uc3QgZ2VuZXJhdGVDYXJzQnRuID0gYnV0dG9uKHsgdHlwZTogJ2J1dHRvbicsIHRleHQ6ICdnZW5lcmF0ZScsIG9uQ2xpY2s6IGdlbmVyYXRlQ2FycywgY2xhc3NOYW1lOiAnZ2VuZXJhdGVCdG4nIH0pO1xuICBkaXZSYWNlLmFwcGVuZChyYWNlQnRuLCByZXNldEJ0biwgZ2VuZXJhdGVDYXJzQnRuKTtcbiAgc2VjdGlvbldpdGhGb3JtLmFwcGVuZChkaXZSYWNlKTtcbiAgLy8gQ3JlYXRlIGxpc3RcbiAgY29uc3QgaGVhZGluZzogSFRNTEhlYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdHYXJhZ2UnO1xuICBjb25zdCB0b3RhbENhcnMgPSBwRWxlbSh7IGNsYXNzTmFtZTogJ3RvdGFsQ2FycycsIHRleHQ6IGBUb3RhbCBjYXJzOiAke2dldFN0YXRlKCd0b3RhbENhcnMnKX1gIH0pO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IHBFbGVtKHsgY2xhc3NOYW1lOiAnY3VycmVudFBhZ2UnLCB0ZXh0OiBgQ3VycmVudCBwYWdlOiAke2dldFN0YXRlKCdnYXJhZ2VQYWdlJyl9YCB9KTtcbiAgY29uc3QgbXlDYXJzTGlzdCA9IGxpc3QoeyB0eXBlOiAndWwnLCBjbGFzc05hbWU6ICdjYXJMaXN0JyB9KTtcbiAgc2VjdGlvbldpdGhMaXN0LmFwcGVuZChoZWFkaW5nLCB0b3RhbENhcnMsIGN1cnJlbnRQYWdlLCBteUNhcnNMaXN0KTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gbmF2aWdhdGUgYmV0d2VlbiBsaXN0IHBhZ2VzXG4gIGNvbnN0IHByZXZCdXR0b24gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3ByZXYnLCBvbkNsaWNrOiBwcmV2UGFnZSwgY2xhc3NOYW1lOiAncHJldkJ1dHRvbicgfSk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ25leHQnLCBvbkNsaWNrOiBuZXh0UGFnZSwgY2xhc3NOYW1lOiAnbmV4dEJ1dHRvbicgfSk7XG4gIGRpdk5hdlBhZ2UuYXBwZW5kKHByZXZCdXR0b24sIG5leHRCdXR0b24pO1xuICAvLyBGaWxsIHRoZSBjYXIgbGlzdFxuICBnZXRDYXJzKCk7XG4gIHJldHVybiBtYWluO1xufVxuXG50eXBlIERlc3RydWN0dXJlQ29udGFpbmVycyA9IFtIVE1MRGl2RWxlbWVudCwgSFRNTERpdkVsZW1lbnQsIEhUTUxFbGVtZW50LCBIVE1MRWxlbWVudCwgSFRNTERpdkVsZW1lbnRdO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKCk6IERlc3RydWN0dXJlQ29udGFpbmVycyB7XG4gIGNvbnN0IGRpdjE6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRpdjI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlY3Rpb24xOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3Qgc2VjdGlvbjI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBkaXYzOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZXR1cm4gW2RpdjEsIGRpdjIsIHNlY3Rpb24xLCBzZWN0aW9uMiwgZGl2M107XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcklucHV0cygpOiBIVE1MSW5wdXRFbGVtZW50W10ge1xuICBjb25zdCBpbnB1dEZpZWxkczogSFRNTElucHV0RWxlbWVudFtdID0gW107XG4gIGNvbnN0IHRleHRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGlucHV0RmllbGQoeyB0eXBlOiAndGV4dCcsIGNsYXNzTmFtZTogJ2NyZWF0ZU5hbWUnIH0pO1xuICBjb25zdCBjb2xvckZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnI2ZmZmZmZicsIGNsYXNzTmFtZTogJ2NyZWF0ZUNvbG9yJyB9KTtcbiAgaW5wdXRGaWVsZHMucHVzaCh0ZXh0RmllbGQsIGNvbG9yRmllbGQpO1xuICByZXR1cm4gaW5wdXRGaWVsZHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcklucHV0cygpOiBIVE1MSW5wdXRFbGVtZW50W10ge1xuICBjb25zdCBpbnB1dEZpZWxkczogSFRNTElucHV0RWxlbWVudFtdID0gW107XG4gIGNvbnN0IGhpZGRlbklucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICdoaWRkZW4nLCBjbGFzc05hbWU6ICd1cGRhdGVJZCcgfSk7XG4gIGNvbnN0IHRleHRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGlucHV0RmllbGQoeyB0eXBlOiAndGV4dCcsIGNsYXNzTmFtZTogJ3VwZGF0ZU5hbWUnIH0pO1xuICBjb25zdCBjb2xvckZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gaW5wdXRGaWVsZCh7IHR5cGU6ICdjb2xvcicsIHZhbHVlOiAnI2ZmZmZmZicsIGNsYXNzTmFtZTogJ3VwZGF0ZUNvbG9yJyB9KTtcbiAgaW5wdXRGaWVsZHMucHVzaChoaWRkZW5JbnB1dCwgdGV4dEZpZWxkLCBjb2xvckZpZWxkKTtcbiAgcmV0dXJuIGlucHV0RmllbGRzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJGb3JtKGlucHV0czogSFRNTElucHV0RWxlbWVudFtdKSB7XG4gIHJldHVybiBmb3JtKHtcbiAgICBmb3JtU3VibWl0RnVuOiBjcmVhdGVDYXIsXG4gICAgY2xlYW5Gb3JtRnVuOiAoKSA9PiB7XG4gICAgICBjbGVhbkZvcm0oJ2NyZWF0ZU5hbWUnLCAnY3JlYXRlQ29sb3InKTtcbiAgICB9LFxuICAgIGlucHV0RmllbGRzOiBpbnB1dHMsXG4gICAgYnRuVGV4dDogJ2NyZWF0ZScsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDYXJGb3JtKGlucHV0czogSFRNTElucHV0RWxlbWVudFtdKSB7XG4gIHJldHVybiBmb3JtKHtcbiAgICBmb3JtU3VibWl0RnVuOiB1cGRhdGVDYXIsXG4gICAgY2xlYW5Gb3JtRnVuOiAoKSA9PiB7XG4gICAgICBjbGVhbkZvcm0oJ3VwZGF0ZU5hbWUnLCAndXBkYXRlQ29sb3InKTtcbiAgICB9LFxuICAgIGlucHV0RmllbGRzOiBpbnB1dHMsXG4gICAgYnRuVGV4dDogJ3VwZGF0ZScsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG90YWxDYXJzKCk6IHZvaWQge1xuICBjb25zdCB0b3RhbENhcnM6IEhUTUxQYXJhZ3JhcGhFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbENhcnMnKTtcbiAgaWYgKHRvdGFsQ2FycykgdG90YWxDYXJzLnRleHRDb250ZW50ID0gYFRvdGFsIGNhcnM6ICR7Z2V0U3RhdGUoJ3RvdGFsQ2FycycpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDdXJyUGFnZSh2aWV3UGFnZTogJ2dhcmFnZVBhZ2UnIHwgJ3dpbm5lcnNQYWdlJyk6IHZvaWQge1xuICBjb25zdCBjdXJyUGFnZTogSFRNTFBhcmFncmFwaEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRQYWdlJyk7XG4gIGlmIChjdXJyUGFnZSkgY3VyclBhZ2UudGV4dENvbnRlbnQgPSBgQ3VycmVudCBwYWdlOiAke2dldFN0YXRlKHZpZXdQYWdlKX1gO1xufVxuIiwiaW1wb3J0IHsgZ2V0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zdGF0ZXMnO1xuaW1wb3J0IHsgcmVuZGVyR2FyYWdlIH0gZnJvbSAnLi9nYXJhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyV2lubmVycyB9IGZyb20gJy4vd2lubmVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJWaWV3KCkge1xuICBjb25zdCB2aWV3ID0gZ2V0U3RhdGUoJ3ZpZXcnKTtcbiAgY29uc3QgYm9keTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICBib2R5LmlubmVySFRNTCA9ICcnO1xuICBsZXQgY29udGVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBpZiAodmlldyA9PT0gJ2dhcmFnZScpIHtcbiAgICBjb250ZW50ID0gcmVuZGVyR2FyYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGVudCA9IHJlbmRlcldpbm5lcnMoKTtcbiAgfVxuICBib2R5LmFwcGVuZChjb250ZW50KTtcbn1cbiIsImltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IHRhYmxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZSc7XG5pbXBvcnQgeyBnZXRXaW5uZXJzIH0gZnJvbSAnLi4vcmVxdWVzdHMvcmVxdWVzdHMnO1xuaW1wb3J0IHsgbmV4dFBhZ2UsIHByZXZQYWdlIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdvVG9HYXJhZ2UsIGdvVG9XaW5uZXJzIH0gZnJvbSAnLi4vcm91dGluZy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvc3RhdGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldpbm5lcnMoKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBtYWluOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgZGl2V2l0aFZpZXdOYXZpZ2F0aW9uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWN0aW9uV2l0aFRhYmxlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgZGl2V2l0aFBhZ2VOYXZpZ2F0aW9uOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmFwcGVuZChkaXZXaXRoVmlld05hdmlnYXRpb24sIHNlY3Rpb25XaXRoVGFibGUsIGRpdldpdGhQYWdlTmF2aWdhdGlvbik7XG4gIC8vIENyZWF0ZSBidXR0b25zIHRvIHN3aXRjaCB2aWV3c1xuICBjb25zdCBnYXJhZ2VCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ2dhcmFnZScsIG9uQ2xpY2s6IGdvVG9HYXJhZ2UsIGNsYXNzTmFtZTogJ2dhcmFnZUJ0bicgfSk7XG4gIGNvbnN0IHdpbm5lcnNCdG4gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3dpbm5lcnMnLCBvbkNsaWNrOiBnb1RvV2lubmVycywgY2xhc3NOYW1lOiAnd2lubmVyc0J0bicgfSk7XG4gIGRpdldpdGhWaWV3TmF2aWdhdGlvbi5hcHBlbmQoZ2FyYWdlQnRuLCB3aW5uZXJzQnRuKTtcbiAgLy8gQ3JlYXRlIHRhYmxlXG4gIGNvbnN0IGhlYWRpbmc6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2lubmVycyc7XG4gIGNvbnN0IHRvdGFsV2lubmVyczogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGN1cnJlbnRQYWdlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG90YWxXaW5uZXJzLnRleHRDb250ZW50ID0gYFRvdGFsIHdpbm5lcnM6ICR7Z2V0U3RhdGUoJ3RvdGFsV2lubmVycycpfWA7XG4gIHRvdGFsV2lubmVycy5jbGFzc05hbWUgPSAndG90YWxXaW5uZXJzJztcbiAgY3VycmVudFBhZ2UudGV4dENvbnRlbnQgPSBgQ3VycmVudCBwYWdlOiAke2dldFN0YXRlKCd3aW5uZXJzUGFnZScpfWA7XG4gIGN1cnJlbnRQYWdlLmNsYXNzTmFtZSA9ICdjdXJyZW50UGFnZSc7XG4gIGNvbnN0IHRhYmxlV2lubmVycyA9IHRhYmxlKHt9KTtcbiAgc2VjdGlvbldpdGhUYWJsZS5hcHBlbmQoaGVhZGluZywgdG90YWxXaW5uZXJzLCBjdXJyZW50UGFnZSwgdGFibGVXaW5uZXJzKTtcbiAgLy8gQ3JlYXRlIGJ1dHRvbnMgdG8gbmF2aWdhdGUgYmV0d2VlbiBsaXN0IHBhZ2VzXG4gIGNvbnN0IHByZXZCdXR0b24gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ3ByZXYnLCBvbkNsaWNrOiBwcmV2UGFnZSwgY2xhc3NOYW1lOiAncHJldkJ1dHRvbicgfSk7XG4gIGNvbnN0IG5leHRCdXR0b24gPSBidXR0b24oeyB0eXBlOiAnYnV0dG9uJywgdGV4dDogJ25leHQnLCBvbkNsaWNrOiBuZXh0UGFnZSwgY2xhc3NOYW1lOiAnbmV4dEJ1dHRvbicgfSk7XG4gIGRpdldpdGhQYWdlTmF2aWdhdGlvbi5hcHBlbmQocHJldkJ1dHRvbiwgbmV4dEJ1dHRvbik7XG4gIC8vIEZpbGwgdGhlIHRhYmxlXG4gIGdldFdpbm5lcnMoKTtcbiAgcmV0dXJuIG1haW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb3RhbFdpbm5lcnMoKTogdm9pZCB7XG4gIGNvbnN0IHRvdGFsV2lubmVyczogSFRNTFBhcmFncmFwaEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsV2lubmVycycpO1xuICBpZiAodG90YWxXaW5uZXJzKSB0b3RhbFdpbm5lcnMudGV4dENvbnRlbnQgPSBgVG90YWwgd2lubmVyczogJHtnZXRTdGF0ZSgndG90YWxXaW5uZXJzJyl9YDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlclZpZXcgfSBmcm9tICcuL3ZpZXdzL3ZpZXctbWFuYWdlcic7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHJlbmRlclZpZXcoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9