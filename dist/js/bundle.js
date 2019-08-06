(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FantaFilter", [], factory);
	else if(typeof exports === 'object')
		exports["FantaFilter"] = factory();
	else
		root["FantaFilter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/ts/fantaFilterElement.ts":
/*!**************************************!*\
  !*** ./src/ts/fantaFilterElement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./lib/util/index */ "./src/ts/lib/util/index.ts");
/**
 * @description Creates a prototype object to be processed by the createFantaFilterElement factory function
 * @param {HTMLElement} element Element from which a FantaFilterElement will be created
 * @param {string} groupName Name of element's filter group
 * @param {Options} options Options object containing CSS class names
 * @returns {FantaFilterElement} A prototype FantaFilterElement
 */
var protoFantaFilterElement = function (element, groupName, options) { return ({
    groupName: groupName,
    element: element,
    tagName: element.tagName,
    set hidden(isHidden) {
        element.classList.toggle(options.classNames.hidden, isHidden);
    },
    get hidden() {
        return element.classList.contains(options.classNames.hidden);
    },
    get isInput() {
        return options.inputTypes.map(function (item) { return item.toUpperCase(); }).includes(element.tagName);
    },
}); };
/**
 * @description Creates a FantaFilterInput prototype from a FantaFilterElement
 * @param {FantaFilterElement} fantaFilterElement FantaFilterElement from which to create a FantaFilterInput
 * @returns An object that can be merged with a FantaFilterElement to create a FantaFilterInput
 */
var protoFantaFilterInput = function (fantaFilterElement, options) {
    var protoFantaFilterInputData = {
        type: fantaFilterElement.element.getAttribute('type'),
        selector: fantaFilterElement.element.getAttribute(options.attributeNames.selector),
        comparer: fantaFilterElement.element.getAttribute(options.attributeNames.comparer),
    };
    return Object.assign(fantaFilterElement, protoFantaFilterInputData);
};
var addUpdateEvent = function (fantaFilterInput, triggerEvent, updateEvent) {
    fantaFilterInput.element.addEventListener(triggerEvent, function (e) { return e.target.dispatchEvent(updateEvent); });
    return fantaFilterInput;
};
/**
 * Factory method that creates and returns an object from protoFantaFilterElement
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | HTMLCollection | NodeList)} targets HTML element(s) from which FantaFilterElement(s) should be created
 * @param {FantaFilterWrapper} parentFilter FantaFilterWrapper object containing this element
 * @param {Options} [userOptions={}] Optional user override options
 * @returns A FantaFilterElement object
 */
function createFantaFilterElement(dependencies, targets, parentFilter, userOptions) {
    if (userOptions === void 0) { userOptions = {}; }
    // if targets is actually a collection of elements, recursively call this function on each of its elements
    if (index_1.TypeTests.isNodeList(targets)) {
        return [].slice
            .call(Array.from(targets))
            .map(function (element) { return createFantaFilterElement(dependencies, element, parentFilter, userOptions); })
            .filter(function (x) { return x; });
    }
    var defaultOptions = dependencies.defaultOptions;
    if (dependencies.window !== undefined)
        CustomEvent = dependencies.window.CustomEvent;
    var name = parentFilter.name;
    var options = Object.assign(defaultOptions, userOptions);
    var elementAttributes = Object.assign(options.attributeNames, index_1.DOM.convertAttributesToObject(targets.attributes, options));
    var newFantaFilterElement = protoFantaFilterElement(targets, name, options);
    var output;
    if (newFantaFilterElement.isInput) {
        var newFantaFilterInput_1 = protoFantaFilterInput(newFantaFilterElement, options);
        var updateEvent = new CustomEvent("fafi.filter." + newFantaFilterInput_1.groupName + ".update", {
            bubbles: true,
            detail: {
                sender: newFantaFilterInput_1,
                value: function () { return newFantaFilterInput_1.element.value; },
            },
        });
        newFantaFilterElement = addUpdateEvent(newFantaFilterInput_1, 'input', updateEvent);
    }
    output = Object.assign(newFantaFilterElement, elementAttributes);
    return output;
}
exports.default = createFantaFilterElement;


/***/ }),

/***/ "./src/ts/fantaFilterWrapper.ts":
/*!**************************************!*\
  !*** ./src/ts/fantaFilterWrapper.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./lib/util/index */ "./src/ts/lib/util/index.ts");
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
 * @returns A FantaFilterWrapper object
 */
