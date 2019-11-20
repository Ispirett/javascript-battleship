/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/sparetime.js/dist/spare.js":
/*!*************************************************!*\
  !*** ./node_modules/sparetime.js/dist/spare.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nfunction spare() {\r\n    (function (window) {\r\n        function defineSpare() {\r\n            //console.log('Touch framework is running')\r\n            var Spare = {};\r\n            //@ts-ignore\r\n            Spare.info = function () {\r\n                console.log('Touch framework is running');\r\n            };\r\n            //@ts-ignore\r\n            Spare.addEvent = function (selector, eventName, exec) {\r\n                var element = document.querySelector(selector);\r\n                element.addEventListener(eventName, function () {\r\n                    console.log(exec());\r\n                    exec();\r\n                });\r\n            };\r\n            //@ts-ignore\r\n            Spare.create = function (tagName) {\r\n                var Element = new Ele();\r\n                return Element.create(tagName);\r\n            };\r\n            //@ts-ignore\r\n            Spare.sel = function (selector) {\r\n                var element = new Ele();\r\n                return element.sel(selector);\r\n            };\r\n            return Spare;\r\n        }\r\n        if (typeof Spare === \"undefined\") {\r\n            window.Spare = defineSpare();\r\n        }\r\n        // defineTouch()\r\n    })(window); //hello\r\n}\r\n;\r\nvar Ele = /** @class */ (function () {\r\n    function Ele() {\r\n        var _this = this;\r\n        this.attr = function (attr, value) {\r\n            _this.element.setAttribute(attr, value);\r\n            return _this.methodList();\r\n        };\r\n        this.Class = function () {\r\n            var _a;\r\n            var className = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                className[_i] = arguments[_i];\r\n            }\r\n            (_a = _this.element.classList).add.apply(_a, className);\r\n            return _this.methodList();\r\n        };\r\n        this.html = function (html) {\r\n            _this.element.innerHTML = \"\" + html;\r\n            return _this.methodList();\r\n        };\r\n        this.append = function () {\r\n            var _a;\r\n            var children = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                children[_i] = arguments[_i];\r\n            }\r\n            (_a = _this.element).append.apply(_a, children);\r\n            return _this.methodList();\r\n        };\r\n    }\r\n    Object.defineProperty(Ele.prototype, \"element\", {\r\n        get: function () {\r\n            return this._element;\r\n        },\r\n        set: function (value) {\r\n            this._element = value;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Ele.prototype.methodList = function () {\r\n        var methods = this._methods =\r\n            { Class: this.Class,\r\n                attr: this.attr,\r\n                html: this.html,\r\n                element: this.element,\r\n                append: this.append\r\n            };\r\n        return __assign({}, methods);\r\n    };\r\n    Ele.prototype.create = function (tagName) {\r\n        this.element = document.createElement(tagName);\r\n        return this.methodList();\r\n    };\r\n    Ele.prototype.sel = function (selector) {\r\n        this.element = document.querySelector(selector);\r\n        return this.methodList();\r\n    };\r\n    // prototype\r\n    Ele.copy = function () {\r\n        return new Ele();\r\n    };\r\n    return Ele;\r\n}());\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (spare);\n\n//# sourceURL=webpack:///./node_modules/sparetime.js/dist/spare.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Gui */ \"./src/lib/Gui.js\");\n\n\n_lib_Gui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerBoards();\n_lib_Gui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayPLayerInfo.setPlayerNames().scores();\n_lib_Gui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shipSetup();\n_lib_Gui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleAttack();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/GameManager.js":
/*!********************************!*\
  !*** ./src/lib/GameManager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/lib/player.js\");\n/* harmony import */ var _shipManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipManager */ \"./src/lib/shipManager.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/lib/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ \"./src/lib/gameboard.js\");\n\n\n\n\n\n// Game loop\n// 2 Gameboards\n// 2 players\n// 10 ships  5 each player\n// 2 ship Managers\n/*start game function => [\n while loop 1 loop until either player fleet is 0\n\n] */\n\n// endgame function\n// Tracker to store all played moves\n\n// Game steps\n//   1 player sets board and adds name\n//   2  player clicks play and game begins\n\nconst GameManager = (() => {\n  // eslint-disable-next-line no-unused-vars\n  //Global\n  const markLogs = [];\n  const p1Board = Object(_gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const p2Board = Object(_gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  // eslint-disable-next-line no-unused-vars\n  const playerManager = () => {\n    const playerOne = (name) => Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n    const playerTwo = (name = \"Magnetron\") => Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n    return {\n      playerOne,\n      playerTwo\n    }\n  };\n  const boardManager = () => {\n    const playerOneBoard = () => {\n      return p1Board\n    };\n\n    const playerTwoBoard = () => {\n      return p2Board\n    };\n\n    return {\n      playerOneBoard,\n      playerTwoBoard\n    }\n\n  };\n  const playerShips = () => {\n    const playerOneShips = () => {\n      const shipDetails =\n        [{ letter: 'a', num: 4  , pos: 'down', shipLength: 3 },\n        { letter: 'b', num: 2, pos: 'right', shipLength: 3 },\n        { letter: 'j', num: 9, pos: 'up', shipLength: 2 },\n        { letter: 'e', num: 5, pos: 'up', shipLength: 2 },\n        { letter: 'g', num: 1, pos: 'down', shipLength: 1 }\n        ];\n\n      const p1Fleet = Object(_shipManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      shipDetails.forEach((e, i) => {\n        p1Fleet.addShip(Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.shipLength), p1Board.placeShip(shipDetails[i]).shipPosition);\n      });\n      return p1Fleet\n    };\n\n    const playerTwoShips = () => {\n      const shipDetails =\n        [{ letter: 'a', num: 1, pos: 'down', shipLength: 3 },\n        { letter: 'b', num: 2, pos: 'right', shipLength: 3 },\n        { letter: 'j', num: 9, pos: 'up', shipLength: 2 },\n        { letter: 'e', num: 3, pos: 'up', shipLength: 2 },\n        { letter: 'd', num: 1, pos: 'down', shipLength: 1 }\n        ];\n      const p2Fleet = Object(_shipManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      shipDetails.forEach((e, i) => {\n        p2Fleet.addShip(Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.shipLength), p2Board.placeShip(shipDetails[i]).shipPosition);\n      });\n\n      return p2Fleet\n    };\n    return {\n      playerOneShips,\n      playerTwoShips\n    }\n  };\n\n  const playerSwitcher = () => {\n    let turn = 2;\n    const playerTurn = turn % 2 === 0 ? playerManager().playerOne() : playerManager().playerTwo()\n    turn++;\n    return {\n      turn,\n      playerTurn\n    };\n  };\n\n  // Utils\n  const AttackLogger = (name, position) => {\n    markLogs.push({ name, position });\n  }\n\n  const play = () => {\n    while (playerShips().playerOneShips().ships().length > 0\n      && playerShips().playerTwoShips().ships().length > 0) {\n        const currentPlayer = playerSwitcher();\n      }\n  }\n\n  return {\n    boardManager,\n    playerManager,\n    playerShips,\n  }\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameManager);\n\n\n\n//# sourceURL=webpack:///./src/lib/GameManager.js?");

/***/ }),

