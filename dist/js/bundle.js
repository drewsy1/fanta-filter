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
var Util_1 = __webpack_require__(/*! Util */ "./src/ts/lib/util/index.ts");
/**
 * @description Creates a prototype object to be processed by the createFantaFilterElement factory function
 *
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
 *
 * @param {FantaFilterElement} fantaFilterElement FantaFilterElement from which to create a FantaFilterInput
 * @param {Options} options Options passed from higher above
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
/**
 * @description Factory function that adds an update event handler to a FantaFilterInput and its HTML element
 *
 * @param {FantaFilterInput} fantaFilterInput FantaFilterInput to be modified
 * @param {string} triggerEvent Name of event to be triggered
 * @param {CustomEvent} updateEvent Callback function of event to be triggered
 * @returns A FantaFilterInput with an event handler to handle changes
 */
var addUpdateEvent = function (fantaFilterInput, triggerEvent, updateEvent) {
    fantaFilterInput.element.addEventListener(triggerEvent, function (e) { return e.target.dispatchEvent(updateEvent); });
    fantaFilterInput.updateEvent = updateEvent;
    return fantaFilterInput;
};
/**
 * @description Factory method that creates and returns an object from protoFantaFilterElement
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
    if (Util_1.isNodeList(targets)) {
        return [].slice
            .call(Array.from(targets))
            .map(function (element) { return createFantaFilterElement(dependencies, element, parentFilter, userOptions); })
            .filter(function (x) { return x; });
    }
    var defaultOptions = dependencies.defaultOptions;
    var customEvent = dependencies.window !== undefined ? dependencies.window.CustomEvent : CustomEvent;
    var name = parentFilter.name;
    var options = Object.assign(defaultOptions, userOptions);
    var elementAttributes = Object.assign(options.attributeNames, Util_1.convertAttributesToObject(targets.attributes, options));
    var newFantaFilterElement = protoFantaFilterElement(targets, name, options);
    var output;
    if (newFantaFilterElement.isInput) {
        var newFantaFilterInput_1 = protoFantaFilterInput(newFantaFilterElement, options);
        var updateEvent = new customEvent("fafi.filter." + newFantaFilterInput_1.groupName + ".update", {
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
var Util_1 = __webpack_require__(/*! Util */ "./src/ts/lib/util/index.ts");
// Variable to store all FantaFilters instances
var CurrentFilters = [];
/**
 * @description Creates a prototype object to be processed by the createFantaFilter factory function
 *
 * @param {HTMLElement} parentNode HTML element parent of filterable elements
 * @param {Options} options Options to control the filter object
 * @param {string} name Name of filter
 * @param {FantaFilterElement[]} [inputs] HTML input elements that control filtering
 * @param {FantaFilterElement[]} [items] HTML elements to be filtered
 * @returns A FantaFilterWrapper object
 */
var protoFantaFilterWrapper = function (parentNode, options, name, filterGroup, inputs, items) { return ({
    parentNode: parentNode,
    options: options,
    name: name,
    inputs: inputs,
    items: items,
    filterGroup: filterGroup,
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
 * @description Factory method that creates and returns an object from protoFantaFilterWrapper
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
    if (Util_1.isNodeList(parents)) {
        return [].slice
            .call(parents)
            .map(function (element) { return createFantaFilterWrapper(dependencies, element, userOptions); })
            .filter(function (x) { return x; });
    }
    var options = configure(parents, userOptions, defaultOptions);
    var name = parents.getAttribute(options.attributeNames.group);
    // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
    if (!parents.hasAttribute(options.attributeNames.group) ||
        fantaFilterCollector.find(function (filter) { return filter.name === name; }))
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
    return fantaFilterWrapper_1.default({ configure: Util_1.configure, context: context, defaultOptions: Util_1.defaultOptions, createFantaFilterElement: fantaFilterElement_1.default }, selector, userOptions);
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
 * @description Merges default/user options and finds new attributes on an HTML element.
 *
 * @export
 * @param {HTMLElement} element Element to search for new attributes
 * @param {Options} userOptions Customized user options to compare
 * @param {Options} defaultOptions Default options to compare
 * @returns {Options} A finalized Options object
 */
exports.configure = function (element, userOptions, defaultOptions) {
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
};


/***/ }),

/***/ "./src/ts/lib/util/default-options.ts":
/*!********************************************!*\
  !*** ./src/ts/lib/util/default-options.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = {
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
    inputTypes: ['input'],
};


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

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./string */ "./src/ts/lib/util/string.ts"));
__export(__webpack_require__(/*! ./dom */ "./src/ts/lib/util/dom.ts"));
__export(__webpack_require__(/*! ./typetests */ "./src/ts/lib/util/typetests.ts"));
__export(__webpack_require__(/*! ./configure */ "./src/ts/lib/util/configure.ts"));
__export(__webpack_require__(/*! ./default-options */ "./src/ts/lib/util/default-options.ts"));


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
/**
 * @description Tests if an object is a NodeList or HTMLCollection
 * @exports
 * @param {*} nodes Object to be tested
 * @returns {(nodes is NodeList | HTMLCollection)} True if object is NodeList/HTMLCollection
 */