var protoFantaFilterWrapper = function (parentNode, options, name, inputs, items) { return ({
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
 * Factory method that creates and returns an object from protoFantaFilterWrapper
 *
 * @export
 * @param {Dependencies} dependencies Variables passed in from higher context
 * @param {(HTMLElement | string)} target String selector representing an HTML object, or the object itself
 * @param {Options} [userOptions={}] Optional user override options
 * @param {FantaFilterWrapper[]} fantaFilterCollector Optional variable to store all current instances of fantaFilter. Defaults to CurrentFilters
 * @returns A completed FantaFilterWrapper object
 */
function createFantaFilterWrapper(dependencies, target, userOptions, fantaFilterCollector) {
    if (userOptions === void 0) { userOptions = {}; }
    if (fantaFilterCollector === void 0) { fantaFilterCollector = CurrentFilters; }
    var configure = dependencies.configure, context = dependencies.context, defaultOptions = dependencies.defaultOptions, createFantaFilterElement = dependencies.createFantaFilterElement;
    var parents = typeof target === "string" ? context.querySelectorAll(target) : target;
    // If multiple parent nodes, create multiple FantaFilterWrappers and return those instead
    if (index_1.TypeTests.isNodeList(parents)) {
        return [].slice
            .call(parents)
            .map(function (element) { return createFantaFilterWrapper(dependencies, element, userOptions); })
            .filter(function (x) { return x; });
    }
    var options = configure(parents, userOptions, defaultOptions);
    var name = parents.getAttribute(options.attributeNames.group);
    // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
    if (!parents.hasAttribute(options.attributeNames.group) || fantaFilterCollector.find(function (filter) { return filter.name === name; }))
        return;
    var FantaFilterWrapper = protoFantaFilterWrapper(parents, options, name);
    var elements = createFantaFilterElement(dependencies, context.querySelectorAll("[" + options.attributeNames.group + "=" + name + "]"), FantaFilterWrapper);
    FantaFilterWrapper.inputs = elements.filter(function (element) { return element.isInput; });
    FantaFilterWrapper.items = elements.filter(function (element) { return !element.isInput; });
    fantaFilterCollector.push(FantaFilterWrapper);
    return FantaFilterWrapper;
}
exports.default = createFantaFilterWrapper;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! Util */ "./src/ts/lib/util/index.ts");
var fantaFilterWrapper_1 = __webpack_require__(/*! ./fantaFilterWrapper */ "./src/ts/fantaFilterWrapper.ts");
var fantaFilterElement_1 = __webpack_require__(/*! ./fantaFilterElement */ "./src/ts/fantaFilterElement.ts");
exports.default = (function (selector, userOptions, context) {
    if (context === void 0) { context = document; }
    return fantaFilterWrapper_1.default({ configure: Util_1.Configure, context: context, defaultOptions: Util_1.DefaultOptions, createFantaFilterElement: fantaFilterElement_1.default }, selector, userOptions);
});


/***/ }),

/***/ "./src/ts/lib/util/configure.ts":
/*!**************************************!*\
  !*** ./src/ts/lib/util/configure.ts ***!
  \**************************************/
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

/***/ "./src/ts/lib/util/default-options.ts":
/*!********************************************!*\
  !*** ./src/ts/lib/util/default-options.ts ***!
  \********************************************/
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
        hidden: 'js-fafi-hidden',
    },
    inputTypes: [
        "input"
    ]
};
exports.default = defaultOptions;


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
 * @description Converts a NamedNodeMap of attributes to an object
 *
 * @param {NamedNodeMap} attributes NamedNodeMap to be converted
 * @param {Options | string} options Default options from which to retrieve the root data attribute template, or a string representing the template itself
 * @returns An object created from the NamedNodeMap
 */