/***/ "./src/lib/Gui.js":
/*!************************!*\
  !*** ./src/lib/Gui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameManager */ \"./src/lib/GameManager.js\");\n/* harmony import */ var sparetime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sparetime.js */ \"./node_modules/sparetime.js/dist/spare.js\");\n\n\nObject(sparetime_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// Setup Board\n// Display ships on board =>  Add color class to element when S is matched\n// Allow player to update ship position board\n// Create update Loop\n// Player one should be able to attack\n// Player two should be able to attack\n// Update board after attack\n// repeat attack until one player ship fleet is demolished\n\nconst GUI = (() => {\n  const p1Board = _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardManager().playerOneBoard();\n  const p2Board = _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].boardManager().playerTwoBoard();\n  const p1Ships = _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerShips().playerOneShips();\n  const p2Ships = _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerShips().playerTwoShips();\n  let p1 = null;\n  const p2 =  _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerManager().playerTwo();\n\n\n\n  const playerBoards = () => {\n    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];\n    const p1Container = Spare.sel('#player').element;\n    const p2Container = Spare.sel('#player-two').element;\n /// lettter  a num 0 , b num 0\n    letters.forEach((letter) => {\n      p1Board.board[letter].forEach((num, index) => {\n\n\n        const square = Spare.create('div')\n          .attr('data-letter', letter)\n          .attr('data-number', index)\n          .attr('id', `${letter}-${index}`).attr('class','slot' )\n          .element;\n        p1Container.append(square);\n\n      });\n      p2Board.board[letter].forEach((num, index_two) => {\n        const square = Spare.create('div')\n          .attr('data-letter', letter)\n          .attr('data-number', index_two)\n          .attr('id', `${letter}-${index_two}-2`).attr('class', 'slot_two')\n          .element;\n        p2Container.append(square);\n      });\n    });\n  };\n\n  const displayPLayerInfo = (() =>{\n    const setPlayerNames = () =>\n    {\n      const p1name = Spare.sel('#p1-name').element;\n      const p2name = Spare.sel('#p2-name').element;\n      // const nameInput = Spare.sel('#name-input').value()\n      p1 = _GameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playerManager().playerOne('Destroyer');\n      p1name.innerText = p1.playerName();\n      p2name.innerText = p2.playerName();\n      return{\n        scores\n      }\n    };\n\n    const scores = () =>{\n      const p1score = Spare.sel('#p1-score').element;\n      const p2score = Spare.sel('#p2-score').element;\n      p1score.innerText = `${p1Ships.ships().length}  ships`;\n      p2score.innerText = `${p2Ships.ships().length}  ships`;\n    };\n    return{\n      setPlayerNames,\n      scores\n    }\n  })();\n\n  const boardSlots = (className,callback) =>{\n    const ships = document.querySelectorAll(`.${className}`);\n    ships.forEach( slot =>{\n      const letter = slot.getAttribute('data-letter');\n      const num = slot.getAttribute('data-number');\n      callback({letter,num, slot});\n    })\n  };\n\n  const shipSetup = () =>{\n    boardSlots('slot',(props) =>{\n      if(p1Board.slot(props.letter,props.num) === \"S\"){\n        props.slot.classList.add('blue')\n      }\n    });\n    boardSlots('slot_two',(props) =>{\n      if(p2Board.slot(props.letter,props.num) === \"S\"){\n        props.slot.classList.add('blue')\n      }\n    })\n\n  };\n\n const handleAttack = () =>{\n    boardSlots('slot_two',props => {\n      props.slot.onclick = (e) =>{\n       p2Ships.shipTracker(\n\n           p2Board.recieveAttack({letter:props.letter,num:props.num}), isHit =>{\n             if(isHit === 'hit'){\n               console.log(\"hit\");\n               e.target.classList.add('red')\n             }\n             else if(isHit === 'miss') {\n               console.log(\"miss\");\n               e.target.classList.add('brown')\n             }\n           }, destroy =>{\n               if(destroy === \"destroyed\"){\n                 console.log('destroyed',p2Ships.ships().length)\n               }\n           });\n         }\n    })\n };\n\n\n\n\n\n  return {\n    handleAttack,\n    shipSetup,\n    playerBoards,\n    displayPLayerInfo\n  };\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GUI);\n\n//# sourceURL=webpack:///./src/lib/Gui.js?");

