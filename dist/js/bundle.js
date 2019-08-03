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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/configure.ts":
/*!*****************************!*\
  !*** ./src/ts/configure.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Merges default/user options and finds new attributes on an HTML element.
 *
 * @export
 * @param {HTMLElement} element Element to search for new attributes
 * @param {Options} userOptions Customized user options to compare
 * @param {Options} defaultOptions Default options to compare
 * @returns {Options} A finalized Options object
 */
function configure(element, userOptions, defaultOptions) {
    return Object.keys(defaultOptions).reduce(function (options, key) {
        var attrValue = element.getAttribute("data-" + key.toLowerCase());
        if (attrValue !== null)
            options[key] = attrValue;
        else if (key in userOptions)
            options[key] = userOptions[key];
        else
            options[key] = defaultOptions[key];
        return options;
    }, {});
}
exports.default = configure;


/***/ }),

/***/ "./src/ts/default-options.ts":
/*!***********************************!*\
  !*** ./src/ts/default-options.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultOptions = {
    attributeNames: {
        root: 'data-fantafilter',
        group: 'data-fantafilter-group',
        selector: 'data-fantafilter-selector',
        comparer: 'data-fantafilter-comparer',
    },
    classNames: {
        parent: 'js-fafi-parent',
        input: 'js-fafi-input',
        item: 'js-fafi-item',
        inactive: 'js-fafi-active',
    },
};
exports.default = defaultOptions;


/***/ }),

/***/ "./src/ts/fantaFilter.ts":
/*!*******************************!*\
  !*** ./src/ts/fantaFilter.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Variable to store all FantaFilters instances
var CurrentFilters = [];
/**
 * Creates a prototype object to be processed by the createFantaFilter factory function
 *
 * @param {HTMLElement} parentNode HTML element parent of filterable elements
 * @param {Options} options Options to control the filter object
 * @param {string} name Name of filter
 * @param {FantaFilterElement[]} [inputs] HTML input elements that control filtering
 * @param {FantaFilterElement[]} [items] HTML elements to be filtered
 * @returns {FantaFilter} A FantaFilter object
 */
var protoFantaFilter = function (parentNode, options, name, inputs, items) { return ({
    parentNode: parentNode,
    options: options,
    name: name,
    inputs: inputs,
    items: items,
    get CurrentFilters() {
        return CurrentFilters;
    },
    get hasInputs() {
        return inputs !== null;
    },
    get hasItems() {
        return items !== null;
    },
}); };
/**
 * Factory method that creates and returns an object from protoFantaFilter
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | string)} target String selector representing an HTML object, or the object itself
 * @param {Options} [userOptions={}] Optional user override options
 * @returns {FantaFilter} A completed FantaFilter object
 */
function createFantaFilter(dependencies, target, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    var configure = dependencies.configure, context = dependencies.context, defaultOptions = dependencies.defaultOptions, createFantaFilterElement = dependencies.createFantaFilterElement;
    var parents = typeof target === "string" ? context.querySelectorAll(target) : target;
    // If multiple parent nodes, create multiple FantaFilters and return those instead
    if (parents instanceof NodeList) {
        return [].slice
            .call(parents)
            .map(function (element) { return createFantaFilter(dependencies, element, userOptions); })
            .filter(function (x) { return x; });
    }
    var parent = parents;
    var options = configure(parent, userOptions, defaultOptions);
    // If the parent node doesn't have the specified group attribute, cancel factory function
    if (!parent.hasAttribute(options.attributeNames.group)) {
        return;
    }
    var name = parent.getAttribute(options.attributeNames.group);
    var groupWithSameName = CurrentFilters.find(function (filter) { return filter.name === name; });
    var FantaFilter = protoFantaFilter(parent, options, name);
    var inputs = createFantaFilterElement(dependencies, context.querySelectorAll("." + options.classNames.input + "[" + options.attributeNames.group + "=" + name + "]"), FantaFilter);
    var items = createFantaFilterElement(dependencies, parent.querySelectorAll("." + options.classNames.item + "[" + options.attributeNames.group + "=" + name + "]"), FantaFilter);
    // If a FantaFilter with the same filter group already exists, merge this one's items with that one and then cancel factory
    if (groupWithSameName) {
        groupWithSameName.items = groupWithSameName.items.concat(items);
        return;
    }
    FantaFilter.inputs = inputs;
    FantaFilter.items = items;
    CurrentFilters.push(FantaFilter);
    return FantaFilter;
}
exports.default = createFantaFilter;


/***/ }),

/***/ "./src/ts/fantaFilterElement.ts":
/*!**************************************!*\
  !*** ./src/ts/fantaFilterElement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util = __webpack_require__(/*! Util */ "./src/ts/lib/util/index.ts");
/**
 * Factory method that creates and returns an object from protoFantaFilterElement
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | HTMLCollection | NodeList)} targets HTML element(s) from which FantaFilterElement(s) should be created
 * @param {FantaFilter} parentFilter FantaFilter object containing this element
 * @param {Options} [userOptions={}] Optional user override options
 * @returns A FantaFilterElement object
 */
