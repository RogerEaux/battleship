/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --border: black;
  --ocean: #5eaef9;
  --ship: #627790;
  --hit: #d82a31;
  --miss: #e7eef4;
  --gray: #323232;
  --battleship: linear-gradient(
    var(--miss) 45%,
    var(--gray) 50%,
    var(--ocean) 55%
  );
  font-family: Helvetica, Arial, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  grid-template:
    'header' max-content
    'main' 1fr
    'footer' max-content;
  height: 100vh;
  background-color: var(--gray);
}

header {
  grid-area: header;
  display: flex;
  justify-content: center;
}

header > * {
  font-size: 6rem;
  margin-top: 32px;
  padding: 16px;
  background: var(--battleship);
  background-clip: text;
  color: transparent;
}

main {
  grid-area: main;
  width: 90%;
  display: grid;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

main h2 {
  color: var(--miss);
}

main :last-child > h2 {
  justify-self: end;
}

.player {
  display: grid;
  grid-template-rows: 3rem 1fr;
  justify-content: center;
  align-self: center;
}

.board {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  grid-template-rows: repeat(10, 40px);
}

.square {
  border: 1px solid var(--border);
  cursor: pointer;
}

.square[data-col='0'] {
  border-top: 2px solid var(--border);
}

.square[data-col='9'] {
  border-bottom: 2px solid var(--border);
}

.square[data-row='0'] {
  border-left: 2px solid var(--border);
}

.square[data-row='9'] {
  border-right: 2px solid var(--border);
}

.inactive {
  cursor: default;
}

.ocean {
  background-color: var(--ocean);
}

.ship {
  background-color: var(--ship);
}

.miss,
.hit {
  position: relative;
}

.miss::after,
.hit::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.hit::after {
  background-color: var(--hit);
}

.miss::after {
  background-color: var(--miss);
}

.modal {
  height: 100%;
  grid-area: main;
  align-self: center;
  justify-self: center;
  display: grid;
  justify-items: center;
  align-items: center;
  background: var(--miss);
  padding: 32px;
  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
  border: 4px solid var(--ocean);
  border-radius: 5px;
  z-index: 2;
  visibility: hidden;
}

.game-start {
  grid-template:
    'comm comm' 3rem
    'name diff' 2rem
    'place place' 2rem
    'board board' 1fr
    'random play' 4rem;
}

.game-start > :first-child {
  grid-area: comm;
  font-size: 1.5rem;
  color: var(--gray);
  font-weight: 700;
}

.game-start > :nth-child(2) {
  grid-area: name;
  font-size: 1rem;
  padding: 4px;
}

.game-start > :nth-child(3) {
  grid-area: diff;
  height: max-content;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--ocean);
  color: var(--miss);
  padding: 8px;
  border: none;
  border-radius: 5px;
}

.game-start > :nth-child(3).hard {
  background-color: var(--ship);
}

.game-start > :nth-child(3).harder {
  background-color: var(--gray);
}

.game-start > :nth-child(4) {
  grid-area: place;
  font-weight: 700;
  margin-top: 16px;
  color: var(--gray);
}

.game-start > :nth-child(5) {
  grid-area: board;
}

.game-start > :nth-child(7),
.game-start > :nth-child(6),
.game-start > :last-child,
.game-over :last-child {
  height: max-content;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--ship);
  color: var(--miss);
  padding: 16px;
  border: none;
  border-radius: 5px;
}

.game-start > :nth-child(6) {
  grid-area: random;
  font-size: 1.2rem;
  background-color: var(--hit);
}

.game-start > :nth-child(7),
.game-start > :last-child {
  grid-area: play;
  font-size: 1.2rem;
  visibility: hidden;
}

.game-start > :nth-child(7).visible,
.game-start > :last-child.visible {
  visibility: visible;
}

.game-start .board {
  grid-template-columns: repeat(10, 20px);
  grid-template-rows: repeat(10, 20px);
}

.game-over > :first-child {
  font-size: 4rem;
  color: var(--hit);
  font-weight: 700;
}

.game-over > :nth-child(2) {
  font-size: 2rem;
  color: var(--ocean);
  font-weight: 700;
}

.game-start > :nth-child(6):hover {
  background-color: rgba(216, 42, 49, 0.8);
}

.game-start > :nth-child(7):hover,
.game-start > :last-child:hover,
.game-over > :last-child:hover {
  background-color: rgba(98, 119, 144, 0.8);
}

.preview {
  background-color: rgba(98, 119, 144, 0.8);
}

footer {
  grid-area: footer;
  display: flex;
  justify-content: center;
  gap: 8px;
  background: var(--battleship);
  background-clip: text;
  color: transparent;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 16px;
}

.visible {
  visibility: visible;
}

