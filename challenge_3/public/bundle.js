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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.jsx":
/*!************************!*\
  !*** ./client/app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/client/app.jsx: Unexpected token, expected \\\",\\\" (7:14)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m    \\u001b[36msuper\\u001b[39m(props)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m    \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mstate \\u001b[33m=\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m      name\\u001b[33m:\\u001b[39m \\u001b[32m''\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m              \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m    }\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:6400:17)\\n    at Object.unexpected (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:7728:16)\\n    at Object.expect (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:7714:28)\\n    at Object.parseObj (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9249:14)\\n    at Object.parseExprAtom (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8883:28)\\n    at Object.parseExprAtom (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:3609:20)\\n    at Object.parseExprSubscripts (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8507:23)\\n    at Object.parseMaybeUnary (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8487:21)\\n    at Object.parseExprOps (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8353:23)\\n    at Object.parseMaybeConditional (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8326:23)\\n    at Object.parseMaybeAssign (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8273:21)\\n    at Object.parseMaybeAssign (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8312:25)\\n    at Object.parseExpression (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:8221:23)\\n    at Object.parseStatementContent (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10061:23)\\n    at Object.parseStatement (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9932:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10508:25)\\n    at Object.parseBlockBody (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10495:10)\\n    at Object.parseBlock (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10479:10)\\n    at Object.parseFunctionBody (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9523:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9493:10)\\n    at Object.parseMethod (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9447:10)\\n    at Object.pushClassMethod (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10907:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10832:12)\\n    at Object.parseClassMember (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10771:10)\\n    at withTopicForbiddingContext (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10726:14)\\n    at Object.withTopicForbiddingContext (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9805:14)\\n    at Object.parseClassBody (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10703:10)\\n    at Object.parseClass (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:10677:22)\\n    at Object.parseStatementContent (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9974:21)\\n    at Object.parseStatement (/Users/jameschiu/Desktop/HR/HR Mini Apps/hrla32-mini-apps-1/challenge_3/node_modules/@babel/parser/lib/index.js:9932:17)\");\n\n//# sourceURL=webpack:///./client/app.jsx?");

/***/ }),

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.jsx */ \"./client/app.jsx\");\n\nReactDOM.render(React.createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./client/index.jsx?");

/***/ })

/******/ });