function createFantaFilterElement(dependencies, targets, parentFilter, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    var defaultOptions = dependencies.defaultOptions;
    var options = Object.assign(defaultOptions, userOptions);
    if (util.TypeTests.IsNodeList(targets) || util.TypeTests.IsHTMLCollection(targets)) {
        return [].slice
            .call(Array.from(targets))
            .map(function (element) { return createFantaFilterElement(dependencies, element, parentFilter, userOptions); })
            .filter(function (x) { return x; });
    }
    var name = parentFilter.name;
    var element = targets;
    var attrDefault = options.attributeNames;
    var attrElement = util.DOM.convertAttributesToObject(element.attributes, options);
    var elementAttributes = Object.assign(attrDefault, attrElement);
    var newFantaFilterElement = protoFantaFilterElement(element, name);
    newFantaFilterElement = Object.assign(newFantaFilterElement, elementAttributes);
    return newFantaFilterElement;
}
exports.default = createFantaFilterElement;
/**
 * Creates a prototype object to be processed by the createFantaFilterElement factory function
 *
 * @param {HTMLElement} element Element from which a FantaFilterElement will be created
 * @param {string} groupName Name of element's filter group
 * @returns {FantaFilterElement} A prototype FantaFilterElement
 */
var protoFantaFilterElement = function (element, groupName) { return ({
    groupName: groupName,
    element: element,
    set hidden(isHidden) {
        element.hidden = isHidden;
    },
    get hidden() {
        return element.hidden;
    },
}); };


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configure_1 = __webpack_require__(/*! ./configure */ "./src/ts/configure.ts");
var default_options_1 = __webpack_require__(/*! ./default-options */ "./src/ts/default-options.ts");
var fantaFilter_1 = __webpack_require__(/*! ./fantaFilter */ "./src/ts/fantaFilter.ts");
var fantaFilterElement_1 = __webpack_require__(/*! ./fantaFilterElement */ "./src/ts/fantaFilterElement.ts");
exports.default = (function (selector, userOptions, context) {
    if (context === void 0) { context = document; }
    return fantaFilter_1.default({ configure: configure_1.default, context: context, defaultOptions: default_options_1.default, createFantaFilterElement: fantaFilterElement_1.default }, selector, userOptions);
});


/***/ }),

/***/ "./src/ts/lib/util/dom.ts":
/*!********************************!*\
  !*** ./src/ts/lib/util/dom.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = __webpack_require__(/*! ./string */ "./src/ts/lib/util/string.ts");
/**
 * Converts a NamedNodeMap of attributes to an object
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {Options | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 */
exports.convertAttributesToObject = function (attributes, options) {
    var root = typeof options === 'string' ? options : options.attributeNames.root;
    var outputObject = {};
    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes.item(i).name;
        if (attr.match(root)) {
            var convertedName = string_1.convertKebabToCamelCase(attr, root + '-');
            outputObject[convertedName] = attr;
        }
    }
    return outputObject;
};


/***/ }),

/***/ "./src/ts/lib/util/index.ts":
/*!**********************************!*\
  !*** ./src/ts/lib/util/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var String = __webpack_require__(/*! ./string */ "./src/ts/lib/util/string.ts");
exports.String = String;
var DOM = __webpack_require__(/*! ./dom */ "./src/ts/lib/util/dom.ts");
exports.DOM = DOM;
var TypeTests = __webpack_require__(/*! ./typetests */ "./src/ts/lib/util/typetests.ts");
exports.TypeTests = TypeTests;


/***/ }),

/***/ "./src/ts/lib/util/string.ts":
/*!***********************************!*\
  !*** ./src/ts/lib/util/string.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a KebabCase string to CamelCase and returns it
 *
 * @export
 * @param {string} input KebabCase string to be converted
 * @param {string} [root=''] Root term to be matched/removed
 * @returns A CamelCase string
 */
function convertKebabToCamelCase(input, root) {
    if (root === void 0) { root = ''; }
    root = root.length > 0 ? root + '|' : root;
    var replace = '(?:(?:' + root + '(?<!\\v)(?: |-)([a-z])))';
    var regex = new RegExp(replace, 'g');
    return input.replace(regex, function (match, p1) {
        return typeof p1 !== 'undefined' ? p1.toUpperCase() : '';
    });
}
exports.convertKebabToCamelCase = convertKebabToCamelCase;


/***/ }),