exports.isNodeList = function (nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);
    return typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        (typeof nodes.length === 'number') &&
        (nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0));
};


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYW50YUZpbHRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvZmFudGFGaWx0ZXJFbGVtZW50LnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2ZhbnRhRmlsdGVyV3JhcHBlci50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9jb25maWd1cmUudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2xpYi91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvdHlwZXRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtB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WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkZhbnRhRmlsdGVyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhbnRhRmlsdGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZhbnRhRmlsdGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEZhbnRhRmlsdGVyV3JhcHBlciwgRmFudGFGaWx0ZXJFbGVtZW50LCBGYW50YUZpbHRlcklucHV0LCBPcHRpb25zLCBEZXBlbmRlbmNpZXMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgaXNOb2RlTGlzdCwgY29udmVydEF0dHJpYnV0ZXNUb09iamVjdCB9IGZyb20gJ1V0aWwnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcHJvdG90eXBlIG9iamVjdCB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudCBmYWN0b3J5IGZ1bmN0aW9uXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgZnJvbSB3aGljaCBhIEZhbnRhRmlsdGVyRWxlbWVudCB3aWxsIGJlIGNyZWF0ZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwTmFtZSBOYW1lIG9mIGVsZW1lbnQncyBmaWx0ZXIgZ3JvdXBcclxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgb2JqZWN0IGNvbnRhaW5pbmcgQ1NTIGNsYXNzIG5hbWVzXHJcbiAqIEByZXR1cm5zIHtGYW50YUZpbHRlckVsZW1lbnR9IEEgcHJvdG90eXBlIEZhbnRhRmlsdGVyRWxlbWVudFxyXG4gKi9cclxuY29uc3QgcHJvdG9GYW50YUZpbHRlckVsZW1lbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGdyb3VwTmFtZTogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zKTogRmFudGFGaWx0ZXJFbGVtZW50ID0+ICh7XHJcbiAgICBncm91cE5hbWUsXHJcbiAgICBlbGVtZW50LFxyXG4gICAgdGFnTmFtZTogZWxlbWVudC50YWdOYW1lLFxyXG4gICAgc2V0IGhpZGRlbihpc0hpZGRlbjogYm9vbGVhbikge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShvcHRpb25zLmNsYXNzTmFtZXMuaGlkZGVuLCBpc0hpZGRlbik7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGhpZGRlbigpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy5jbGFzc05hbWVzLmhpZGRlbik7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGlzSW5wdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuaW5wdXRUeXBlcy5tYXAoaXRlbSA9PiBpdGVtLnRvVXBwZXJDYXNlKCkpLmluY2x1ZGVzKGVsZW1lbnQudGFnTmFtZSk7XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIEZhbnRhRmlsdGVySW5wdXQgcHJvdG90eXBlIGZyb20gYSBGYW50YUZpbHRlckVsZW1lbnRcclxuICogXHJcbiAqIEBwYXJhbSB7RmFudGFGaWx0ZXJFbGVtZW50fSBmYW50YUZpbHRlckVsZW1lbnQgRmFudGFGaWx0ZXJFbGVtZW50IGZyb20gd2hpY2ggdG8gY3JlYXRlIGEgRmFudGFGaWx0ZXJJbnB1dFxyXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgZnJvbSBoaWdoZXIgYWJvdmVcclxuICogQHJldHVybnMgQW4gb2JqZWN0IHRoYXQgY2FuIGJlIG1lcmdlZCB3aXRoIGEgRmFudGFGaWx0ZXJFbGVtZW50IHRvIGNyZWF0ZSBhIEZhbnRhRmlsdGVySW5wdXRcclxuICovXHJcbmNvbnN0IHByb3RvRmFudGFGaWx0ZXJJbnB1dCA9IChmYW50YUZpbHRlckVsZW1lbnQ6IEZhbnRhRmlsdGVyRWxlbWVudCwgb3B0aW9uczogT3B0aW9ucyk6IEZhbnRhRmlsdGVySW5wdXQgPT4ge1xyXG4gICAgbGV0IHByb3RvRmFudGFGaWx0ZXJJbnB1dERhdGEgPSB7XHJcbiAgICAgICAgdHlwZTogZmFudGFGaWx0ZXJFbGVtZW50LmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJyksXHJcbiAgICAgICAgc2VsZWN0b3I6IGZhbnRhRmlsdGVyRWxlbWVudC5lbGVtZW50LmdldEF0dHJpYnV0ZShvcHRpb25zLmF0dHJpYnV0ZU5hbWVzLnNlbGVjdG9yKSxcclxuICAgICAgICBjb21wYXJlcjogZmFudGFGaWx0ZXJFbGVtZW50LmVsZW1lbnQuZ2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0cmlidXRlTmFtZXMuY29tcGFyZXIpLFxyXG4gICAgfTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGZhbnRhRmlsdGVyRWxlbWVudCwgcHJvdG9GYW50YUZpbHRlcklucHV0RGF0YSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBhZGRzIGFuIHVwZGF0ZSBldmVudCBoYW5kbGVyIHRvIGEgRmFudGFGaWx0ZXJJbnB1dCBhbmQgaXRzIEhUTUwgZWxlbWVudFxyXG4gKiBcclxuICogQHBhcmFtIHtGYW50YUZpbHRlcklucHV0fSBmYW50YUZpbHRlcklucHV0IEZhbnRhRmlsdGVySW5wdXQgdG8gYmUgbW9kaWZpZWRcclxuICogQHBhcmFtIHtzdHJpbmd9IHRyaWdnZXJFdmVudCBOYW1lIG9mIGV2ZW50IHRvIGJlIHRyaWdnZXJlZFxyXG4gKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSB1cGRhdGVFdmVudCBDYWxsYmFjayBmdW5jdGlvbiBvZiBldmVudCB0byBiZSB0cmlnZ2VyZWRcclxuICogQHJldHVybnMgQSBGYW50YUZpbHRlcklucHV0IHdpdGggYW4gZXZlbnQgaGFuZGxlciB0byBoYW5kbGUgY2hhbmdlc1xyXG4gKi9cclxuY29uc3QgYWRkVXBkYXRlRXZlbnQgPSAoZmFudGFGaWx0ZXJJbnB1dDogRmFudGFGaWx0ZXJJbnB1dCwgdHJpZ2dlckV2ZW50OiBzdHJpbmcsIHVwZGF0ZUV2ZW50OiBDdXN0b21FdmVudCkgPT4ge1xyXG4gICAgZmFudGFGaWx0ZXJJbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHJpZ2dlckV2ZW50LCBlID0+IGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQodXBkYXRlRXZlbnQpKTtcclxuICAgIGZhbnRhRmlsdGVySW5wdXQudXBkYXRlRXZlbnQgPSB1cGRhdGVFdmVudDtcclxuICAgIHJldHVybiBmYW50YUZpbHRlcklucHV0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBGYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb2JqZWN0IGZyb20gcHJvdG9GYW50YUZpbHRlckVsZW1lbnRcclxuICogXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llcyBWYXJpYWJsZXMgcGFzc2VkIGluIGZyb20gaGlnaGVyIGNvbnRleHRcclxuICogQHBhcmFtIHsoSFRNTEVsZW1lbnQgfCBIVE1MQ29sbGVjdGlvbiB8IE5vZGVMaXN0KX0gdGFyZ2V0cyBIVE1MIGVsZW1lbnQocykgZnJvbSB3aGljaCBGYW50YUZpbHRlckVsZW1lbnQocykgc2hvdWxkIGJlIGNyZWF0ZWRcclxuICogQHBhcmFtIHtGYW50YUZpbHRlcldyYXBwZXJ9IHBhcmVudEZpbHRlciBGYW50YUZpbHRlcldyYXBwZXIgb2JqZWN0IGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50XHJcbiAqIEBwYXJhbSB7T3B0aW9uc30gW3VzZXJPcHRpb25zPXt9XSBPcHRpb25hbCB1c2VyIG92ZXJyaWRlIG9wdGlvbnNcclxuICogQHJldHVybnMgQSBGYW50YUZpbHRlckVsZW1lbnQgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQoXHJcbiAgICBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyxcclxuICAgIHRhcmdldHM6IEhUTUxFbGVtZW50IHwgSFRNTENvbGxlY3Rpb24gfCBOb2RlTGlzdCxcclxuICAgIHBhcmVudEZpbHRlcjogRmFudGFGaWx0ZXJXcmFwcGVyLFxyXG4gICAgdXNlck9wdGlvbnM6IE9wdGlvbnMgPSB7fSxcclxuKSB7XHJcbiAgICAvLyBpZiB0YXJnZXRzIGlzIGFjdHVhbGx5IGEgY29sbGVjdGlvbiBvZiBlbGVtZW50cywgcmVjdXJzaXZlbHkgY2FsbCB0aGlzIGZ1bmN0aW9uIG9uIGVhY2ggb2YgaXRzIGVsZW1lbnRzXHJcbiAgICBpZiAoaXNOb2RlTGlzdCh0YXJnZXRzKSkge1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZVxyXG4gICAgICAgICAgICAuY2FsbChBcnJheS5mcm9tKHRhcmdldHMpKVxyXG4gICAgICAgICAgICAubWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50KGRlcGVuZGVuY2llcywgZWxlbWVudCwgcGFyZW50RmlsdGVyLCB1c2VyT3B0aW9ucykpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHg6IEhUTUxFbGVtZW50KSA9PiB4KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGRlZmF1bHRPcHRpb25zIH0gPSBkZXBlbmRlbmNpZXM7XHJcbiAgICBsZXQgY3VzdG9tRXZlbnQgPSBkZXBlbmRlbmNpZXMud2luZG93ICE9PSB1bmRlZmluZWQgPyBkZXBlbmRlbmNpZXMud2luZG93LkN1c3RvbUV2ZW50IDogQ3VzdG9tRXZlbnQ7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHBhcmVudEZpbHRlcjtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCB1c2VyT3B0aW9ucyk7XHJcbiAgICBjb25zdCBlbGVtZW50QXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVOYW1lcyxcclxuICAgICAgICBjb252ZXJ0QXR0cmlidXRlc1RvT2JqZWN0KHRhcmdldHMuYXR0cmlidXRlcywgb3B0aW9ucyksXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBuZXdGYW50YUZpbHRlckVsZW1lbnQgPSBwcm90b0ZhbnRhRmlsdGVyRWxlbWVudCh0YXJnZXRzLCBuYW1lLCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgb3V0cHV0O1xyXG4gICAgaWYgKG5ld0ZhbnRhRmlsdGVyRWxlbWVudC5pc0lucHV0KSB7XHJcbiAgICAgICAgbGV0IG5ld0ZhbnRhRmlsdGVySW5wdXQgPSBwcm90b0ZhbnRhRmlsdGVySW5wdXQobmV3RmFudGFGaWx0ZXJFbGVtZW50LCBvcHRpb25zKTtcclxuICAgICAgICBsZXQgdXBkYXRlRXZlbnQgPSBuZXcgY3VzdG9tRXZlbnQoYGZhZmkuZmlsdGVyLiR7bmV3RmFudGFGaWx0ZXJJbnB1dC5ncm91cE5hbWV9LnVwZGF0ZWAsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6IG5ld0ZhbnRhRmlsdGVySW5wdXQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCkgPT4gKG5ld0ZhbnRhRmlsdGVySW5wdXQuZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmV3RmFudGFGaWx0ZXJFbGVtZW50ID0gYWRkVXBkYXRlRXZlbnQobmV3RmFudGFGaWx0ZXJJbnB1dCwgJ2lucHV0JywgdXBkYXRlRXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG91dHB1dCA9IE9iamVjdC5hc3NpZ24obmV3RmFudGFGaWx0ZXJFbGVtZW50LCBlbGVtZW50QXR0cmlidXRlcyk7XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG4iLCJpbXBvcnQgeyBGYW50YUZpbHRlcldyYXBwZXIsIE9wdGlvbnMsIEZhbnRhRmlsdGVyRWxlbWVudCwgRGVwZW5kZW5jaWVzIH0gZnJvbSAnSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tICdVdGlsJztcclxuXHJcbi8vIFZhcmlhYmxlIHRvIHN0b3JlIGFsbCBGYW50YUZpbHRlcnMgaW5zdGFuY2VzXHJcbmNvbnN0IEN1cnJlbnRGaWx0ZXJzOiBGYW50YUZpbHRlcldyYXBwZXJbXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgcHJvdG90eXBlIG9iamVjdCB0byBiZSBwcm9jZXNzZWQgYnkgdGhlIGNyZWF0ZUZhbnRhRmlsdGVyIGZhY3RvcnkgZnVuY3Rpb25cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50Tm9kZSBIVE1MIGVsZW1lbnQgcGFyZW50IG9mIGZpbHRlcmFibGUgZWxlbWVudHNcclxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgdG8gY29udHJvbCB0aGUgZmlsdGVyIG9iamVjdFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBOYW1lIG9mIGZpbHRlclxyXG4gKiBAcGFyYW0ge0ZhbnRhRmlsdGVyRWxlbWVudFtdfSBbaW5wdXRzXSBIVE1MIGlucHV0IGVsZW1lbnRzIHRoYXQgY29udHJvbCBmaWx0ZXJpbmdcclxuICogQHBhcmFtIHtGYW50YUZpbHRlckVsZW1lbnRbXX0gW2l0ZW1zXSBIVE1MIGVsZW1lbnRzIHRvIGJlIGZpbHRlcmVkXHJcbiAqIEByZXR1cm5zIEEgRmFudGFGaWx0ZXJXcmFwcGVyIG9iamVjdFxyXG4gKi9cclxuY29uc3QgcHJvdG9GYW50YUZpbHRlcldyYXBwZXIgPSAoXHJcbiAgICBwYXJlbnROb2RlOiBIVE1MRWxlbWVudCxcclxuICAgIG9wdGlvbnM6IE9wdGlvbnMsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBmaWx0ZXJHcm91cD86IGFueSxcclxuICAgIGlucHV0cz86IEZhbnRhRmlsdGVyRWxlbWVudFtdLFxyXG4gICAgaXRlbXM/OiBGYW50YUZpbHRlckVsZW1lbnRbXSxcclxuKTogRmFudGFGaWx0ZXJXcmFwcGVyID0+ICh7XHJcbiAgICBwYXJlbnROb2RlLFxyXG4gICAgb3B0aW9ucyxcclxuICAgIG5hbWUsXHJcbiAgICBpbnB1dHMsXHJcbiAgICBpdGVtcyxcclxuICAgIGZpbHRlckdyb3VwLFxyXG4gICAgZ2V0IEN1cnJlbnRGaWx0ZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBDdXJyZW50RmlsdGVycztcclxuICAgIH0sXHJcbiAgICBnZXQgaGFzSW5wdXRzKCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dHMgIT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgZ2V0IGhhc0l0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtcyAhPT0gbnVsbDtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBGYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYW5kIHJldHVybnMgYW4gb2JqZWN0IGZyb20gcHJvdG9GYW50YUZpbHRlcldyYXBwZXJcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzIFZhcmlhYmxlcyBwYXNzZWQgaW4gZnJvbSBoaWdoZXIgY29udGV4dFxyXG4gKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IHN0cmluZyl9IHRhcmdldCBTdHJpbmcgc2VsZWN0b3IgcmVwcmVzZW50aW5nIGFuIEhUTUwgb2JqZWN0LCBvciB0aGUgb2JqZWN0IGl0c2VsZlxyXG4gKiBAcGFyYW0ge09wdGlvbnN9IFt1c2VyT3B0aW9ucz17fV0gT3B0aW9uYWwgdXNlciBvdmVycmlkZSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7RmFudGFGaWx0ZXJXcmFwcGVyW119IGZhbnRhRmlsdGVyQ29sbGVjdG9yIE9wdGlvbmFsIHZhcmlhYmxlIHRvIHN0b3JlIGFsbCBjdXJyZW50IGluc3RhbmNlcyBvZiBmYW50YUZpbHRlci4gRGVmYXVsdHMgdG8gQ3VycmVudEZpbHRlcnNcclxuICogQHJldHVybnMgQSBjb21wbGV0ZWQgRmFudGFGaWx0ZXJXcmFwcGVyIG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRmFudGFGaWx0ZXJXcmFwcGVyKFxyXG4gICAgZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmNpZXMsXHJcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgc3RyaW5nLFxyXG4gICAgdXNlck9wdGlvbnM6IE9wdGlvbnMgPSB7fSxcclxuICAgIGZhbnRhRmlsdGVyQ29sbGVjdG9yOiBGYW50YUZpbHRlcldyYXBwZXJbXSA9IEN1cnJlbnRGaWx0ZXJzLFxyXG4pOiBGYW50YUZpbHRlcldyYXBwZXIge1xyXG4gICAgY29uc3QgeyBjb25maWd1cmUsIGNvbnRleHQsIGRlZmF1bHRPcHRpb25zLCBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQgfSA9IGRlcGVuZGVuY2llcztcclxuICAgIGNvbnN0IHBhcmVudHMgPSB0eXBlb2YgdGFyZ2V0ID09PSBgc3RyaW5nYCA/IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpIDogdGFyZ2V0O1xyXG5cclxuICAgIC8vIElmIG11bHRpcGxlIHBhcmVudCBub2RlcywgY3JlYXRlIG11bHRpcGxlIEZhbnRhRmlsdGVyV3JhcHBlcnMgYW5kIHJldHVybiB0aG9zZSBpbnN0ZWFkXHJcbiAgICBpZiAoaXNOb2RlTGlzdChwYXJlbnRzKSkge1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZVxyXG4gICAgICAgICAgICAuY2FsbChwYXJlbnRzKVxyXG4gICAgICAgICAgICAubWFwKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gY3JlYXRlRmFudGFGaWx0ZXJXcmFwcGVyKGRlcGVuZGVuY2llcywgZWxlbWVudCwgdXNlck9wdGlvbnMpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKCh4OiBIVE1MRWxlbWVudCkgPT4geCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogT3B0aW9ucyA9IGNvbmZpZ3VyZShwYXJlbnRzLCB1c2VyT3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgY29uc3QgbmFtZSA9IHBhcmVudHMuZ2V0QXR0cmlidXRlKG9wdGlvbnMuYXR0cmlidXRlTmFtZXMuZ3JvdXApO1xyXG5cclxuICAgIC8vIElmIHRoZSBwYXJlbnQgbm9kZSBkb2Vzbid0IGhhdmUgdGhlIHNwZWNpZmllZCBncm91cCBhdHRyaWJ1dGUgb3IgYSBmaWx0ZXIgd2l0aCB0aGUgc3BlY2lmaWVkIGdyb3VwIGFscmVhZHkgZXhpc3RzLCBjYW5jZWwgZmFjdG9yeSBmdW5jdGlvblxyXG4gICAgaWYgKFxyXG4gICAgICAgICFwYXJlbnRzLmhhc0F0dHJpYnV0ZShvcHRpb25zLmF0dHJpYnV0ZU5hbWVzLmdyb3VwKSB8fFxyXG4gICAgICAgIGZhbnRhRmlsdGVyQ29sbGVjdG9yLmZpbmQoZmlsdGVyID0+IGZpbHRlci5uYW1lID09PSBuYW1lKVxyXG4gICAgKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBGYW50YUZpbHRlcldyYXBwZXIgPSBwcm90b0ZhbnRhRmlsdGVyV3JhcHBlcihwYXJlbnRzLCBvcHRpb25zLCBuYW1lKTtcclxuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBjcmVhdGVGYW50YUZpbHRlckVsZW1lbnQoXHJcbiAgICAgICAgZGVwZW5kZW5jaWVzLFxyXG4gICAgICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgWyR7b3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5ncm91cH09JHtuYW1lfV1gKSxcclxuICAgICAgICBGYW50YUZpbHRlcldyYXBwZXIsXHJcbiAgICApO1xyXG5cclxuICAgIEZhbnRhRmlsdGVyV3JhcHBlci5pbnB1dHMgPSBlbGVtZW50cy5maWx0ZXIoKGVsZW1lbnQ6IEZhbnRhRmlsdGVyRWxlbWVudCkgPT4gZWxlbWVudC5pc0lucHV0KTtcclxuICAgIEZhbnRhRmlsdGVyV3JhcHBlci5pdGVtcyA9IGVsZW1lbnRzLmZpbHRlcigoZWxlbWVudDogRmFudGFGaWx0ZXJFbGVtZW50KSA9PiAhZWxlbWVudC5pc0lucHV0KTtcclxuXHJcbiAgICBmYW50YUZpbHRlckNvbGxlY3Rvci5wdXNoKEZhbnRhRmlsdGVyV3JhcHBlcik7XHJcblxyXG4gICAgcmV0dXJuIEZhbnRhRmlsdGVyV3JhcHBlcjtcclxufVxyXG4iLCJpbXBvcnQge2NvbmZpZ3VyZSwgZGVmYXVsdE9wdGlvbnN9IGZyb20gJ1V0aWwnO1xyXG5pbXBvcnQgY3JlYXRlRmFudGFGaWx0ZXJXcmFwcGVyIGZyb20gJy4vZmFudGFGaWx0ZXJXcmFwcGVyJztcclxuaW1wb3J0IGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudCBmcm9tICcuL2ZhbnRhRmlsdGVyRWxlbWVudCc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzZWxlY3Rvcjogc3RyaW5nLCB1c2VyT3B0aW9uczogT3B0aW9ucywgY29udGV4dDogSFRNTEVsZW1lbnQgfCBEb2N1bWVudCA9IGRvY3VtZW50KSA9PlxyXG4gICAgY3JlYXRlRmFudGFGaWx0ZXJXcmFwcGVyKHsgY29uZmlndXJlLCBjb250ZXh0LCBkZWZhdWx0T3B0aW9ucywgY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50IH0sIHNlbGVjdG9yLCB1c2VyT3B0aW9ucyk7XHJcbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tIFwiSW50ZXJmYWNlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBNZXJnZXMgZGVmYXVsdC91c2VyIG9wdGlvbnMgYW5kIGZpbmRzIG5ldyBhdHRyaWJ1dGVzIG9uIGFuIEhUTUwgZWxlbWVudC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdG8gc2VhcmNoIGZvciBuZXcgYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0ge09wdGlvbnN9IHVzZXJPcHRpb25zIEN1c3RvbWl6ZWQgdXNlciBvcHRpb25zIHRvIGNvbXBhcmVcclxuICogQHBhcmFtIHtPcHRpb25zfSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IG9wdGlvbnMgdG8gY29tcGFyZVxyXG4gKiBAcmV0dXJucyB7T3B0aW9uc30gQSBmaW5hbGl6ZWQgT3B0aW9ucyBvYmplY3RcclxuICovXHJcbmV4cG9ydCBjb25zdCBjb25maWd1cmUgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIHVzZXJPcHRpb25zOiBPcHRpb25zLCBkZWZhdWx0T3B0aW9uczogT3B0aW9ucyk6IE9wdGlvbnMgPT4ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRPcHRpb25zKS5yZWR1Y2UoKG9wdGlvbnM6IE9wdGlvbnMsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7a2V5LnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyVmFsdWUgIT09IG51bGwpIG9wdGlvbnNba2V5XSA9IGF0dHJWYWx1ZTtcclxuICAgICAgICBlbHNlIGlmIChrZXkgaW4gdXNlck9wdGlvbnMpIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XHJcbiAgICAgICAgZWxzZSBvcHRpb25zW2tleV0gPSBkZWZhdWx0T3B0aW9uc1trZXldO1xyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH0sIHt9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnSW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE9wdGlvbnMgPSB7XHJcbiAgICBhdHRyaWJ1dGVOYW1lczoge1xyXG4gICAgICAgIHJvb3Q6ICdkYXRhLWZhbnRhZmlsdGVyJyxcclxuICAgICAgICBncm91cDogJ2RhdGEtZmFudGFmaWx0ZXItZ3JvdXAnLFxyXG4gICAgICAgIHNlbGVjdG9yOiAnZGF0YS1mYW50YWZpbHRlci1zZWxlY3RvcicsXHJcbiAgICAgICAgY29tcGFyZXI6ICdkYXRhLWZhbnRhZmlsdGVyLWNvbXBhcmVyJyxcclxuICAgIH0sXHJcbiAgICBjbGFzc05hbWVzOiB7XHJcbiAgICAgICAgcGFyZW50OiAnanMtZmFmaS1wYXJlbnQnLFxyXG4gICAgICAgIGlucHV0OiAnanMtZmFmaS1pbnB1dCcsXHJcbiAgICAgICAgaXRlbTogJ2pzLWZhZmktaXRlbScsXHJcbiAgICAgICAgaGlkZGVuOiAnanMtZmFmaS1oaWRkZW4nLFxyXG4gICAgfSxcclxuICAgIGlucHV0VHlwZXM6IFsnaW5wdXQnXSxcclxufTtcclxuIiwiaW1wb3J0IHsgY29udmVydEtlYmFiVG9DYW1lbENhc2UgfSBmcm9tICcuL3N0cmluZyc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgYSBOYW1lZE5vZGVNYXAgb2YgYXR0cmlidXRlcyB0byBhbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtOYW1lZE5vZGVNYXB9IGF0dHJpYnV0ZXMgTmFtZWROb2RlTWFwIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBzdHJpbmd9IG9wdGlvbnMgRGVmYXVsdCBvcHRpb25zIGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvb3QgZGF0YSBhdHRyaWJ1dGUgdGVtcGxhdGUsIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdGVtcGxhdGUgaXRzZWxmXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIE5hbWVkTm9kZU1hcFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QgPSAoYXR0cmlidXRlczogTmFtZWROb2RlTWFwLCBvcHRpb25zOiBPcHRpb25zIHwgc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByb290ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IG9wdGlvbnMuYXR0cmlidXRlTmFtZXMucm9vdDtcclxuICAgIGxldCBvdXRwdXRPYmplY3QgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyaWJ1dGVzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICBpZiAoYXR0ci5tYXRjaChyb290KSkge1xyXG4gICAgICAgICAgICBsZXQgY29udmVydGVkTmFtZSA9IGNvbnZlcnRLZWJhYlRvQ2FtZWxDYXNlKGF0dHIsIHJvb3QgKyAnLScpO1xyXG4gICAgICAgICAgICBvdXRwdXRPYmplY3Quc2V0KGNvbnZlcnRlZE5hbWUsIGF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dE9iamVjdDtcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXRlc3RzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RlZmF1bHQtb3B0aW9ucyciLCIvKipcclxuICogQ29udmVydHMgYSBLZWJhYkNhc2Ugc3RyaW5nIHRvIENhbWVsQ2FzZSBhbmQgcmV0dXJucyBpdFxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBLZWJhYkNhc2Ugc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Jvb3Q9JyddIFJvb3QgdGVybSB0byBiZSBtYXRjaGVkL3JlbW92ZWRcclxuICogQHJldHVybnMgQSBDYW1lbENhc2Ugc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEtlYmFiVG9DYW1lbENhc2UoaW5wdXQ6IHN0cmluZywgcm9vdDogc3RyaW5nID0gJycpIHtcclxuICAgIHJvb3QgPSByb290Lmxlbmd0aCA+IDAgPyByb290ICsgJ3wnIDogcm9vdDtcclxuICAgIGxldCByZXBsYWNlID0gJyg/Oig/OicgKyByb290ICsgJyg/OlxcXFx2ezB9KSg/OiB8LSkoW2Etel0pKSknO1xyXG4gICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZXBsYWNlLCAnZycpO1xyXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UocmVnZXgsIChtYXRjaCwgcDEpID0+IHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHAxICE9PSAndW5kZWZpbmVkJyA/IHAxLnRvVXBwZXJDYXNlKCkgOiAnJztcclxuICAgIH0pO1xyXG59IiwiLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBUZXN0cyBpZiBhbiBvYmplY3QgaXMgYSBOb2RlTGlzdCBvciBIVE1MQ29sbGVjdGlvblxyXG4gKiBAZXhwb3J0c1xyXG4gKiBAcGFyYW0geyp9IG5vZGVzIE9iamVjdCB0byBiZSB0ZXN0ZWRcclxuICogQHJldHVybnMgeyhub2RlcyBpcyBOb2RlTGlzdCB8IEhUTUxDb2xsZWN0aW9uKX0gVHJ1ZSBpZiBvYmplY3QgaXMgTm9kZUxpc3QvSFRNTENvbGxlY3Rpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBpc05vZGVMaXN0ID0gKG5vZGVzOiBhbnkpOiBub2RlcyBpcyBOb2RlTGlzdCB8IEhUTUxDb2xsZWN0aW9uID0+IHtcclxuICAgIHZhciBzdHJpbmdSZXByID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5vZGVzKTtcclxuXHJcbiAgICByZXR1cm4gdHlwZW9mIG5vZGVzID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgIC9eXFxbb2JqZWN0IChIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdHxPYmplY3QpXFxdJC8udGVzdChzdHJpbmdSZXByKSAmJlxyXG4gICAgICAgICh0eXBlb2Ygbm9kZXMubGVuZ3RoID09PSAnbnVtYmVyJykgJiZcclxuICAgICAgICAobm9kZXMubGVuZ3RoID09PSAwIHx8ICh0eXBlb2Ygbm9kZXNbMF0gPT09IFwib2JqZWN0XCIgJiYgbm9kZXNbMF0ubm9kZVR5cGUgPiAwKSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9