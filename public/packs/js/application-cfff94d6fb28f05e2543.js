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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/youngson/program/paulo/app/javascript/packs/application.js: Unexpected token, expected \"{\" (120:11)\n\n  118 | \n  119 | function \n> 120 | $(document).ready(function() { \n      |            ^\n  121 |     openVideoPage('.homeVideo')\n  122 |     openVideoPage('#featureVideo')\n  123 |     openVideoPage('#videoIntro')\n    at Parser._raise (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:8757:16)\n    at Parser.expect (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:8743:28)\n    at Parser.parseBlock (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11620:10)\n    at Parser.parseFunctionBody (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10634:24)\n    at Parser.parseFunctionBodyAndFinish (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10617:10)\n    at /home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11796:12\n    at Parser.withTopicForbiddingContext (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10956:14)\n    at Parser.parseFunction (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11795:10)\n    at Parser.parseFunctionStatement (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11427:17)\n    at Parser.parseStatementContent (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11119:21)\n    at Parser.parseStatement (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseTopLevel (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11012:10)\n    at Parser.parse (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:12637:10)\n    at parse (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:12688:38)\n    at parser (/home/youngson/program/paulo/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/youngson/program/paulo/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/youngson/program/paulo/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/youngson/program/paulo/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/youngson/program/paulo/node_modules/gensync/index.js:254:32)\n    at /home/youngson/program/paulo/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/youngson/program/paulo/node_modules/gensync/index.js:216:11)");

/***/ })

/******/ });
//# sourceMappingURL=application-cfff94d6fb28f05e2543.js.map