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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/desk/desk.js":
/*!*********************************!*\
  !*** ./src/blocks/desk/desk.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  $('.desk__item').on('click', function (e) {\n    var $self = $(this);\n    var type = $self.data('type');\n    $self.addClass(\"desk__item_\".concat(type));\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Rlc2svZGVzay5qcz80ZTdhIl0sIm5hbWVzIjpbIiQiLCJvbiIsImUiLCIkc2VsZiIsInR5cGUiLCJkYXRhIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsWUFBTTtBQUVOQSxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7QUFDeEMsUUFBSUMsS0FBSyxHQUFHSCxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQ0EsUUFBSUksSUFBSSxHQUFHRCxLQUFLLENBQUNFLElBQU4sQ0FBVyxNQUFYLENBQVg7QUFFQUYsU0FBSyxDQUFDRyxRQUFOLHNCQUE2QkYsSUFBN0I7QUFDQSxHQUxEO0FBT0EsQ0FURCIsImZpbGUiOiIuL3NyYy9ibG9ja3MvZGVzay9kZXNrLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcblxuXHQkKCcuZGVza19faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgJHNlbGYgPSAkKHRoaXMpO1xuXHRcdGxldCB0eXBlID0gJHNlbGYuZGF0YSgndHlwZScpXG5cdFx0XG5cdFx0JHNlbGYuYWRkQ2xhc3MoYGRlc2tfX2l0ZW1fJHt0eXBlfWApO1xuXHR9KTtcblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/desk/desk.js\n");

/***/ }),

/***/ "./src/blocks/panel/panel.js":
/*!***********************************!*\
  !*** ./src/blocks/panel/panel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var $minesboard = $('input[name=\"minesboard\"]');\n  $('.panel__button').on('click', function (e) {\n    var mines = $(this).find('input[name=\"mines\"]').val();\n    $minesboard.val(mines);\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BhbmVsL3BhbmVsLmpzP2ViMzciXSwibmFtZXMiOlsiJG1pbmVzYm9hcmQiLCIkIiwib24iLCJlIiwibWluZXMiLCJmaW5kIiwidmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFDLFlBQU07QUFFTixNQUFJQSxXQUFXLEdBQUdDLENBQUMsQ0FBQywwQkFBRCxDQUFuQjtBQUVBQSxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzNDLFFBQUlDLEtBQUssR0FBR0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxJQUFSLENBQWEscUJBQWIsRUFBb0NDLEdBQXBDLEVBQVo7QUFDQU4sZUFBVyxDQUFDTSxHQUFaLENBQWdCRixLQUFoQjtBQUNBLEdBSEQ7QUFLQSxDQVREIiwiZmlsZSI6Ii4vc3JjL2Jsb2Nrcy9wYW5lbC9wYW5lbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cblx0bGV0ICRtaW5lc2JvYXJkID0gJCgnaW5wdXRbbmFtZT1cIm1pbmVzYm9hcmRcIl0nKTtcblxuXHQkKCcucGFuZWxfX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgbWluZXMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W25hbWU9XCJtaW5lc1wiXScpLnZhbCgpO1xuXHRcdCRtaW5lc2JvYXJkLnZhbChtaW5lcyk7XG5cdH0pXG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/panel/panel.js\n");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_panel_panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/panel/panel.js */ \"./src/blocks/panel/panel.js\");\n/* harmony import */ var _blocks_panel_panel_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_panel_panel_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_desk_desk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/desk/desk.js */ \"./src/blocks/desk/desk.js\");\n/* harmony import */ var _blocks_desk_desk_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_desk_desk_js__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzPzQ0MGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbW1vbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Jsb2Nrcy9wYW5lbC9wYW5lbC5qc1wiO1xyXG5pbXBvcnQgXCIuLi9ibG9ja3MvZGVzay9kZXNrLmpzXCI7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ })

/******/ });