/***/ }),

/***/ "./src/lib/gameboard.js":
/*!******************************!*\
  !*** ./src/lib/gameboard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameBoard = () => {\n  const board = {};\n  const shipMark = \"S\";\n  const boardHit = \"X\";\n\n  const setup = () => {\n    const alpha = \"abcdefghij\";\n    alpha\n      .split(\"\")\n      .forEach(mark => (board[mark] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));\n  };\n  setup();\n\n  const slot = (letter, num) => board[letter][num];\n\n  const Logger = (msg,result) =>{\n      return{\n          msg,\n          result\n      }\n  };\n\n\n\n  const recieveAttack = details => {\n    const { letter, num } = details;\n    const pos = slot(letter, num);\n\n    // eslint-disable-next-line no-unused-vars\n    // let updatePos = board[letter];\n      if (pos === shipMark) {\n        updateBoard({letter, num, icon: boardHit});\n        return  Logger('ship',{  letter, num });\n      }\n      else if(/\\d/.test(pos)) {\n        updateBoard({letter, num, icon: boardHit });\n        return Logger('X',{  letter, num  });\n      }\n      else if(pos === boardHit){\n          return \"position taken\";\n      }\n\n      return \"position taken\";\n\n  };\n\n    // eslint-disable-next-line no-unused-vars\n  const updateBoard = (details) => {\n      const {letter, num, icon} = details;\n      board[letter][num] = icon\n  };\n\n\n\n  const placeShip = details => {\n    // pos should be left right up or down\n    let { letter, num, pos, shipLength } = details;\n    const alpha = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n    let index = alpha.indexOf(letter);\n    let counter = 0;\n    const shipPosition = [];\n\n    const assign = () => {\n      if (shipLength <= counter) {\n        for (let i = 0; i < shipLength; i++) {\n            if (/left|right/.test(pos)) {\n                board[alpha[index]][num] = shipMark;\n                shipPosition.push({letter:alpha[index], num});\n                if (pos === \"right\") {\n                    index += 1;\n                } else if (pos === \"left\") {\n                    index -= 1;\n                }\n\n            }\n            if(/up|down/.test(pos)) {\n                board[letter][num] = shipMark;\n                shipPosition.push({letter, num});\n                if (pos === 'down'){\n                    num++\n                }\n                else if (pos === 'up'){\n                    num--\n                }\n            }\n\n        }\n        const log = Logger('success', true);\n        return {\n            log,\n            shipPosition\n        }\n      } else {\n        return Logger(`you can only place a ship of ${counter} length` , false);\n      }\n    };\n\n    const leftRight = () => {\n        let currentIndex = index;\n      if (pos === \"right\") {\n        for (let i = 0; i < 3; i++) {\n          if (alpha[currentIndex] !== undefined) {\n            if (slot(alpha[currentIndex], num) !== \"S\") {\n              counter++;\n              currentIndex++;\n            }\n          }\n        }\n      } else if (pos === \"left\") {\n        for (let i = 3; i >= 0; i--) {\n          if (alpha[currentIndex] !== undefined) {\n            if (slot(alpha[currentIndex], num) !== \"S\") {\n              counter++;\n              currentIndex -= 1;\n            }\n          }\n        }\n      }\n    };\n\n    const upDown = () => {\n        let currentNum = num;\n        if (pos === \"down\") {\n            for (let i = 0; i < 3; i++) {\n                if (slot(letter, currentNum) >= 0) {\n                    if (slot(letter, currentNum) !== \"S\") {\n                        counter++;\n                        currentNum++;\n                    }\n                    else{\n                        return false;\n                    }\n                }\n            }\n        }\n        else if (pos ==='up'){\n            for (let i = 3; i >= 0; i--) {\n                if (slot(letter, currentNum) >= 0) {\n                    if (slot(letter, currentNum) !== \"S\") {\n                        counter++;\n                        currentNum--;\n                    }\n                }\n            }\n        }\n    };\n\n    leftRight();\n    upDown();\n    return assign();\n  };\n\n  return {\n    board,\n    recieveAttack,\n    placeShip,\n    slot,\n    updateBoard\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n\n//# sourceURL=webpack:///./src/lib/gameboard.js?");

/***/ }),

