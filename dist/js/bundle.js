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

/***/ "./src/ts/FantaFilterWrapper.ts":
/*!**************************************!*\
  !*** ./src/ts/FantaFilterWrapper.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fantaFilterElement_1 = __webpack_require__(/*! ./fantaFilterElement */ "./src/ts/fantaFilterElement.ts");
var index_1 = __webpack_require__(/*! ./lib/util/index */ "./src/ts/lib/util/index.ts");
/**
 * Class that represents a data-fantafilter-group
 * @export
 * @class FantaFilterWrapper
 * @implements {iFantaFilterWrapper}
 */
var FantaFilterWrapper = /** @class */ (function () {
    /**
     * Creates an instance of FantaFilterWrapper.
     * @param {Dependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement} selector A data-fantafilter-group root object
     * @param {Options} [userOptions={}] Optional user override options
     * @memberof FantaFilterWrapper
     */
    function FantaFilterWrapper(dependencies, selector, userOptions) {
        var _this = this;
        if (userOptions === void 0) { userOptions = {}; }
        var configure = dependencies.configure, context = dependencies.context, defaultOptions = dependencies.defaultOptions;
        this.options = configure(selector, userOptions, defaultOptions);
        this.parentNode = selector;
        this.name = selector.getAttribute(this.options.attributeNames.group);
        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
        if (!selector.hasAttribute(this.options.attributeNames.group) ||
            (FantaFilterWrapper.CurrentFilters !== undefined &&
                FantaFilterWrapper.CurrentFilters.find(function (filter) { return filter.name === _this.name; }))) {
            this.name = null;
            return;
        }
        var elements = fantaFilterElement_1.FantaFilterElement.createFantaFilterElements(dependencies, context.querySelectorAll("[" + this.options.attributeNames.group + "=" + this.name + "]"), this, userOptions);
        this.inputs = elements.inputs;
        this.items = elements.items;
        if (FantaFilterWrapper.CurrentFilters === undefined)
            FantaFilterWrapper.CurrentFilters = [];
        FantaFilterWrapper.CurrentFilters.push(this);
    }
    Object.defineProperty(FantaFilterWrapper.prototype, "hasInputs", {
        /**
         * @description Returns true if this FantaFilterWrapper contains input elements
         * @readonly
         * @memberof FantaFilterWrapper
         */
        get: function () {
            return !!this.inputs.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FantaFilterWrapper.prototype, "hasItems", {
        /**
         * @description Returns true if this FantaFilterWrapper contains item elements
         * @readonly
         * @memberof FantaFilterWrapper
         */
        get: function () {
            return !!this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description Static method that wraps the default constructor to return null if an object is malformed/invalid.
     * @static
     * @param {Dependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement | string} target String selector representing a data-fantafilter-group HTML root object, or the object itself
     * @param {Options} [userOptions={}] Optional user override options
     * @returns A completed FantaFilterWrapper object or objects. Null if object is invalid.
     * @memberof FantaFilterWrapper
     */
    FantaFilterWrapper.create = function (dependencies, target, userOptions) {
        if (userOptions === void 0) { userOptions = {}; }
        var context = dependencies.context;
        var parents = typeof target === "string" ? context.querySelectorAll(target) : target;
        // If multiple parent nodes, create multiple FantaFilterWrappers and return those instead
        if (index_1.isNodeList(parents)) {
            return [].slice
                .call(parents)
                .map(function (element) { return FantaFilterWrapper.create(dependencies, element, userOptions); })
                .filter(function (x) { return x; });
        }
        var newFantaFilter = new FantaFilterWrapper(dependencies, parents, userOptions);
        if (newFantaFilter.name === null)
            return;
        else
            return newFantaFilter;
    };
    return FantaFilterWrapper;
}());
exports.default = FantaFilterWrapper;


/***/ }),

/***/ "./src/ts/fantaFilterElement.ts":
/*!**************************************!*\
  !*** ./src/ts/fantaFilterElement.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ./lib/util */ "./src/ts/lib/util/index.ts");
/**
 * @description An abstract class to be implemented by specific FantaFilter subtypes representing various HTML elements
 * @class FantaFilterElement
 * @implements {iFantaFilterElement}
 */
var FantaFilterElement = /** @class */ (function () {
    /**
     * Creates an instance of FantaFilterElement.
     * @param {Dependencies} dependencies
     * @param {HTMLElement} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterElement
     */
    function FantaFilterElement(dependencies, targets, parentFilter, _userOptions) {
        if (_userOptions === void 0) { _userOptions = {}; }
        this.options = Object.assign(dependencies.defaultOptions, _userOptions);
        this.groupName = parentFilter.name;
        this.element = targets;
        this.attributes = Object.assign(this.options.attributeNames, util_1.convertAttributesToObject(this.element.attributes, this.options));
        return this;
    }
    Object.defineProperty(FantaFilterElement.prototype, "tagName", {
        /**
         * @description Retrieves a string representation of this element's HTML element tag
         * @readonly
         * @memberof FantaFilterElement
         */
        get: function () {
            return this.element.tagName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @description Creates FantaFilterElement derivatives from a NodeList of HTMLElements
     * @static
     * @memberof FantaFilterElement
     */
    FantaFilterElement.createFantaFilterElements = function (dependencies, targets, parentFilter, _userOptions) {
        if (_userOptions === void 0) { _userOptions = {}; }
        var options = Object.assign(dependencies.defaultOptions, _userOptions);
        var items = [];
        var inputs = [];
        targets.forEach(function (target) {
            if (options.inputTypes.includes(target.tagName))
                inputs.push(new FantaFilterInput(dependencies, target, parentFilter, _userOptions));
            else
                items.push(new FantaFilterItem(dependencies, target, parentFilter, _userOptions));
        });
        return { items: items, inputs: inputs };
    };
    return FantaFilterElement;
}());
exports.FantaFilterElement = FantaFilterElement;
/**
 * @description A class representing any filterable HTML element
 * @class FantaFilterItem
 * @extends {FantaFilterElement}
 * @implements {iFantaFilterItem}
 */
var FantaFilterItem = /** @class */ (function (_super) {
    __extends(FantaFilterItem, _super);
    /**
     *Creates an instance of FantaFilterItem.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterItem
     */
    function FantaFilterItem(dependencies, targets, parentFilter, _userOptions) {
        if (_userOptions === void 0) { _userOptions = {}; }
        var _this = this;
        if (util_1.isNodeList(targets)) {
            return [].slice
                .call(Array.from(targets))
                .map(function (_element) { return new FantaFilterItem(dependencies, targets, parentFilter, _userOptions); })
                .filter(function (x) { return x; });
        }
        _this = _super.call(this, dependencies, targets, parentFilter, (_userOptions = {})) || this;
        return _this;
    }
    Object.defineProperty(FantaFilterItem.prototype, "hidden", {
        /**
         * @description Returns the 'hidden' attribute of the HTML element of this FantaFilterElement
         * @readonly
         * @memberof FantaFilterItem
         */
        get: function () {
            return this.element.hidden;
        },
        /**
         * @description Sets the 'hidden' attribute of the HTML element of this FantaFilterElement
         * @memberof FantaFilterItem
         */
        set: function (isHidden) {
            this.element.hidden = isHidden;
        },
        enumerable: true,
        configurable: true
    });
    return FantaFilterItem;
}(FantaFilterElement));
exports.FantaFilterItem = FantaFilterItem;
/**
 * @description A class representing any HTML inputs that manipulate a FantaFilterWrapper
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFantaFilterInput}
 */
var FantaFilterInput = /** @class */ (function (_super) {
    __extends(FantaFilterInput, _super);
    /**
     *Creates an instance of FantaFilterInput.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFantaFilterWrapper} parentFilter
     * @param {Options} [userOptions={}]
     * @memberof FantaFilterInput
     */
    function FantaFilterInput(dependencies, targets, parentFilter, userOptions) {
        if (userOptions === void 0) { userOptions = {}; }
        var _this = this;
        if (util_1.isNodeList(targets)) {
            return [].slice
                .call(Array.from(targets))
                .map(function (_element) { return new FantaFilterInput(dependencies, targets, parentFilter, userOptions); })
                .filter(function (x) { return x; });
        }
        _this = _super.call(this, dependencies, targets, parentFilter, userOptions) || this;
        var customEvent = dependencies.window !== undefined ? dependencies.window.CustomEvent : CustomEvent;
        var updateEvent = new customEvent("fafi.filter." + _this.groupName + ".update", {
            bubbles: true,
            detail: {
                sender: _this,
                value: function () { return _this.element.value; },
            },
        });
        _this.setUpdateEvent('input', updateEvent);
        _this.type = _this.element.getAttribute('type');
        _this.selector = _this.element.getAttribute(_this.options.attributeNames.selector);
        _this.comparer = _this.element.getAttribute(_this.options.attributeNames.comparer);
        return _this;
    }
    /**
     * @description Adds an update event handler to a FantaFilterInput and its HTML element
     * @private
     * @param {string} _eventTrigger Name of event to be handled
     * @param {CustomEvent<any>} _event Callback function of event
     * @returns This FantaFilterElement's UpdateEvent
     * @memberof FantaFilterInput
     */
    FantaFilterInput.prototype.setUpdateEvent = function (_eventTrigger, _event) {
        if (_eventTrigger !== undefined && _event !== undefined) {
            this.element.addEventListener(_eventTrigger, function (e) { return e.target.dispatchEvent(_event); });
            this._updateEvent = _event;
        }
        return this._updateEvent;
    };
    Object.defineProperty(FantaFilterInput.prototype, "updateEvent", {
        /**
         * @description Returns this FantaFilterElement's UpdateEvent
         * @readonly
         * @memberof FantaFilterInput
         */
        get: function () {
            return this._updateEvent;
        },
        enumerable: true,
        configurable: true
    });
    return FantaFilterInput;
}(FantaFilterElement));
exports.FantaFilterInput = FantaFilterInput;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ./lib/util */ "./src/ts/lib/util/index.ts");
var FantaFilterWrapper_1 = __webpack_require__(/*! ./FantaFilterWrapper */ "./src/ts/FantaFilterWrapper.ts");
function init(selector, userOptions, context) {
    if (selector === void 0) { selector = '.js-fafi'; }
    if (context === void 0) { context = document; }
    var newFantaFilter = FantaFilterWrapper_1.default.create({ configure: util_1.configure, context: context, defaultOptions: util_1.defaultOptions }, selector, userOptions);
    var fantaFilterArray = newFantaFilter.length !== undefined ? newFantaFilter : [newFantaFilter];
    var fantaFilterObj = {};
    fantaFilterArray.forEach(function (fantaFilter) {
        fantaFilterObj[fantaFilter.name] = fantaFilter;
    });
    return fantaFilterObj;
}
exports.init = init;
;


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
exports.configure = configure;


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
    inputTypes: ['INPUT'],
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
function convertAttributesToObject(attributes, options) {
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
}
exports.convertAttributesToObject = convertAttributesToObject;
;


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
function isNodeList(nodes) {
    var stringRepr = Object.prototype.toString.call(nodes);
    return (typeof nodes === 'object' &&
        /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
        typeof nodes.length === 'number' &&
        (nodes.length === 0 || (typeof nodes[0] === 'object' && nodes[0].nodeType > 0)));
}
exports.isNodeList = isNodeList;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYW50YUZpbHRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvRmFudGFGaWx0ZXJXcmFwcGVyLnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2ZhbnRhRmlsdGVyRWxlbWVudC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9jb25maWd1cmUudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2xpYi91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvdHlwZXRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RUEsNkdBQTZGO0FBQzdGLHdGQUE4QztBQUU5Qzs7Ozs7R0FLRztBQUNIO0lBU0k7Ozs7OztPQU1HO0lBQ0gsNEJBQVksWUFBMEIsRUFBRSxRQUFxQixFQUFFLFdBQXlCO1FBQXhGLGlCQTZCQztRQTdCOEQsOENBQXlCO1FBQzVFLHNDQUFTLEVBQUUsOEJBQU8sRUFBRSw0Q0FBYyxDQUFrQjtRQUU1RCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRSw2SUFBNkk7UUFDN0ksSUFDSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ3pELENBQUMsa0JBQWtCLENBQUMsY0FBYyxLQUFLLFNBQVM7Z0JBQzVDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUEwQixJQUFLLGFBQU0sQ0FBQyxJQUFJLEtBQUssS0FBSSxDQUFDLElBQUksRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLEVBQ3hHO1lBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsT0FBTztTQUNWO1FBRUQsSUFBSSxRQUFRLEdBQUcsdUNBQWtCLENBQUMseUJBQXlCLENBQ3ZELFlBQVksRUFDWixPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQUksSUFBSSxDQUFDLElBQUksTUFBRyxDQUFDLEVBQy9FLElBQUksRUFDSixXQUFXLENBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLEtBQUssU0FBUztZQUFFLGtCQUFrQixDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDNUYsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBa0NELHNCQUFXLHlDQUFTO1FBTHBCOzs7O1dBSUc7YUFDSDtZQUNJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBT0Qsc0JBQVcsd0NBQVE7UUFMbkI7Ozs7V0FJRzthQUNIO1lBQ0ksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUEzQ0Q7Ozs7Ozs7O09BUUc7SUFDSSx5QkFBTSxHQUFHLFVBQUMsWUFBMEIsRUFBRSxNQUE0QixFQUFFLFdBQXlCO1FBQXpCLDhDQUF5QjtRQUN4RixrQ0FBTyxDQUFrQjtRQUNqQyxJQUFNLE9BQU8sR0FBRyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRXZGLHlGQUF5RjtRQUN6RixJQUFJLGtCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDckIsT0FBTyxFQUFFLENBQUMsS0FBSztpQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNiLEdBQUcsQ0FBQyxVQUFDLE9BQW9CLElBQUsseUJBQWtCLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQTdELENBQTZELENBQUM7aUJBQzVGLE1BQU0sQ0FBQyxVQUFDLENBQWMsSUFBSyxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLGNBQWMsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFaEYsSUFBSSxjQUFjLENBQUMsSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPOztZQUNwQyxPQUFPLGNBQWMsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFtQk4seUJBQUM7Q0FBQTtrQkEzRm9CLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QyxpRkFBbUU7QUFFbkU7Ozs7R0FJRztBQUNIO0lBTUk7Ozs7Ozs7T0FPRztJQUNILDRCQUNJLFlBQTBCLEVBQzFCLE9BQW9CLEVBQ3BCLFlBQWlDLEVBQ2pDLFlBQTBCO1FBQTFCLGdEQUEwQjtRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFDM0IsZ0NBQXlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUNuRSxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQU9ELHNCQUFJLHVDQUFPO1FBTFg7Ozs7V0FJRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSSw0Q0FBeUIsR0FBRyxVQUMvQixZQUEwQixFQUMxQixPQUFpQixFQUNqQixZQUFpQyxFQUNqQyxZQUEwQjtRQUExQixnREFBMEI7UUFFMUIsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksS0FBSyxHQUFzQixFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQXVCLEVBQUUsQ0FBQztRQUVwQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBbUI7WUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQzs7Z0JBQ25GLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMzRixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxLQUFLLFNBQUUsTUFBTSxVQUFFLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBQ04seUJBQUM7Q0FBQTtBQS9EcUIsZ0RBQWtCO0FBaUV4Qzs7Ozs7R0FLRztBQUNIO0lBQXFDLG1DQUFrQjtJQUNuRDs7Ozs7OztPQU9HO0lBQ0gseUJBQ0ksWUFBMEIsRUFDMUIsT0FBZ0QsRUFDaEQsWUFBaUMsRUFDakMsWUFBMEI7UUFBMUIsZ0RBQTBCO1FBSjlCLGlCQWNDO1FBUkcsSUFBSSxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLEtBQUs7aUJBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pCLEdBQUcsQ0FBQyxVQUFDLFFBQXFCLElBQUssV0FBSSxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLEVBQXRFLENBQXNFLENBQUM7aUJBQ3RHLE1BQU0sQ0FBQyxVQUFDLENBQWMsSUFBSyxRQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCwwQkFBTSxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFDOztJQUNwRSxDQUFDO0lBTUQsc0JBQUksbUNBQU07UUFJVjs7OztXQUlHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQy9CLENBQUM7UUFmRDs7O1dBR0c7YUFDSCxVQUFXLFFBQWlCO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQVVMLHNCQUFDO0FBQUQsQ0FBQyxDQXpDb0Msa0JBQWtCLEdBeUN0RDtBQXpDWSwwQ0FBZTtBQTJDNUI7Ozs7O0dBS0c7QUFDSDtJQUFzQyxvQ0FBa0I7SUFNcEQ7Ozs7Ozs7T0FPRztJQUNILDBCQUNJLFlBQTBCLEVBQzFCLE9BQWdELEVBQ2hELFlBQWlDLEVBQ2pDLFdBQXlCO1FBQXpCLDhDQUF5QjtRQUo3QixpQkErQkM7UUF6QkcsSUFBSSxpQkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLEtBQUs7aUJBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pCLEdBQUcsQ0FBQyxVQUFDLFFBQXFCLElBQUssV0FBSSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsRUFBdEUsQ0FBc0UsQ0FBQztpQkFDdEcsTUFBTSxDQUFDLFVBQUMsQ0FBYyxJQUFLLFFBQUMsRUFBRCxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUVELDBCQUFNLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxTQUFDO1FBRXhELElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRXRHLElBQUksV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLGlCQUFlLEtBQUksQ0FBQyxTQUFTLFlBQVMsRUFBRTtZQUN0RSxPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRTtnQkFDSixNQUFNLEVBQUUsS0FBSTtnQkFDWixLQUFLLEVBQUUsY0FBTSxPQUFDLEtBQUksQ0FBQyxPQUE0QixDQUFDLEtBQUssRUFBeEMsQ0FBd0M7YUFDeEQ7U0FDSixDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEYsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRixPQUFPLEtBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHlDQUFjLEdBQXRCLFVBQXVCLGFBQXFCLEVBQUUsTUFBd0I7UUFDbEUsSUFBSSxhQUFhLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQU9ELHNCQUFJLHlDQUFXO1FBTGY7Ozs7V0FJRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLENBeEVxQyxrQkFBa0IsR0F3RXZEO0FBeEVZLDRDQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDdkk3QixpRkFBcUQ7QUFDckQsNkdBQXNEO0FBT3RELFNBQWdCLElBQUksQ0FBQyxRQUE2QixFQUFFLFdBQXFCLEVBQUUsT0FBMEM7SUFBaEcsZ0RBQTZCO0lBQXlCLDRDQUEwQztJQUNqSCxJQUFNLGNBQWMsR0FBRyw0QkFBa0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLG9CQUFFLE9BQU8sV0FBRSxjQUFjLHlCQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hILElBQU0sZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqRyxJQUFNLGNBQWMsR0FBc0IsRUFBRSxDQUFDO0lBQzdDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQThCO1FBQ3BELGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxjQUFjLENBQUM7QUFDMUIsQ0FBQztBQVRELG9CQVNDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixTQUFTLENBQUMsT0FBb0IsRUFBRSxXQUFvQixFQUFFLGNBQXVCO0lBQ3pGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFnQixFQUFFLEdBQUc7UUFDNUQsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFRLEdBQUcsQ0FBQyxXQUFXLEVBQUksQ0FBQyxDQUFDO1FBRXBFLElBQUksU0FBUyxLQUFLLElBQUk7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQzVDLElBQUksR0FBRyxJQUFJLFdBQVc7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNYLENBQUM7QUFWRCw4QkFVQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJZLHNCQUFjLEdBQVk7SUFDbkMsY0FBYyxFQUFFO1FBQ1osSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsUUFBUSxFQUFFLDJCQUEyQjtLQUN4QztJQUNELFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsS0FBSyxFQUFFLGVBQWU7UUFDdEIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLGdCQUFnQjtLQUMzQjtJQUNELFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQztDQUN4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkYsa0ZBQW1EO0FBR25EOzs7Ozs7R0FNRztBQUNILFNBQWdCLHlCQUF5QixDQUFDLFVBQXdCLEVBQUUsT0FBeUI7SUFDekYsSUFBTSxJQUFJLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBQ2pGLElBQUksWUFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksYUFBYSxHQUFHLGdDQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDOUQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RDtLQUNKO0lBQ0QsT0FBTyxZQUFZLENBQUM7QUFDeEIsQ0FBQztBQVpELDhEQVlDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJGLDZFQUF5QjtBQUN6Qix1RUFBc0I7QUFDdEIsbUZBQTRCO0FBQzVCLG1GQUE0QjtBQUM1QiwrRkFBa0M7Ozs7Ozs7Ozs7Ozs7OztBQ0psQzs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsdUJBQXVCLENBQUMsS0FBYSxFQUFFLElBQWlCO0lBQWpCLGdDQUFpQjtJQUNwRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFJLE9BQU8sR0FBRyxRQUFRLEdBQUcsSUFBSSxHQUFHLDRCQUE0QixDQUFDO0lBQzdELElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFFLEVBQUU7UUFDbEMsT0FBTyxPQUFPLEVBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDBEQU9DOzs7Ozs7Ozs7Ozs7Ozs7QUNmRDs7Ozs7R0FLRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxLQUFVO0lBQ2pDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2RCxPQUFPLENBQ0gsT0FBTyxLQUFLLEtBQUssUUFBUTtRQUN6QiwrQ0FBK0MsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hFLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRO1FBQ2hDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNsRixDQUFDO0FBQ04sQ0FBQztBQVRELGdDQVNDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRmFudGFGaWx0ZXJcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRmFudGFGaWx0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmFudGFGaWx0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtcclxuICAgIGlGYW50YUZpbHRlcldyYXBwZXIsXHJcbiAgICBPcHRpb25zLFxyXG4gICAgaUZhbnRhRmlsdGVyRWxlbWVudCxcclxuICAgIGlGYW50YUZpbHRlcklucHV0LFxyXG4gICAgaUZhbnRhRmlsdGVySXRlbSxcclxuICAgIERlcGVuZGVuY2llcyxcclxuICAgIGlGaWx0ZXJHcm91cCxcclxufSBmcm9tICcuL2xpYi9pbnRlcmZhY2VzL2luZGV4JztcclxuaW1wb3J0IHsgRmFudGFGaWx0ZXJJdGVtLCBGYW50YUZpbHRlckVsZW1lbnQsIEZhbnRhRmlsdGVySW5wdXQgfSBmcm9tICcuL2ZhbnRhRmlsdGVyRWxlbWVudCc7XHJcbmltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tICcuL2xpYi91dGlsL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBkYXRhLWZhbnRhZmlsdGVyLWdyb3VwXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gKiBAaW1wbGVtZW50cyB7aUZhbnRhRmlsdGVyV3JhcHBlcn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhbnRhRmlsdGVyV3JhcHBlciBpbXBsZW1lbnRzIGlGYW50YUZpbHRlcldyYXBwZXIge1xyXG4gICAgZmlsdGVyR3JvdXA6IGlGaWx0ZXJHcm91cDtcclxuICAgIGlucHV0czogaUZhbnRhRmlsdGVySW5wdXRbXTtcclxuICAgIGl0ZW1zOiBpRmFudGFGaWx0ZXJJdGVtW107XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBPcHRpb25zO1xyXG4gICAgcGFyZW50Tm9kZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBzdGF0aWMgQ3VycmVudEZpbHRlcnM6IEZhbnRhRmlsdGVyV3JhcHBlcltdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGYW50YUZpbHRlcldyYXBwZXIuXHJcbiAgICAgKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzIFZhcmlhYmxlcyBwYXNzZWQgaW4gZnJvbSBoaWdoZXIgY29udGV4dFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2VsZWN0b3IgQSBkYXRhLWZhbnRhZmlsdGVyLWdyb3VwIHJvb3Qgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge09wdGlvbnN9IFt1c2VyT3B0aW9ucz17fV0gT3B0aW9uYWwgdXNlciBvdmVycmlkZSBvcHRpb25zXHJcbiAgICAgKiBAbWVtYmVyb2YgRmFudGFGaWx0ZXJXcmFwcGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLCBzZWxlY3RvcjogSFRNTEVsZW1lbnQsIHVzZXJPcHRpb25zOiBPcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpZ3VyZSwgY29udGV4dCwgZGVmYXVsdE9wdGlvbnMgfSA9IGRlcGVuZGVuY2llcztcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gY29uZmlndXJlKHNlbGVjdG9yLCB1c2VyT3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IHNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHNlbGVjdG9yLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuYXR0cmlidXRlTmFtZXMuZ3JvdXApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcGFyZW50IG5vZGUgZG9lc24ndCBoYXZlIHRoZSBzcGVjaWZpZWQgZ3JvdXAgYXR0cmlidXRlIG9yIGEgZmlsdGVyIHdpdGggdGhlIHNwZWNpZmllZCBncm91cCBhbHJlYWR5IGV4aXN0cywgY2FuY2VsIGZhY3RvcnkgZnVuY3Rpb25cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFzZWxlY3Rvci5oYXNBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLmdyb3VwKSB8fFxyXG4gICAgICAgICAgICAoRmFudGFGaWx0ZXJXcmFwcGVyLkN1cnJlbnRGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIEZhbnRhRmlsdGVyV3JhcHBlci5DdXJyZW50RmlsdGVycy5maW5kKChmaWx0ZXI6IEZhbnRhRmlsdGVyV3JhcHBlcikgPT4gZmlsdGVyLm5hbWUgPT09IHRoaXMubmFtZSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IEZhbnRhRmlsdGVyRWxlbWVudC5jcmVhdGVGYW50YUZpbHRlckVsZW1lbnRzKFxyXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLmdyb3VwfT0ke3RoaXMubmFtZX1dYCksXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXJPcHRpb25zLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gZWxlbWVudHMuaW5wdXRzO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBlbGVtZW50cy5pdGVtcztcclxuXHJcbiAgICAgICAgaWYgKEZhbnRhRmlsdGVyV3JhcHBlci5DdXJyZW50RmlsdGVycyA9PT0gdW5kZWZpbmVkKSBGYW50YUZpbHRlcldyYXBwZXIuQ3VycmVudEZpbHRlcnMgPSBbXTtcclxuICAgICAgICBGYW50YUZpbHRlcldyYXBwZXIuQ3VycmVudEZpbHRlcnMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgbWV0aG9kIHRoYXQgd3JhcHMgdGhlIGRlZmF1bHQgY29uc3RydWN0b3IgdG8gcmV0dXJuIG51bGwgaWYgYW4gb2JqZWN0IGlzIG1hbGZvcm1lZC9pbnZhbGlkLlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llcyBWYXJpYWJsZXMgcGFzc2VkIGluIGZyb20gaGlnaGVyIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBzdHJpbmd9IHRhcmdldCBTdHJpbmcgc2VsZWN0b3IgcmVwcmVzZW50aW5nIGEgZGF0YS1mYW50YWZpbHRlci1ncm91cCBIVE1MIHJvb3Qgb2JqZWN0LCBvciB0aGUgb2JqZWN0IGl0c2VsZlxyXG4gICAgICogQHBhcmFtIHtPcHRpb25zfSBbdXNlck9wdGlvbnM9e31dIE9wdGlvbmFsIHVzZXIgb3ZlcnJpZGUgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgQSBjb21wbGV0ZWQgRmFudGFGaWx0ZXJXcmFwcGVyIG9iamVjdCBvciBvYmplY3RzLiBOdWxsIGlmIG9iamVjdCBpcyBpbnZhbGlkLlxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlID0gKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLCB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB1c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBkZXBlbmRlbmNpZXM7XHJcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHR5cGVvZiB0YXJnZXQgPT09IGBzdHJpbmdgID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkgOiB0YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIElmIG11bHRpcGxlIHBhcmVudCBub2RlcywgY3JlYXRlIG11bHRpcGxlIEZhbnRhRmlsdGVyV3JhcHBlcnMgYW5kIHJldHVybiB0aG9zZSBpbnN0ZWFkXHJcbiAgICAgICAgaWYgKGlzTm9kZUxpc3QocGFyZW50cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgICAgICAuY2FsbChwYXJlbnRzKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IEZhbnRhRmlsdGVyV3JhcHBlci5jcmVhdGUoZGVwZW5kZW5jaWVzLCBlbGVtZW50LCB1c2VyT3B0aW9ucykpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh4OiBIVE1MRWxlbWVudCkgPT4geCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3RmFudGFGaWx0ZXIgPSBuZXcgRmFudGFGaWx0ZXJXcmFwcGVyKGRlcGVuZGVuY2llcywgcGFyZW50cywgdXNlck9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmFudGFGaWx0ZXIubmFtZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ld0ZhbnRhRmlsdGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgdGhpcyBGYW50YUZpbHRlcldyYXBwZXIgY29udGFpbnMgaW5wdXQgZWxlbWVudHNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0lucHV0cygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmlucHV0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIHRoaXMgRmFudGFGaWx0ZXJXcmFwcGVyIGNvbnRhaW5zIGl0ZW0gZWxlbWVudHNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0l0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuaXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBEZXBlbmRlbmNpZXMsXHJcbiAgICBpRmFudGFGaWx0ZXJFbGVtZW50LFxyXG4gICAgaUZhbnRhRmlsdGVySW5wdXQsXHJcbiAgICBpRmFudGFGaWx0ZXJJdGVtLFxyXG4gICAgaUZhbnRhRmlsdGVyV3JhcHBlcixcclxuICAgIE9wdGlvbnMsXHJcbn0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGlzTm9kZUxpc3QsIGNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QgfSBmcm9tICcuL2xpYi91dGlsJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQW4gYWJzdHJhY3QgY2xhc3MgdG8gYmUgaW1wbGVtZW50ZWQgYnkgc3BlY2lmaWMgRmFudGFGaWx0ZXIgc3VidHlwZXMgcmVwcmVzZW50aW5nIHZhcmlvdXMgSFRNTCBlbGVtZW50c1xyXG4gKiBAY2xhc3MgRmFudGFGaWx0ZXJFbGVtZW50XHJcbiAqIEBpbXBsZW1lbnRzIHtpRmFudGFGaWx0ZXJFbGVtZW50fVxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZhbnRhRmlsdGVyRWxlbWVudCBpbXBsZW1lbnRzIGlGYW50YUZpbHRlckVsZW1lbnQge1xyXG4gICAgYXR0cmlidXRlczogb2JqZWN0O1xyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBncm91cE5hbWU6IHN0cmluZztcclxuICAgIG9wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZhbnRhRmlsdGVyRWxlbWVudC5cclxuICAgICAqIEBwYXJhbSB7RGVwZW5kZW5jaWVzfSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldHNcclxuICAgICAqIEBwYXJhbSB7aUZhbnRhRmlsdGVyV3JhcHBlcn0gcGFyZW50RmlsdGVyXHJcbiAgICAgKiBAcGFyYW0ge09wdGlvbnN9IFtfdXNlck9wdGlvbnM9e31dXHJcbiAgICAgKiBAbWVtYmVyb2YgRmFudGFGaWx0ZXJFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLFxyXG4gICAgICAgIHRhcmdldHM6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBhcmVudEZpbHRlcjogaUZhbnRhRmlsdGVyV3JhcHBlcixcclxuICAgICAgICBfdXNlck9wdGlvbnM6IE9wdGlvbnMgPSB7fSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVwZW5kZW5jaWVzLmRlZmF1bHRPcHRpb25zLCBfdXNlck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcGFyZW50RmlsdGVyLm5hbWU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGFyZ2V0cztcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXR0cmlidXRlTmFtZXMsXHJcbiAgICAgICAgICAgIGNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QodGhpcy5lbGVtZW50LmF0dHJpYnV0ZXMsIHRoaXMub3B0aW9ucyksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0cmlldmVzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZWxlbWVudCdzIEhUTUwgZWxlbWVudCB0YWdcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBnZXQgdGFnTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBGYW50YUZpbHRlckVsZW1lbnQgZGVyaXZhdGl2ZXMgZnJvbSBhIE5vZGVMaXN0IG9mIEhUTUxFbGVtZW50c1xyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlRmFudGFGaWx0ZXJFbGVtZW50cyA9IGZ1bmN0aW9uKFxyXG4gICAgICAgIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLFxyXG4gICAgICAgIHRhcmdldHM6IE5vZGVMaXN0LFxyXG4gICAgICAgIHBhcmVudEZpbHRlcjogaUZhbnRhRmlsdGVyV3JhcHBlcixcclxuICAgICAgICBfdXNlck9wdGlvbnM6IE9wdGlvbnMgPSB7fSxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZXBlbmRlbmNpZXMuZGVmYXVsdE9wdGlvbnMsIF91c2VyT3B0aW9ucyk7XHJcbiAgICAgICAgbGV0IGl0ZW1zOiBGYW50YUZpbHRlckl0ZW1bXSA9IFtdO1xyXG4gICAgICAgIGxldCBpbnB1dHM6IEZhbnRhRmlsdGVySW5wdXRbXSA9IFtdO1xyXG5cclxuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5wdXRUeXBlcy5pbmNsdWRlcyh0YXJnZXQudGFnTmFtZSkpXHJcbiAgICAgICAgICAgICAgICBpbnB1dHMucHVzaChuZXcgRmFudGFGaWx0ZXJJbnB1dChkZXBlbmRlbmNpZXMsIHRhcmdldCwgcGFyZW50RmlsdGVyLCBfdXNlck9wdGlvbnMpKTtcclxuICAgICAgICAgICAgZWxzZSBpdGVtcy5wdXNoKG5ldyBGYW50YUZpbHRlckl0ZW0oZGVwZW5kZW5jaWVzLCB0YXJnZXQsIHBhcmVudEZpbHRlciwgX3VzZXJPcHRpb25zKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGl0ZW1zLCBpbnB1dHMgfTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQSBjbGFzcyByZXByZXNlbnRpbmcgYW55IGZpbHRlcmFibGUgSFRNTCBlbGVtZW50XHJcbiAqIEBjbGFzcyBGYW50YUZpbHRlckl0ZW1cclxuICogQGV4dGVuZHMge0ZhbnRhRmlsdGVyRWxlbWVudH1cclxuICogQGltcGxlbWVudHMge2lGYW50YUZpbHRlckl0ZW19XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmFudGFGaWx0ZXJJdGVtIGV4dGVuZHMgRmFudGFGaWx0ZXJFbGVtZW50IGltcGxlbWVudHMgaUZhbnRhRmlsdGVySXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGYW50YUZpbHRlckl0ZW0uXHJcbiAgICAgKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzXHJcbiAgICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IEhUTUxDb2xsZWN0aW9uIHwgTm9kZUxpc3QpfSB0YXJnZXRzXHJcbiAgICAgKiBAcGFyYW0ge2lGYW50YUZpbHRlcldyYXBwZXJ9IHBhcmVudEZpbHRlclxyXG4gICAgICogQHBhcmFtIHtPcHRpb25zfSBbX3VzZXJPcHRpb25zPXt9XVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySXRlbVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyxcclxuICAgICAgICB0YXJnZXRzOiBIVE1MRWxlbWVudCB8IEhUTUxDb2xsZWN0aW9uIHwgTm9kZUxpc3QsXHJcbiAgICAgICAgcGFyZW50RmlsdGVyOiBpRmFudGFGaWx0ZXJXcmFwcGVyLFxyXG4gICAgICAgIF91c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGlzTm9kZUxpc3QodGFyZ2V0cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgICAgICAuY2FsbChBcnJheS5mcm9tKHRhcmdldHMpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoX2VsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuZXcgRmFudGFGaWx0ZXJJdGVtKGRlcGVuZGVuY2llcywgdGFyZ2V0cywgcGFyZW50RmlsdGVyLCBfdXNlck9wdGlvbnMpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeDogSFRNTEVsZW1lbnQpID0+IHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIoZGVwZW5kZW5jaWVzLCB0YXJnZXRzLCBwYXJlbnRGaWx0ZXIsIChfdXNlck9wdGlvbnMgPSB7fSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFNldHMgdGhlICdoaWRkZW4nIGF0dHJpYnV0ZSBvZiB0aGUgSFRNTCBlbGVtZW50IG9mIHRoaXMgRmFudGFGaWx0ZXJFbGVtZW50XHJcbiAgICAgKiBAbWVtYmVyb2YgRmFudGFGaWx0ZXJJdGVtXHJcbiAgICAgKi9cclxuICAgIHNldCBoaWRkZW4oaXNIaWRkZW46IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gaXNIaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgJ2hpZGRlbicgYXR0cmlidXRlIG9mIHRoZSBIVE1MIGVsZW1lbnQgb2YgdGhpcyBGYW50YUZpbHRlckVsZW1lbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySXRlbVxyXG4gICAgICovXHJcbiAgICBnZXQgaGlkZGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIEEgY2xhc3MgcmVwcmVzZW50aW5nIGFueSBIVE1MIGlucHV0cyB0aGF0IG1hbmlwdWxhdGUgYSBGYW50YUZpbHRlcldyYXBwZXJcclxuICogQGNsYXNzIEZhbnRhRmlsdGVySW5wdXRcclxuICogQGV4dGVuZHMge0ZhbnRhRmlsdGVyRWxlbWVudH1cclxuICogQGltcGxlbWVudHMge2lGYW50YUZpbHRlcklucHV0fVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZhbnRhRmlsdGVySW5wdXQgZXh0ZW5kcyBGYW50YUZpbHRlckVsZW1lbnQgaW1wbGVtZW50cyBpRmFudGFGaWx0ZXJJbnB1dCB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBjb21wYXJlcjogc3RyaW5nO1xyXG4gICAgc2VsZWN0b3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VwZGF0ZUV2ZW50PzogQ3VzdG9tRXZlbnQ8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGYW50YUZpbHRlcklucHV0LlxyXG4gICAgICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llc1xyXG4gICAgICogQHBhcmFtIHsoSFRNTEVsZW1lbnQgfCBIVE1MQ29sbGVjdGlvbiB8IE5vZGVMaXN0KX0gdGFyZ2V0c1xyXG4gICAgICogQHBhcmFtIHtpRmFudGFGaWx0ZXJXcmFwcGVyfSBwYXJlbnRGaWx0ZXJcclxuICAgICAqIEBwYXJhbSB7T3B0aW9uc30gW3VzZXJPcHRpb25zPXt9XVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySW5wdXRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgdGFyZ2V0czogSFRNTEVsZW1lbnQgfCBIVE1MQ29sbGVjdGlvbiB8IE5vZGVMaXN0LFxyXG4gICAgICAgIHBhcmVudEZpbHRlcjogaUZhbnRhRmlsdGVyV3JhcHBlcixcclxuICAgICAgICB1c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGlzTm9kZUxpc3QodGFyZ2V0cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgICAgICAuY2FsbChBcnJheS5mcm9tKHRhcmdldHMpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoX2VsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuZXcgRmFudGFGaWx0ZXJJbnB1dChkZXBlbmRlbmNpZXMsIHRhcmdldHMsIHBhcmVudEZpbHRlciwgdXNlck9wdGlvbnMpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeDogSFRNTEVsZW1lbnQpID0+IHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIoZGVwZW5kZW5jaWVzLCB0YXJnZXRzLCBwYXJlbnRGaWx0ZXIsIHVzZXJPcHRpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBkZXBlbmRlbmNpZXMud2luZG93ICE9PSB1bmRlZmluZWQgPyBkZXBlbmRlbmNpZXMud2luZG93LkN1c3RvbUV2ZW50IDogQ3VzdG9tRXZlbnQ7XHJcblxyXG4gICAgICAgIGxldCB1cGRhdGVFdmVudCA9IG5ldyBjdXN0b21FdmVudChgZmFmaS5maWx0ZXIuJHt0aGlzLmdyb3VwTmFtZX0udXBkYXRlYCwge1xyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgIHNlbmRlcjogdGhpcyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoKSA9PiAodGhpcy5lbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFVwZGF0ZUV2ZW50KCdpbnB1dCcsIHVwZGF0ZUV2ZW50KTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLnNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmNvbXBhcmVyID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuYXR0cmlidXRlTmFtZXMuY29tcGFyZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBZGRzIGFuIHVwZGF0ZSBldmVudCBoYW5kbGVyIHRvIGEgRmFudGFGaWx0ZXJJbnB1dCBhbmQgaXRzIEhUTUwgZWxlbWVudFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBfZXZlbnRUcmlnZ2VyIE5hbWUgb2YgZXZlbnQgdG8gYmUgaGFuZGxlZFxyXG4gICAgICogQHBhcmFtIHtDdXN0b21FdmVudDxhbnk+fSBfZXZlbnQgQ2FsbGJhY2sgZnVuY3Rpb24gb2YgZXZlbnRcclxuICAgICAqIEByZXR1cm5zIFRoaXMgRmFudGFGaWx0ZXJFbGVtZW50J3MgVXBkYXRlRXZlbnRcclxuICAgICAqIEBtZW1iZXJvZiBGYW50YUZpbHRlcklucHV0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0VXBkYXRlRXZlbnQoX2V2ZW50VHJpZ2dlcjogc3RyaW5nLCBfZXZlbnQ6IEN1c3RvbUV2ZW50PGFueT4pIHtcclxuICAgICAgICBpZiAoX2V2ZW50VHJpZ2dlciAhPT0gdW5kZWZpbmVkICYmIF9ldmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKF9ldmVudFRyaWdnZXIsIGUgPT4gZS50YXJnZXQuZGlzcGF0Y2hFdmVudChfZXZlbnQpKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRXZlbnQgPSBfZXZlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGlzIEZhbnRhRmlsdGVyRWxlbWVudCdzIFVwZGF0ZUV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBGYW50YUZpbHRlcklucHV0XHJcbiAgICAgKi9cclxuICAgIGdldCB1cGRhdGVFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlRXZlbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjb25maWd1cmUsIGRlZmF1bHRPcHRpb25zfSBmcm9tICcuL2xpYi91dGlsJztcclxuaW1wb3J0IEZhbnRhRmlsdGVyV3JhcHBlciBmcm9tICcuL0ZhbnRhRmlsdGVyV3JhcHBlcic7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL2xpYi9pbnRlcmZhY2VzJztcclxuXHJcbmludGVyZmFjZSBGYW50YUZpbHRlck9iamVjdCB7XHJcbiAgICBba2V5OnN0cmluZ106RmFudGFGaWx0ZXJXcmFwcGVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0KHNlbGVjdG9yOiBzdHJpbmcgPSAnLmpzLWZhZmknLCB1c2VyT3B0aW9ucz86IE9wdGlvbnMsIGNvbnRleHQ6IEhUTUxFbGVtZW50IHwgRG9jdW1lbnQgPSBkb2N1bWVudCkge1xyXG4gICAgY29uc3QgbmV3RmFudGFGaWx0ZXIgPSBGYW50YUZpbHRlcldyYXBwZXIuY3JlYXRlKHsgY29uZmlndXJlLCBjb250ZXh0LCBkZWZhdWx0T3B0aW9ucyB9LCBzZWxlY3RvciwgdXNlck9wdGlvbnMpO1xyXG4gICAgY29uc3QgZmFudGFGaWx0ZXJBcnJheSA9IG5ld0ZhbnRhRmlsdGVyLmxlbmd0aCAhPT0gdW5kZWZpbmVkID8gbmV3RmFudGFGaWx0ZXIgOiBbbmV3RmFudGFGaWx0ZXJdO1xyXG4gICAgY29uc3QgZmFudGFGaWx0ZXJPYmo6IEZhbnRhRmlsdGVyT2JqZWN0ID0ge307XHJcbiAgICBmYW50YUZpbHRlckFycmF5LmZvckVhY2goKGZhbnRhRmlsdGVyOkZhbnRhRmlsdGVyV3JhcHBlcikgPT4ge1xyXG4gICAgICAgIGZhbnRhRmlsdGVyT2JqW2ZhbnRhRmlsdGVyLm5hbWVdID0gZmFudGFGaWx0ZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFudGFGaWx0ZXJPYmo7XHJcbn07IiwiaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0ludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBNZXJnZXMgZGVmYXVsdC91c2VyIG9wdGlvbnMgYW5kIGZpbmRzIG5ldyBhdHRyaWJ1dGVzIG9uIGFuIEhUTUwgZWxlbWVudC5cclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdG8gc2VhcmNoIGZvciBuZXcgYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0ge09wdGlvbnN9IHVzZXJPcHRpb25zIEN1c3RvbWl6ZWQgdXNlciBvcHRpb25zIHRvIGNvbXBhcmVcclxuICogQHBhcmFtIHtPcHRpb25zfSBkZWZhdWx0T3B0aW9ucyBEZWZhdWx0IG9wdGlvbnMgdG8gY29tcGFyZVxyXG4gKiBAcmV0dXJucyB7T3B0aW9uc30gQSBmaW5hbGl6ZWQgT3B0aW9ucyBvYmplY3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoZWxlbWVudDogSFRNTEVsZW1lbnQsIHVzZXJPcHRpb25zOiBPcHRpb25zLCBkZWZhdWx0T3B0aW9uczogT3B0aW9ucyk6IE9wdGlvbnMge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZmF1bHRPcHRpb25zKS5yZWR1Y2UoKG9wdGlvbnM6IE9wdGlvbnMsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7a2V5LnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgICAgIGlmIChhdHRyVmFsdWUgIT09IG51bGwpIG9wdGlvbnNba2V5XSA9IGF0dHJWYWx1ZTtcclxuICAgICAgICBlbHNlIGlmIChrZXkgaW4gdXNlck9wdGlvbnMpIG9wdGlvbnNba2V5XSA9IHVzZXJPcHRpb25zW2tleV07XHJcbiAgICAgICAgZWxzZSBvcHRpb25zW2tleV0gPSBkZWZhdWx0T3B0aW9uc1trZXldO1xyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH0sIHt9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnSW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE9wdGlvbnMgPSB7XHJcbiAgICBhdHRyaWJ1dGVOYW1lczoge1xyXG4gICAgICAgIHJvb3Q6ICdkYXRhLWZhbnRhZmlsdGVyJyxcclxuICAgICAgICBncm91cDogJ2RhdGEtZmFudGFmaWx0ZXItZ3JvdXAnLFxyXG4gICAgICAgIHNlbGVjdG9yOiAnZGF0YS1mYW50YWZpbHRlci1zZWxlY3RvcicsXHJcbiAgICAgICAgY29tcGFyZXI6ICdkYXRhLWZhbnRhZmlsdGVyLWNvbXBhcmVyJyxcclxuICAgIH0sXHJcbiAgICBjbGFzc05hbWVzOiB7XHJcbiAgICAgICAgcGFyZW50OiAnanMtZmFmaS1wYXJlbnQnLFxyXG4gICAgICAgIGlucHV0OiAnanMtZmFmaS1pbnB1dCcsXHJcbiAgICAgICAgaXRlbTogJ2pzLWZhZmktaXRlbScsXHJcbiAgICAgICAgaGlkZGVuOiAnanMtZmFmaS1oaWRkZW4nLFxyXG4gICAgfSxcclxuICAgIGlucHV0VHlwZXM6IFsnSU5QVVQnXSxcclxufTsiLCJpbXBvcnQgeyBjb252ZXJ0S2ViYWJUb0NhbWVsQ2FzZSB9IGZyb20gJy4vc3RyaW5nJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0ludGVyZmFjZXMnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBDb252ZXJ0cyBhIE5hbWVkTm9kZU1hcCBvZiBhdHRyaWJ1dGVzIHRvIGFuIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge05hbWVkTm9kZU1hcH0gYXR0cmlidXRlcyBOYW1lZE5vZGVNYXAgdG8gYmUgY29udmVydGVkXHJcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IHN0cmluZ30gb3B0aW9ucyBEZWZhdWx0IG9wdGlvbnMgZnJvbSB3aGljaCB0byByZXRyaWV2ZSB0aGUgcm9vdCBkYXRhIGF0dHJpYnV0ZSB0ZW1wbGF0ZSwgb3IgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0ZW1wbGF0ZSBpdHNlbGZcclxuICogQHJldHVybnMgQW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgTmFtZWROb2RlTWFwXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEF0dHJpYnV0ZXNUb09iamVjdChhdHRyaWJ1dGVzOiBOYW1lZE5vZGVNYXAsIG9wdGlvbnM6IE9wdGlvbnMgfCBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJvb3QgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogb3B0aW9ucy5hdHRyaWJ1dGVOYW1lcy5yb290O1xyXG4gICAgbGV0IG91dHB1dE9iamVjdCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgYXR0ciA9IGF0dHJpYnV0ZXMuaXRlbShpKS5uYW1lO1xyXG4gICAgICAgIGlmIChhdHRyLm1hdGNoKHJvb3QpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb252ZXJ0ZWROYW1lID0gY29udmVydEtlYmFiVG9DYW1lbENhc2UoYXR0ciwgcm9vdCArICctJyk7XHJcbiAgICAgICAgICAgIG91dHB1dE9iamVjdC5zZXQoY29udmVydGVkTmFtZSwgYXR0cmlidXRlcy5pdGVtKGkpLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0T2JqZWN0O1xyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9kb20nO1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGV0ZXN0cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlndXJlJztcclxuZXhwb3J0ICogZnJvbSAnLi9kZWZhdWx0LW9wdGlvbnMnOyIsIi8qKlxyXG4gKiBDb252ZXJ0cyBhIEtlYmFiQ2FzZSBzdHJpbmcgdG8gQ2FtZWxDYXNlIGFuZCByZXR1cm5zIGl0XHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IEtlYmFiQ2FzZSBzdHJpbmcgdG8gYmUgY29udmVydGVkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcm9vdD0nJ10gUm9vdCB0ZXJtIHRvIGJlIG1hdGNoZWQvcmVtb3ZlZFxyXG4gKiBAcmV0dXJucyBBIENhbWVsQ2FzZSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0S2ViYWJUb0NhbWVsQ2FzZShpbnB1dDogc3RyaW5nLCByb290OiBzdHJpbmcgPSAnJykge1xyXG4gICAgcm9vdCA9IHJvb3QubGVuZ3RoID4gMCA/IHJvb3QgKyAnfCcgOiByb290O1xyXG4gICAgbGV0IHJlcGxhY2UgPSAnKD86KD86JyArIHJvb3QgKyAnKD86XFxcXHZ7MH0pKD86IHwtKShbYS16XSkpKSc7XHJcbiAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHJlcGxhY2UsICdnJyk7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZShyZWdleCwgKG1hdGNoLCBwMSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgcDEgIT09ICd1bmRlZmluZWQnID8gcDEudG9VcHBlckNhc2UoKSA6ICcnO1xyXG4gICAgfSk7XHJcbn0iLCIvKipcclxuICogQGRlc2NyaXB0aW9uIFRlc3RzIGlmIGFuIG9iamVjdCBpcyBhIE5vZGVMaXN0IG9yIEhUTUxDb2xsZWN0aW9uXHJcbiAqIEBleHBvcnRzXHJcbiAqIEBwYXJhbSB7Kn0gbm9kZXMgT2JqZWN0IHRvIGJlIHRlc3RlZFxyXG4gKiBAcmV0dXJucyB7KG5vZGVzIGlzIE5vZGVMaXN0IHwgSFRNTENvbGxlY3Rpb24pfSBUcnVlIGlmIG9iamVjdCBpcyBOb2RlTGlzdC9IVE1MQ29sbGVjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZUxpc3Qobm9kZXM6IGFueSk6IG5vZGVzIGlzIE5vZGVMaXN0IHwgSFRNTENvbGxlY3Rpb24ge1xyXG4gICAgdmFyIHN0cmluZ1JlcHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobm9kZXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdHlwZW9mIG5vZGVzID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgIC9eXFxbb2JqZWN0IChIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdHxPYmplY3QpXFxdJC8udGVzdChzdHJpbmdSZXByKSAmJlxyXG4gICAgICAgIHR5cGVvZiBub2Rlcy5sZW5ndGggPT09ICdudW1iZXInICYmXHJcbiAgICAgICAgKG5vZGVzLmxlbmd0aCA9PT0gMCB8fCAodHlwZW9mIG5vZGVzWzBdID09PSAnb2JqZWN0JyAmJiBub2Rlc1swXS5ub2RlVHlwZSA+IDApKVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=