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
var FantaFilterElement_1 = __webpack_require__(/*! ./lib/elements/FantaFilterElement */ "./src/ts/lib/elements/FantaFilterElement.ts");
var index_1 = __webpack_require__(/*! ./lib/util/index */ "./src/ts/lib/util/index.ts");
/**
 * Class that represents a data-fantafilter-group
 * @export
 * @class FantaFilterWrapper
 * @implements {iFilterWrapper}
 */
var FantaFilterWrapper = /** @class */ (function () {
    /**
     * Creates an instance of FantaFilterWrapper.
     * @param {Dependencies} dependencies Variables passed in from higher context
     * @param {HTMLElement} parentNode A data-fantafilter-group root object
     * @param {Options} [userOptions={}] Optional user override options
     * @memberof FantaFilterWrapper
     */
    function FantaFilterWrapper(dependencies, parentNode, userOptions) {
        var _this = this;
        if (userOptions === void 0) { userOptions = {}; }
        this.parentNode = parentNode;
        var configure = dependencies.configure, context = dependencies.context, defaultOptions = dependencies.defaultOptions;
        this.options = configure(parentNode, userOptions, defaultOptions);
        this.name = parentNode.getAttribute(this.options.attributeNames.group);
        // If the parent node doesn't have the specified group attribute or a filter with the specified group already exists, cancel factory function
        if (!parentNode.hasAttribute(this.options.attributeNames.group) ||
            (FantaFilterWrapper.CurrentFilters !== undefined &&
                FantaFilterWrapper.CurrentFilters.find(function (filter) { return filter.name === _this.name; }))) {
            this.name = null;
            return;
        }
        var elements = FantaFilterElement_1.FantaFilterElement.createFantaFilterElements(dependencies, context.querySelectorAll("[" + this.options.attributeNames.group + "=" + this.name + "]"), this, userOptions);
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

/***/ "./src/ts/lib/elements/FantaFilterElement.ts":
/*!***************************************************!*\
  !*** ./src/ts/lib/elements/FantaFilterElement.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! ../util */ "./src/ts/lib/util/index.ts");
var FantaFilterItem_1 = __webpack_require__(/*! ./FantaFilterItem */ "./src/ts/lib/elements/FantaFilterItem.ts");
var FantaFilterInput_1 = __webpack_require__(/*! ./FantaFilterInput */ "./src/ts/lib/elements/FantaFilterInput.ts");
/**
 * @description An abstract class to be implemented by specific FantaFilter subtypes representing various HTML elements
 * @class FantaFilterElement
 * @implements {iFilterElement}
 */
var FantaFilterElement = /** @class */ (function () {
    /**
     * Creates an instance of FantaFilterElement.
     * @param {Dependencies} dependencies
     * @param {HTMLElement} element
     * @param {iFilterWrapper} parentFilter
     * @param {Options} [_userOptions={}]
     * @memberof FantaFilterElement
     */
    function FantaFilterElement(dependencies, element, parentFilter, _userOptions) {
        if (_userOptions === void 0) { _userOptions = {}; }
        this.element = element;
        this.options = Object.assign(dependencies.defaultOptions, _userOptions);
        this.groupName = parentFilter.name;
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
                inputs.push(new FantaFilterInput_1.FantaFilterInput(dependencies, target, parentFilter, _userOptions));
            else
                items.push(new FantaFilterItem_1.FantaFilterItem(dependencies, target, parentFilter, _userOptions));
        });
        return { items: items, inputs: inputs };
    };
    return FantaFilterElement;
}());
exports.FantaFilterElement = FantaFilterElement;


/***/ }),

/***/ "./src/ts/lib/elements/FantaFilterInput.ts":
/*!*************************************************!*\
  !*** ./src/ts/lib/elements/FantaFilterInput.ts ***!
  \*************************************************/
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
var util_1 = __webpack_require__(/*! ../util */ "./src/ts/lib/util/index.ts");
var FantaFilterElement_1 = __webpack_require__(/*! ./FantaFilterElement */ "./src/ts/lib/elements/FantaFilterElement.ts");
/**
 * @description A class representing any HTML inputs that manipulate a FantaFilterWrapper
 * @class FantaFilterInput
 * @extends {FantaFilterElement}
 * @implements {iFilterInput}
 */
var FantaFilterInput = /** @class */ (function (_super) {
    __extends(FantaFilterInput, _super);
    /**
     *Creates an instance of FantaFilterInput.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFilterWrapper} parentFilter
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
}(FantaFilterElement_1.FantaFilterElement));
exports.FantaFilterInput = FantaFilterInput;


/***/ }),

/***/ "./src/ts/lib/elements/FantaFilterItem.ts":
/*!************************************************!*\
  !*** ./src/ts/lib/elements/FantaFilterItem.ts ***!
  \************************************************/
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
var util_1 = __webpack_require__(/*! ../util */ "./src/ts/lib/util/index.ts");
var FantaFilterElement_1 = __webpack_require__(/*! ./FantaFilterElement */ "./src/ts/lib/elements/FantaFilterElement.ts");
/**
 * @description A class representing any filterable HTML element
 * @class FantaFilterItem
 * @extends {FantaFilterElement}
 * @implements {iFilterItem}
 */