@media (max-width: 900px) {
  header > * {
    font-size: 4rem;
    padding: 8px;
  }

  main {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  main h2 {
    font-size: 1.4rem;
  }

  .player {
    grid-template-rows: 2rem 1fr;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(10, 25px);
    grid-template-rows: repeat(10, 25px);
  }

  .miss::after,
  .hit::after {
    width: 15px;
    height: 15px;
  }

  .modal {
    height: 75%;
    padding: 24px;
  }

  .game-start {
    grid-template-rows:
      2rem
      1.5rem
      1.5rem
      1fr
      3rem;
  }

  .game-start > :first-child {
    font-size: 1.2rem;
  }

  .game-start > :nth-child(6),
  .game-start > :nth-child(7),
  .game-start > :last-child,
  .game-over :last-child {
    font-size: 1.2rem;
    padding: 12px;
  }

  .game-over :last-child {
    font-size: 1.4rem;
  }

  .game-over > :first-child {
    font-size: 3rem;
  }

  .game-over > :nth-child(2) {
    font-size: 1.5rem;
  }
}

@media (max-width: 600px) {
  header > * {
    font-size: 3rem;
  }

  main h2 {
    font-size: 1.2rem;
  }

  .player {
    grid-template-rows: 1.5rem 1fr;
  }

  .modal {
    height: 70%;
  }

  .game-start {
    grid-template-rows:
      2rem
      1.5rem
      1.5rem
      1fr
      3rem;
  }

  .game-start > :first-child {
    font-size: 1rem;
  }

  .game-start > :nth-child(2) {
    font-size: 0.8rem;
    padding: 2px;
  }

  .game-start > :nth-child(3) {
    padding: 6px;
  }

  .game-start > :nth-child(3),
  .game-start > :nth-child(4) {
    font-size: 0.8rem;
  }
  .game-start > :nth-child(6),
  .game-start > :nth-child(7),
  .game-start > :last-child,
  .game-over :last-child {
    font-size: 1rem;
    padding: 12px;
  }

  .game-over :last-child {
    font-size: 1.2rem;
  }

  .game-over > :first-child {
    font-size: 2.5rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --border: black;\n  --ocean: #5eaef9;\n  --ship: #627790;\n  --hit: #d82a31;\n  --miss: #e7eef4;\n  --gray: #323232;\n  --battleship: linear-gradient(\n    var(--miss) 45%,\n    var(--gray) 50%,\n    var(--ocean) 55%\n  );\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template:\n    'header' max-content\n    'main' 1fr\n    'footer' max-content;\n  height: 100vh;\n  background-color: var(--gray);\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  justify-content: center;\n}\n\nheader > * {\n  font-size: 6rem;\n  margin-top: 32px;\n  padding: 16px;\n  background: var(--battleship);\n  background-clip: text;\n  color: transparent;\n}\n\nmain {\n  grid-area: main;\n  width: 90%;\n  display: grid;\n  justify-self: center;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\nmain h2 {\n  color: var(--miss);\n}\n\nmain :last-child > h2 {\n  justify-self: end;\n}\n\n.player {\n  display: grid;\n  grid-template-rows: 3rem 1fr;\n  justify-content: center;\n  align-self: center;\n}\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 40px);\n  grid-template-rows: repeat(10, 40px);\n}\n\n.square {\n  border: 1px solid var(--border);\n  cursor: pointer;\n}\n\n.square[data-col='0'] {\n  border-top: 2px solid var(--border);\n}\n\n.square[data-col='9'] {\n  border-bottom: 2px solid var(--border);\n}\n\n.square[data-row='0'] {\n  border-left: 2px solid var(--border);\n}\n\n.square[data-row='9'] {\n  border-right: 2px solid var(--border);\n}\n\n.inactive {\n  cursor: default;\n}\n\n.ocean {\n  background-color: var(--ocean);\n}\n\n.ship {\n  background-color: var(--ship);\n}\n\n.miss,\n.hit {\n  position: relative;\n}\n\n.miss::after,\n.hit::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  content: '';\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n\n.hit::after {\n  background-color: var(--hit);\n}\n\n.miss::after {\n  background-color: var(--miss);\n}\n\n.modal {\n  height: 100%;\n  grid-area: main;\n  align-self: center;\n  justify-self: center;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  background: var(--miss);\n  padding: 32px;\n  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);\n  border: 4px solid var(--ocean);\n  border-radius: 5px;\n  z-index: 2;\n  visibility: hidden;\n}\n\n.game-start {\n  grid-template:\n    'comm comm' 3rem\n    'name diff' 2rem\n    'place place' 2rem\n    'board board' 1fr\n    'random play' 4rem;\n}\n\n.game-start > :first-child {\n  grid-area: comm;\n  font-size: 1.5rem;\n  color: var(--gray);\n  font-weight: 700;\n}\n\n.game-start > :nth-child(2) {\n  grid-area: name;\n  font-size: 1rem;\n  padding: 4px;\n}\n\n.game-start > :nth-child(3) {\n  grid-area: diff;\n  height: max-content;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  background-color: var(--ocean);\n  color: var(--miss);\n  padding: 8px;\n  border: none;\n  border-radius: 5px;\n}\n\n.game-start > :nth-child(3).hard {\n  background-color: var(--ship);\n}\n\n.game-start > :nth-child(3).harder {\n  background-color: var(--gray);\n}\n\n.game-start > :nth-child(4) {\n  grid-area: place;\n  font-weight: 700;\n  margin-top: 16px;\n  color: var(--gray);\n}\n\n.game-start > :nth-child(5) {\n  grid-area: board;\n}\n\n.game-start > :nth-child(7),\n.game-start > :nth-child(6),\n.game-start > :last-child,\n.game-over :last-child {\n  height: max-content;\n  font-size: 1.5rem;\n  font-weight: 700;\n  cursor: pointer;\n  background-color: var(--ship);\n  color: var(--miss);\n  padding: 16px;\n  border: none;\n  border-radius: 5px;\n}\n\n.game-start > :nth-child(6) {\n  grid-area: random;\n  font-size: 1.2rem;\n  background-color: var(--hit);\n}\n\n.game-start > :nth-child(7),\n.game-start > :last-child {\n  grid-area: play;\n  font-size: 1.2rem;\n  visibility: hidden;\n}\n\n.game-start > :nth-child(7).visible,\n.game-start > :last-child.visible {\n  visibility: visible;\n}\n\n.game-start .board {\n  grid-template-columns: repeat(10, 20px);\n  grid-template-rows: repeat(10, 20px);\n}\n\n.game-over > :first-child {\n  font-size: 4rem;\n  color: var(--hit);\n  font-weight: 700;\n}\n\n.game-over > :nth-child(2) {\n  font-size: 2rem;\n  color: var(--ocean);\n  font-weight: 700;\n}\n\n.game-start > :nth-child(6):hover {\n  background-color: rgba(216, 42, 49, 0.8);\n}\n\n.game-start > :nth-child(7):hover,\n.game-start > :last-child:hover,\n.game-over > :last-child:hover {\n  background-color: rgba(98, 119, 144, 0.8);\n}\n\n.preview {\n  background-color: rgba(98, 119, 144, 0.8);\n}\n\nfooter {\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  background: var(--battleship);\n  background-clip: text;\n  color: transparent;\n  font-size: 1.2rem;\n  font-weight: 700;\n  padding: 16px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n@media (max-width: 900px) {\n  header > * {\n    font-size: 4rem;\n    padding: 8px;\n  }\n\n  main {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n\n  main h2 {\n    font-size: 1.4rem;\n  }\n\n  .player {\n    grid-template-rows: 2rem 1fr;\n  }\n\n  .board {\n    display: grid;\n    grid-template-columns: repeat(10, 25px);\n    grid-template-rows: repeat(10, 25px);\n  }\n\n  .miss::after,\n  .hit::after {\n    width: 15px;\n    height: 15px;\n  }\n\n  .modal {\n    height: 75%;\n    padding: 24px;\n  }\n\n  .game-start {\n    grid-template-rows:\n      2rem\n      1.5rem\n      1.5rem\n      1fr\n      3rem;\n  }\n\n  .game-start > :first-child {\n    font-size: 1.2rem;\n  }\n\n  .game-start > :nth-child(6),\n  .game-start > :nth-child(7),\n  .game-start > :last-child,\n  .game-over :last-child {\n    font-size: 1.2rem;\n    padding: 12px;\n  }\n\n  .game-over :last-child {\n    font-size: 1.4rem;\n  }\n\n  .game-over > :first-child {\n    font-size: 3rem;\n  }\n\n  .game-over > :nth-child(2) {\n    font-size: 1.5rem;\n  }\n}\n\n@media (max-width: 600px) {\n  header > * {\n    font-size: 3rem;\n  }\n\n  main h2 {\n    font-size: 1.2rem;\n  }\n\n  .player {\n    grid-template-rows: 1.5rem 1fr;\n  }\n\n  .modal {\n    height: 70%;\n  }\n\n  .game-start {\n    grid-template-rows:\n      2rem\n      1.5rem\n      1.5rem\n      1fr\n      3rem;\n  }\n\n  .game-start > :first-child {\n    font-size: 1rem;\n  }\n\n  .game-start > :nth-child(2) {\n    font-size: 0.8rem;\n    padding: 2px;\n  }\n\n  .game-start > :nth-child(3) {\n    padding: 6px;\n  }\n\n  .game-start > :nth-child(3),\n  .game-start > :nth-child(4) {\n    font-size: 0.8rem;\n  }\n  .game-start > :nth-child(6),\n  .game-start > :nth-child(7),\n  .game-start > :last-child,\n  .game-over :last-child {\n    font-size: 1rem;\n    padding: 12px;\n  }\n\n  .game-over :last-child {\n    font-size: 1.2rem;\n  }\n\n  .game-over > :first-child {\n    font-size: 2.5rem;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContent: () => (/* binding */ createContent),
/* harmony export */   renderDiff: () => (/* binding */ renderDiff),
/* harmony export */   renderGameOver: () => (/* binding */ renderGameOver),
/* harmony export */   renderGameStart: () => (/* binding */ renderGameStart),
/* harmony export */   renderGameStartButton: () => (/* binding */ renderGameStartButton),
/* harmony export */   renderGameboard: () => (/* binding */ renderGameboard),
/* harmony export */   renderName: () => (/* binding */ renderName),
/* harmony export */   renderPlace: () => (/* binding */ renderPlace),
/* harmony export */   renderPreview: () => (/* binding */ renderPreview),
/* harmony export */   renderRotateButton: () => (/* binding */ renderRotateButton),
/* harmony export */   renderShot: () => (/* binding */ renderShot),
/* harmony export */   resetGameboard: () => (/* binding */ resetGameboard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  title.textContent = 'BATTLESHIP';

  header.append(title);

  return header;
}

function createBoard() {
  const board = document.createElement('div');

  board.classList = 'board';

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = document.createElement('div');

      square.classList = 'square ocean';
      square.setAttribute('data-col', i);
      square.setAttribute('data-row', j);

      board.append(square);
    }
  }

  return board;
}

function createMain() {
  const main = document.createElement('main');
  const playerOne = document.createElement('div');
  const playerOneName = document.createElement('h2');
  const playerTwo = document.createElement('div');
  const playerTwoName = document.createElement('h2');

  playerOne.classList = 'player';
  playerOne.setAttribute('data-player', '1');
  playerTwo.classList = 'player';
  playerTwo.setAttribute('data-player', '2');

  playerOne.append(playerOneName, createBoard());
  playerTwo.append(playerTwoName, createBoard());
  main.append(playerOne, playerTwo);

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  const name = document.createElement('p');

  copy.textContent = 'Copyright © 2023 ';
  name.textContent = 'RogerEaux';
  footer.append(copy, name);

  return footer;
}

function createGameStartModal() {
  const modal = document.createElement('div');
  const commander = document.createElement('p');
  const name = document.createElement('input');
  const difficulty = document.createElement('button');
  const place = document.createElement('p');
  const board = createBoard();
  const random = document.createElement('button');
  const rotate = document.createElement('button');
  const gameStart = document.createElement('button');

  modal.classList = 'modal game-start';
  commander.textContent = 'Welcome to BATTLESHIP Commander';
  name.setAttribute('placeholder', 'Name...');
  difficulty.textContent = 'Easy';
  place.textContent = 'Place Your Carrier';
  random.textContent = 'Randomize Me';
  rotate.textContent = 'Rotate Me';
  gameStart.textContent = 'Bombs Away!';

  modal.append(
    commander,
    name,
    difficulty,
    place,
    board,
    random,
    rotate,
    gameStart,
  );

  return modal;
}

function createGameOverModal() {
  const modal = document.createElement('div');
  const gameOver = document.createElement('p');
  const winner = document.createElement('p');
  const playAgain = document.createElement('button');

  modal.classList = 'modal game-over';
  gameOver.textContent = 'GAME OVER';
  playAgain.textContent = 'Play Again?';

  modal.append(gameOver, winner, playAgain);

  return modal;
}

function createContent() {
  const body = document.querySelector('body');

  body.append(
    createHeader(),
    createMain(),
    createFooter(),
    createGameStartModal(),
    createGameOverModal(),
  );
}

function renderName(DOMName, player) {
  DOMName.textContent = player.name;
}

function renderGameboard(DOMBoard, gameboard) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const square = DOMBoard.querySelector(
        `[data-row="${i}"][data-col="${j}"]`,
      );
      square.classList.add('inactive');
      if (gameboard.grid[i][j] && gameboard.grid[i][j] !== true) {
        square.classList.add('ship');
      }
    }
  }
}

function renderShot(gameboard, square) {
  const i = square.getAttribute('data-row');
  const j = square.getAttribute('data-col');

  square.classList.add('inactive');

  if (gameboard.grid[i][j] === true) {
    square.classList.add('hit');
  } else if (gameboard.grid[i][j] === false) {
    square.classList.add('miss');
  }
}

function renderGameStart() {
  const modal = document.querySelector('.game-start');

  modal.classList.toggle('visible');
}

function renderGameOver(winnerName) {
  const modal = document.querySelector('.game-over');
  const name = modal.querySelector('p + p');

  modal.classList.toggle('visible');
  name.textContent = `Total ${winnerName} Domination`;
}

function resetGameboard(DOMPlayer) {
  const replacementBoard = createBoard();

  DOMPlayer.replaceChild(replacementBoard, DOMPlayer.querySelector('.board'));
}

function getShipLength(places) {
  let length;

  if (places > 2) length = places;
  else if (places === 0) length = 0;
  else length = places + 1;

  return length;
}

function renderDiff(diffButton) {
  if (diffButton.getAttribute('class') === 'hard') {
    diffButton.classList = 'harder';
    diffButton.textContent = 'Harder';
  } else if (diffButton.getAttribute('class') === 'harder') {
    diffButton.classList = '';
    diffButton.textContent = 'Easy';
  } else {
    diffButton.classList = 'hard';
    diffButton.textContent = 'Hard';
  }
}

function renderRotateButton() {
  const rotateButton = document.querySelector('.game-start > :nth-child(7)');

  rotateButton.classList.toggle('visible');
}

function renderGameStartButton() {
  const gameStartButton = document.querySelector('.game-start > :last-child ');

  gameStartButton.classList.toggle('visible');
}