/***/ "./src/ts/lib/util/typetests.ts":
/*!**************************************!*\
  !*** ./src/ts/lib/util/typetests.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function IsElement(toBeDetermined) {
    if (toBeDetermined !== null)
        return true;
}
exports.IsElement = IsElement;
function IsHTMLCollection(toBeDetermined) {
    if (toBeDetermined !== null)
        return true;
}
exports.IsHTMLCollection = IsHTMLCollection;
function IsNodeList(toBeDetermined) {
    if (toBeDetermined !== null)
        return true;
}
exports.IsNodeList = IsNodeList;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NvbmZpZ3VyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9mYW50YUZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZmFudGFGaWx0ZXJFbGVtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbGliL3V0aWwvZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9saWIvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbGliL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9saWIvdXRpbC90eXBldGVzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBOzs7Ozs7OztHQVFHO0FBQ0gsU0FBd0IsU0FBUyxDQUFDLE9BQW9CLEVBQUUsV0FBb0IsRUFBRSxjQUF1QjtJQUNqRyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsT0FBZ0IsRUFBRSxHQUFHO1FBQzVELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBUSxHQUFHLENBQUMsV0FBVyxFQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLFNBQVMsS0FBSyxJQUFJO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUM1QyxJQUFJLEdBQUcsSUFBSSxXQUFXO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QyxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDWCxDQUFDO0FBVkQsNEJBVUM7Ozs7Ozs7Ozs7Ozs7OztBQ25CRCxJQUFNLGNBQWMsR0FBWTtJQUM1QixjQUFjLEVBQUU7UUFDWixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUUsMkJBQTJCO0tBQ3hDO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixLQUFLLEVBQUUsZUFBZTtRQUN0QixJQUFJLEVBQUUsY0FBYztRQUNwQixRQUFRLEVBQUUsZ0JBQWdCO0tBQzdCO0NBQ0osQ0FBQztBQUVGLGtCQUFlLGNBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZjlCLCtDQUErQztBQUMvQyxJQUFNLGNBQWMsR0FBa0IsRUFBRSxDQUFDO0FBRXpDOzs7Ozs7Ozs7R0FTRztBQUNILElBQU0sZ0JBQWdCLEdBQUcsVUFDckIsVUFBdUIsRUFDdkIsT0FBZ0IsRUFDaEIsSUFBWSxFQUNaLE1BQTZCLEVBQzdCLEtBQTRCLElBQ2QsUUFBQztJQUNmLFVBQVU7SUFDVixPQUFPO0lBQ1AsSUFBSTtJQUNKLE1BQU07SUFDTixLQUFLO0lBQ0wsSUFBSSxjQUFjO1FBQ2QsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksU0FBUztRQUNULE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1IsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FDSixDQUFDLEVBZmdCLENBZWhCLENBQUM7QUFFSDs7Ozs7Ozs7R0FRRztBQUNILFNBQXdCLGlCQUFpQixDQUNyQyxZQUEwQixFQUMxQixNQUE0QixFQUM1QixXQUF5QjtJQUF6Qiw4Q0FBeUI7SUFFakIsc0NBQVMsRUFBRSw4QkFBTyxFQUFFLDRDQUFjLEVBQUUsZ0VBQXdCLENBQWtCO0lBQ3RGLElBQU0sT0FBTyxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFdkYsa0ZBQWtGO0lBQ2xGLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtRQUM3QixPQUFPLEVBQUUsQ0FBQyxLQUFLO2FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNiLEdBQUcsQ0FBQyxVQUFDLE9BQW9CLElBQUssd0JBQWlCLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBckQsQ0FBcUQsQ0FBQzthQUNwRixNQUFNLENBQUMsVUFBQyxDQUFjLElBQUssUUFBQyxFQUFELENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQ3JCLElBQUksT0FBTyxHQUFZLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBRXRFLHlGQUF5RjtJQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BELE9BQU87S0FDVjtJQUVELElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxJQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsSUFBSSxLQUFLLElBQUksRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBRTVFLElBQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFNUQsSUFBSSxNQUFNLEdBQUcsd0JBQXdCLENBQ2pDLFlBQVksRUFDWixPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBSSxJQUFJLE1BQUcsQ0FBQyxFQUNqRyxXQUFXLENBQ2QsQ0FBQztJQUNGLElBQUksS0FBSyxHQUFHLHdCQUF3QixDQUNoQyxZQUFZLEVBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQUksSUFBSSxNQUFHLENBQUMsRUFDL0YsV0FBVyxDQUNkLENBQUM7SUFFRiwySEFBMkg7SUFDM0gsSUFBSSxpQkFBaUIsRUFBRTtRQUNuQixpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxPQUFPO0tBQ1Y7SUFFRCxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM1QixXQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUUxQixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRWpDLE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLENBQUM7QUFwREQsb0NBb0RDOzs7Ozs7Ozs7Ozs7Ozs7QUNsR0QseUVBQTZCO0FBRTdCOzs7Ozs7Ozs7R0FTRztBQUNILFNBQXdCLHdCQUF3QixDQUM1QyxZQUEwQixFQUMxQixPQUFnRCxFQUNoRCxZQUF5QixFQUN6QixXQUF5QjtJQUF6Qiw4Q0FBeUI7SUFFakIsZ0RBQWMsQ0FBa0I7SUFDeEMsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFbEUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2hGLE9BQU8sRUFBRSxDQUFDLEtBQUs7YUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBQyxPQUFvQixJQUFLLCtCQUF3QixDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUExRSxDQUEwRSxDQUFDO2FBQ3pHLE1BQU0sQ0FBQyxVQUFDLENBQWMsSUFBSyxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7S0FDdEM7SUFFTyw0QkFBSSxDQUFrQjtJQUM5QixJQUFJLE9BQU8sR0FBZ0IsT0FBTyxDQUFDO0lBQ25DLElBQU0sV0FBVyxHQUFtQixPQUFPLENBQUMsY0FBYyxDQUFDO0lBQzNELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRixJQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWxFLElBQUkscUJBQXFCLEdBQUcsdUJBQXVCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUVoRixPQUFPLHFCQUFxQixDQUFDO0FBQ2pDLENBQUM7QUExQkQsMkNBMEJDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLE9BQW9CLEVBQUUsU0FBaUIsSUFBeUIsUUFBQztJQUM5RixTQUFTO0lBQ1QsT0FBTztJQUNQLElBQUksTUFBTSxDQUFDLFFBQWlCO1FBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDTixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztDQUNKLENBQUMsRUFUK0YsQ0FTL0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekRILGtGQUFvQztBQUNwQyxvR0FBK0M7QUFDL0Msd0ZBQThDO0FBQzlDLDZHQUE0RDtBQUc1RCxtQkFBZSxVQUFDLFFBQWdCLEVBQUUsV0FBb0IsRUFBRSxPQUEwQztJQUExQyw0Q0FBMEM7SUFDOUYsNEJBQWlCLENBQUMsRUFBRSxTQUFTLHVCQUFFLE9BQU8sV0FBRSxjQUFjLDZCQUFFLHdCQUF3QixnQ0FBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUM7QUFBMUcsQ0FBMEcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUC9HLGtGQUFtRDtBQUduRDs7OztHQUlHO0FBQ1UsaUNBQXlCLEdBQUcsVUFBQyxVQUF3QixFQUFFLE9BQXlCO0lBQ3pGLElBQU0sSUFBSSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztJQUNqRixJQUFNLFlBQVksR0FBUSxFQUFFLENBQUM7SUFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksYUFBYSxHQUFHLGdDQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUQsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN0QztLQUNKO0lBQ0QsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkYsZ0ZBQW1DO0FBSTNCLHdCQUFNO0FBSGQsdUVBQTZCO0FBR2Isa0JBQUc7QUFGbkIseUZBQXlDO0FBRXBCLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNKOUI7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLHVCQUF1QixDQUFDLEtBQWEsRUFBRSxJQUFpQjtJQUFqQixnQ0FBaUI7SUFDcEUsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsSUFBSSxPQUFPLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRywwQkFBMEIsQ0FBQztJQUMzRCxJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2xDLE9BQU8sT0FBTyxFQUFFLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFQRCwwREFPQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkQsU0FBZ0IsU0FBUyxDQUFDLGNBQW1CO0lBQ3pDLElBQUksY0FBYyxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztBQUM3QyxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxjQUFtQjtJQUNoRCxJQUFJLGNBQWMsS0FBSyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7QUFDN0MsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLGNBQW1CO0lBQzFDLElBQUksY0FBYyxLQUFLLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztBQUM3QyxDQUFDO0FBRkQsZ0NBRUMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIkludGVyZmFjZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgZGVmYXVsdC91c2VyIG9wdGlvbnMgYW5kIGZpbmRzIG5ldyBhdHRyaWJ1dGVzIG9uIGFuIEhUTUwgZWxlbWVudC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdG8gc2VhcmNoIGZvciBuZXcgYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0ge09wdGlvbnN9IHVzZXJPcHRpb25zIEN1c3RvbWl6ZWQgdXNlciBvcHRpb25zIHRvIGNvbXBhcmVcclxuICogQHBhcmFtIHtPcHRpb25zfSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IG9wdGlvbnMgdG8gY29tcGFyZVxyXG4gKiBAcmV0dXJucyB7T3B0aW9uc30gQSBmaW5hbGl6ZWQgT3B0aW9ucyBvYmplY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZShlbGVtZW50OiBIVE1MRWxlbWVudCwgdXNlck9wdGlvbnM6IE9wdGlvbnMsIGRlZmF1bHRPcHRpb25zOiBPcHRpb25zKTogT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmYXVsdE9wdGlvbnMpLnJlZHVjZSgob3B0aW9uczogT3B0aW9ucywga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZXkudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJWYWx1ZSAhPT0gbnVsbCkgb3B0aW9uc1trZXldID0gYXR0clZhbHVlO1xyXG4gICAgICAgIGVsc2UgaWYgKGtleSBpbiB1c2VyT3B0aW9ucykgb3B0aW9uc1trZXldID0gdXNlck9wdGlvbnNba2V5XTtcclxuICAgICAgICBlbHNlIG9wdGlvbnNba2V5XSA9IGRlZmF1bHRPcHRpb25zW2tleV07XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfSwge30pO1xyXG59XHJcbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBPcHRpb25zID0ge1xyXG4gICAgYXR0cmlidXRlTmFtZXM6IHtcclxuICAgICAgICByb290OiAnZGF0YS1mYW50YWZpbHRlcicsXHJcbiAgICAgICAgZ3JvdXA6ICdkYXRhLWZhbnRhZmlsdGVyLWdyb3VwJyxcclxuICAgICAgICBzZWxlY3RvcjogJ2RhdGEtZmFudGFmaWx0ZXItc2VsZWN0b3InLFxyXG4gICAgICAgIGNvbXBhcmVyOiAnZGF0YS1mYW50YWZpbHRlci1jb21wYXJlcicsXHJcbiAgICB9LFxyXG4gICAgY2xhc3NOYW1lczoge1xyXG4gICAgICAgIHBhcmVudDogJ2pzLWZhZmktcGFyZW50JyxcclxuICAgICAgICBpbnB1dDogJ2pzLWZhZmktaW5wdXQnLFxyXG4gICAgICAgIGl0ZW06ICdqcy1mYWZpLWl0ZW0nLFxyXG4gICAgICAgIGluYWN0aXZlOiAnanMtZmFmaS1hY3RpdmUnLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRPcHRpb25zO1xyXG4iLCJpbXBvcnQgeyBGYW50YUZpbHRlciwgT3B0aW9ucywgRmFudGFGaWx0ZXJFbGVtZW50LCBEZXBlbmRlbmNpZXMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbi8vIFZhcmlhYmxlIHRvIHN0b3JlIGFsbCBGYW50YUZpbHRlcnMgaW5zdGFuY2VzXHJcbmNvbnN0IEN1cnJlbnRGaWx0ZXJzOiBGYW50YUZpbHRlcltdID0gW107XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHByb3RvdHlwZSBvYmplY3QgdG8gYmUgcHJvY2Vzc2VkIGJ5IHRoZSBjcmVhdGVGYW50YUZpbHRlciBmYWN0b3J5IGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudE5vZGUgSFRNTCBlbGVtZW50IHBhcmVudCBvZiBmaWx0ZXJhYmxlIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIHRvIGNvbnRyb2wgdGhlIGZpbHRlciBvYmplY3RcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgTmFtZSBvZiBmaWx0ZXJcclxuICogQHBhcmFtIHtGYW50YUZpbHRlckVsZW1lbnRbXX0gW2lucHV0c10gSFRNTCBpbnB1dCBlbGVtZW50cyB0aGF0IGNvbnRyb2wgZmlsdGVyaW5nXHJcbiAqIEBwYXJhbSB7RmFudGFGaWx0ZXJFbGVtZW50W119IFtpdGVtc10gSFRNTCBlbGVtZW50cyB0byBiZSBmaWx0ZXJlZFxyXG4gKiBAcmV0dXJucyB7RmFudGFGaWx0ZXJ9IEEgRmFudGFGaWx0ZXIgb2JqZWN0XHJcbiAqL1xyXG5jb25zdCBwcm90b0ZhbnRhRmlsdGVyID0gKFxyXG4gICAgcGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsXHJcbiAgICBvcHRpb25zOiBPcHRpb25zLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgaW5wdXRzPzogRmFudGFGaWx0ZXJFbGVtZW50W10sXHJcbiAgICBpdGVtcz86IEZhbnRhRmlsdGVyRWxlbWVudFtdLFxyXG4pOiBGYW50YUZpbHRlciA9PiAoe1xyXG4gICAgcGFyZW50Tm9kZSxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBuYW1lLFxyXG4gICAgaW5wdXRzLFxyXG4gICAgaXRlbXMsXHJcbiAgICBnZXQgQ3VycmVudEZpbHRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEN1cnJlbnRGaWx0ZXJzO1xyXG4gICAgfSxcclxuICAgIGdldCBoYXNJbnB1dHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0cyAhPT0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBnZXQgaGFzSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zICE9PSBudWxsO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIHByb3RvRmFudGFGaWx0ZXJcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzIFZhcmlhYmxlcyBwYXNzZWQgaW4gZnJvbSBoaWdoZXIgY29udGV4dFxyXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IHN0cmluZyl9IHRhcmdldCBTdHJpbmcgc2VsZWN0b3IgcmVwcmVzZW50aW5nIGFuIEhUTUwgb2JqZWN0LCBvciB0aGUgb2JqZWN0IGl0c2VsZlxyXG4gKiBAcGFyYW0ge09wdGlvbnN9IFt1c2VyT3B0aW9ucz17fV0gT3B0aW9uYWwgdXNlciBvdmVycmlkZSBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtGYW50YUZpbHRlcn0gQSBjb21wbGV0ZWQgRmFudGFGaWx0ZXIgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGYW50YUZpbHRlcihcclxuICAgIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLFxyXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IHN0cmluZyxcclxuICAgIHVzZXJPcHRpb25zOiBPcHRpb25zID0ge30sXHJcbik6IEZhbnRhRmlsdGVyIHtcclxuICAgIGNvbnN0IHsgY29uZmlndXJlLCBjb250ZXh0LCBkZWZhdWx0T3B0aW9ucywgY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50IH0gPSBkZXBlbmRlbmNpZXM7XHJcbiAgICBjb25zdCBwYXJlbnRzID0gdHlwZW9mIHRhcmdldCA9PT0gYHN0cmluZ2AgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KSA6IHRhcmdldDtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBwYXJlbnQgbm9kZXMsIGNyZWF0ZSBtdWx0aXBsZSBGYW50YUZpbHRlcnMgYW5kIHJldHVybiB0aG9zZSBpbnN0ZWFkXHJcbiAgICBpZiAocGFyZW50cyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgIC5jYWxsKHBhcmVudHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBjcmVhdGVGYW50YUZpbHRlcihkZXBlbmRlbmNpZXMsIGVsZW1lbnQsIHVzZXJPcHRpb25zKSlcclxuICAgICAgICAgICAgLmZpbHRlcigoeDogSFRNTEVsZW1lbnQpID0+IHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzO1xyXG4gICAgbGV0IG9wdGlvbnM6IE9wdGlvbnMgPSBjb25maWd1cmUocGFyZW50LCB1c2VyT3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xyXG5cclxuICAgIC8vIElmIHRoZSBwYXJlbnQgbm9kZSBkb2Vzbid0IGhhdmUgdGhlIHNwZWNpZmllZCBncm91cCBhdHRyaWJ1dGUsIGNhbmNlbCBmYWN0b3J5IGZ1bmN0aW9uXHJcbiAgICBpZiAoIXBhcmVudC5oYXNBdHRyaWJ1dGUob3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5ncm91cCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5hbWUgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0cmlidXRlTmFtZXMuZ3JvdXApO1xyXG4gICAgbGV0IGdyb3VwV2l0aFNhbWVOYW1lID0gQ3VycmVudEZpbHRlcnMuZmluZChmaWx0ZXIgPT4gZmlsdGVyLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgIGNvbnN0IEZhbnRhRmlsdGVyID0gcHJvdG9GYW50YUZpbHRlcihwYXJlbnQsIG9wdGlvbnMsIG5hbWUpO1xyXG5cclxuICAgIGxldCBpbnB1dHMgPSBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQoXHJcbiAgICAgICAgZGVwZW5kZW5jaWVzLFxyXG4gICAgICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgLiR7b3B0aW9ucy5jbGFzc05hbWVzLmlucHV0fVske29wdGlvbnMuYXR0cmlidXRlTmFtZXMuZ3JvdXB9PSR7bmFtZX1dYCksXHJcbiAgICAgICAgRmFudGFGaWx0ZXIsXHJcbiAgICApO1xyXG4gICAgbGV0IGl0ZW1zID0gY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50KFxyXG4gICAgICAgIGRlcGVuZGVuY2llcyxcclxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChgLiR7b3B0aW9ucy5jbGFzc05hbWVzLml0ZW19WyR7b3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5ncm91cH09JHtuYW1lfV1gKSxcclxuICAgICAgICBGYW50YUZpbHRlcixcclxuICAgICk7XHJcblxyXG4gICAgLy8gSWYgYSBGYW50YUZpbHRlciB3aXRoIHRoZSBzYW1lIGZpbHRlciBncm91cCBhbHJlYWR5IGV4aXN0cywgbWVyZ2UgdGhpcyBvbmUncyBpdGVtcyB3aXRoIHRoYXQgb25lIGFuZCB0aGVuIGNhbmNlbCBmYWN0b3J5XHJcbiAgICBpZiAoZ3JvdXBXaXRoU2FtZU5hbWUpIHtcclxuICAgICAgICBncm91cFdpdGhTYW1lTmFtZS5pdGVtcyA9IGdyb3VwV2l0aFNhbWVOYW1lLml0ZW1zLmNvbmNhdChpdGVtcyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIEZhbnRhRmlsdGVyLmlucHV0cyA9IGlucHV0cztcclxuICAgIEZhbnRhRmlsdGVyLml0ZW1zID0gaXRlbXM7XHJcblxyXG4gICAgQ3VycmVudEZpbHRlcnMucHVzaChGYW50YUZpbHRlcik7XHJcblxyXG4gICAgcmV0dXJuIEZhbnRhRmlsdGVyO1xyXG59XHJcbiIsImltcG9ydCB7IEZhbnRhRmlsdGVyLCBGYW50YUZpbHRlckVsZW1lbnQsIE9wdGlvbnMsIEF0dHJpYnV0ZU5hbWVzLCBDbGFzc05hbWVzLCBEZXBlbmRlbmNpZXMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICdVdGlsJztcclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb2JqZWN0IGZyb20gcHJvdG9GYW50YUZpbHRlckVsZW1lbnRcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzIFZhcmlhYmxlcyBwYXNzZWQgaW4gZnJvbSBoaWdoZXIgY29udGV4dFxyXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IEhUTUxDb2xsZWN0aW9uIHwgTm9kZUxpc3QpfSB0YXJnZXRzIEhUTUwgZWxlbWVudChzKSBmcm9tIHdoaWNoIEZhbnRhRmlsdGVyRWxlbWVudChzKSBzaG91bGQgYmUgY3JlYXRlZFxyXG4gKiBAcGFyYW0ge0ZhbnRhRmlsdGVyfSBwYXJlbnRGaWx0ZXIgRmFudGFGaWx0ZXIgb2JqZWN0IGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50XHJcbiAqIEBwYXJhbSB7T3B0aW9uc30gW3VzZXJPcHRpb25zPXt9XSBPcHRpb25hbCB1c2VyIG92ZXJyaWRlIG9wdGlvbnNcclxuICogQHJldHVybnMgQSBGYW50YUZpbHRlckVsZW1lbnQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQoXHJcbiAgICBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyxcclxuICAgIHRhcmdldHM6IEhUTUxFbGVtZW50IHwgSFRNTENvbGxlY3Rpb24gfCBOb2RlTGlzdCxcclxuICAgIHBhcmVudEZpbHRlcjogRmFudGFGaWx0ZXIsXHJcbiAgICB1c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9LFxyXG4pIHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdE9wdGlvbnMgfSA9IGRlcGVuZGVuY2llcztcclxuICAgIGxldCBvcHRpb25zOiBPcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgdXNlck9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh1dGlsLlR5cGVUZXN0cy5Jc05vZGVMaXN0KHRhcmdldHMpIHx8IHV0aWwuVHlwZVRlc3RzLklzSFRNTENvbGxlY3Rpb24odGFyZ2V0cykpIHtcclxuICAgICAgICByZXR1cm4gW10uc2xpY2VcclxuICAgICAgICAgICAgLmNhbGwoQXJyYXkuZnJvbSh0YXJnZXRzKSlcclxuICAgICAgICAgICAgLm1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudChkZXBlbmRlbmNpZXMsIGVsZW1lbnQsIHBhcmVudEZpbHRlciwgdXNlck9wdGlvbnMpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh4OiBIVE1MRWxlbWVudCkgPT4geCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBwYXJlbnRGaWx0ZXI7XHJcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSB0YXJnZXRzO1xyXG4gICAgY29uc3QgYXR0ckRlZmF1bHQ6IEF0dHJpYnV0ZU5hbWVzID0gb3B0aW9ucy5hdHRyaWJ1dGVOYW1lcztcclxuICAgIGNvbnN0IGF0dHJFbGVtZW50ID0gdXRpbC5ET00uY29udmVydEF0dHJpYnV0ZXNUb09iamVjdChlbGVtZW50LmF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xyXG4gICAgY29uc3QgZWxlbWVudEF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKGF0dHJEZWZhdWx0LCBhdHRyRWxlbWVudCk7XHJcblxyXG4gICAgbGV0IG5ld0ZhbnRhRmlsdGVyRWxlbWVudCA9IHByb3RvRmFudGFGaWx0ZXJFbGVtZW50KGVsZW1lbnQsIG5hbWUpO1xyXG4gICAgbmV3RmFudGFGaWx0ZXJFbGVtZW50ID0gT2JqZWN0LmFzc2lnbihuZXdGYW50YUZpbHRlckVsZW1lbnQsIGVsZW1lbnRBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICByZXR1cm4gbmV3RmFudGFGaWx0ZXJFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHByb3RvdHlwZSBvYmplY3QgdG8gYmUgcHJvY2Vzc2VkIGJ5IHRoZSBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQgZmFjdG9yeSBmdW5jdGlvblxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgZnJvbSB3aGljaCBhIEZhbnRhRmlsdGVyRWxlbWVudCB3aWxsIGJlIGNyZWF0ZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwTmFtZSBOYW1lIG9mIGVsZW1lbnQncyBmaWx0ZXIgZ3JvdXBcclxuICogQHJldHVybnMge0ZhbnRhRmlsdGVyRWxlbWVudH0gQSBwcm90b3R5cGUgRmFudGFGaWx0ZXJFbGVtZW50XHJcbiAqL1xyXG5jb25zdCBwcm90b0ZhbnRhRmlsdGVyRWxlbWVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgZ3JvdXBOYW1lOiBzdHJpbmcpOiBGYW50YUZpbHRlckVsZW1lbnQgPT4gKHtcclxuICAgIGdyb3VwTmFtZSxcclxuICAgIGVsZW1lbnQsXHJcbiAgICBzZXQgaGlkZGVuKGlzSGlkZGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgZWxlbWVudC5oaWRkZW4gPSBpc0hpZGRlbjtcclxuICAgIH0sXHJcbiAgICBnZXQgaGlkZGVuKCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmhpZGRlbjtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgY29uZmlndXJlIGZyb20gJy4vY29uZmlndXJlJztcclxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4vZGVmYXVsdC1vcHRpb25zJztcclxuaW1wb3J0IGNyZWF0ZUZhbnRhRmlsdGVyIGZyb20gJy4vZmFudGFGaWx0ZXInO1xyXG5pbXBvcnQgY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50IGZyb20gJy4vZmFudGFGaWx0ZXJFbGVtZW50JztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHNlbGVjdG9yOiBzdHJpbmcsIHVzZXJPcHRpb25zOiBPcHRpb25zLCBjb250ZXh0OiBIVE1MRWxlbWVudCB8IERvY3VtZW50ID0gZG9jdW1lbnQpID0+XHJcbiAgICBjcmVhdGVGYW50YUZpbHRlcih7IGNvbmZpZ3VyZSwgY29udGV4dCwgZGVmYXVsdE9wdGlvbnMsIGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudCB9LCBzZWxlY3RvciwgdXNlck9wdGlvbnMpO1xyXG4iLCJpbXBvcnQgeyBjb252ZXJ0S2ViYWJUb0NhbWVsQ2FzZSB9IGZyb20gJy4vc3RyaW5nJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0ludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgTmFtZWROb2RlTWFwIG9mIGF0dHJpYnV0ZXMgdG8gYW4gb2JqZWN0XHJcbiAqIEBwYXJhbSB7TmFtZWROb2RlTWFwfSBhdHRyaWJ1dGVzIE5hbWVkTm9kZU1hcCB0byBiZSBjb252ZXJ0ZWRcclxuICogQHBhcmFtIHtPcHRpb25zIHwgc3RyaW5nfSBvcHRpb25zIERlZmF1bHQgb3B0aW9ucyBmcm9tIHdoaWNoIHRvIHJldHJpZXZlIHRoZSByb290IGRhdGEgYXR0cmlidXRlIHRlbXBsYXRlLCBvciBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRlbXBsYXRlIGl0c2VsZlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QgPSAoYXR0cmlidXRlczogTmFtZWROb2RlTWFwLCBvcHRpb25zOiBPcHRpb25zIHwgc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByb290ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IG9wdGlvbnMuYXR0cmlidXRlTmFtZXMucm9vdDtcclxuICAgIGNvbnN0IG91dHB1dE9iamVjdDogYW55ID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyaWJ1dGVzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICBpZiAoYXR0ci5tYXRjaChyb290KSkge1xyXG4gICAgICAgICAgICBsZXQgY29udmVydGVkTmFtZSA9IGNvbnZlcnRLZWJhYlRvQ2FtZWxDYXNlKGF0dHIsIHJvb3QgKyAnLScpO1xyXG4gICAgICAgICAgICBvdXRwdXRPYmplY3RbY29udmVydGVkTmFtZV0gPSBhdHRyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRPYmplY3Q7XHJcbn07IiwiaW1wb3J0ICogYXMgU3RyaW5nIGZyb20gJy4vc3RyaW5nJztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcclxuaW1wb3J0ICogYXMgVHlwZVRlc3RzIGZyb20gJy4vdHlwZXRlc3RzJztcclxuXHJcbmV4cG9ydCB7U3RyaW5nLCBET00sIFR5cGVUZXN0c307IiwiLyoqXHJcbiAqIENvbnZlcnRzIGEgS2ViYWJDYXNlIHN0cmluZyB0byBDYW1lbENhc2UgYW5kIHJldHVybnMgaXRcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgS2ViYWJDYXNlIHN0cmluZyB0byBiZSBjb252ZXJ0ZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IFtyb290PScnXSBSb290IHRlcm0gdG8gYmUgbWF0Y2hlZC9yZW1vdmVkXHJcbiAqIEByZXR1cm5zIEEgQ2FtZWxDYXNlIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRLZWJhYlRvQ2FtZWxDYXNlKGlucHV0OiBzdHJpbmcsIHJvb3Q6IHN0cmluZyA9ICcnKSB7XHJcbiAgICByb290ID0gcm9vdC5sZW5ndGggPiAwID8gcm9vdCArICd8JyA6IHJvb3Q7XHJcbiAgICBsZXQgcmVwbGFjZSA9ICcoPzooPzonICsgcm9vdCArICcoPzwhXFxcXHYpKD86IHwtKShbYS16XSkpKSc7XHJcbiAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHJlcGxhY2UsICdnJyk7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShyZWdleCwgKG1hdGNoLCBwMSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgcDEgIT09ICd1bmRlZmluZWQnID8gcDEudG9VcHBlckNhc2UoKSA6ICcnO1xyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gSXNFbGVtZW50KHRvQmVEZXRlcm1pbmVkOiBhbnkpOiB0b0JlRGV0ZXJtaW5lZCBpcyBFbGVtZW50IHtcclxuICAgIGlmICh0b0JlRGV0ZXJtaW5lZCAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJc0hUTUxDb2xsZWN0aW9uKHRvQmVEZXRlcm1pbmVkOiBhbnkpOiB0b0JlRGV0ZXJtaW5lZCBpcyBIVE1MQ29sbGVjdGlvbiB7XHJcbiAgICBpZiAodG9CZURldGVybWluZWQgIT09IG51bGwpIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNOb2RlTGlzdCh0b0JlRGV0ZXJtaW5lZDogYW55KTogdG9CZURldGVybWluZWQgaXMgTm9kZUxpc3Qge1xyXG4gICAgaWYgKHRvQmVEZXRlcm1pbmVkICE9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9