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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/youngson/program/paulo/app/javascript/packs/application.js: Unterminated string constant (20:34)\n\n  18 |     $('#audioPage').toggleClass('col-2 col-6')\n  19 |     //$('#videoPage').css('display', 'none');\n> 20 |     $('#videoResume').toggleClass('display displayNone)\n     |                                   ^\n  21 |     //$('#audioPage').css('display', 'none')\n  22 |     //$('#footerBar').css('display','inline')\n  23 |     //$('.navbar').css('display','none')\n    at Parser._raise (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.readString (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:8374:20)\n    at Parser.getTokenFromCode (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:8032:14)\n    at Parser.nextToken (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:7559:12)\n    at Parser.next (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:7487:10)\n    at Parser.parseSubscript (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9688:12)\n    at Parser.parseSubscripts (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9625:19)\n    at Parser.parseExprSubscripts (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9608:17)\n    at Parser.parseMaybeUnary (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseExpression (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9332:23)\n    at Parser.parseStatementContent (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11210:23)\n    at Parser.parseStatement (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseFunctionBody (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10634:24)\n    at Parser.parseArrowExpression (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10603:10)\n    at Parser.parseParenAndDistinguishExpression (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10221:12)\n    at Parser.parseExprAtom (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9947:21)\n    at Parser.parseExprSubscripts (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseExprListItem (/home/youngson/program/paulo/node_modules/@babel/parser/lib/index.js:10718:18)");

/***/ })

/******/ });
//# sourceMappingURL=application-90b910a2895c76965bc5.js.map