function renderPlace(square, vertical, places) {
  const x = parseInt(square.getAttribute('data-row'), 10);
  const y = parseInt(square.getAttribute('data-col'), 10);
  const place = document.querySelector('.game-start > :nth-child(4)');
  const ships = ['Destroyer', 'Submarine', 'Cruiser', 'Battleship'];
  const length = getShipLength(places);

  if (places === 1) {
    place.textContent = 'Get Ready for BATTLE';
    renderGameStartButton();
    renderRotateButton();
  } else {
    place.textContent = `Place Your ${ships[places - 2]}`;
  }

  for (let i = 0; i < length; i += 1) {
    if (!vertical && x + i < 10) {
      const shipSquare = square.parentNode.querySelector(
        `[data-row="${x + i}"][data-col="${y}"]`,
      );

      shipSquare.classList.add('ship');
    } else if (y + i < 10) {
      const shipSquare = square.parentNode.querySelector(
        `[data-row="${x}"][data-col="${y + i}"]`,
      );

      shipSquare.classList.add('ship');
    }
  }
}

function renderPreview(square, vertical, places) {
  const x = parseInt(square.getAttribute('data-row'), 10);
  const y = parseInt(square.getAttribute('data-col'), 10);
  const length = getShipLength(places);

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const previewSquare = square.parentNode.querySelector(
        `[data-row="${i}"][data-col="${j}"]`,
      );
      previewSquare.classList.remove('preview');
    }
  }

  for (let i = 0; i < length; i += 1) {
    if (!vertical && x + i < 10) {
      const previewSquare = square.parentNode.querySelector(
        `[data-row="${x + i}"][data-col="${y}"]`,
      );

      previewSquare.classList.add('preview');
    } else if (vertical && y + i < 10) {
      const previewSquare = square.parentNode.querySelector(
        `[data-row="${x}"][data-col="${y + i}"]`,
      );

      previewSquare.classList.add('preview');
    }
  }
}


/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");



function createGame() {
  const human = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Human');
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])('Computer');
  let places = 5;
  let vertical = false;

  function reset() {
    //  Reset players, gameboards and DOM grids
    human.reset();
    human.gameboard.reset();
    computer.reset();
    computer.gameboard.reset();
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.resetGameboard)(document.querySelector('[data-player="1"]'));
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.resetGameboard)(document.querySelector('[data-player="2"]'));
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.resetGameboard)(document.querySelector('.game-start'));
    places = 5;
  }

  function handleReplay() {
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameOver)();
    reset();
    startGame();
  }

  function addReplayListener() {
    const playAgain = document.querySelector('.game-over button');

    playAgain.addEventListener('click', handleReplay);
  }

  function isWinner(player, opponent) {
    if (opponent.gameboard.areAllSunk()) {
      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameOver)(player.name);
      removeAttackListeners();
    }
  }

  function handleAttack() {
    const i = this.getAttribute('data-row');
    const j = this.getAttribute('data-col');

    //  Record and render human attack
    human.attack(computer.gameboard, [i, j]);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderShot)(computer.gameboard, this);
    isWinner(human, computer);

    //  Record and render computer attack
    const DOMBoard = document.querySelector('[data-player="1"]').lastChild;
    const [x, y] = computer.smartFire(human.gameboard);
    setTimeout(() => {
      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderShot)(
        human.gameboard,
        DOMBoard.querySelector(`[data-row="${x}"][data-col="${y}"]`),
      );
    }, 500);

    isWinner(computer, human);
  }

  function addAttackListeners() {
    const DOMBoard = document.querySelector('[data-player="2"]').lastChild;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = DOMBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.addEventListener('click', handleAttack, { once: true });
      }
    }
  }

  function removeAttackListeners() {
    const targetBoard = document.querySelector('[data-player="2"]').lastChild;

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = targetBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.removeEventListener('click', handleAttack, { once: true });
      }
    }
  }

  function addListeners() {
    addAttackListeners();
    addReplayListener();
  }

  function renderContent() {
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameboard)(
      document.querySelector('[data-player="1"]').lastChild,
      human.gameboard,
    );

    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderName)(document.querySelector('[data-player="1"]').firstChild, human);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderName)(
      document.querySelector('[data-player="2"]').firstChild,
      computer,
    );
  }

  function handleGameStart() {
    const name = document.querySelector('.game-start > :nth-child(2)').value;

    if (name) {
      human.name = name;
    }

    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameStart)();
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameStartButton)();
    renderContent();
    addListeners();
  }

  function handleDiff() {
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderDiff)(this);
    if (this.textContent === 'Easy') {
      computer.difficulty = 20;
    } else if (this.textContent === 'Hard') {
      computer.difficulty = 15;
    } else {
      computer.difficulty = 10;
    }
  }

  function handleRotate(event) {
    event.preventDefault();
    vertical = !vertical;
  }

  function handlePreview() {
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderPreview)(this, vertical, places);
  }

  function handlePlace() {
    const x = parseInt(this.getAttribute('data-row'), 10);
    const y = parseInt(this.getAttribute('data-col'), 10);
    let length;

    if (places > 2) length = places;
    else if (places === 0) length = 0;
    else length = places + 1;

    if (human.gameboard.place(length, [x, y], vertical)) {
      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderPlace)(this, vertical, places);
      places -= 1;
    }
  }

  function addStartBoardListeners(DOMBoard) {
    const diffButton = document.querySelector('.game-start > :nth-child(3)');
    const rotateButton = document.querySelector('.game-start > :nth-child(7)');
    const gameStartButton = document.querySelector('.game-start > :last-child');

    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const square = DOMBoard.querySelector(
          `[data-row="${i}"][data-col="${j}"]`,
        );

        square.addEventListener('click', handlePlace);
        square.addEventListener('mouseover', handlePreview);
      }
    }

    DOMBoard.addEventListener('contextmenu', handleRotate);
    diffButton.addEventListener('click', handleDiff);
    rotateButton.addEventListener('click', handleRotate);
    gameStartButton.addEventListener('click', handleGameStart);
  }

  function handleRandomStart() {
    human.gameboard.reset();
    human.gameboard.placeRandom();
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameStartButton)();
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderRotateButton)();
    handleGameStart();
  }

  function addRandomPlaceListener() {
    const gameRandom = document.querySelector('.game-start > :nth-child(6)');

    gameRandom.addEventListener('click', handleRandomStart);
  }

  function placeShips(DOMBoard) {
    addStartBoardListeners(DOMBoard);
    addRandomPlaceListener();

    computer.gameboard.placeRandom();
  }

  function startGame() {
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderGameStart)();
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.renderRotateButton)();
    placeShips(document.querySelector('.game-start > :nth-child(5)'));
  }

  return {
    startGame,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGame);


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/modules/ships.js");