var FantaFilterItem = /** @class */ (function (_super) {
    __extends(FantaFilterItem, _super);
    /**
     *Creates an instance of FantaFilterItem.
     * @param {Dependencies} dependencies
     * @param {(HTMLElement | HTMLCollection | NodeList)} targets
     * @param {iFilterWrapper} parentFilter
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
}(FantaFilterElement_1.FantaFilterElement));
exports.FantaFilterItem = FantaFilterItem;


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
    var replace = "(?:(?:" + root + "(?:\\v{0})(?: |-)([a-z])))";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYW50YUZpbHRlci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvRmFudGFGaWx0ZXJXcmFwcGVyLnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2xpYi9lbGVtZW50cy9GYW50YUZpbHRlckVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL2VsZW1lbnRzL0ZhbnRhRmlsdGVySW5wdXQudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL2VsZW1lbnRzL0ZhbnRhRmlsdGVySXRlbS50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9jb25maWd1cmUudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL0ZhbnRhRmlsdGVyLy4vc3JjL3RzL2xpYi91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9pbmRleC50cyIsIndlYnBhY2s6Ly9GYW50YUZpbHRlci8uL3NyYy90cy9saWIvdXRpbC9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vRmFudGFGaWx0ZXIvLi9zcmMvdHMvbGliL3V0aWwvdHlwZXRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LElBQWlCO0lBQWpCLGdDQUFpQjtJQUNwRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFJLE9BQU8sR0FBRyxXQUFTLElBQUksK0JBQTRCLENBQUM7SUFDeEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsRUFBRTtRQUNsQyxPQUFPLE9BQU8sRUFBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsMERBT0M7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLEtBQVU7SUFDakMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZELE9BQU8sQ0FDSCxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQ3pCLCtDQUErQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEUsT0FBTyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVE7UUFDaEMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ2xGLENBQUM7QUFDTixDQUFDO0FBVEQsZ0NBU0MiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJGYW50YUZpbHRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGYW50YUZpbHRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGYW50YUZpbHRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQge1xyXG4gICAgaUZhbnRhRmlsdGVyV3JhcHBlcixcclxuICAgIE9wdGlvbnMsXHJcbiAgICBpRmFudGFGaWx0ZXJJbnB1dCxcclxuICAgIGlGYW50YUZpbHRlckl0ZW0sXHJcbiAgICBEZXBlbmRlbmNpZXMsXHJcbiAgICBpRmlsdGVyR3JvdXAsXHJcbn0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IEZhbnRhRmlsdGVyRWxlbWVudCB9IGZyb20gJy4vbGliL2VsZW1lbnRzL0ZhbnRhRmlsdGVyRWxlbWVudCc7XHJcbmltcG9ydCB7IGlzTm9kZUxpc3QgfSBmcm9tICcuL2xpYi91dGlsL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBkYXRhLWZhbnRhZmlsdGVyLWdyb3VwXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gKiBAaW1wbGVtZW50cyB7aUZhbnRhRmlsdGVyV3JhcHBlcn1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhbnRhRmlsdGVyV3JhcHBlciBpbXBsZW1lbnRzIGlGYW50YUZpbHRlcldyYXBwZXIge1xyXG4gICAgZmlsdGVyR3JvdXA6IGlGaWx0ZXJHcm91cDtcclxuICAgIGlucHV0czogaUZhbnRhRmlsdGVySW5wdXRbXTtcclxuICAgIGl0ZW1zOiBpRmFudGFGaWx0ZXJJdGVtW107XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvcHRpb25zOiBPcHRpb25zO1xyXG4gICAgc3RhdGljIEN1cnJlbnRGaWx0ZXJzOiBGYW50YUZpbHRlcldyYXBwZXJbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRmFudGFGaWx0ZXJXcmFwcGVyLlxyXG4gICAgICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llcyBWYXJpYWJsZXMgcGFzc2VkIGluIGZyb20gaGlnaGVyIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudE5vZGUgQSBkYXRhLWZhbnRhZmlsdGVyLWdyb3VwIHJvb3Qgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge09wdGlvbnN9IFt1c2VyT3B0aW9ucz17fV0gT3B0aW9uYWwgdXNlciBvdmVycmlkZSBvcHRpb25zXHJcbiAgICAgKiBAbWVtYmVyb2YgRmFudGFGaWx0ZXJXcmFwcGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLCBwdWJsaWMgcGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIHVzZXJPcHRpb25zOiBPcHRpb25zID0ge30pIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpZ3VyZSwgY29udGV4dCwgZGVmYXVsdE9wdGlvbnMgfSA9IGRlcGVuZGVuY2llcztcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gY29uZmlndXJlKHBhcmVudE5vZGUsIHVzZXJPcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gcGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLmdyb3VwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIHBhcmVudCBub2RlIGRvZXNuJ3QgaGF2ZSB0aGUgc3BlY2lmaWVkIGdyb3VwIGF0dHJpYnV0ZSBvciBhIGZpbHRlciB3aXRoIHRoZSBzcGVjaWZpZWQgZ3JvdXAgYWxyZWFkeSBleGlzdHMsIGNhbmNlbCBmYWN0b3J5IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhcGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLmdyb3VwKSB8fFxyXG4gICAgICAgICAgICAoRmFudGFGaWx0ZXJXcmFwcGVyLkN1cnJlbnRGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIEZhbnRhRmlsdGVyV3JhcHBlci5DdXJyZW50RmlsdGVycy5maW5kKChmaWx0ZXI6IEZhbnRhRmlsdGVyV3JhcHBlcikgPT4gZmlsdGVyLm5hbWUgPT09IHRoaXMubmFtZSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IEZhbnRhRmlsdGVyRWxlbWVudC5jcmVhdGVGYW50YUZpbHRlckVsZW1lbnRzKFxyXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLmdyb3VwfT0ke3RoaXMubmFtZX1dYCksXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgIHVzZXJPcHRpb25zLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXRzID0gZWxlbWVudHMuaW5wdXRzO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBlbGVtZW50cy5pdGVtcztcclxuXHJcbiAgICAgICAgaWYgKEZhbnRhRmlsdGVyV3JhcHBlci5DdXJyZW50RmlsdGVycyA9PT0gdW5kZWZpbmVkKSBGYW50YUZpbHRlcldyYXBwZXIuQ3VycmVudEZpbHRlcnMgPSBbXTtcclxuICAgICAgICBGYW50YUZpbHRlcldyYXBwZXIuQ3VycmVudEZpbHRlcnMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgbWV0aG9kIHRoYXQgd3JhcHMgdGhlIGRlZmF1bHQgY29uc3RydWN0b3IgdG8gcmV0dXJuIG51bGwgaWYgYW4gb2JqZWN0IGlzIG1hbGZvcm1lZC9pbnZhbGlkLlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llcyBWYXJpYWJsZXMgcGFzc2VkIGluIGZyb20gaGlnaGVyIGNvbnRleHRcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBzdHJpbmd9IHRhcmdldCBTdHJpbmcgc2VsZWN0b3IgcmVwcmVzZW50aW5nIGEgZGF0YS1mYW50YWZpbHRlci1ncm91cCBIVE1MIHJvb3Qgb2JqZWN0LCBvciB0aGUgb2JqZWN0IGl0c2VsZlxyXG4gICAgICogQHBhcmFtIHtPcHRpb25zfSBbdXNlck9wdGlvbnM9e31dIE9wdGlvbmFsIHVzZXIgb3ZlcnJpZGUgb3B0aW9uc1xyXG4gICAgICogQHJldHVybnMgQSBjb21wbGV0ZWQgRmFudGFGaWx0ZXJXcmFwcGVyIG9iamVjdCBvciBvYmplY3RzLiBOdWxsIGlmIG9iamVjdCBpcyBpbnZhbGlkLlxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlID0gKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLCB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgc3RyaW5nLCB1c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSBkZXBlbmRlbmNpZXM7XHJcbiAgICAgICAgY29uc3QgcGFyZW50cyA9IHR5cGVvZiB0YXJnZXQgPT09IGBzdHJpbmdgID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkgOiB0YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIElmIG11bHRpcGxlIHBhcmVudCBub2RlcywgY3JlYXRlIG11bHRpcGxlIEZhbnRhRmlsdGVyV3JhcHBlcnMgYW5kIHJldHVybiB0aG9zZSBpbnN0ZWFkXHJcbiAgICAgICAgaWYgKGlzTm9kZUxpc3QocGFyZW50cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgICAgICAuY2FsbChwYXJlbnRzKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IEZhbnRhRmlsdGVyV3JhcHBlci5jcmVhdGUoZGVwZW5kZW5jaWVzLCBlbGVtZW50LCB1c2VyT3B0aW9ucykpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh4OiBIVE1MRWxlbWVudCkgPT4geCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3RmFudGFGaWx0ZXIgPSBuZXcgRmFudGFGaWx0ZXJXcmFwcGVyKGRlcGVuZGVuY2llcywgcGFyZW50cywgdXNlck9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAobmV3RmFudGFGaWx0ZXIubmFtZSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIG5ld0ZhbnRhRmlsdGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRydWUgaWYgdGhpcyBGYW50YUZpbHRlcldyYXBwZXIgY29udGFpbnMgaW5wdXQgZWxlbWVudHNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0lucHV0cygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmlucHV0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0cnVlIGlmIHRoaXMgRmFudGFGaWx0ZXJXcmFwcGVyIGNvbnRhaW5zIGl0ZW0gZWxlbWVudHNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGhhc0l0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuaXRlbXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y29uZmlndXJlLCBkZWZhdWx0T3B0aW9uc30gZnJvbSAnLi9saWIvdXRpbCc7XHJcbmltcG9ydCBGYW50YUZpbHRlcldyYXBwZXIgZnJvbSAnLi9GYW50YUZpbHRlcldyYXBwZXInO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9saWIvaW50ZXJmYWNlcyc7XHJcblxyXG5pbnRlcmZhY2UgRmFudGFGaWx0ZXJHbG9iYWwge1xyXG4gICAgW2tleTpzdHJpbmddOkZhbnRhRmlsdGVyV3JhcHBlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdChzZWxlY3Rvcjogc3RyaW5nID0gJy5qcy1mYWZpJywgdXNlck9wdGlvbnM/OiBPcHRpb25zLCBjb250ZXh0OiBIVE1MRWxlbWVudCB8IERvY3VtZW50ID0gZG9jdW1lbnQpIHtcclxuICAgIGNvbnN0IG5ld0ZhbnRhRmlsdGVyID0gRmFudGFGaWx0ZXJXcmFwcGVyLmNyZWF0ZSh7IGNvbmZpZ3VyZSwgY29udGV4dCwgZGVmYXVsdE9wdGlvbnMgfSwgc2VsZWN0b3IsIHVzZXJPcHRpb25zKTtcclxuICAgIGNvbnN0IGZhbnRhRmlsdGVyQXJyYXkgPSBuZXdGYW50YUZpbHRlci5sZW5ndGggIT09IHVuZGVmaW5lZCA/IG5ld0ZhbnRhRmlsdGVyIDogW25ld0ZhbnRhRmlsdGVyXTtcclxuICAgIGNvbnN0IGZhbnRhRmlsdGVyT2JqOiBGYW50YUZpbHRlckdsb2JhbCA9IHt9O1xyXG4gICAgZmFudGFGaWx0ZXJBcnJheS5mb3JFYWNoKChmYW50YUZpbHRlcjpGYW50YUZpbHRlcldyYXBwZXIpID0+IHtcclxuICAgICAgICBmYW50YUZpbHRlck9ialtmYW50YUZpbHRlci5uYW1lXSA9IGZhbnRhRmlsdGVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZhbnRhRmlsdGVyT2JqO1xyXG59OyIsImltcG9ydCB7IERlcGVuZGVuY2llcywgaUZhbnRhRmlsdGVyRWxlbWVudCwgaUZhbnRhRmlsdGVyV3JhcHBlciwgT3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBjb252ZXJ0QXR0cmlidXRlc1RvT2JqZWN0IH0gZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7IEZhbnRhRmlsdGVySXRlbSB9IGZyb20gJy4vRmFudGFGaWx0ZXJJdGVtJztcclxuaW1wb3J0IHsgRmFudGFGaWx0ZXJJbnB1dCB9IGZyb20gJy4vRmFudGFGaWx0ZXJJbnB1dCc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIEFuIGFic3RyYWN0IGNsYXNzIHRvIGJlIGltcGxlbWVudGVkIGJ5IHNwZWNpZmljIEZhbnRhRmlsdGVyIHN1YnR5cGVzIHJlcHJlc2VudGluZyB2YXJpb3VzIEhUTUwgZWxlbWVudHNcclxuICogQGNsYXNzIEZhbnRhRmlsdGVyRWxlbWVudFxyXG4gKiBAaW1wbGVtZW50cyB7aUZhbnRhRmlsdGVyRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGYW50YUZpbHRlckVsZW1lbnQgaW1wbGVtZW50cyBpRmFudGFGaWx0ZXJFbGVtZW50IHtcclxuICAgIGF0dHJpYnV0ZXM6IG9iamVjdDtcclxuICAgIGdyb3VwTmFtZTogc3RyaW5nO1xyXG4gICAgb3B0aW9uczogT3B0aW9ucztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRmFudGFGaWx0ZXJFbGVtZW50LlxyXG4gICAgICogQHBhcmFtIHtEZXBlbmRlbmNpZXN9IGRlcGVuZGVuY2llc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtpRmFudGFGaWx0ZXJXcmFwcGVyfSBwYXJlbnRGaWx0ZXJcclxuICAgICAqIEBwYXJhbSB7T3B0aW9uc30gW191c2VyT3B0aW9ucz17fV1cclxuICAgICAqIEBtZW1iZXJvZiBGYW50YUZpbHRlckVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBEZXBlbmRlbmNpZXMsXHJcbiAgICAgICAgcHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHBhcmVudEZpbHRlcjogaUZhbnRhRmlsdGVyV3JhcHBlcixcclxuICAgICAgICBfdXNlck9wdGlvbnM6IE9wdGlvbnMgPSB7fSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVwZW5kZW5jaWVzLmRlZmF1bHRPcHRpb25zLCBfdXNlck9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcGFyZW50RmlsdGVyLm5hbWU7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLFxyXG4gICAgICAgICAgICBjb252ZXJ0QXR0cmlidXRlc1RvT2JqZWN0KHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzLCB0aGlzLm9wdGlvbnMpLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFJldHJpZXZlcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGVsZW1lbnQncyBIVE1MIGVsZW1lbnQgdGFnXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEBtZW1iZXJvZiBGYW50YUZpbHRlckVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgZ2V0IHRhZ05hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIENyZWF0ZXMgRmFudGFGaWx0ZXJFbGVtZW50IGRlcml2YXRpdmVzIGZyb20gYSBOb2RlTGlzdCBvZiBIVE1MRWxlbWVudHNcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBtZW1iZXJvZiBGYW50YUZpbHRlckVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUZhbnRhRmlsdGVyRWxlbWVudHMgPSBmdW5jdGlvbihcclxuICAgICAgICBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyxcclxuICAgICAgICB0YXJnZXRzOiBOb2RlTGlzdCxcclxuICAgICAgICBwYXJlbnRGaWx0ZXI6IGlGYW50YUZpbHRlcldyYXBwZXIsXHJcbiAgICAgICAgX3VzZXJPcHRpb25zOiBPcHRpb25zID0ge30sXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVwZW5kZW5jaWVzLmRlZmF1bHRPcHRpb25zLCBfdXNlck9wdGlvbnMpO1xyXG4gICAgICAgIGxldCBpdGVtczogRmFudGFGaWx0ZXJJdGVtW10gPSBbXTtcclxuICAgICAgICBsZXQgaW5wdXRzOiBGYW50YUZpbHRlcklucHV0W10gPSBbXTtcclxuXHJcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmlucHV0VHlwZXMuaW5jbHVkZXModGFyZ2V0LnRhZ05hbWUpKVxyXG4gICAgICAgICAgICAgICAgaW5wdXRzLnB1c2gobmV3IEZhbnRhRmlsdGVySW5wdXQoZGVwZW5kZW5jaWVzLCB0YXJnZXQsIHBhcmVudEZpbHRlciwgX3VzZXJPcHRpb25zKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaXRlbXMucHVzaChuZXcgRmFudGFGaWx0ZXJJdGVtKGRlcGVuZGVuY2llcywgdGFyZ2V0LCBwYXJlbnRGaWx0ZXIsIF91c2VyT3B0aW9ucykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBpdGVtcywgaW5wdXRzIH07XHJcbiAgICB9O1xyXG59XHJcbiIsImltcG9ydCB7IERlcGVuZGVuY2llcywgaUZhbnRhRmlsdGVySW5wdXQsIGlGYW50YUZpbHRlcldyYXBwZXIsIE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgaXNOb2RlTGlzdCB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgeyBGYW50YUZpbHRlckVsZW1lbnQgfSBmcm9tICcuL0ZhbnRhRmlsdGVyRWxlbWVudCc7XHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQSBjbGFzcyByZXByZXNlbnRpbmcgYW55IEhUTUwgaW5wdXRzIHRoYXQgbWFuaXB1bGF0ZSBhIEZhbnRhRmlsdGVyV3JhcHBlclxyXG4gKiBAY2xhc3MgRmFudGFGaWx0ZXJJbnB1dFxyXG4gKiBAZXh0ZW5kcyB7RmFudGFGaWx0ZXJFbGVtZW50fVxyXG4gKiBAaW1wbGVtZW50cyB7aUZhbnRhRmlsdGVySW5wdXR9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmFudGFGaWx0ZXJJbnB1dCBleHRlbmRzIEZhbnRhRmlsdGVyRWxlbWVudCBpbXBsZW1lbnRzIGlGYW50YUZpbHRlcklucHV0IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGNvbXBhcmVyOiBzdHJpbmc7XHJcbiAgICBzZWxlY3Rvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRXZlbnQ/OiBDdXN0b21FdmVudDxhbnk+O1xyXG4gICAgLyoqXHJcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRmFudGFGaWx0ZXJJbnB1dC5cclxuICAgICAqIEBwYXJhbSB7RGVwZW5kZW5jaWVzfSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEBwYXJhbSB7KEhUTUxFbGVtZW50IHwgSFRNTENvbGxlY3Rpb24gfCBOb2RlTGlzdCl9IHRhcmdldHNcclxuICAgICAqIEBwYXJhbSB7aUZhbnRhRmlsdGVyV3JhcHBlcn0gcGFyZW50RmlsdGVyXHJcbiAgICAgKiBAcGFyYW0ge09wdGlvbnN9IFt1c2VyT3B0aW9ucz17fV1cclxuICAgICAqIEBtZW1iZXJvZiBGYW50YUZpbHRlcklucHV0XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzLFxyXG4gICAgICAgIHRhcmdldHM6IEhUTUxFbGVtZW50IHwgSFRNTENvbGxlY3Rpb24gfCBOb2RlTGlzdCxcclxuICAgICAgICBwYXJlbnRGaWx0ZXI6IGlGYW50YUZpbHRlcldyYXBwZXIsXHJcbiAgICAgICAgdXNlck9wdGlvbnM6IE9wdGlvbnMgPSB7fSxcclxuICAgICkge1xyXG4gICAgICAgIGlmIChpc05vZGVMaXN0KHRhcmdldHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXS5zbGljZVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoQXJyYXkuZnJvbSh0YXJnZXRzKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKF9lbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gbmV3IEZhbnRhRmlsdGVySW5wdXQoZGVwZW5kZW5jaWVzLCB0YXJnZXRzLCBwYXJlbnRGaWx0ZXIsIHVzZXJPcHRpb25zKSlcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHg6IEhUTUxFbGVtZW50KSA9PiB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIoZGVwZW5kZW5jaWVzLCB0YXJnZXRzLCBwYXJlbnRGaWx0ZXIsIHVzZXJPcHRpb25zKTtcclxuICAgICAgICBjb25zdCBjdXN0b21FdmVudCA9IGRlcGVuZGVuY2llcy53aW5kb3cgIT09IHVuZGVmaW5lZCA/IGRlcGVuZGVuY2llcy53aW5kb3cuQ3VzdG9tRXZlbnQgOiBDdXN0b21FdmVudDtcclxuICAgICAgICBsZXQgdXBkYXRlRXZlbnQgPSBuZXcgY3VzdG9tRXZlbnQoYGZhZmkuZmlsdGVyLiR7dGhpcy5ncm91cE5hbWV9LnVwZGF0ZWAsIHtcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcclxuICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kZXI6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKCkgPT4gKHRoaXMuZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFVwZGF0ZUV2ZW50KCdpbnB1dCcsIHVwZGF0ZUV2ZW50KTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU5hbWVzLnNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmNvbXBhcmVyID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuYXR0cmlidXRlTmFtZXMuY29tcGFyZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQWRkcyBhbiB1cGRhdGUgZXZlbnQgaGFuZGxlciB0byBhIEZhbnRhRmlsdGVySW5wdXQgYW5kIGl0cyBIVE1MIGVsZW1lbnRcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gX2V2ZW50VHJpZ2dlciBOYW1lIG9mIGV2ZW50IHRvIGJlIGhhbmRsZWRcclxuICAgICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnQ8YW55Pn0gX2V2ZW50IENhbGxiYWNrIGZ1bmN0aW9uIG9mIGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyBUaGlzIEZhbnRhRmlsdGVyRWxlbWVudCdzIFVwZGF0ZUV2ZW50XHJcbiAgICAgKiBAbWVtYmVyb2YgRmFudGFGaWx0ZXJJbnB1dFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldFVwZGF0ZUV2ZW50KF9ldmVudFRyaWdnZXI6IHN0cmluZywgX2V2ZW50OiBDdXN0b21FdmVudDxhbnk+KSB7XHJcbiAgICAgICAgaWYgKF9ldmVudFRyaWdnZXIgIT09IHVuZGVmaW5lZCAmJiBfZXZlbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihfZXZlbnRUcmlnZ2VyLCBlID0+IGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoX2V2ZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUV2ZW50ID0gX2V2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlRXZlbnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBSZXR1cm5zIHRoaXMgRmFudGFGaWx0ZXJFbGVtZW50J3MgVXBkYXRlRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySW5wdXRcclxuICAgICAqL1xyXG4gICAgZ2V0IHVwZGF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cGRhdGVFdmVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZXBlbmRlbmNpZXMsIGlGYW50YUZpbHRlckl0ZW0sIGlGYW50YUZpbHRlcldyYXBwZXIsIE9wdGlvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgaXNOb2RlTGlzdCB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgeyBGYW50YUZpbHRlckVsZW1lbnQgfSBmcm9tICcuL0ZhbnRhRmlsdGVyRWxlbWVudCc7XHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQSBjbGFzcyByZXByZXNlbnRpbmcgYW55IGZpbHRlcmFibGUgSFRNTCBlbGVtZW50XHJcbiAqIEBjbGFzcyBGYW50YUZpbHRlckl0ZW1cclxuICogQGV4dGVuZHMge0ZhbnRhRmlsdGVyRWxlbWVudH1cclxuICogQGltcGxlbWVudHMge2lGYW50YUZpbHRlckl0ZW19XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRmFudGFGaWx0ZXJJdGVtIGV4dGVuZHMgRmFudGFGaWx0ZXJFbGVtZW50IGltcGxlbWVudHMgaUZhbnRhRmlsdGVySXRlbSB7XHJcbiAgICAvKipcclxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGYW50YUZpbHRlckl0ZW0uXHJcbiAgICAgKiBAcGFyYW0ge0RlcGVuZGVuY2llc30gZGVwZW5kZW5jaWVzXHJcbiAgICAgKiBAcGFyYW0geyhIVE1MRWxlbWVudCB8IEhUTUxDb2xsZWN0aW9uIHwgTm9kZUxpc3QpfSB0YXJnZXRzXHJcbiAgICAgKiBAcGFyYW0ge2lGYW50YUZpbHRlcldyYXBwZXJ9IHBhcmVudEZpbHRlclxyXG4gICAgICogQHBhcmFtIHtPcHRpb25zfSBbX3VzZXJPcHRpb25zPXt9XVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySXRlbVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyxcclxuICAgICAgICB0YXJnZXRzOiBIVE1MRWxlbWVudCB8IEhUTUxDb2xsZWN0aW9uIHwgTm9kZUxpc3QsXHJcbiAgICAgICAgcGFyZW50RmlsdGVyOiBpRmFudGFGaWx0ZXJXcmFwcGVyLFxyXG4gICAgICAgIF91c2VyT3B0aW9uczogT3B0aW9ucyA9IHt9LFxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGlzTm9kZUxpc3QodGFyZ2V0cykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlXHJcbiAgICAgICAgICAgICAgICAuY2FsbChBcnJheS5mcm9tKHRhcmdldHMpKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoX2VsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuZXcgRmFudGFGaWx0ZXJJdGVtKGRlcGVuZGVuY2llcywgdGFyZ2V0cywgcGFyZW50RmlsdGVyLCBfdXNlck9wdGlvbnMpKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeDogSFRNTEVsZW1lbnQpID0+IHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlcihkZXBlbmRlbmNpZXMsIHRhcmdldHMsIHBhcmVudEZpbHRlciwgKF91c2VyT3B0aW9ucyA9IHt9KSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSAnaGlkZGVuJyBhdHRyaWJ1dGUgb2YgdGhlIEhUTUwgZWxlbWVudCBvZiB0aGlzIEZhbnRhRmlsdGVyRWxlbWVudFxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySXRlbVxyXG4gICAgICovXHJcbiAgICBzZXQgaGlkZGVuKGlzSGlkZGVuOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmhpZGRlbiA9IGlzSGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gUmV0dXJucyB0aGUgJ2hpZGRlbicgYXR0cmlidXRlIG9mIHRoZSBIVE1MIGVsZW1lbnQgb2YgdGhpcyBGYW50YUZpbHRlckVsZW1lbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQG1lbWJlcm9mIEZhbnRhRmlsdGVySXRlbVxyXG4gICAgICovXHJcbiAgICBnZXQgaGlkZGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gTWVyZ2VzIGRlZmF1bHQvdXNlciBvcHRpb25zIGFuZCBmaW5kcyBuZXcgYXR0cmlidXRlcyBvbiBhbiBIVE1MIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRvIHNlYXJjaCBmb3IgbmV3IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIHtPcHRpb25zfSB1c2VyT3B0aW9ucyBDdXN0b21pemVkIHVzZXIgb3B0aW9ucyB0byBjb21wYXJlXHJcbiAqIEBwYXJhbSB7T3B0aW9uc30gZGVmYXVsdE9wdGlvbnMgRGVmYXVsdCBvcHRpb25zIHRvIGNvbXBhcmVcclxuICogQHJldHVybnMge09wdGlvbnN9IEEgZmluYWxpemVkIE9wdGlvbnMgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB1c2VyT3B0aW9uczogT3B0aW9ucywgZGVmYXVsdE9wdGlvbnM6IE9wdGlvbnMpOiBPcHRpb25zIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0T3B0aW9ucykucmVkdWNlKChvcHRpb25zOiBPcHRpb25zLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS0ke2tleS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgICAgICBpZiAoYXR0clZhbHVlICE9PSBudWxsKSBvcHRpb25zW2tleV0gPSBhdHRyVmFsdWU7XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5IGluIHVzZXJPcHRpb25zKSBvcHRpb25zW2tleV0gPSB1c2VyT3B0aW9uc1trZXldO1xyXG4gICAgICAgIGVsc2Ugb3B0aW9uc1trZXldID0gZGVmYXVsdE9wdGlvbnNba2V5XTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9LCB7fSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJ0ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBPcHRpb25zID0ge1xyXG4gICAgYXR0cmlidXRlTmFtZXM6IHtcclxuICAgICAgICByb290OiAnZGF0YS1mYW50YWZpbHRlcicsXHJcbiAgICAgICAgZ3JvdXA6ICdkYXRhLWZhbnRhZmlsdGVyLWdyb3VwJyxcclxuICAgICAgICBzZWxlY3RvcjogJ2RhdGEtZmFudGFmaWx0ZXItc2VsZWN0b3InLFxyXG4gICAgICAgIGNvbXBhcmVyOiAnZGF0YS1mYW50YWZpbHRlci1jb21wYXJlcicsXHJcbiAgICB9LFxyXG4gICAgY2xhc3NOYW1lczoge1xyXG4gICAgICAgIHBhcmVudDogJ2pzLWZhZmktcGFyZW50JyxcclxuICAgICAgICBpbnB1dDogJ2pzLWZhZmktaW5wdXQnLFxyXG4gICAgICAgIGl0ZW06ICdqcy1mYWZpLWl0ZW0nLFxyXG4gICAgICAgIGhpZGRlbjogJ2pzLWZhZmktaGlkZGVuJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dFR5cGVzOiBbJ0lOUFVUJ10sXHJcbn07IiwiaW1wb3J0IHsgY29udmVydEtlYmFiVG9DYW1lbENhc2UgfSBmcm9tICcuL3N0cmluZyc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdJbnRlcmZhY2VzJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gQ29udmVydHMgYSBOYW1lZE5vZGVNYXAgb2YgYXR0cmlidXRlcyB0byBhbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtOYW1lZE5vZGVNYXB9IGF0dHJpYnV0ZXMgTmFtZWROb2RlTWFwIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBzdHJpbmd9IG9wdGlvbnMgRGVmYXVsdCBvcHRpb25zIGZyb20gd2hpY2ggdG8gcmV0cmlldmUgdGhlIHJvb3QgZGF0YSBhdHRyaWJ1dGUgdGVtcGxhdGUsIG9yIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdGVtcGxhdGUgaXRzZWxmXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIE5hbWVkTm9kZU1hcFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRBdHRyaWJ1dGVzVG9PYmplY3QoYXR0cmlidXRlczogTmFtZWROb2RlTWFwLCBvcHRpb25zOiBPcHRpb25zIHwgc3RyaW5nKSB7XHJcbiAgICBjb25zdCByb290ID0gdHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IG9wdGlvbnMuYXR0cmlidXRlTmFtZXMucm9vdDtcclxuICAgIGxldCBvdXRwdXRPYmplY3QgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGF0dHIgPSBhdHRyaWJ1dGVzLml0ZW0oaSkubmFtZTtcclxuICAgICAgICBpZiAoYXR0ci5tYXRjaChyb290KSkge1xyXG4gICAgICAgICAgICBsZXQgY29udmVydGVkTmFtZSA9IGNvbnZlcnRLZWJhYlRvQ2FtZWxDYXNlKGF0dHIsIHJvb3QgKyAnLScpO1xyXG4gICAgICAgICAgICBvdXRwdXRPYmplY3Quc2V0KGNvbnZlcnRlZE5hbWUsIGF0dHJpYnV0ZXMuaXRlbShpKS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dE9iamVjdDtcclxufTsiLCJleHBvcnQgKiBmcm9tICcuL3N0cmluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZG9tJztcclxuZXhwb3J0ICogZnJvbSAnLi90eXBldGVzdHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdC1vcHRpb25zJzsiLCIvKipcclxuICogQ29udmVydHMgYSBLZWJhYkNhc2Ugc3RyaW5nIHRvIENhbWVsQ2FzZSBhbmQgcmV0dXJucyBpdFxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBLZWJhYkNhc2Ugc3RyaW5nIHRvIGJlIGNvbnZlcnRlZFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Jvb3Q9JyddIFJvb3QgdGVybSB0byBiZSBtYXRjaGVkL3JlbW92ZWRcclxuICogQHJldHVybnMgQSBDYW1lbENhc2Ugc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEtlYmFiVG9DYW1lbENhc2UoaW5wdXQ6IHN0cmluZywgcm9vdDogc3RyaW5nID0gJycpIHtcclxuICAgIHJvb3QgPSByb290Lmxlbmd0aCA+IDAgPyByb290ICsgJ3wnIDogcm9vdDtcclxuICAgIGxldCByZXBsYWNlID0gYCg/Oig/OiR7cm9vdH0oPzpcXFxcdnswfSkoPzogfC0pKFthLXpdKSkpYDtcclxuICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAocmVwbGFjZSwgJ2cnKTtcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKHJlZ2V4LCAobWF0Y2gsIHAxKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwMSAhPT0gJ3VuZGVmaW5lZCcgPyBwMS50b1VwcGVyQ2FzZSgpIDogJyc7XHJcbiAgICB9KTtcclxufSIsIi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gVGVzdHMgaWYgYW4gb2JqZWN0IGlzIGEgTm9kZUxpc3Qgb3IgSFRNTENvbGxlY3Rpb25cclxuICogQGV4cG9ydHNcclxuICogQHBhcmFtIHsqfSBub2RlcyBPYmplY3QgdG8gYmUgdGVzdGVkXHJcbiAqIEByZXR1cm5zIHsobm9kZXMgaXMgTm9kZUxpc3QgfCBIVE1MQ29sbGVjdGlvbil9IFRydWUgaWYgb2JqZWN0IGlzIE5vZGVMaXN0L0hUTUxDb2xsZWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTGlzdChub2RlczogYW55KTogbm9kZXMgaXMgTm9kZUxpc3QgfCBIVE1MQ29sbGVjdGlvbiB7XHJcbiAgICB2YXIgc3RyaW5nUmVwciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChub2Rlcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB0eXBlb2Ygbm9kZXMgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgL15cXFtvYmplY3QgKEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fE9iamVjdClcXF0kLy50ZXN0KHN0cmluZ1JlcHIpICYmXHJcbiAgICAgICAgdHlwZW9mIG5vZGVzLmxlbmd0aCA9PT0gJ251bWJlcicgJiZcclxuICAgICAgICAobm9kZXMubGVuZ3RoID09PSAwIHx8ICh0eXBlb2Ygbm9kZXNbMF0gPT09ICdvYmplY3QnICYmIG5vZGVzWzBdLm5vZGVUeXBlID4gMCkpXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==