exports.convertAttributesToObject = function (attributes, options) {
    var root = typeof options === 'string' ? options : options.attributeNames.root;
    var outputObject = new Map();
    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes.item(i).name;
        if (attr.match(root)) {
            var convertedName = string_1.convertKebabToCamelCase(attr, root + '-');
            outputObject.set(convertedName, attributes.item(i).value);
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
var configure_1 = __webpack_require__(/*! ./configure */ "./src/ts/lib/util/configure.ts");
exports.Configure = configure_1.default;
var default_options_1 = __webpack_require__(/*! ./default-options */ "./src/ts/lib/util/default-options.ts");
exports.DefaultOptions = default_options_1.default;


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
    var replace = '(?:(?:' + root + '(?:\\v{0})(?: |-)([a-z])))';
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
function isNodeList(nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);
    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
}
exports.isNodeList = isNodeList;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYW50YUZpbHRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvZmFudGFGaWx0ZXJFbGVtZW50LnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2ZhbnRhRmlsdGVyV3JhcHBlci50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9jb25maWd1cmUudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2xpYi91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvdHlwZXRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtB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ZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJGYW50YUZpbHRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGYW50YUZpbHRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGYW50YUZpbHRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBGYW50YUZpbHRlcldyYXBwZXIsIEZhbnRhRmlsdGVyRWxlbWVudCwgRmFudGFGaWx0ZXJJbnB1dCwgT3B0aW9ucywgRGVwZW5kZW5jaWVzIH0gZnJvbSAnSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFR5cGVUZXN0cywgRE9NIH0gZnJvbSAnLi9saWIvdXRpbC9pbmRleCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBwcm90b3R5cGUgb2JqZWN0IHRvIGJlIHByb2Nlc3NlZCBieSB0aGUgY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50IGZhY3RvcnkgZnVuY3Rpb25cclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBFbGVtZW50IGZyb20gd2hpY2ggYSBGYW50YUZpbHRlckVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBncm91cE5hbWUgTmFtZSBvZiBlbGVtZW50J3MgZmlsdGVyIGdyb3VwXHJcbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIG9iamVjdCBjb250YWluaW5nIENTUyBjbGFzcyBuYW1lc1xyXG4gKiBAcmV0dXJucyB7RmFudGFGaWx0ZXJFbGVtZW50fSBBIHByb3RvdHlwZSBGYW50YUZpbHRlckVsZW1lbnRcclxuICovXHJcbmNvbnN0IHByb3RvRmFudGFGaWx0ZXJFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBncm91cE5hbWU6IHN0cmluZywgb3B0aW9uczogT3B0aW9ucyk6IEZhbnRhRmlsdGVyRWxlbWVudCA9PiAoe1xyXG4gICAgZ3JvdXBOYW1lLFxyXG4gICAgZWxlbWVudCxcclxuICAgIHRhZ05hbWU6IGVsZW1lbnQudGFnTmFtZSxcclxuICAgIHNldCBoaWRkZW4oaXNIaWRkZW46IGJvb2xlYW4pIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUob3B0aW9ucy5jbGFzc05hbWVzLmhpZGRlbiwgaXNIaWRkZW4pO1xyXG4gICAgfSxcclxuICAgIGdldCBoaWRkZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMuY2xhc3NOYW1lcy5oaWRkZW4pO1xyXG4gICAgfSxcclxuICAgIGdldCBpc0lucHV0KCkge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zLmlucHV0VHlwZXMubWFwKGl0ZW0gPT4gaXRlbS50b1VwcGVyQ2FzZSgpKS5pbmNsdWRlcyhlbGVtZW50LnRhZ05hbWUpO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgYSBGYW50YUZpbHRlcklucHV0IHByb3RvdHlwZSBmcm9tIGEgRmFudGFGaWx0ZXJFbGVtZW50XHJcbiAqIEBwYXJhbSB7RmFudGFGaWx0ZXJFbGVtZW50fSBmYW50YUZpbHRlckVsZW1lbnQgRmFudGFGaWx0ZXJFbGVtZW50IGZyb20gd2hpY2ggdG8gY3JlYXRlIGEgRmFudGFGaWx0ZXJJbnB1dFxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgdGhhdCBjYW4gYmUgbWVyZ2VkIHdpdGggYSBGYW50YUZpbHRlckVsZW1lbnQgdG8gY3JlYXRlIGEgRmFudGFGaWx0ZXJJbnB1dFxyXG4gKi9cclxuY29uc3QgcHJvdG9GYW50YUZpbHRlcklucHV0ID0gKGZhbnRhRmlsdGVyRWxlbWVudDogRmFudGFGaWx0ZXJFbGVtZW50LCBvcHRpb25zOiBPcHRpb25zKTogRmFudGFGaWx0ZXJJbnB1dCA9PiB7XHJcbiAgICBsZXQgcHJvdG9GYW50YUZpbHRlcklucHV0RGF0YSA9IHtcclxuICAgICAgICB0eXBlOiBmYW50YUZpbHRlckVsZW1lbnQuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSxcclxuICAgICAgICBzZWxlY3RvcjogZmFudGFGaWx0ZXJFbGVtZW50LmVsZW1lbnQuZ2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0cmlidXRlTmFtZXMuc2VsZWN0b3IpLFxyXG4gICAgICAgIGNvbXBhcmVyOiBmYW50YUZpbHRlckVsZW1lbnQuZWxlbWVudC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5jb21wYXJlciksXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZmFudGFGaWx0ZXJFbGVtZW50LCBwcm90b0ZhbnRhRmlsdGVySW5wdXREYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZFVwZGF0ZUV2ZW50ID0gKGZhbnRhRmlsdGVySW5wdXQ6IEZhbnRhRmlsdGVySW5wdXQsIHRyaWdnZXJFdmVudDogc3RyaW5nLCB1cGRhdGVFdmVudDogQ3VzdG9tRXZlbnQpID0+IHtcclxuICAgIGZhbnRhRmlsdGVySW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRyaWdnZXJFdmVudCwgZSA9PiBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KHVwZGF0ZUV2ZW50KSk7XHJcbiAgICByZXR1cm4gZmFudGFGaWx0ZXJJbnB1dDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb2JqZWN0IGZyb20gcHJvdG9GYW50YUZpbHRlckVsZW1lbnRcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzIFZhcmlhYmxlcyBwYXNzZWQgaW4gZnJvbSBoaWdoZXIgY29udGV4dFxyXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IEhUTUxDb2xsZWN0aW9uIHwgTm9kZUxpc3QpfSB0YXJnZXRzIEhUTUwgZWxlbWVudChzKSBmcm9tIHdoaWNoIEZhbnRhRmlsdGVyRWxlbWVudChzKSBzaG91bGQgYmUgY3JlYXRlZFxyXG4gKiBAcGFyYW0ge0ZhbnRhRmlsdGVyV3JhcHBlcn0gcGFyZW50RmlsdGVyIEZhbnRhRmlsdGVyV3JhcHBlciBvYmplY3QgY29udGFpbmluZyB0aGlzIGVsZW1lbnRcclxuICogQHBhcmFtIHtPcHRpb25zfSBbdXNlck9wdGlvbnM9e31dIE9wdGlvbmFsIHVzZXIgb3ZlcnJpZGUgb3B0aW9uc1xyXG4gKiBAcmV0dXJucyBBIEZhbnRhRmlsdGVyRWxlbWVudCBvYmplY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudChcclxuICAgIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLFxyXG4gICAgdGFyZ2V0czogSFRNTEVsZW1lbnQgfCBIVE1MQ29sbGVjdGlvbiB8IE5vZGVMaXN0LFxyXG4gICAgcGFyZW50RmlsdGVyOiBGYW50YUZpbHRlcldyYXBwZXIsXHJcbiAgICB1c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9LFxyXG4pIHtcclxuICAgIC8vIGlmIHRhcmdldHMgaXMgYWN0dWFsbHkgYSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzLCByZWN1cnNpdmVseSBjYWxsIHRoaXMgZnVuY3Rpb24gb24gZWFjaCBvZiBpdHMgZWxlbWVudHNcclxuICAgIGlmIChUeXBlVGVzdHMuaXNOb2RlTGlzdCh0YXJnZXRzKSkge1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZVxyXG4gICAgICAgICAgICAuY2FsbChBcnJheS5mcm9tKHRhcmdldHMpKVxyXG4gICAgICAgICAgICAubWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50KGRlcGVuZGVuY2llcywgZWxlbWVudCwgcGFyZW50RmlsdGVyLCB1c2VyT3B0aW9ucykpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHg6IEhUTUxFbGVtZW50KSA9PiB4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRlZmF1bHRPcHRpb25zIH0gPSBkZXBlbmRlbmNpZXM7XHJcbiAgICBpZihkZXBlbmRlbmNpZXMud2luZG93ICE9PSB1bmRlZmluZWQpIEN1c3RvbUV2ZW50ID0gZGVwZW5kZW5jaWVzLndpbmRvdy5DdXN0b21FdmVudFxyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBwYXJlbnRGaWx0ZXI7XHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgdXNlck9wdGlvbnMpO1xyXG4gICAgY29uc3QgZWxlbWVudEF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIG9wdGlvbnMuYXR0cmlidXRlTmFtZXMsXHJcbiAgICAgICAgRE9NLmNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QodGFyZ2V0cy5hdHRyaWJ1dGVzLCBvcHRpb25zKSxcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG5ld0ZhbnRhRmlsdGVyRWxlbWVudCA9IHByb3RvRmFudGFGaWx0ZXJFbGVtZW50KHRhcmdldHMsIG5hbWUsIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBvdXRwdXQ7XHJcbiAgICBpZiAobmV3RmFudGFGaWx0ZXJFbGVtZW50LmlzSW5wdXQpIHtcclxuICAgICAgICBsZXQgbmV3RmFudGFGaWx0ZXJJbnB1dCA9IHByb3RvRmFudGFGaWx0ZXJJbnB1dChuZXdGYW50YUZpbHRlckVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGxldCB1cGRhdGVFdmVudCA9IG5ldyBDdXN0b21FdmVudChgZmFmaS5maWx0ZXIuJHtuZXdGYW50YUZpbHRlcklucHV0Lmdyb3VwTmFtZX0udXBkYXRlYCwge1xyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHNlbmRlcjogbmV3RmFudGFGaWx0ZXJJbnB1dCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoKSA9PiAobmV3RmFudGFGaWx0ZXJJbnB1dC5lbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZXdGYW50YUZpbHRlckVsZW1lbnQgPSBhZGRVcGRhdGVFdmVudChuZXdGYW50YUZpbHRlcklucHV0LCAnaW5wdXQnLCB1cGRhdGVFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbihuZXdGYW50YUZpbHRlckVsZW1lbnQsIGVsZW1lbnRBdHRyaWJ1dGVzKTtcclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbiIsImltcG9ydCB7IEZhbnRhRmlsdGVyV3JhcHBlciwgT3B0aW9ucywgRmFudGFGaWx0ZXJFbGVtZW50LCBEZXBlbmRlbmNpZXMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgVHlwZVRlc3RzIH0gZnJvbSAnLi9saWIvdXRpbC9pbmRleCc7XHJcblxyXG4vLyBWYXJpYWJsZSB0byBzdG9yZSBhbGwgRmFudGFGaWx0ZXJzIGluc3RhbmNlc1xyXG5jb25zdCBDdXJyZW50RmlsdGVyczogRmFudGFGaWx0ZXJXcmFwcGVyW10gPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcHJvdG90eXBlIG9iamVjdCB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIGNyZWF0ZUZhbnRhRmlsdGVyIGZhY3RvcnkgZnVuY3Rpb25cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50Tm9kZSBIVE1MIGVsZW1lbnQgcGFyZW50IG9mIGZpbHRlcmFibGUgZWxlbWVudHNcclxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgdG8gY29udHJvbCB0aGUgZmlsdGVyIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIGZpbHRlclxyXG4gKiBAcGFyYW0ge0ZhbnRhRmlsdGVyRWxlbWVudFtdfSBbaW5wdXRzXSBIVE1MIGlucHV0IGVsZW1lbnRzIHRoYXQgY29udHJvbCBmaWx0ZXJpbmdcclxuICogQHBhcmFtIHtGYW50YUZpbHRlckVsZW1lbnRbXX0gW2l0ZW1zXSBIVE1MIGVsZW1lbnRzIHRvIGJlIGZpbHRlcmVkXHJcbiAqIEByZXR1cm5zIEEgRmFudGFGaWx0ZXJXcmFwcGVyIG9iamVjdFxyXG4gKi9cclxuY29uc3QgcHJvdG9GYW50YUZpbHRlcldyYXBwZXIgPSAoXHJcbiAgICBwYXJlbnROb2RlOiBIVE1MRWxlbWVudCxcclxuICAgIG9wdGlvbnM6IE9wdGlvbnMsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBpbnB1dHM/OiBGYW50YUZpbHRlckVsZW1lbnRbXSxcclxuICAgIGl0ZW1zPzogRmFudGFGaWx0ZXJFbGVtZW50W10sXHJcbik6IEZhbnRhRmlsdGVyV3JhcHBlciA9PiAoe1xyXG4gICAgcGFyZW50Tm9kZSxcclxuICAgIG9wdGlvbnMsXHJcbiAgICBuYW1lLFxyXG4gICAgaW5wdXRzLFxyXG4gICAgaXRlbXMsXHJcbiAgICBnZXQgQ3VycmVudEZpbHRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEN1cnJlbnRGaWx0ZXJzO1xyXG4gICAgfSxcclxuICAgIGdldCBoYXNJbnB1dHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0cyAhPT0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBnZXQgaGFzSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zICE9PSBudWxsO1xyXG4gICAgfSxcclxufSk7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIHByb3RvRmFudGFGaWx0ZXJXcmFwcGVyXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llcyBWYXJpYWJsZXMgcGFzc2VkIGluIGZyb20gaGlnaGVyIGNvbnRleHRcclxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnQgfCBzdHJpbmcpfSB0YXJnZXQgU3RyaW5nIHNlbGVjdG9yIHJlcHJlc2VudGluZyBhbiBIVE1MIG9iamVjdCwgb3IgdGhlIG9iamVjdCBpdHNlbGZcclxuICogQHBhcmFtIHtPcHRpb25zfSBbdXNlck9wdGlvbnM9e31dIE9wdGlvbmFsIHVzZXIgb3ZlcnJpZGUgb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0ZhbnRhRmlsdGVyV3JhcHBlcltdfSBmYW50YUZpbHRlckNvbGxlY3RvciBPcHRpb25hbCB2YXJpYWJsZSB0byBzdG9yZSBhbGwgY3VycmVudCBpbnN0YW5jZXMgb2YgZmFudGFGaWx0ZXIuIERlZmF1bHRzIHRvIEN1cnJlbnRGaWx0ZXJzXHJcbiAqIEByZXR1cm5zIEEgY29tcGxldGVkIEZhbnRhRmlsdGVyV3JhcHBlciBvYmplY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZhbnRhRmlsdGVyV3JhcHBlcihcclxuICAgIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLFxyXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IHN0cmluZyxcclxuICAgIHVzZXJPcHRpb25zOiBPcHRpb25zID0ge30sXHJcbiAgICBmYW50YUZpbHRlckNvbGxlY3RvcjogRmFudGFGaWx0ZXJXcmFwcGVyW10gPSBDdXJyZW50RmlsdGVycyxcclxuKTogRmFudGFGaWx0ZXJXcmFwcGVyIHtcclxuICAgIGNvbnN0IHsgY29uZmlndXJlLCBjb250ZXh0LCBkZWZhdWx0T3B0aW9ucywgY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50IH0gPSBkZXBlbmRlbmNpZXM7XHJcbiAgICBjb25zdCBwYXJlbnRzID0gdHlwZW9mIHRhcmdldCA9PT0gYHN0cmluZ2AgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KSA6IHRhcmdldDtcclxuXHJcbiAgICAvLyBJZiBtdWx0aXBsZSBwYXJlbnQgbm9kZXMsIGNyZWF0ZSBtdWx0aXBsZSBGYW50YUZpbHRlcldyYXBwZXJzIGFuZCByZXR1cm4gdGhvc2UgaW5zdGVhZFxyXG4gICAgaWYgKFR5cGVUZXN0cy5pc05vZGVMaXN0KHBhcmVudHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgIC5jYWxsKHBhcmVudHMpXHJcbiAgICAgICAgICAgIC5tYXAoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBjcmVhdGVGYW50YUZpbHRlcldyYXBwZXIoZGVwZW5kZW5jaWVzLCBlbGVtZW50LCB1c2VyT3B0aW9ucykpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHg6IEhUTUxFbGVtZW50KSA9PiB4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBPcHRpb25zID0gY29uZmlndXJlKHBhcmVudHMsIHVzZXJPcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICBjb25zdCBuYW1lID0gcGFyZW50cy5nZXRBdHRyaWJ1dGUob3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5ncm91cCk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHBhcmVudCBub2RlIGRvZXNuJ3QgaGF2ZSB0aGUgc3BlY2lmaWVkIGdyb3VwIGF0dHJpYnV0ZSBvciBhIGZpbHRlciB3aXRoIHRoZSBzcGVjaWZpZWQgZ3JvdXAgYWxyZWFkeSBleGlzdHMsIGNhbmNlbCBmYWN0b3J5IGZ1bmN0aW9uXHJcbiAgICBpZiAoIXBhcmVudHMuaGFzQXR0cmlidXRlKG9wdGlvbnMuYXR0cmlidXRlTmFtZXMuZ3JvdXApIHx8IGZhbnRhRmlsdGVyQ29sbGVjdG9yLmZpbmQoZmlsdGVyID0+IGZpbHRlci5uYW1lID09PSBuYW1lKSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBGYW50YUZpbHRlcldyYXBwZXIgPSBwcm90b0ZhbnRhRmlsdGVyV3JhcHBlcihwYXJlbnRzLCBvcHRpb25zLCBuYW1lKTtcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQoXHJcbiAgICAgICAgZGVwZW5kZW5jaWVzLFxyXG4gICAgICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgWyR7b3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5ncm91cH09JHtuYW1lfV1gKSxcclxuICAgICAgICBGYW50YUZpbHRlcldyYXBwZXIsXHJcbiAgICApO1xyXG5cclxuICAgIEZhbnRhRmlsdGVyV3JhcHBlci5pbnB1dHMgPSBlbGVtZW50cy5maWx0ZXIoKGVsZW1lbnQ6IEZhbnRhRmlsdGVyRWxlbWVudCkgPT4gZWxlbWVudC5pc0lucHV0KTtcclxuICAgIEZhbnRhRmlsdGVyV3JhcHBlci5pdGVtcyA9IGVsZW1lbnRzLmZpbHRlcigoZWxlbWVudDogRmFudGFGaWx0ZXJFbGVtZW50KSA9PiAhZWxlbWVudC5pc0lucHV0KTtcclxuXHJcbiAgICBmYW50YUZpbHRlckNvbGxlY3Rvci5wdXNoKEZhbnRhRmlsdGVyV3JhcHBlcik7XHJcblxyXG4gICAgcmV0dXJuIEZhbnRhRmlsdGVyV3JhcHBlcjtcclxufVxyXG4iLCJpbXBvcnQge0NvbmZpZ3VyZSBhcyBjb25maWd1cmUsIERlZmF1bHRPcHRpb25zIGFzIGRlZmF1bHRPcHRpb25zfSBmcm9tICdVdGlsJztcclxuaW1wb3J0IGNyZWF0ZUZhbnRhRmlsdGVyV3JhcHBlciBmcm9tICcuL2ZhbnRhRmlsdGVyV3JhcHBlcic7XHJcbmltcG9ydCBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQgZnJvbSAnLi9mYW50YUZpbHRlckVsZW1lbnQnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnSW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc2VsZWN0b3I6IHN0cmluZywgdXNlck9wdGlvbnM6IE9wdGlvbnMsIGNvbnRleHQ6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQgPSBkb2N1bWVudCkgPT5cclxuICAgIGNyZWF0ZUZhbnRhRmlsdGVyV3JhcHBlcih7IGNvbmZpZ3VyZSwgY29udGV4dCwgZGVmYXVsdE9wdGlvbnMsIGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudCB9LCBzZWxlY3RvciwgdXNlck9wdGlvbnMpO1xyXG4iLCJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSBcIkludGVyZmFjZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgZGVmYXVsdC91c2VyIG9wdGlvbnMgYW5kIGZpbmRzIG5ldyBhdHRyaWJ1dGVzIG9uIGFuIEhUTUwgZWxlbWVudC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdG8gc2VhcmNoIGZvciBuZXcgYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0ge09wdGlvbnN9IHVzZXJPcHRpb25zIEN1c3RvbWl6ZWQgdXNlciBvcHRpb25zIHRvIGNvbXBhcmVcclxuICogQHBhcmFtIHtPcHRpb25zfSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IG9wdGlvbnMgdG8gY29tcGFyZVxyXG4gKiBAcmV0dXJucyB7T3B0aW9uc30gQSBmaW5hbGl6ZWQgT3B0aW9ucyBvYmplY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZShlbGVtZW50OiBIVE1MRWxlbWVudCwgdXNlck9wdGlvbnM6IE9wdGlvbnMsIGRlZmF1bHRPcHRpb25zOiBPcHRpb25zKTogT3B0aW9ucyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmYXVsdE9wdGlvbnMpLnJlZHVjZSgob3B0aW9uczogT3B0aW9ucywga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtrZXkudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICAgICAgaWYgKGF0dHJWYWx1ZSAhPT0gbnVsbCkgb3B0aW9uc1trZXldID0gYXR0clZhbHVlO1xyXG4gICAgICAgIGVsc2UgaWYgKGtleSBpbiB1c2VyT3B0aW9ucykgb3B0aW9uc1trZXldID0gdXNlck9wdGlvbnNba2V5XTtcclxuICAgICAgICBlbHNlIG9wdGlvbnNba2V5XSA9IGRlZmF1bHRPcHRpb25zW2tleV07XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfSwge30pO1xyXG59XHJcbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBPcHRpb25zID0ge1xyXG4gICAgYXR0cmlidXRlTmFtZXM6IHtcclxuICAgICAgICByb290OiAnZGF0YS1mYW50YWZpbHRlcicsXHJcbiAgICAgICAgZ3JvdXA6ICdkYXRhLWZhbnRhZmlsdGVyLWdyb3VwJyxcclxuICAgICAgICBzZWxlY3RvcjogJ2RhdGEtZmFudGFmaWx0ZXItc2VsZWN0b3InLFxyXG4gICAgICAgIGNvbXBhcmVyOiAnZGF0YS1mYW50YWZpbHRlci1jb21wYXJlcicsXHJcbiAgICB9LFxyXG4gICAgY2xhc3NOYW1lczoge1xyXG4gICAgICAgIHBhcmVudDogJ2pzLWZhZmktcGFyZW50JyxcclxuICAgICAgICBpbnB1dDogJ2pzLWZhZmktaW5wdXQnLFxyXG4gICAgICAgIGl0ZW06ICdqcy1mYWZpLWl0ZW0nLFxyXG4gICAgICAgIGhpZGRlbjogJ2pzLWZhZmktaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dFR5cGVzOiBbXHJcbiAgICAgICAgXCJpbnB1dFwiXHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0T3B0aW9ucztcclxuIiwiaW1wb3J0IHsgY29udmVydEtlYmFiVG9DYW1lbENhc2UgfSBmcm9tICcuL3N0cmluZyc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgYSBOYW1lZE5vZGVNYXAgb2YgYXR0cmlidXRlcyB0byBhbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtOYW1lZE5vZGVNYXB9IGF0dHJpYnV0ZXMgTmFtZWROb2RlTWFwIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBzdHJpbmd9IG9wdGlvbnMgRGVmYXVsdCBvcHRpb25zIGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvb3QgZGF0YSBhdHRyaWJ1dGUgdGVtcGxhdGUsIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdGVtcGxhdGUgaXRzZWxmXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIE5hbWVkTm9kZU1hcFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QgPSAoYXR0cmlidXRlczogTmFtZWROb2RlTWFwLCBvcHRpb25zOiBPcHRpb25zIHwgc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByb290ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IG9wdGlvbnMuYXR0cmlidXRlTmFtZXMucm9vdDtcclxuICAgIGxldCBvdXRwdXRPYmplY3QgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyaWJ1dGVzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICBpZiAoYXR0ci5tYXRjaChyb290KSkge1xyXG4gICAgICAgICAgICBsZXQgY29udmVydGVkTmFtZSA9IGNvbnZlcnRLZWJhYlRvQ2FtZWxDYXNlKGF0dHIsIHJvb3QgKyAnLScpO1xyXG4gICAgICAgICAgICBvdXRwdXRPYmplY3Quc2V0KGNvbnZlcnRlZE5hbWUsIGF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dE9iamVjdDtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgU3RyaW5nIGZyb20gJy4vc3RyaW5nJztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcclxuaW1wb3J0ICogYXMgVHlwZVRlc3RzIGZyb20gJy4vdHlwZXRlc3RzJztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIENvbmZpZ3VyZX0gZnJvbSAnLi9jb25maWd1cmUnO1xyXG5pbXBvcnQge2RlZmF1bHQgYXMgRGVmYXVsdE9wdGlvbnN9IGZyb20gJy4vZGVmYXVsdC1vcHRpb25zJ1xyXG5cclxuZXhwb3J0IHtTdHJpbmcsIERPTSwgVHlwZVRlc3RzLCBDb25maWd1cmUsIERlZmF1bHRPcHRpb25zfTsiLCIvKipcclxuICogQ29udmVydHMgYSBLZWJhYkNhc2Ugc3RyaW5nIHRvIENhbWVsQ2FzZSBhbmQgcmV0dXJucyBpdFxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBLZWJhYkNhc2Ugc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Jvb3Q9JyddIFJvb3QgdGVybSB0byBiZSBtYXRjaGVkL3JlbW92ZWRcclxuICogQHJldHVybnMgQSBDYW1lbENhc2Ugc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEtlYmFiVG9DYW1lbENhc2UoaW5wdXQ6IHN0cmluZywgcm9vdDogc3RyaW5nID0gJycpIHtcclxuICAgIHJvb3QgPSByb290Lmxlbmd0aCA+IDAgPyByb290ICsgJ3wnIDogcm9vdDtcclxuICAgIGxldCByZXBsYWNlID0gJyg/Oig/OicgKyByb290ICsgJyg/OlxcXFx2ezB9KSg/OiB8LSkoW2Etel0pKSknO1xyXG4gICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZXBsYWNlLCAnZycpO1xyXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmVnZXgsIChtYXRjaCwgcDEpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHAxICE9PSAndW5kZWZpbmVkJyA/IHAxLnRvVXBwZXJDYXNlKCkgOiAnJztcclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3Qobm9kZXM6IGFueSk6IG5vZGVzIGlzIE5vZGVMaXN0IHwgSFRNTENvbGxlY3Rpb24ge1xyXG4gICAgdmFyIHN0cmluZ1JlcHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobm9kZXMpO1xyXG5cclxuICAgIHJldHVybiB0eXBlb2Ygbm9kZXMgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KHN0cmluZ1JlcHIpICYmXHJcbiAgICAgICAgKHR5cGVvZiBub2Rlcy5sZW5ndGggPT09ICdudW1iZXInKSAmJlxyXG4gICAgICAgIChub2Rlcy5sZW5ndGggPT09IDAgfHwgKHR5cGVvZiBub2Rlc1swXSA9PT0gXCJvYmplY3RcIiAmJiBub2Rlc1swXS5ub2RlVHlwZSA+IDApKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=