function createGameboard() {
  const gridSize = 10;
  const boardGrid = generateGrid();
  const activeShips = [];

  function generateGrid() {
    const grid = [];

    for (let i = 0; i < gridSize; i += 1) {
      grid.push([]);
      for (let j = 0; j < gridSize; j += 1) {
        grid[i][j] = null;
      }
    }

    return grid;
  }

  function isValidPlace(length, coords, vertical) {
    const [x, y] = coords;

    //  Coords outside board
    if (x > 9 || x < 0 || y > 9 || y < 0) {
      return false;
    }

    //  Ship overflows outside board
    if (!vertical) {
      if (x + length > 10) return false;

      const start = x === 0 ? 0 : -1;
      const end = x + length === 10 ? length : length + 1;

      //  Shyps cant have other shyps touching them
      for (let i = start; i < end; i += 1) {
        //  Ship on ship violence
        if (boardGrid[x + i][y]) return false;

        //  Top
        if (y > 0) {
          if (boardGrid[x + i][y - 1]) return false;
        }
        //  Bottom
        if (y < 9) {
          if (boardGrid[x + i][y + 1]) return false;
        }
      }
    } else {
      if (y + length > 10) return false;

      const start = y === 0 ? 0 : -1;
      const end = y + length === 10 ? length : length + 1;

      //  Shyps cant have other shyps touching them
      for (let i = start; i < end; i += 1) {
        //  Ship on ship violence
        if (boardGrid[x][y + i]) return false;

        //  Top
        if (x > 0) {
          if (boardGrid[x - 1][y + i]) return false;
        }
        //  Bottom
        if (x < 9) {
          if (boardGrid[x + 1][y + i]) return false;
        }
      }
    }

    return true;
  }

  function place(length, coords, vertical = false) {
    if (!isValidPlace(length, coords, vertical)) return false;

    const ship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
    const [x, y] = coords;

    activeShips.push(ship);

    //  Place ship on given coords
    if (!vertical) {
      for (let i = 0; i < length; i += 1) {
        boardGrid[x + i][y] = ship;
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        boardGrid[x][y + i] = ship;
      }
    }

    return true;
  }

  function generateRandomCoords() {
    const coords = [];

    for (let i = 0; i < 2; i += 1) {
      coords[i] = Math.floor(Math.random() * 10);
    }

    return coords;
  }

  function placeRandom() {
    const shipLengths = [5, 4, 3, 3, 2];
    const allCoords = [];

    for (let i = 0; i < shipLengths.length; i += 1) {
      const vertical = Math.floor(Math.random() * 2) === 1;
      let coords = generateRandomCoords();
      let valid = isValidPlace(shipLengths[i], coords, vertical);
      while (!valid) {
        coords = generateRandomCoords();
        valid = isValidPlace(shipLengths[i], coords, vertical);
      }

      allCoords.push(coords);
      place(shipLengths[i], coords, vertical);
    }

    return allCoords;
  }

  function receiveAttack(coords) {
    const [x, y] = coords;

    //  Lightning can't strike on the same spot twice
    if (boardGrid[x][y] === true || boardGrid[x][y] === false) return null;

    //  If it is a ship
    if (boardGrid[x][y]) {
      boardGrid[x][y].hit();
      boardGrid[x][y] = true;
    } else {
      boardGrid[x][y] = false;
    }

    return boardGrid[x][y];
  }

  function areAllSunk() {
    return activeShips.every((ship) => ship.isSunk());
  }

  function reset() {
    for (let i = 0; i < gridSize; i += 1) {
      for (let j = 0; j < gridSize; j += 1) {
        boardGrid[i][j] = null;
      }
    }

    activeShips.length = 0;
  }

  return {
    get grid() {
      return boardGrid;
    },

    place,
    placeRandom,
    receiveAttack,
    areAllSunk,
    reset,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");


function createPlayer(name) {
  const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const attackedSpots = [];
  let playerName = name;
  let lastHit;
  let cheatIndex = 10;

  function attack(enemyGameboard, coords) {
    if (JSON.stringify(attackedSpots).includes(JSON.stringify(coords))) {
      return null;
    }

    enemyGameboard.receiveAttack(coords);
    attackedSpots.push(coords);

    return coords;
  }

  function generateRandomCoords() {
    const coords = [];

    for (let i = 0; i < 2; i += 1) {
      coords[i] = Math.floor(Math.random() * 10);
    }

    return coords;
  }

  function blindFire(enemyGameboard) {
    let coords = generateRandomCoords();

    while (JSON.stringify(attackedSpots).includes(JSON.stringify(coords))) {
      coords = generateRandomCoords();
    }

    return attack(enemyGameboard, coords);
  }

  function smartPoke(enemyGameboard) {
    let coords = generateRandomCoords();
    let counter = 0;

    //  Coords will only be in a cross pattern
    while (
      (coords[0] + coords[1]) % 2 !== 0 ||
      JSON.stringify(attackedSpots).includes(JSON.stringify(coords))
    ) {
      coords = generateRandomCoords();
      counter += 1;
      if (counter > 420) {
        return blindFire(enemyGameboard);
      }
    }

    return attack(enemyGameboard, coords);
  }

  function smartFire(enemyGameboard) {
    if (attackedSpots.length % cheatIndex === 0) {
      return cheat(enemyGameboard);
    }

    if (attackedSpots.length > 0) {
      const [x, y] = attackedSpots[attackedSpots.length - 1];

      //  Get last hit
      if (enemyGameboard.grid[x][y] === true) {
        lastHit = [x, y];
      }
    }

    if (lastHit) {
      let right = false;
      let top = false;
      let left = false;
      let bottom = false;

      //  If adjacent spots are valid
      if (lastHit[0] < 9) {
        right = enemyGameboard.grid[lastHit[0] + 1][lastHit[1]];
      }
      if (lastHit[1] > 0) {
        top = enemyGameboard.grid[lastHit[0]][lastHit[1] - 1];
      }
      if (lastHit[0] > 0) {
        left = enemyGameboard.grid[lastHit[0] - 1][lastHit[1]];
      }
      if (lastHit[1] < 9) {
        bottom = enemyGameboard.grid[lastHit[0]][lastHit[1] + 1];
      }

      //  Try attacking them
      if (right !== true && right !== false) {
        return attack(enemyGameboard, [lastHit[0] + 1, lastHit[1]]);
      } else if (top !== true && top !== false) {
        return attack(enemyGameboard, [lastHit[0], lastHit[1] - 1]);
      } else if (left !== true && left !== false) {
        return attack(enemyGameboard, [lastHit[0] - 1, lastHit[1]]);
      } else if (bottom !== true && bottom !== false) {
        return attack(enemyGameboard, [lastHit[0], lastHit[1] + 1]);
      } else {
        return smartPoke(enemyGameboard);
      }
    }

    return smartPoke(enemyGameboard);
  }

  function cheat(enemyGameboard) {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (enemyGameboard.grid[i][j] && enemyGameboard.grid[i][j] !== true) {
          return attack(enemyGameboard, [i, j]);
        }
      }
    }
  }

  function reset() {
    attackedSpots.length = 0;
  }

  return {
    get name() {
      return playerName;
    },

    set name(newName) {
      playerName = newName;
    },

    get gameboard() {
      return playerGameboard;
    },

    set difficulty(newCheat) {
      cheatIndex = newCheat;
    },

    attack,
    blindFire,
    smartFire,
    cheat,
    reset,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);


/***/ }),