/***/ "./src/lib/player.js":
/*!***************************!*\
  !*** ./src/lib/player.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = name => {\n  const playerName = () => name;\n\n  const randomNum = () => Math.round(Math.random() * 9);\n\n  const letters = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\", \"h\", \"i\", \"j\"];\n\n  const randomMove = () => {\n    return {\n      num: randomNum(),\n      letter: letters[randomNum()]\n    };\n  };\n  \n  return {\n    playerName,\n    randomMove\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/lib/player.js?");

/***/ }),

/***/ "./src/lib/ship.js":
/*!*************************!*\
  !*** ./src/lib/ship.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Ship = length => {\n    if (length > 4) length = 4;\n  \n    let hits = 0;\n  \n    const shipLength = () => length;\n  \n    const hit = () => (isSunk() ? undefined : (hits += 1));\n  \n    const isSunk = () => hits >= length;\n  \n    return {\n      shipLength,\n      hit,\n      isSunk\n    };\n  };\n  \n  /* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/lib/ship.js?");

/***/ }),

/***/ "./src/lib/shipManager.js":
/*!********************************!*\
  !*** ./src/lib/shipManager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// ship array , each ship has an index\n\n// index 0\n//  a b c d\n//  S\n//  S\n//  X\n// eslint-disable-next-line no-unused-vars\nconst ShipManager = () => {\n  let shipArray = [];\n  const ships = () => shipArray;\n\n  const addShip = (ship, shipPos) => {\n    shipArray.push({ ship, shipPos });\n    return ships().length;\n  };\n\n  const updateShipPos = (index, newShipPos) =>{\n    shipArray[index].shipPos =  newShipPos\n  };\n\n  const removeShip = (index) => {\n    shipArray.splice(index, 1);\n    return true\n  };\n\n  const shipTracker = (reciveAttack,isHit,destroyed) => {\n    isHit(\"miss\");\n    ships().forEach((e, index) => {\n      //get access to ship positions\n      e.shipPos.forEach(sp => {\n        if (reciveAttack.msg === 'ship') {\n          if (sp.letter === reciveAttack.result.letter && sp.num === Number(reciveAttack.result.num)) {\n              isHit(\"hit\");\n            if (e.ship.hit() === e.ship.shipLength()) {\n              removeShip(index);\n              try{\n                destroyed('destroyed');\n              }\n              catch (e) {\n                return e\n              }\n              return true\n            }\n          }\n        }\n\n      })\n    })\n\n  };\n\n  return {\n    ships,\n    addShip,\n    shipTracker,\n    updateShipPos\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShipManager);\n// loop through ships an match object and update ship length\n// eslint-disable-next-line no-unused-vars\n\n\n//# sourceURL=webpack:///./src/lib/shipManager.js?");

/***/ })

/******/ });