/***/ "./src/modules/ships.js":
/*!******************************!*\
  !*** ./src/modules/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createShip(length) {
  let hitPoints = length;

  function hit() {
    hitPoints -= 1;

    return hitPoints;
  }

  function isSunk() {
    //  Sunk if no hitPoints left
    return hitPoints === 0;
  }

  return {
    hit,
    isSunk,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");



(0,_modules_UI__WEBPACK_IMPORTED_MODULE_0__.createContent)();

const game = (0,_modules_game__WEBPACK_IMPORTED_MODULE_1__["default"])();

game.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFNBQVMsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcko1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3BCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDTDs7QUFFeEMsMERBQWE7O0FBRWIsYUFBYSx5REFBVTs7QUFFdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1ib3JkZXI6IGJsYWNrO1xuICAtLW9jZWFuOiAjNWVhZWY5O1xuICAtLXNoaXA6ICM2Mjc3OTA7XG4gIC0taGl0OiAjZDgyYTMxO1xuICAtLW1pc3M6ICNlN2VlZjQ7XG4gIC0tZ3JheTogIzMyMzIzMjtcbiAgLS1iYXR0bGVzaGlwOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdmFyKC0tbWlzcykgNDUlLFxuICAgIHZhcigtLWdyYXkpIDUwJSxcbiAgICB2YXIoLS1vY2VhbikgNTUlXG4gICk7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTpcbiAgICAnaGVhZGVyJyBtYXgtY29udGVudFxuICAgICdtYWluJyAxZnJcbiAgICAnZm9vdGVyJyBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaGVhZGVyID4gKiB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmF0dGxlc2hpcCk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDE2cHg7XG59XG5cbm1haW4gaDIge1xuICBjb2xvcjogdmFyKC0tbWlzcyk7XG59XG5cbm1haW4gOmxhc3QtY2hpbGQgPiBoMiB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ucGxheWVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDQwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNDBweCk7XG59XG5cbi5zcXVhcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zcXVhcmVbZGF0YS1jb2w9JzAnXSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc3F1YXJlW2RhdGEtY29sPSc5J10ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcbn1cblxuLnNxdWFyZVtkYXRhLXJvdz0nMCddIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc3F1YXJlW2RhdGEtcm93PSc5J10ge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xufVxuXG4uaW5hY3RpdmUge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5vY2VhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuKTtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbn1cblxuLm1pc3MsXG4uaGl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWlzczo6YWZ0ZXIsXG4uaGl0OjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oaXQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcbn1cblxuLm1pc3M6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XG59XG5cbi5tb2RhbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1pc3MpO1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMCA1MHZtYXggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1vY2Vhbik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZ2FtZS1zdGFydCB7XG4gIGdyaWQtdGVtcGxhdGU6XG4gICAgJ2NvbW0gY29tbScgM3JlbVxuICAgICduYW1lIGRpZmYnIDJyZW1cbiAgICAncGxhY2UgcGxhY2UnIDJyZW1cbiAgICAnYm9hcmQgYm9hcmQnIDFmclxuICAgICdyYW5kb20gcGxheScgNHJlbTtcbn1cblxuLmdhbWUtc3RhcnQgPiA6Zmlyc3QtY2hpbGQge1xuICBncmlkLWFyZWE6IGNvbW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgyKSB7XG4gIGdyaWQtYXJlYTogbmFtZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgzKSB7XG4gIGdyaWQtYXJlYTogZGlmZjtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuKTtcbiAgY29sb3I6IHZhcigtLW1pc3MpO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoMykuaGFyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xufVxuXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoMykuaGFyZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg0KSB7XG4gIGdyaWQtYXJlYTogcGxhY2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cblxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDUpIHtcbiAgZ3JpZC1hcmVhOiBib2FyZDtcbn1cblxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDcpLFxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDYpLFxuLmdhbWUtc3RhcnQgPiA6bGFzdC1jaGlsZCxcbi5nYW1lLW92ZXIgOmxhc3QtY2hpbGQge1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwKTtcbiAgY29sb3I6IHZhcigtLW1pc3MpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDYpIHtcbiAgZ3JpZC1hcmVhOiByYW5kb207XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xufVxuXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNyksXG4uZ2FtZS1zdGFydCA+IDpsYXN0LWNoaWxkIHtcbiAgZ3JpZC1hcmVhOiBwbGF5O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNykudmlzaWJsZSxcbi5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5nYW1lLXN0YXJ0IC5ib2FyZCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDIwcHgpO1xufVxuXG4uZ2FtZS1vdmVyID4gOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogdmFyKC0taGl0KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmdhbWUtb3ZlciA+IDpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1vY2Vhbik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg2KTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCA0MiwgNDksIDAuOCk7XG59XG5cbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg3KTpob3Zlcixcbi5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQ6aG92ZXIsXG4uZ2FtZS1vdmVyID4gOmxhc3QtY2hpbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk4LCAxMTksIDE0NCwgMC44KTtcbn1cblxuLnByZXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk4LCAxMTksIDE0NCwgMC44KTtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmF0dGxlc2hpcCk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgaGVhZGVyID4gKiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG4gIG1haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgbWFpbiBoMiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAucGxheWVyIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xuICB9XG5cbiAgLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyNXB4KTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XG4gIH1cblxuICAubWlzczo6YWZ0ZXIsXG4gIC5oaXQ6OmFmdGVyIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cblxuICAubW9kYWwge1xuICAgIGhlaWdodDogNzUlO1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cblxuICAuZ2FtZS1zdGFydCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOlxuICAgICAgMnJlbVxuICAgICAgMS41cmVtXG4gICAgICAxLjVyZW1cbiAgICAgIDFmclxuICAgICAgM3JlbTtcbiAgfVxuXG4gIC5nYW1lLXN0YXJ0ID4gOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg2KSxcbiAgLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDcpLFxuICAuZ2FtZS1zdGFydCA+IDpsYXN0LWNoaWxkLFxuICAuZ2FtZS1vdmVyIDpsYXN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgLmdhbWUtb3ZlciA6bGFzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cblxuICAuZ2FtZS1vdmVyID4gOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICAuZ2FtZS1vdmVyID4gOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlciA+ICoge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuXG4gIG1haW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnBsYXllciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVyZW0gMWZyO1xuICB9XG5cbiAgLm1vZGFsIHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxuXG4gIC5nYW1lLXN0YXJ0IHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6XG4gICAgICAycmVtXG4gICAgICAxLjVyZW1cbiAgICAgIDEuNXJlbVxuICAgICAgMWZyXG4gICAgICAzcmVtO1xuICB9XG5cbiAgLmdhbWUtc3RhcnQgPiA6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG5cbiAgLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDMpIHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gIH1cblxuICAuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoMyksXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg0KSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDYpLFxuICAuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNyksXG4gIC5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQsXG4gIC5nYW1lLW92ZXIgOmxhc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG5cbiAgLmdhbWUtb3ZlciA6bGFzdC1jaGlsZCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICAuZ2FtZS1vdmVyID4gOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFl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LGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJvcmRlcjogYmxhY2s7XFxuICAtLW9jZWFuOiAjNWVhZWY5O1xcbiAgLS1zaGlwOiAjNjI3NzkwO1xcbiAgLS1oaXQ6ICNkODJhMzE7XFxuICAtLW1pc3M6ICNlN2VlZjQ7XFxuICAtLWdyYXk6ICMzMjMyMzI7XFxuICAtLWJhdHRsZXNoaXA6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdmFyKC0tbWlzcykgNDUlLFxcbiAgICB2YXIoLS1ncmF5KSA1MCUsXFxuICAgIHZhcigtLW9jZWFuKSA1NSVcXG4gICk7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgJ2hlYWRlcicgbWF4LWNvbnRlbnRcXG4gICAgJ21haW4nIDFmclxcbiAgICAnZm9vdGVyJyBtYXgtY29udGVudDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgPiAqIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmF0dGxlc2hpcCk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxubWFpbiBoMiB7XFxuICBjb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbm1haW4gOmxhc3QtY2hpbGQgPiBoMiB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnBsYXllciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA0MHB4KTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3F1YXJlW2RhdGEtY29sPScwJ10ge1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5zcXVhcmVbZGF0YS1jb2w9JzknXSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLnNxdWFyZVtkYXRhLXJvdz0nMCddIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG59XFxuXFxuLnNxdWFyZVtkYXRhLXJvdz0nOSddIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxufVxcblxcbi5pbmFjdGl2ZSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5vY2VhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vY2Vhbik7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXApO1xcbn1cXG5cXG4ubWlzcyxcXG4uaGl0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1pc3M6OmFmdGVyLFxcbi5oaXQ6OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ubWlzczo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcyk7XFxufVxcblxcbi5tb2RhbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWlzcyk7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDAgNTB2bWF4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLW9jZWFuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDI7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5nYW1lLXN0YXJ0IHtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICdjb21tIGNvbW0nIDNyZW1cXG4gICAgJ25hbWUgZGlmZicgMnJlbVxcbiAgICAncGxhY2UgcGxhY2UnIDJyZW1cXG4gICAgJ2JvYXJkIGJvYXJkJyAxZnJcXG4gICAgJ3JhbmRvbSBwbGF5JyA0cmVtO1xcbn1cXG5cXG4uZ2FtZS1zdGFydCA+IDpmaXJzdC1jaGlsZCB7XFxuICBncmlkLWFyZWE6IGNvbW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLWFyZWE6IG5hbWU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgzKSB7XFxuICBncmlkLWFyZWE6IGRpZmY7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9jZWFuKTtcXG4gIGNvbG9yOiB2YXIoLS1taXNzKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDMpLmhhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxufVxcblxcbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgzKS5oYXJkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg0KSB7XFxuICBncmlkLWFyZWE6IHBsYWNlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg1KSB7XFxuICBncmlkLWFyZWE6IGJvYXJkO1xcbn1cXG5cXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNyksXFxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDYpLFxcbi5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQsXFxuLmdhbWUtb3ZlciA6bGFzdC1jaGlsZCB7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcCk7XFxuICBjb2xvcjogdmFyKC0tbWlzcyk7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNikge1xcbiAgZ3JpZC1hcmVhOiByYW5kb207XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdCk7XFxufVxcblxcbi5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg3KSxcXG4uZ2FtZS1zdGFydCA+IDpsYXN0LWNoaWxkIHtcXG4gIGdyaWQtYXJlYTogcGxheTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNykudmlzaWJsZSxcXG4uZ2FtZS1zdGFydCA+IDpsYXN0LWNoaWxkLnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmdhbWUtc3RhcnQgLmJvYXJkIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyMHB4KTtcXG59XFxuXFxuLmdhbWUtb3ZlciA+IDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogdmFyKC0taGl0KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5nYW1lLW92ZXIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1vY2Vhbik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNik6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDQyLCA0OSwgMC44KTtcXG59XFxuXFxuLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDcpOmhvdmVyLFxcbi5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQ6aG92ZXIsXFxuLmdhbWUtb3ZlciA+IDpsYXN0LWNoaWxkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTgsIDExOSwgMTQ0LCAwLjgpO1xcbn1cXG5cXG4ucHJldmlldyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk4LCAxMTksIDE0NCwgMC44KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXR0bGVzaGlwKTtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaGVhZGVyID4gKiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIG1haW4gaDIge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5wbGF5ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJyZW0gMWZyO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDI1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCk7XFxuICB9XFxuXFxuICAubWlzczo6YWZ0ZXIsXFxuICAuaGl0OjphZnRlciB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICAubW9kYWwge1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gIH1cXG5cXG4gIC5nYW1lLXN0YXJ0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOlxcbiAgICAgIDJyZW1cXG4gICAgICAxLjVyZW1cXG4gICAgICAxLjVyZW1cXG4gICAgICAxZnJcXG4gICAgICAzcmVtO1xcbiAgfVxcblxcbiAgLmdhbWUtc3RhcnQgPiA6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg2KSxcXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg3KSxcXG4gIC5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQsXFxuICAuZ2FtZS1vdmVyIDpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICB9XFxuXFxuICAuZ2FtZS1vdmVyIDpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuXFxuICAuZ2FtZS1vdmVyID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLmdhbWUtb3ZlciA+IDpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBoZWFkZXIgPiAqIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgbWFpbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLnBsYXllciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMS41cmVtIDFmcjtcXG4gIH1cXG5cXG4gIC5tb2RhbCB7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgfVxcblxcbiAgLmdhbWUtc3RhcnQge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6XFxuICAgICAgMnJlbVxcbiAgICAgIDEuNXJlbVxcbiAgICAgIDEuNXJlbVxcbiAgICAgIDFmclxcbiAgICAgIDNyZW07XFxuICB9XFxuXFxuICAuZ2FtZS1zdGFydCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICB9XFxuXFxuICAuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoMykge1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICB9XFxuXFxuICAuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoMyksXFxuICAuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNCkge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gIH1cXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg2KSxcXG4gIC5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCg3KSxcXG4gIC5nYW1lLXN0YXJ0ID4gOmxhc3QtY2hpbGQsXFxuICAuZ2FtZS1vdmVyIDpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgfVxcblxcbiAgLmdhbWUtb3ZlciA6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcblxcbiAgLmdhbWUtb3ZlciA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG5cbiAgaGVhZGVyLmFwcGVuZCh0aXRsZSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgYm9hcmQuY2xhc3NMaXN0ID0gJ2JvYXJkJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0ID0gJ3NxdWFyZSBvY2Vhbic7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGkpO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3cnLCBqKTtcblxuICAgICAgYm9hcmQuYXBwZW5kKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBwbGF5ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyT25lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBsYXllclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJUd29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBwbGF5ZXJPbmUuY2xhc3NMaXN0ID0gJ3BsYXllcic7XG4gIHBsYXllck9uZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheWVyJywgJzEnKTtcbiAgcGxheWVyVHdvLmNsYXNzTGlzdCA9ICdwbGF5ZXInO1xuICBwbGF5ZXJUd28uc2V0QXR0cmlidXRlKCdkYXRhLXBsYXllcicsICcyJyk7XG5cbiAgcGxheWVyT25lLmFwcGVuZChwbGF5ZXJPbmVOYW1lLCBjcmVhdGVCb2FyZCgpKTtcbiAgcGxheWVyVHdvLmFwcGVuZChwbGF5ZXJUd29OYW1lLCBjcmVhdGVCb2FyZCgpKTtcbiAgbWFpbi5hcHBlbmQocGxheWVyT25lLCBwbGF5ZXJUd28pO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvcHkudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjMgJztcbiAgbmFtZS50ZXh0Q29udGVudCA9ICdSb2dlckVhdXgnO1xuICBmb290ZXIuYXBwZW5kKGNvcHksIG5hbWUpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVTdGFydE1vZGFsKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb21tYW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkaWZmaWN1bHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gIGNvbnN0IHJhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCByb3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgZ2FtZVN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0ID0gJ21vZGFsIGdhbWUtc3RhcnQnO1xuICBjb21tYW5kZXIudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBCQVRUTEVTSElQIENvbW1hbmRlcic7XG4gIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lLi4uJyk7XG4gIGRpZmZpY3VsdHkudGV4dENvbnRlbnQgPSAnRWFzeSc7XG4gIHBsYWNlLnRleHRDb250ZW50ID0gJ1BsYWNlIFlvdXIgQ2Fycmllcic7XG4gIHJhbmRvbS50ZXh0Q29udGVudCA9ICdSYW5kb21pemUgTWUnO1xuICByb3RhdGUudGV4dENvbnRlbnQgPSAnUm90YXRlIE1lJztcbiAgZ2FtZVN0YXJ0LnRleHRDb250ZW50ID0gJ0JvbWJzIEF3YXkhJztcblxuICBtb2RhbC5hcHBlbmQoXG4gICAgY29tbWFuZGVyLFxuICAgIG5hbWUsXG4gICAgZGlmZmljdWx0eSxcbiAgICBwbGFjZSxcbiAgICBib2FyZCxcbiAgICByYW5kb20sXG4gICAgcm90YXRlLFxuICAgIGdhbWVTdGFydCxcbiAgKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVPdmVyTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVPdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdCA9ICdtb2RhbCBnYW1lLW92ZXInO1xuICBnYW1lT3Zlci50ZXh0Q29udGVudCA9ICdHQU1FIE9WRVInO1xuICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSAnUGxheSBBZ2Fpbj8nO1xuXG4gIG1vZGFsLmFwcGVuZChnYW1lT3Zlciwgd2lubmVyLCBwbGF5QWdhaW4pO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgYm9keS5hcHBlbmQoXG4gICAgY3JlYXRlSGVhZGVyKCksXG4gICAgY3JlYXRlTWFpbigpLFxuICAgIGNyZWF0ZUZvb3RlcigpLFxuICAgIGNyZWF0ZUdhbWVTdGFydE1vZGFsKCksXG4gICAgY3JlYXRlR2FtZU92ZXJNb2RhbCgpLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmFtZShET01OYW1lLCBwbGF5ZXIpIHtcbiAgRE9NTmFtZS50ZXh0Q29udGVudCA9IHBsYXllci5uYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKERPTUJvYXJkLCBnYW1lYm9hcmQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBET01Cb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7an1cIl1gLFxuICAgICAgKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xuICAgICAgaWYgKGdhbWVib2FyZC5ncmlkW2ldW2pdICYmIGdhbWVib2FyZC5ncmlkW2ldW2pdICE9PSB0cnVlKSB7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTaG90KGdhbWVib2FyZCwgc3F1YXJlKSB7XG4gIGNvbnN0IGkgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICBjb25zdCBqID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKTtcblxuICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcblxuICBpZiAoZ2FtZWJvYXJkLmdyaWRbaV1bal0gPT09IHRydWUpIHtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmdyaWRbaV1bal0gPT09IGZhbHNlKSB7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZVN0YXJ0KCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0Jyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZU92ZXIod2lubmVyTmFtZSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKTtcbiAgY29uc3QgbmFtZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ3AgKyBwJyk7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xuICBuYW1lLnRleHRDb250ZW50ID0gYFRvdGFsICR7d2lubmVyTmFtZX0gRG9taW5hdGlvbmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWVib2FyZChET01QbGF5ZXIpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRCb2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG5cbiAgRE9NUGxheWVyLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudEJvYXJkLCBET01QbGF5ZXIucXVlcnlTZWxlY3RvcignLmJvYXJkJykpO1xufVxuXG5mdW5jdGlvbiBnZXRTaGlwTGVuZ3RoKHBsYWNlcykge1xuICBsZXQgbGVuZ3RoO1xuXG4gIGlmIChwbGFjZXMgPiAyKSBsZW5ndGggPSBwbGFjZXM7XG4gIGVsc2UgaWYgKHBsYWNlcyA9PT0gMCkgbGVuZ3RoID0gMDtcbiAgZWxzZSBsZW5ndGggPSBwbGFjZXMgKyAxO1xuXG4gIHJldHVybiBsZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaWZmKGRpZmZCdXR0b24pIHtcbiAgaWYgKGRpZmZCdXR0b24uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnaGFyZCcpIHtcbiAgICBkaWZmQnV0dG9uLmNsYXNzTGlzdCA9ICdoYXJkZXInO1xuICAgIGRpZmZCdXR0b24udGV4dENvbnRlbnQgPSAnSGFyZGVyJztcbiAgfSBlbHNlIGlmIChkaWZmQnV0dG9uLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2hhcmRlcicpIHtcbiAgICBkaWZmQnV0dG9uLmNsYXNzTGlzdCA9ICcnO1xuICAgIGRpZmZCdXR0b24udGV4dENvbnRlbnQgPSAnRWFzeSc7XG4gIH0gZWxzZSB7XG4gICAgZGlmZkJ1dHRvbi5jbGFzc0xpc3QgPSAnaGFyZCc7XG4gICAgZGlmZkJ1dHRvbi50ZXh0Q29udGVudCA9ICdIYXJkJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUm90YXRlQnV0dG9uKCkge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNyknKTtcblxuICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgndmlzaWJsZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZVN0YXJ0QnV0dG9uKCkge1xuICBjb25zdCBnYW1lU3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydCA+IDpsYXN0LWNoaWxkICcpO1xuXG4gIGdhbWVTdGFydEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQbGFjZShzcXVhcmUsIHZlcnRpY2FsLCBwbGFjZXMpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JyksIDEwKTtcbiAgY29uc3QgeSA9IHBhcnNlSW50KHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJyksIDEwKTtcbiAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNCknKTtcbiAgY29uc3Qgc2hpcHMgPSBbJ0Rlc3Ryb3llcicsICdTdWJtYXJpbmUnLCAnQ3J1aXNlcicsICdCYXR0bGVzaGlwJ107XG4gIGNvbnN0IGxlbmd0aCA9IGdldFNoaXBMZW5ndGgocGxhY2VzKTtcblxuICBpZiAocGxhY2VzID09PSAxKSB7XG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSAnR2V0IFJlYWR5IGZvciBCQVRUTEUnO1xuICAgIHJlbmRlckdhbWVTdGFydEJ1dHRvbigpO1xuICAgIHJlbmRlclJvdGF0ZUJ1dHRvbigpO1xuICB9IGVsc2Uge1xuICAgIHBsYWNlLnRleHRDb250ZW50ID0gYFBsYWNlIFlvdXIgJHtzaGlwc1twbGFjZXMgLSAyXX1gO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICghdmVydGljYWwgJiYgeCArIGkgPCAxMCkge1xuICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IHNxdWFyZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1yb3c9XCIke3ggKyBpfVwiXVtkYXRhLWNvbD1cIiR7eX1cIl1gLFxuICAgICAgKTtcblxuICAgICAgc2hpcFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgfSBlbHNlIGlmICh5ICsgaSA8IDEwKSB7XG4gICAgICBjb25zdCBzaGlwU3F1YXJlID0gc3F1YXJlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLXJvdz1cIiR7eH1cIl1bZGF0YS1jb2w9XCIke3kgKyBpfVwiXWAsXG4gICAgICApO1xuXG4gICAgICBzaGlwU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByZXZpZXcoc3F1YXJlLCB2ZXJ0aWNhbCwgcGxhY2VzKSB7XG4gIGNvbnN0IHggPSBwYXJzZUludChzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpLCAxMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpLCAxMCk7XG4gIGNvbnN0IGxlbmd0aCA9IGdldFNoaXBMZW5ndGgocGxhY2VzKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHByZXZpZXdTcXVhcmUgPSBzcXVhcmUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7an1cIl1gLFxuICAgICAgKTtcbiAgICAgIHByZXZpZXdTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgncHJldmlldycpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoIXZlcnRpY2FsICYmIHggKyBpIDwgMTApIHtcbiAgICAgIGNvbnN0IHByZXZpZXdTcXVhcmUgPSBzcXVhcmUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtcm93PVwiJHt4ICsgaX1cIl1bZGF0YS1jb2w9XCIke3l9XCJdYCxcbiAgICAgICk7XG5cbiAgICAgIHByZXZpZXdTcXVhcmUuY2xhc3NMaXN0LmFkZCgncHJldmlldycpO1xuICAgIH0gZWxzZSBpZiAodmVydGljYWwgJiYgeSArIGkgPCAxMCkge1xuICAgICAgY29uc3QgcHJldmlld1NxdWFyZSA9IHNxdWFyZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS1yb3c9XCIke3h9XCJdW2RhdGEtY29sPVwiJHt5ICsgaX1cIl1gLFxuICAgICAgKTtcblxuICAgICAgcHJldmlld1NxdWFyZS5jbGFzc0xpc3QuYWRkKCdwcmV2aWV3Jyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7XG4gIHJlbmRlckRpZmYsXG4gIHJlbmRlckdhbWVib2FyZCxcbiAgcmVuZGVyR2FtZU92ZXIsXG4gIHJlbmRlckdhbWVTdGFydCxcbiAgcmVuZGVyR2FtZVN0YXJ0QnV0dG9uLFxuICByZW5kZXJOYW1lLFxuICByZW5kZXJQbGFjZSxcbiAgcmVuZGVyUHJldmlldyxcbiAgcmVuZGVyUm90YXRlQnV0dG9uLFxuICByZW5kZXJTaG90LFxuICByZXNldEdhbWVib2FyZCxcbn0gZnJvbSAnLi9VSSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWUoKSB7XG4gIGNvbnN0IGh1bWFuID0gY3JlYXRlUGxheWVyKCdIdW1hbicpO1xuICBjb25zdCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcignQ29tcHV0ZXInKTtcbiAgbGV0IHBsYWNlcyA9IDU7XG4gIGxldCB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIC8vICBSZXNldCBwbGF5ZXJzLCBnYW1lYm9hcmRzIGFuZCBET00gZ3JpZHNcbiAgICBodW1hbi5yZXNldCgpO1xuICAgIGh1bWFuLmdhbWVib2FyZC5yZXNldCgpO1xuICAgIGNvbXB1dGVyLnJlc2V0KCk7XG4gICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnJlc2V0KCk7XG4gICAgcmVzZXRHYW1lYm9hcmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyPVwiMVwiXScpKTtcbiAgICByZXNldEdhbWVib2FyZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5ZXI9XCIyXCJdJykpO1xuICAgIHJlc2V0R2FtZWJvYXJkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0JykpO1xuICAgIHBsYWNlcyA9IDU7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXBsYXkoKSB7XG4gICAgcmVuZGVyR2FtZU92ZXIoKTtcbiAgICByZXNldCgpO1xuICAgIHN0YXJ0R2FtZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUmVwbGF5TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3ZlciBidXR0b24nKTtcblxuICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlcGxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1dpbm5lcihwbGF5ZXIsIG9wcG9uZW50KSB7XG4gICAgaWYgKG9wcG9uZW50LmdhbWVib2FyZC5hcmVBbGxTdW5rKCkpIHtcbiAgICAgIHJlbmRlckdhbWVPdmVyKHBsYXllci5uYW1lKTtcbiAgICAgIHJlbW92ZUF0dGFja0xpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUF0dGFjaygpIHtcbiAgICBjb25zdCBpID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93Jyk7XG4gICAgY29uc3QgaiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbCcpO1xuXG4gICAgLy8gIFJlY29yZCBhbmQgcmVuZGVyIGh1bWFuIGF0dGFja1xuICAgIGh1bWFuLmF0dGFjayhjb21wdXRlci5nYW1lYm9hcmQsIFtpLCBqXSk7XG4gICAgcmVuZGVyU2hvdChjb21wdXRlci5nYW1lYm9hcmQsIHRoaXMpO1xuICAgIGlzV2lubmVyKGh1bWFuLCBjb21wdXRlcik7XG5cbiAgICAvLyAgUmVjb3JkIGFuZCByZW5kZXIgY29tcHV0ZXIgYXR0YWNrXG4gICAgY29uc3QgRE9NQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5ZXI9XCIxXCJdJykubGFzdENoaWxkO1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvbXB1dGVyLnNtYXJ0RmlyZShodW1hbi5nYW1lYm9hcmQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVuZGVyU2hvdChcbiAgICAgICAgaHVtYW4uZ2FtZWJvYXJkLFxuICAgICAgICBET01Cb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3h9XCJdW2RhdGEtY29sPVwiJHt5fVwiXWApLFxuICAgICAgKTtcbiAgICB9LCA1MDApO1xuXG4gICAgaXNXaW5uZXIoY29tcHV0ZXIsIGh1bWFuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEF0dGFja0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBET01Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllcj1cIjJcIl0nKS5sYXN0Q2hpbGQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBET01Cb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sPVwiJHtqfVwiXWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQXR0YWNrTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRhcmdldEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyPVwiMlwiXScpLmxhc3RDaGlsZDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IHRhcmdldEJvYXJkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2w9XCIke2p9XCJdYCxcbiAgICAgICAgKTtcblxuICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdHRhY2ssIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgYWRkQXR0YWNrTGlzdGVuZXJzKCk7XG4gICAgYWRkUmVwbGF5TGlzdGVuZXIoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgcmVuZGVyR2FtZWJvYXJkKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyPVwiMVwiXScpLmxhc3RDaGlsZCxcbiAgICAgIGh1bWFuLmdhbWVib2FyZCxcbiAgICApO1xuXG4gICAgcmVuZGVyTmFtZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5ZXI9XCIxXCJdJykuZmlyc3RDaGlsZCwgaHVtYW4pO1xuICAgIHJlbmRlck5hbWUoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5ZXI9XCIyXCJdJykuZmlyc3RDaGlsZCxcbiAgICAgIGNvbXB1dGVyLFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVHYW1lU3RhcnQoKSB7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXN0YXJ0ID4gOm50aC1jaGlsZCgyKScpLnZhbHVlO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGh1bWFuLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHJlbmRlckdhbWVTdGFydCgpO1xuICAgIHJlbmRlckdhbWVTdGFydEJ1dHRvbigpO1xuICAgIHJlbmRlckNvbnRlbnQoKTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpZmYoKSB7XG4gICAgcmVuZGVyRGlmZih0aGlzKTtcbiAgICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gJ0Vhc3knKSB7XG4gICAgICBjb21wdXRlci5kaWZmaWN1bHR5ID0gMjA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRleHRDb250ZW50ID09PSAnSGFyZCcpIHtcbiAgICAgIGNvbXB1dGVyLmRpZmZpY3VsdHkgPSAxNTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZXIuZGlmZmljdWx0eSA9IDEwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJvdGF0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmVydGljYWwgPSAhdmVydGljYWw7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2aWV3KCkge1xuICAgIHJlbmRlclByZXZpZXcodGhpcywgdmVydGljYWwsIHBsYWNlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQbGFjZSgpIHtcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JyksIDEwKTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJyksIDEwKTtcbiAgICBsZXQgbGVuZ3RoO1xuXG4gICAgaWYgKHBsYWNlcyA+IDIpIGxlbmd0aCA9IHBsYWNlcztcbiAgICBlbHNlIGlmIChwbGFjZXMgPT09IDApIGxlbmd0aCA9IDA7XG4gICAgZWxzZSBsZW5ndGggPSBwbGFjZXMgKyAxO1xuXG4gICAgaWYgKGh1bWFuLmdhbWVib2FyZC5wbGFjZShsZW5ndGgsIFt4LCB5XSwgdmVydGljYWwpKSB7XG4gICAgICByZW5kZXJQbGFjZSh0aGlzLCB2ZXJ0aWNhbCwgcGxhY2VzKTtcbiAgICAgIHBsYWNlcyAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0YXJ0Qm9hcmRMaXN0ZW5lcnMoRE9NQm9hcmQpIHtcbiAgICBjb25zdCBkaWZmQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDMpJyk7XG4gICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhcnQgPiA6bnRoLWNoaWxkKDcpJyk7XG4gICAgY29uc3QgZ2FtZVN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3RhcnQgPiA6bGFzdC1jaGlsZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gRE9NQm9hcmQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbD1cIiR7an1cIl1gLFxuICAgICAgICApO1xuXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYWNlKTtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZVByZXZpZXcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERPTUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgaGFuZGxlUm90YXRlKTtcbiAgICBkaWZmQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRGlmZik7XG4gICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUm90YXRlKTtcbiAgICBnYW1lU3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVHYW1lU3RhcnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmFuZG9tU3RhcnQoKSB7XG4gICAgaHVtYW4uZ2FtZWJvYXJkLnJlc2V0KCk7XG4gICAgaHVtYW4uZ2FtZWJvYXJkLnBsYWNlUmFuZG9tKCk7XG4gICAgcmVuZGVyR2FtZVN0YXJ0QnV0dG9uKCk7XG4gICAgcmVuZGVyUm90YXRlQnV0dG9uKCk7XG4gICAgaGFuZGxlR2FtZVN0YXJ0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRSYW5kb21QbGFjZUxpc3RlbmVyKCkge1xuICAgIGNvbnN0IGdhbWVSYW5kb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNiknKTtcblxuICAgIGdhbWVSYW5kb20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSYW5kb21TdGFydCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBzKERPTUJvYXJkKSB7XG4gICAgYWRkU3RhcnRCb2FyZExpc3RlbmVycyhET01Cb2FyZCk7XG4gICAgYWRkUmFuZG9tUGxhY2VMaXN0ZW5lcigpO1xuXG4gICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlUmFuZG9tKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgcmVuZGVyR2FtZVN0YXJ0KCk7XG4gICAgcmVuZGVyUm90YXRlQnV0dG9uKCk7XG4gICAgcGxhY2VTaGlwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zdGFydCA+IDpudGgtY2hpbGQoNSknKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0R2FtZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZTtcbiIsImltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGdyaWRTaXplID0gMTA7XG4gIGNvbnN0IGJvYXJkR3JpZCA9IGdlbmVyYXRlR3JpZCgpO1xuICBjb25zdCBhY3RpdmVTaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpICs9IDEpIHtcbiAgICAgIGdyaWQucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRTaXplOyBqICs9IDEpIHtcbiAgICAgICAgZ3JpZFtpXVtqXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkUGxhY2UobGVuZ3RoLCBjb29yZHMsIHZlcnRpY2FsKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xuXG4gICAgLy8gIENvb3JkcyBvdXRzaWRlIGJvYXJkXG4gICAgaWYgKHggPiA5IHx8IHggPCAwIHx8IHkgPiA5IHx8IHkgPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gIFNoaXAgb3ZlcmZsb3dzIG91dHNpZGUgYm9hcmRcbiAgICBpZiAoIXZlcnRpY2FsKSB7XG4gICAgICBpZiAoeCArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXJ0ID0geCA9PT0gMCA/IDAgOiAtMTtcbiAgICAgIGNvbnN0IGVuZCA9IHggKyBsZW5ndGggPT09IDEwID8gbGVuZ3RoIDogbGVuZ3RoICsgMTtcblxuICAgICAgLy8gIFNoeXBzIGNhbnQgaGF2ZSBvdGhlciBzaHlwcyB0b3VjaGluZyB0aGVtXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMSkge1xuICAgICAgICAvLyAgU2hpcCBvbiBzaGlwIHZpb2xlbmNlXG4gICAgICAgIGlmIChib2FyZEdyaWRbeCArIGldW3ldKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gIFRvcFxuICAgICAgICBpZiAoeSA+IDApIHtcbiAgICAgICAgICBpZiAoYm9hcmRHcmlkW3ggKyBpXVt5IC0gMV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgQm90dG9tXG4gICAgICAgIGlmICh5IDwgOSkge1xuICAgICAgICAgIGlmIChib2FyZEdyaWRbeCArIGldW3kgKyAxXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh5ICsgbGVuZ3RoID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhcnQgPSB5ID09PSAwID8gMCA6IC0xO1xuICAgICAgY29uc3QgZW5kID0geSArIGxlbmd0aCA9PT0gMTAgPyBsZW5ndGggOiBsZW5ndGggKyAxO1xuXG4gICAgICAvLyAgU2h5cHMgY2FudCBoYXZlIG90aGVyIHNoeXBzIHRvdWNoaW5nIHRoZW1cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAxKSB7XG4gICAgICAgIC8vICBTaGlwIG9uIHNoaXAgdmlvbGVuY2VcbiAgICAgICAgaWYgKGJvYXJkR3JpZFt4XVt5ICsgaV0pIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyAgVG9wXG4gICAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICAgIGlmIChib2FyZEdyaWRbeCAtIDFdW3kgKyBpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vICBCb3R0b21cbiAgICAgICAgaWYgKHggPCA5KSB7XG4gICAgICAgICAgaWYgKGJvYXJkR3JpZFt4ICsgMV1beSArIGldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlKGxlbmd0aCwgY29vcmRzLCB2ZXJ0aWNhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpc1ZhbGlkUGxhY2UobGVuZ3RoLCBjb29yZHMsIHZlcnRpY2FsKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoKTtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZHM7XG5cbiAgICBhY3RpdmVTaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgLy8gIFBsYWNlIHNoaXAgb24gZ2l2ZW4gY29vcmRzXG4gICAgaWYgKCF2ZXJ0aWNhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZEdyaWRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZEdyaWRbeF1beSArIGldID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQ29vcmRzKCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICAgIGNvb3Jkc1tpXSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VSYW5kb20oKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gICAgY29uc3QgYWxsQ29vcmRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB2ZXJ0aWNhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAxO1xuICAgICAgbGV0IGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgICBsZXQgdmFsaWQgPSBpc1ZhbGlkUGxhY2Uoc2hpcExlbmd0aHNbaV0sIGNvb3JkcywgdmVydGljYWwpO1xuICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICBjb29yZHMgPSBnZW5lcmF0ZVJhbmRvbUNvb3JkcygpO1xuICAgICAgICB2YWxpZCA9IGlzVmFsaWRQbGFjZShzaGlwTGVuZ3Roc1tpXSwgY29vcmRzLCB2ZXJ0aWNhbCk7XG4gICAgICB9XG5cbiAgICAgIGFsbENvb3Jkcy5wdXNoKGNvb3Jkcyk7XG4gICAgICBwbGFjZShzaGlwTGVuZ3Roc1tpXSwgY29vcmRzLCB2ZXJ0aWNhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbENvb3JkcztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRzO1xuXG4gICAgLy8gIExpZ2h0bmluZyBjYW4ndCBzdHJpa2Ugb24gdGhlIHNhbWUgc3BvdCB0d2ljZVxuICAgIGlmIChib2FyZEdyaWRbeF1beV0gPT09IHRydWUgfHwgYm9hcmRHcmlkW3hdW3ldID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyAgSWYgaXQgaXMgYSBzaGlwXG4gICAgaWYgKGJvYXJkR3JpZFt4XVt5XSkge1xuICAgICAgYm9hcmRHcmlkW3hdW3ldLmhpdCgpO1xuICAgICAgYm9hcmRHcmlkW3hdW3ldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRHcmlkW3hdW3ldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvYXJkR3JpZFt4XVt5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZUFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIGFjdGl2ZVNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZFNpemU7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaiArPSAxKSB7XG4gICAgICAgIGJvYXJkR3JpZFtpXVtqXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZlU2hpcHMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IGdyaWQoKSB7XG4gICAgICByZXR1cm4gYm9hcmRHcmlkO1xuICAgIH0sXG5cbiAgICBwbGFjZSxcbiAgICBwbGFjZVJhbmRvbSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFN1bmssXG4gICAgcmVzZXQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiIsImltcG9ydCBjcmVhdGVHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSkge1xuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgY29uc3QgYXR0YWNrZWRTcG90cyA9IFtdO1xuICBsZXQgcGxheWVyTmFtZSA9IG5hbWU7XG4gIGxldCBsYXN0SGl0O1xuICBsZXQgY2hlYXRJbmRleCA9IDEwO1xuXG4gIGZ1bmN0aW9uIGF0dGFjayhlbmVteUdhbWVib2FyZCwgY29vcmRzKSB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGF0dGFja2VkU3BvdHMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkcykpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgYXR0YWNrZWRTcG90cy5wdXNoKGNvb3Jkcyk7XG5cbiAgICByZXR1cm4gY29vcmRzO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Db29yZHMoKSB7XG4gICAgY29uc3QgY29vcmRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgICAgY29vcmRzW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZHM7XG4gIH1cblxuICBmdW5jdGlvbiBibGluZEZpcmUoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICBsZXQgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcblxuICAgIHdoaWxlIChKU09OLnN0cmluZ2lmeShhdHRhY2tlZFNwb3RzKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZHMpKSkge1xuICAgICAgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0YWNrKGVuZW15R2FtZWJvYXJkLCBjb29yZHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc21hcnRQb2tlKGVuZW15R2FtZWJvYXJkKSB7XG4gICAgbGV0IGNvb3JkcyA9IGdlbmVyYXRlUmFuZG9tQ29vcmRzKCk7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gICAgLy8gIENvb3JkcyB3aWxsIG9ubHkgYmUgaW4gYSBjcm9zcyBwYXR0ZXJuXG4gICAgd2hpbGUgKFxuICAgICAgKGNvb3Jkc1swXSArIGNvb3Jkc1sxXSkgJSAyICE9PSAwIHx8XG4gICAgICBKU09OLnN0cmluZ2lmeShhdHRhY2tlZFNwb3RzKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShjb29yZHMpKVxuICAgICkge1xuICAgICAgY29vcmRzID0gZ2VuZXJhdGVSYW5kb21Db29yZHMoKTtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGlmIChjb3VudGVyID4gNDIwKSB7XG4gICAgICAgIHJldHVybiBibGluZEZpcmUoZW5lbXlHYW1lYm9hcmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhdHRhY2soZW5lbXlHYW1lYm9hcmQsIGNvb3Jkcyk7XG4gIH1cblxuICBmdW5jdGlvbiBzbWFydEZpcmUoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICBpZiAoYXR0YWNrZWRTcG90cy5sZW5ndGggJSBjaGVhdEluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm4gY2hlYXQoZW5lbXlHYW1lYm9hcmQpO1xuICAgIH1cblxuICAgIGlmIChhdHRhY2tlZFNwb3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGF0dGFja2VkU3BvdHNbYXR0YWNrZWRTcG90cy5sZW5ndGggLSAxXTtcblxuICAgICAgLy8gIEdldCBsYXN0IGhpdFxuICAgICAgaWYgKGVuZW15R2FtZWJvYXJkLmdyaWRbeF1beV0gPT09IHRydWUpIHtcbiAgICAgICAgbGFzdEhpdCA9IFt4LCB5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGFzdEhpdCkge1xuICAgICAgbGV0IHJpZ2h0ID0gZmFsc2U7XG4gICAgICBsZXQgdG9wID0gZmFsc2U7XG4gICAgICBsZXQgbGVmdCA9IGZhbHNlO1xuICAgICAgbGV0IGJvdHRvbSA9IGZhbHNlO1xuXG4gICAgICAvLyAgSWYgYWRqYWNlbnQgc3BvdHMgYXJlIHZhbGlkXG4gICAgICBpZiAobGFzdEhpdFswXSA8IDkpIHtcbiAgICAgICAgcmlnaHQgPSBlbmVteUdhbWVib2FyZC5ncmlkW2xhc3RIaXRbMF0gKyAxXVtsYXN0SGl0WzFdXTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0SGl0WzFdID4gMCkge1xuICAgICAgICB0b3AgPSBlbmVteUdhbWVib2FyZC5ncmlkW2xhc3RIaXRbMF1dW2xhc3RIaXRbMV0gLSAxXTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0SGl0WzBdID4gMCkge1xuICAgICAgICBsZWZ0ID0gZW5lbXlHYW1lYm9hcmQuZ3JpZFtsYXN0SGl0WzBdIC0gMV1bbGFzdEhpdFsxXV07XG4gICAgICB9XG4gICAgICBpZiAobGFzdEhpdFsxXSA8IDkpIHtcbiAgICAgICAgYm90dG9tID0gZW5lbXlHYW1lYm9hcmQuZ3JpZFtsYXN0SGl0WzBdXVtsYXN0SGl0WzFdICsgMV07XG4gICAgICB9XG5cbiAgICAgIC8vICBUcnkgYXR0YWNraW5nIHRoZW1cbiAgICAgIGlmIChyaWdodCAhPT0gdHJ1ZSAmJiByaWdodCAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGF0dGFjayhlbmVteUdhbWVib2FyZCwgW2xhc3RIaXRbMF0gKyAxLCBsYXN0SGl0WzFdXSk7XG4gICAgICB9IGVsc2UgaWYgKHRvcCAhPT0gdHJ1ZSAmJiB0b3AgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBhdHRhY2soZW5lbXlHYW1lYm9hcmQsIFtsYXN0SGl0WzBdLCBsYXN0SGl0WzFdIC0gMV0pO1xuICAgICAgfSBlbHNlIGlmIChsZWZ0ICE9PSB0cnVlICYmIGxlZnQgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBhdHRhY2soZW5lbXlHYW1lYm9hcmQsIFtsYXN0SGl0WzBdIC0gMSwgbGFzdEhpdFsxXV0pO1xuICAgICAgfSBlbHNlIGlmIChib3R0b20gIT09IHRydWUgJiYgYm90dG9tICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYXR0YWNrKGVuZW15R2FtZWJvYXJkLCBbbGFzdEhpdFswXSwgbGFzdEhpdFsxXSArIDFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzbWFydFBva2UoZW5lbXlHYW1lYm9hcmQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzbWFydFBva2UoZW5lbXlHYW1lYm9hcmQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlYXQoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAoZW5lbXlHYW1lYm9hcmQuZ3JpZFtpXVtqXSAmJiBlbmVteUdhbWVib2FyZC5ncmlkW2ldW2pdICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGF0dGFjayhlbmVteUdhbWVib2FyZCwgW2ksIGpdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGF0dGFja2VkU3BvdHMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gcGxheWVyTmFtZTtcbiAgICB9LFxuXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgcGxheWVyTmFtZSA9IG5ld05hbWU7XG4gICAgfSxcblxuICAgIGdldCBnYW1lYm9hcmQoKSB7XG4gICAgICByZXR1cm4gcGxheWVyR2FtZWJvYXJkO1xuICAgIH0sXG5cbiAgICBzZXQgZGlmZmljdWx0eShuZXdDaGVhdCkge1xuICAgICAgY2hlYXRJbmRleCA9IG5ld0NoZWF0O1xuICAgIH0sXG5cbiAgICBhdHRhY2ssXG4gICAgYmxpbmRGaXJlLFxuICAgIHNtYXJ0RmlyZSxcbiAgICBjaGVhdCxcbiAgICByZXNldCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwiZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgpIHtcbiAgbGV0IGhpdFBvaW50cyA9IGxlbmd0aDtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaGl0UG9pbnRzIC09IDE7XG5cbiAgICByZXR1cm4gaGl0UG9pbnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgIC8vICBTdW5rIGlmIG5vIGhpdFBvaW50cyBsZWZ0XG4gICAgcmV0dXJuIGhpdFBvaW50cyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tICcuL21vZHVsZXMvVUknO1xuaW1wb3J0IGNyZWF0ZUdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xuXG5jcmVhdGVDb250ZW50KCk7XG5cbmNvbnN0IGdhbWUgPSBjcmVhdGVHYW1lKCk7XG5cbmdhbWUuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=