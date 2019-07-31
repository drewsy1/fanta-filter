(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fanta-filter"] = factory();
	else
		root["fanta-filter"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/fanta-filter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/api/boot.js":
/*!****************************!*\
  !*** ./src/js/api/boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/index */ "./src/js/core/index.js");

/**
 * Initializes fantaFilter filter groups from HTML elements
 * @param {fantaFilter} fantaFilter fantaFilter passed along from initial construction
 */

/* harmony default export */ __webpack_exports__["default"] = (function (fantaFilter) {
  fantaFilter.filterGroups = {};
  if (document.body) init();

  function init() {
    var fantaFilterGroups = [];
    fantaFilterGroups = fantaFilterGroups.concat(fantaFilter.util.getUniqueValuesFromAttributes('data-' + fantaFilter.prefix + 'filter-group'));
    fantaFilterGroups.forEach(function (dfg) {
      fantaFilter.filterGroups[dfg] = new _core_index__WEBPACK_IMPORTED_MODULE_0__["filterGroup"](dfg);
    });
    fantaFilter._initialized = true;
  }
});

/***/ }),

/***/ "./src/js/api/index.js":
/*!*****************************!*\
  !*** ./src/js/api/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fantafilter_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fantafilter-util */ "./src/js/util/index.js");

/**
 * Base fantaFilter object constructor
 * @param {*} options
 */

var fantaFilter = function fantaFilter(options) {
  this._init(options);
};

fantaFilter.util = fantafilter_util__WEBPACK_IMPORTED_MODULE_0__;
fantaFilter.data = '__fantaFilter__';
fantaFilter.prefix = 'fafi-';
fantaFilter.options = {};
/* harmony default export */ __webpack_exports__["default"] = (fantaFilter);

/***/ }),

/***/ "./src/js/core/filterGroup.js":
/*!************************************!*\
  !*** ./src/js/core/filterGroup.js ***!
  \************************************/
/*! exports provided: filterGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterGroup", function() { return filterGroup; });
/* harmony import */ var _filterState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterState */ "./src/js/core/filterState.js");
/* harmony import */ var fantafilter_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fantafilter-util */ "./src/js/util/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Class representing a group of filters which share the same group of target items
 */

var filterGroup =
/*#__PURE__*/
function () {
  /**
   * Initial filterGroup constructor
   * @param {string} filterGroup Name of filter group (reflected in HTML as attribute 'data-fafi-filter-group')
   * @param {*} filterGroupItems Collection of children of an HTML element of the "fafi-filter-item-group" class
   * @param {*} filterGroupControls Collection of HTML elements of the "fafi-filter-item-control" class
   */
  function filterGroup(_filterGroup) {
    var filterGroupItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var filterGroupControls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, filterGroup);

    this.groupName = _filterGroup;
    this.items = this.getFilterGroupObjects(filterGroupItems, ".fafi-filter-item-group[data-fafi-filter-group=" + this.groupName + "]");
    this.controls = this.getFilterGroupObjects(filterGroupControls, ".fafi-filter-item-control[data-fafi-filter-group=" + this.groupName + "]");
    this.state = new _filterState__WEBPACK_IMPORTED_MODULE_0__["filterState"]();
  }
  /**
   * Returns a flat array of HTML objects that match a specified CSS selector
   * @param {*} inputItems Items to be filtered/flattened
   * @param {string} selector CSS selector used to filter items
   */


  _createClass(filterGroup, [{
    key: "getFilterGroupObjects",
    value: function getFilterGroupObjects(inputItems) {
      var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      return inputItems ? inputItems : document.querySelectorAll(selector)[0] ? document.querySelectorAll(selector)[0].children.length > 1 ? this.util.combineHtmlCollectionsToArray(document.querySelectorAll(selector)[0].children) : this.util.combineHtmlCollectionsToArray(document.querySelectorAll(selector)[0]) : null;
    }
  }]);

  return filterGroup;
}();
filterGroup.prototype.util = fantafilter_util__WEBPACK_IMPORTED_MODULE_1__;

/***/ }),

/***/ "./src/js/core/filterState.js":
/*!************************************!*\
  !*** ./src/js/core/filterState.js ***!
  \************************************/
/*! exports provided: filterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterState", function() { return filterState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class that manages the active state of a filter 
 */
var filterState = function filterState() {
  _classCallCheck(this, filterState);

  this.update;
  this.merge;
  this.clear;
};

/***/ }),

/***/ "./src/js/core/index.js":
/*!******************************!*\
  !*** ./src/js/core/index.js ***!
  \******************************/
/*! exports provided: filterGroup, filterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filterGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterGroup */ "./src/js/core/filterGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterGroup", function() { return _filterGroup__WEBPACK_IMPORTED_MODULE_0__["filterGroup"]; });

/* harmony import */ var _filterState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterState */ "./src/js/core/filterState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterState", function() { return _filterState__WEBPACK_IMPORTED_MODULE_1__["filterState"]; });




/***/ }),

/***/ "./src/js/fanta-filter.js":
/*!********************************!*\
  !*** ./src/js/fanta-filter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_boot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/boot */ "./src/js/api/boot.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/index */ "./src/js/api/index.js");


Object(_api_boot__WEBPACK_IMPORTED_MODULE_0__["default"])(_api_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.fantaFilter = _api_index__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_api_index__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/js/util/attr.js":
/*!*****************************!*\
  !*** ./src/js/util/attr.js ***!
  \*****************************/
/*! exports provided: attr, hasAttr, removeAttr, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");

function attr(element, name, value) {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isObject"])(name)) {
    for (var key in name) {
      attr(element, key, name[key]);
    }

    return;
  }

  if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
    element = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNode"])(element);
    return element && element.getAttribute(name);
  } else {
    Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNodes"])(element).forEach(function (element) {
      if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(value)) {
        value = value.call(element, attr(element, name));
      }

      if (value === null) {
        removeAttr(element, name);
      } else {
        element.setAttribute(name, value);
      }
    });
  }
}
function hasAttr(element, name) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNodes"])(element).some(function (element) {
    return element.hasAttribute(name);
  });
}
function removeAttr(element, name) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["toNodes"])(element);
  name.split(' ').forEach(function (name) {
    return element.forEach(function (element) {
      return element.hasAttribute(name) && element.removeAttribute(name);
    });
  });
}
function data(element, attribute) {
  for (var i = 0, attrs = [attribute, "data-".concat(attribute)]; i < attrs.length; i++) {
    if (hasAttr(element, attrs[i])) {
      return attr(element, attrs[i]);
    }
  }
}

/***/ }),

/***/ "./src/js/util/dom.js":
/*!****************************!*\
  !*** ./src/js/util/dom.js ***!
  \****************************/
/*! exports provided: ready, index, getIndex, empty, html, prepend, append, before, after, remove, wrapAll, wrapInner, unwrap, fragment, apply, $, $$, combineHtmlCollectionsToArray, getUniqueValuesFromAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return getIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return wrapAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInner", function() { return wrapInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return unwrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineHtmlCollectionsToArray", function() { return combineHtmlCollectionsToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueValuesFromAttributes", function() { return getUniqueValuesFromAttributes; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/js/util/event.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ "./src/js/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }

  var unbind = Object(_event__WEBPACK_IMPORTED_MODULE_0__["on"])(document, 'DOMContentLoaded', function () {
    unbind();
    fn();
  });
}
function index(element, ref) {
  return ref ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element).indexOf(Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(ref)) : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])((element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(element)) && element.parentNode.children).indexOf(element);
}
function getIndex(i, elements) {
  var current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var finite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  elements = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(elements);
  var _elements = elements,
      length = _elements.length;
  i = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(i) ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNumber"])(i) : i === 'next' ? current + 1 : i === 'previous' ? current - 1 : index(elements, i);

  if (finite) {
    return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["clamp"])(i, 0, length - 1);
  }

  i %= length;
  return i < 0 ? i + length : i;
}
function empty(element) {
  element = $(element);
  element.innerHTML = '';
  return element;
}
function html(parent, html) {
  parent = $(parent);
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(html) ? parent.innerHTML : append(parent.hasChildNodes() ? empty(parent) : parent, html);
}
function prepend(parent, element) {
  parent = $(parent);

  if (!parent.hasChildNodes()) {
    return append(parent, element);
  } else {
    return insertNodes(element, function (element) {
      return parent.insertBefore(element, parent.firstChild);
    });
  }
}
function append(parent, element) {
  parent = $(parent);
  return insertNodes(element, function (element) {
    return parent.appendChild(element);
  });
}
function before(ref, element) {
  ref = $(ref);
  return insertNodes(element, function (element) {
    return ref.parentNode.insertBefore(element, ref);
  });
}
function after(ref, element) {
  ref = $(ref);
  return insertNodes(element, function (element) {
    return ref.nextSibling ? before(ref.nextSibling, element) : append(ref.parentNode, element);
  });
}

function insertNodes(element, fn) {
  element = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(element) ? fragment(element) : element;
  return element ? 'length' in element ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element).map(fn) : fn(element) : null;
}

function remove(element) {
  Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element).map(function (element) {
    return element.parentNode && element.parentNode.removeChild(element);
  });
}
function wrapAll(element, structure) {
  structure = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(before(element, structure));

  while (structure.firstChild) {
    structure = structure.firstChild;
  }

  append(structure, element);
  return structure;
}
function wrapInner(element, structure) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element).map(function (element) {
    return element.hasChildNodes ? wrapAll(Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element.childNodes), structure) : append(element, structure);
  }));
}
function unwrap(element) {
  Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(element).map(function (element) {
    return element.parentNode;
  }).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  }).forEach(function (parent) {
    before(parent, parent.childNodes);
    remove(parent);
  });
}
var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
function fragment(html) {
  var matches = singleTagRe.exec(html);

  if (matches) {
    return document.createElement(matches[1]);
  }

  var container = document.createElement('div');

  if (fragmentRe.test(html)) {
    container.insertAdjacentHTML('beforeend', html.trim());
  } else {
    container.textContent = html;
  }

  return container.childNodes.length > 1 ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(container.childNodes) : container.firstChild;
}
function apply(node, fn) {
  if (!node || node.nodeType !== 1) {
    return;
  }

  fn(node);
  node = node.firstElementChild;

  while (node) {
    apply(node, fn);
    node = node.nextElementSibling;
  }
}
function $(selector, context) {
  return !Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(selector) ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(selector) : isHtml(selector) ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(fragment(selector)) : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["find"])(selector, context);
}
function $$(selector, context) {
  return !Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(selector) ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(selector) : isHtml(selector) ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(fragment(selector)) : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["findAll"])(selector, context);
}

function isHtml(str) {
  return str[0] === '<' || str.match(/^\s*</);
}

function combineHtmlCollectionsToArray() {
  var result = [];

  if (arguments.length > 1) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var arg = _step.value;
        result = result.concat(combineHtmlCollectionsToArray(arg));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (Array.isArray(arguments[0])) {
    combineHtmlCollectionsToArray.apply(void 0, _toConsumableArray(arguments[0]));
  } else if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isNodeCollection"])(arguments[0])) {
    result = Array.from(arguments[0]);
  } else {
    result = result.concat(arguments[0]);
  }

  return result;
}
function getUniqueValuesFromAttributes(attr) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var elements;
  var attributeValues = [];
  elements = root.querySelectorAll('[' + attr + ']');
  elements = Array.from(elements);
  elements.forEach(function (el) {
    return attributeValues.push(el.getAttribute(attr));
  });

  var distinctValues = _toConsumableArray(new Set(attributeValues));

  return distinctValues;
}

/***/ }),

/***/ "./src/js/util/event.js":
/*!******************************!*\
  !*** ./src/js/util/event.js ***!
  \******************************/
/*! exports provided: on, off, toEventTargets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEventTargets", function() { return toEventTargets; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./src/js/util/filter.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector */ "./src/js/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function on() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var _getArgs = getArgs(args),
      _getArgs2 = _slicedToArray(_getArgs, 5),
      targets = _getArgs2[0],
      type = _getArgs2[1],
      selector = _getArgs2[2],
      listener = _getArgs2[3],
      useCapture = _getArgs2[4];

  targets = toEventTargets(targets);

  if (selector) {
    listener = delegate(targets, selector, listener);
  }

  if (listener.length > 1) {
    listener = detail(listener);
  }

  type.split(' ').forEach(function (type) {
    return targets.forEach(function (target) {
      return target.addEventListener(type, listener, useCapture);
    });
  });
  return function () {
    return off(targets, type, listener, useCapture);
  };
}
function off(targets, type, listener) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  targets = toEventTargets(targets);
  type.split(' ').forEach(function (type) {
    return targets.forEach(function (target) {
      return target.removeEventListener(type, listener, useCapture);
    });
  });
}

function getArgs(args) {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(args[2])) {
    args.splice(2, 0, false);
  }

  return args;
}

function delegate(delegates, selector, listener) {
  var _this = this;

  return function (e) {
    delegates.forEach(function (delegate) {
      var current = selector[0] === '>' ? Object(_selector__WEBPACK_IMPORTED_MODULE_1__["findAll"])(selector, delegate).reverse().filter(function (element) {
        return Object(_filter__WEBPACK_IMPORTED_MODULE_0__["within"])(e.target, element);
      })[0] : Object(_selector__WEBPACK_IMPORTED_MODULE_1__["closest"])(e.target, selector);

      if (current) {
        e.delegate = delegate;
        e.current = current;
        listener.call(_this, e);
      }
    });
  };
}

function detail(listener) {
  return function (e) {
    return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isArray"])(e.detail) ? listener.apply(void 0, _toConsumableArray([e].concat(e.detail))) : listener(e);
  };
}

function isEventTarget(target) {
  return target && 'addEventListener' in target;
}

function toEventTarget(target) {
  return isEventTarget(target) ? target : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNode"])(target);
}

function toEventTargets(target) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isArray"])(target) ? target.map(toEventTarget).filter(Boolean) : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["isString"])(target) ? Object(_selector__WEBPACK_IMPORTED_MODULE_1__["findAll"])(target) : isEventTarget(target) ? [target] : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["toNodes"])(target);
}

/***/ }),

/***/ "./src/js/util/fastdom.js":
/*!********************************!*\
  !*** ./src/js/util/fastdom.js ***!
  \********************************/
/*! exports provided: fastdom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fastdom", function() { return fastdom; });
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise */ "./src/js/util/promise.js");

/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/

var fastdom = {
  reads: [],
  writes: [],
  read: function read(task) {
    this.reads.push(task);
    scheduleFlush();
    return task;
  },
  write: function write(task) {
    this.writes.push(task);
    scheduleFlush();
    return task;
  },
  clear: function clear(task) {
    return remove(this.reads, task) || remove(this.writes, task);
  },
  flush: flush
};

function flush() {
  runTasks(fastdom.reads);
  runTasks(fastdom.writes.splice(0, fastdom.writes.length));
  fastdom.scheduled = false;

  if (fastdom.reads.length || fastdom.writes.length) {
    scheduleFlush(true);
  }
}

function scheduleFlush() {
  var microtask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!fastdom.scheduled) {
    fastdom.scheduled = true;

    if (microtask) {
      _promise__WEBPACK_IMPORTED_MODULE_0__["Promise"].resolve().then(flush);
    } else {
      requestAnimationFrame(flush);
    }
  }
}

function runTasks(tasks) {
  var task;

  while (task = tasks.shift()) {
    task();
  }
}

function remove(array, item) {
  var index = array.indexOf(item);
  return !!~index && !!array.splice(index, 1);
}

/***/ }),

/***/ "./src/js/util/filter.js":
/*!*******************************!*\
  !*** ./src/js/util/filter.js ***!
  \*******************************/
/*! exports provided: isVoidElement, isVisible, selInput, isInput, filter, within */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVoidElement", function() { return isVoidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selInput", function() { return selInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInput", function() { return isInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "within", function() { return within; });
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selector */ "./src/js/util/selector.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");


var voidElements = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  menuitem: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
function isVoidElement(element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) {
    return voidElements[element.tagName.toLowerCase()];
  });
}
function isVisible(element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) {
    return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
  });
}
var selInput = 'input,select,textarea,button';
function isInput(element) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, selInput);
  });
}
function filter(element, selector) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).filter(function (element) {
    return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, selector);
  });
}
function within(element, selector) {
  return !Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(selector) ? element === selector || (Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isDocument"])(selector) ? selector.documentElement : Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(selector)).contains(Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(element)) // IE 11 document does not implement contains
  : Object(_selector__WEBPACK_IMPORTED_MODULE_0__["matches"])(element, selector) || Object(_selector__WEBPACK_IMPORTED_MODULE_0__["closest"])(element, selector);
}

/***/ }),

/***/ "./src/js/util/index.js":
/*!******************************!*\
  !*** ./src/js/util/index.js ***!
  \******************************/
/*! exports provided: attr, hasAttr, removeAttr, data, ready, index, getIndex, empty, html, prepend, append, before, after, remove, wrapAll, wrapInner, unwrap, fragment, apply, $, $$, combineHtmlCollectionsToArray, getUniqueValuesFromAttributes, on, off, toEventTargets, fastdom, isVoidElement, isVisible, selInput, isInput, filter, within, bind, hasOwn, hyphenate, camelize, ucfirst, startsWith, endsWith, includes, findIndex, isArray, isFunction, isObject, isPlainObject, isWindow, isDocument, isJQuery, isNode, isNodeCollection, isBoolean, isString, isNumber, isNumeric, isEmpty, isUndefined, toBoolean, toNumber, toFloat, toNode, toNodes, toList, toMs, isEqual, swap, assign, each, sortBy, uniqueBy, clamp, noop, intersectRect, pointInRect, Dimensions, mergeOptions, parseOptions, Promise, Deferred, query, queryAll, find, findAll, matches, closest, parents, escape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./src/js/util/attr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _attr__WEBPACK_IMPORTED_MODULE_0__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return _attr__WEBPACK_IMPORTED_MODULE_0__["hasAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return _attr__WEBPACK_IMPORTED_MODULE_0__["removeAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "data", function() { return _attr__WEBPACK_IMPORTED_MODULE_0__["data"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/js/util/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["ready"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "index", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["index"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["getIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["prepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["append"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["before"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["after"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["wrapAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapInner", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["wrapInner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["unwrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineHtmlCollectionsToArray", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["combineHtmlCollectionsToArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUniqueValuesFromAttributes", function() { return _dom__WEBPACK_IMPORTED_MODULE_1__["getUniqueValuesFromAttributes"]; });

/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/js/util/event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "off", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["off"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toEventTargets", function() { return _event__WEBPACK_IMPORTED_MODULE_2__["toEventTargets"]; });

/* harmony import */ var _fastdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fastdom */ "./src/js/util/fastdom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fastdom", function() { return _fastdom__WEBPACK_IMPORTED_MODULE_3__["fastdom"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ "./src/js/util/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVoidElement", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["isVoidElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["isVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selInput", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["selInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInput", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["isInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "within", function() { return _filter__WEBPACK_IMPORTED_MODULE_4__["within"]; });

/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["bind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["hasOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["hyphenate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["camelize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["ucfirst"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["endsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["includes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDocument", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJQuery", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isJQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeCollection", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isNodeCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isNumeric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNode", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNodes", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["toMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["swap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["each"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["sortBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["uniqueBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["clamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersectRect", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["intersectRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointInRect", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["pointInRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return _lang__WEBPACK_IMPORTED_MODULE_5__["Dimensions"]; });

/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./src/js/util/options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_6__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return _options__WEBPACK_IMPORTED_MODULE_6__["parseOptions"]; });

/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promise */ "./src/js/util/promise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return _promise__WEBPACK_IMPORTED_MODULE_7__["Promise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return _promise__WEBPACK_IMPORTED_MODULE_7__["Deferred"]; });

/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selector */ "./src/js/util/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["findAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["closest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["parents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _selector__WEBPACK_IMPORTED_MODULE_8__["escape"]; });











/***/ }),

/***/ "./src/js/util/lang.js":
/*!*****************************!*\
  !*** ./src/js/util/lang.js ***!
  \*****************************/
/*! exports provided: bind, hasOwn, hyphenate, camelize, ucfirst, startsWith, endsWith, includes, findIndex, isArray, isFunction, isObject, isPlainObject, isWindow, isDocument, isJQuery, isNode, isNodeCollection, isBoolean, isString, isNumber, isNumeric, isEmpty, isUndefined, toBoolean, toNumber, toFloat, toNode, toNodes, toList, toMs, isEqual, swap, assign, each, sortBy, uniqueBy, clamp, noop, intersectRect, pointInRect, Dimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return ucfirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocument", function() { return isDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJQuery", function() { return isJQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeCollection", function() { return isNodeCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return toFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNode", function() { return toNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNodes", function() { return toNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return toMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueBy", function() { return uniqueBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRect", function() { return intersectRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInRect", function() { return pointInRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return Dimensions; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function bind(fn, context) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
  };
}
var objPrototype = Object.prototype;
var hasOwnProperty = objPrototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
var hyphenateCache = {};
var hyphenateRe = /([a-z\d])([A-Z])/g;
function hyphenate(str) {
  if (!(str in hyphenateCache)) {
    hyphenateCache[str] = str.replace(hyphenateRe, '$1-$2').toLowerCase();
  }

  return hyphenateCache[str];
}
var camelizeRe = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRe, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

function ucfirst(str) {
  return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
}
var strPrototype = String.prototype;

var startsWithFn = strPrototype.startsWith || function (search) {
  return this.lastIndexOf(search, 0) === 0;
};

function startsWith(str, search) {
  return startsWithFn.call(str, search);
}

var endsWithFn = strPrototype.endsWith || function (search) {
  return this.substr(-search.length) === search;
};

function endsWith(str, search) {
  return endsWithFn.call(str, search);
}
var arrPrototype = Array.prototype;

var includesFn = function includesFn(search, i) {
  return ~this.indexOf(search, i);
};

var includesStr = strPrototype.includes || includesFn;
var includesArray = arrPrototype.includes || includesFn;
function includes(obj, search) {
  return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
}

var findIndexFn = arrPrototype.findIndex || function (predicate) {
  for (var i = 0; i < this.length; i++) {
    if (predicate.call(arguments[1], this[i], i, this)) {
      return i;
    }
  }

  return -1;
};

function findIndex(array, predicate) {
  return findIndexFn.call(array, predicate);
}
var isArray = Array.isArray;

function isFunction(obj) {
  return typeof obj === 'function';
}
function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}
function isPlainObject(obj) {
  return isObject(obj) && Object.getPrototypeOf(obj) === objPrototype;
}
function isWindow(obj) {
  return isObject(obj) && obj === obj.window;
}
function isDocument(obj) {
  return isObject(obj) && obj.nodeType === 9;
}
function isJQuery(obj) {
  return isObject(obj) && !!obj.jquery;
}
function isNode(obj) {
  return obj instanceof Node || isObject(obj) && obj.nodeType >= 1;
}
var toString = objPrototype.toString;
function isNodeCollection(obj) {
  return toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return typeof value === 'number';
}
function isNumeric(value) {
  return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
}
function isEmpty(obj) {
  return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
}
function isUndefined(value) {
  return value === void 0;
}
function toBoolean(value) {
  return isBoolean(value) ? value : value === 'true' || value === '1' || value === '' ? true : value === 'false' || value === '0' ? false : value;
}
function toNumber(value) {
  var number = Number(value);
  return !isNaN(number) ? number : false;
}
function toFloat(value) {
  return parseFloat(value) || 0;
}
function toNode(element) {
  return isNode(element) || isWindow(element) || isDocument(element) ? element : isNodeCollection(element) || isJQuery(element) ? element[0] : isArray(element) ? toNode(element[0]) : null;
}
function toNodes(element) {
  return isNode(element) ? [element] : isNodeCollection(element) ? arrPrototype.slice.call(element) : isArray(element) ? element.map(toNode).filter(Boolean) : isJQuery(element) ? element.toArray() : [];
}
function toList(value) {
  return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map(function (value) {
    return isNumeric(value) ? toNumber(value) : toBoolean(value.trim());
  }) : [value];
}
function toMs(time) {
  return !time ? 0 : endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000;
}
function isEqual(value, other) {
  return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, function (val, key) {
    return val === other[key];
  });
}
function swap(value, a, b) {
  return value.replace(new RegExp("".concat(a, "|").concat(b), 'mg'), function (match) {
    return match === a ? b : a;
  });
}
var assign = Object.assign || function (target) {
  target = Object(target);

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    var source = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (source !== null) {
      for (var key in source) {
        if (hasOwn(source, key)) {
          target[key] = source[key];
        }
      }
    }
  }

  return target;
};
function each(obj, cb) {
  for (var key in obj) {
    if (false === cb(obj[key], key)) {
      return false;
    }
  }

  return true;
}
function sortBy(array, prop) {
  return array.sort(function (_ref, _ref2) {
    var _ref$prop = _ref[prop],
        propA = _ref$prop === void 0 ? 0 : _ref$prop;
    var _ref2$prop = _ref2[prop],
        propB = _ref2$prop === void 0 ? 0 : _ref2$prop;
    return propA > propB ? 1 : propB > propA ? -1 : 0;
  });
}
function uniqueBy(array, prop) {
  var seen = new Set();
  return array.filter(function (_ref3) {
    var check = _ref3[prop];
    return seen.has(check) ? false : seen.add(check) || true;
  } // IE 11 does not return the Set object
  );
}
function clamp(number) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.min(Math.max(toNumber(number) || 0, min), max);
}
function noop() {}
function intersectRect(r1, r2) {
  return r1.left < r2.right && r1.right > r2.left && r1.top < r2.bottom && r1.bottom > r2.top;
}
function pointInRect(point, rect) {
  return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
}
var Dimensions = {
  ratio: function ratio(dimensions, prop, value) {
    var _ref4;

    var aProp = prop === 'width' ? 'height' : 'width';
    return _ref4 = {}, _defineProperty(_ref4, aProp, dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp]), _defineProperty(_ref4, prop, value), _ref4;
  },
  contain: function contain(dimensions, maxDimensions) {
    var _this = this;

    dimensions = assign({}, dimensions);
    each(dimensions, function (_, prop) {
      return dimensions = dimensions[prop] > maxDimensions[prop] ? _this.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
    });
    return dimensions;
  },
  cover: function cover(dimensions, maxDimensions) {
    var _this2 = this;

    dimensions = this.contain(dimensions, maxDimensions);
    each(dimensions, function (_, prop) {
      return dimensions = dimensions[prop] < maxDimensions[prop] ? _this2.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
    });
    return dimensions;
  }
};

/***/ }),

/***/ "./src/js/util/options.js":
/*!********************************!*\
  !*** ./src/js/util/options.js ***!
  \********************************/
/*! exports provided: mergeOptions, parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var strats = {};
strats.events = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat; // args strategy

strats.args = function (parentVal, childVal) {
  return childVal !== false && concatStrat(childVal || parentVal);
}; // update strategy


strats.update = function (parentVal, childVal) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(concatStrat(parentVal, Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(childVal) ? {
    read: childVal
  } : childVal), 'order');
}; // property strategy


strats.props = function (parentVal, childVal) {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isArray"])(childVal)) {
    childVal = childVal.reduce(function (value, key) {
      value[key] = String;
      return value;
    }, {});
  }

  return strats.methods(parentVal, childVal);
}; // extend strategy


strats.computed = strats.methods = function (parentVal, childVal) {
  return childVal ? parentVal ? Object(_lang__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, parentVal, childVal) : childVal : parentVal;
}; // data strategy


strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    }

    return function (vm) {
      return mergeFnData(parentVal, childVal, vm);
    };
  }

  return mergeFnData(parentVal, childVal, vm);
};

function mergeFnData(parentVal, childVal, vm) {
  return strats.computed(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(parentVal) ? parentVal.call(vm, vm) : parentVal, Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(childVal) ? childVal.call(vm, vm) : childVal);
} // concat strategy


function concatStrat(parentVal, childVal) {
  parentVal = parentVal && !Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isArray"])(parentVal) ? [parentVal] : parentVal;
  return childVal ? parentVal ? parentVal.concat(childVal) : Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isArray"])(childVal) ? childVal : [childVal] : parentVal;
} // default strategy


function defaultStrat(parentVal, childVal) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(childVal) ? parentVal : childVal;
}

function mergeOptions(parent, child, vm) {
  var options = {};

  if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(child)) {
    child = child.options;
  }

  if (child["extends"]) {
    parent = mergeOptions(parent, child["extends"], vm);
  }

  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }

  for (var key in parent) {
    mergeKey(key);
  }

  for (var _key in child) {
    if (!Object(_lang__WEBPACK_IMPORTED_MODULE_0__["hasOwn"])(parent, _key)) {
      mergeKey(_key);
    }
  }

  function mergeKey(key) {
    options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
  }

  return options;
}
function parseOptions(options) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  try {
    return !options ? {} : Object(_lang__WEBPACK_IMPORTED_MODULE_0__["startsWith"])(options, '{') ? JSON.parse(options) : args.length && !Object(_lang__WEBPACK_IMPORTED_MODULE_0__["includes"])(options, ':') ? _defineProperty({}, args[0], options) : options.split(';').reduce(function (options, option) {
      var _option$split = option.split(/:(.*)/),
          _option$split2 = _slicedToArray(_option$split, 2),
          key = _option$split2[0],
          value = _option$split2[1];

      if (key && !Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
        options[key.trim()] = value.trim();
      }

      return options;
    }, {});
  } catch (e) {
    return {};
  }
}

/***/ }),

/***/ "./src/js/util/promise.js":
/*!********************************!*\
  !*** ./src/js/util/promise.js ***!
  \********************************/
/*! exports provided: Promise, Deferred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return Promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return Deferred; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global setImmediate */

var Promise = 'Promise' in window ? window.Promise : PromiseFn;
var Deferred = function Deferred() {
  var _this = this;

  _classCallCheck(this, Deferred);

  this.promise = new Promise(function (resolve, reject) {
    _this.reject = reject;
    _this.resolve = resolve;
  });
};
/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;
var async = 'setImmediate' in window ? setImmediate : setTimeout;

function PromiseFn(executor) {
  this.state = PENDING;
  this.value = undefined;
  this.deferred = [];
  var promise = this;

  try {
    executor(function (x) {
      promise.resolve(x);
    }, function (r) {
      promise.reject(r);
    });
  } catch (e) {
    promise.reject(e);
  }
}

PromiseFn.reject = function (r) {
  return new PromiseFn(function (resolve, reject) {
    reject(r);
  });
};

PromiseFn.resolve = function (x) {
  return new PromiseFn(function (resolve, reject) {
    resolve(x);
  });
};

PromiseFn.all = function all(iterable) {
  return new PromiseFn(function (resolve, reject) {
    var result = [];
    var count = 0;

    if (iterable.length === 0) {
      resolve(result);
    }

    function resolver(i) {
      return function (x) {
        result[i] = x;
        count += 1;

        if (count === iterable.length) {
          resolve(result);
        }
      };
    }

    for (var i = 0; i < iterable.length; i += 1) {
      PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
    }
  });
};

PromiseFn.race = function race(iterable) {
  return new PromiseFn(function (resolve, reject) {
    for (var i = 0; i < iterable.length; i += 1) {
      PromiseFn.resolve(iterable[i]).then(resolve, reject);
    }
  });
};

var p = PromiseFn.prototype;

p.resolve = function resolve(x) {
  var promise = this;

  if (promise.state === PENDING) {
    if (x === promise) {
      throw new TypeError('Promise settled with itself.');
    }

    var called = false;

    try {
      var then = x && x.then;

      if (x !== null && Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isObject"])(x) && Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(then)) {
        then.call(x, function (x) {
          if (!called) {
            promise.resolve(x);
          }

          called = true;
        }, function (r) {
          if (!called) {
            promise.reject(r);
          }

          called = true;
        });
        return;
      }
    } catch (e) {
      if (!called) {
        promise.reject(e);
      }

      return;
    }

    promise.state = RESOLVED;
    promise.value = x;
    promise.notify();
  }
};

p.reject = function reject(reason) {
  var promise = this;

  if (promise.state === PENDING) {
    if (reason === promise) {
      throw new TypeError('Promise settled with itself.');
    }

    promise.state = REJECTED;
    promise.value = reason;
    promise.notify();
  }
};

p.notify = function notify() {
  var _this2 = this;

  async(function () {
    if (_this2.state !== PENDING) {
      while (_this2.deferred.length) {
        var _this2$deferred$shift = _this2.deferred.shift(),
            _this2$deferred$shift2 = _slicedToArray(_this2$deferred$shift, 4),
            onResolved = _this2$deferred$shift2[0],
            onRejected = _this2$deferred$shift2[1],
            resolve = _this2$deferred$shift2[2],
            reject = _this2$deferred$shift2[3];

        try {
          if (_this2.state === RESOLVED) {
            if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(onResolved)) {
              resolve(onResolved.call(undefined, _this2.value));
            } else {
              resolve(_this2.value);
            }
          } else if (_this2.state === REJECTED) {
            if (Object(_lang__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(onRejected)) {
              resolve(onRejected.call(undefined, _this2.value));
            } else {
              reject(_this2.value);
            }
          }
        } catch (e) {
          reject(e);
        }
      }
    }
  });
};

p.then = function then(onResolved, onRejected) {
  var _this3 = this;

  return new PromiseFn(function (resolve, reject) {
    _this3.deferred.push([onResolved, onRejected, resolve, reject]);

    _this3.notify();
  });
};

p["catch"] = function (onRejected) {
  return this.then(undefined, onRejected);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/js/util/selector.js":
/*!*********************************!*\
  !*** ./src/js/util/selector.js ***!
  \*********************************/
/*! exports provided: query, queryAll, find, findAll, matches, closest, parents, escape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return queryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attr */ "./src/js/util/attr.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang */ "./src/js/util/lang.js");


function query(selector, context) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(selector) || find(selector, getContext(selector, context));
}
function queryAll(selector, context) {
  var nodes = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(selector);
  return nodes.length && nodes || findAll(selector, getContext(selector, context));
}

function getContext(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return isContextSelector(selector) || Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isDocument"])(context) ? context : context.ownerDocument;
}

function find(selector, context) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(_query(selector, context, 'querySelector'));
}
function findAll(selector, context) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(_query(selector, context, 'querySelectorAll'));
}

function _query(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var queryFn = arguments.length > 2 ? arguments[2] : undefined;

  if (!selector || !Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(selector)) {
    return null;
  }

  selector = selector.replace(contextSanitizeRe, '$1 *');
  var removes;

  if (isContextSelector(selector)) {
    removes = [];
    selector = splitSelector(selector).map(function (selector, i) {
      var ctx = context;

      if (selector[0] === '!') {
        var selectors = selector.substr(1).trim().split(' ');
        ctx = closest(context.parentNode, selectors[0]);
        selector = selectors.slice(1).join(' ').trim();
      }

      if (selector[0] === '-') {
        var _selectors = selector.substr(1).trim().split(' ');

        var prev = (ctx || context).previousElementSibling;
        ctx = matches(prev, selector.substr(1)) ? prev : null;
        selector = _selectors.slice(1).join(' ');
      }

      if (!ctx) {
        return null;
      }

      if (!ctx.id) {
        ctx.id = "uk-".concat(Date.now()).concat(i);
        removes.push(function () {
          return Object(_attr__WEBPACK_IMPORTED_MODULE_0__["removeAttr"])(ctx, 'id');
        });
      }

      return "#".concat(escape(ctx.id), " ").concat(selector);
    }).filter(Boolean).join(',');
    context = document;
  }

  try {
    return context[queryFn](selector);
  } catch (e) {
    return null;
  } finally {
    removes && removes.forEach(function (remove) {
      return remove();
    });
  }
}

var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

function isContextSelector(selector) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(selector) && selector.match(contextSelectorRe);
}

var selectorRe = /.*?[^\\](?:,|$)/g;

function splitSelector(selector) {
  return selector.match(selectorRe).map(function (selector) {
    return selector.replace(/,$/, '').trim();
  });
}

var elProto = Element.prototype;
var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;
function matches(element, selector) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).some(function (element) {
    return matchesFn.call(element, selector);
  });
}

var closestFn = elProto.closest || function (selector) {
  var ancestor = this;

  do {
    if (matches(ancestor, selector)) {
      return ancestor;
    }

    ancestor = ancestor.parentNode;
  } while (ancestor && ancestor.nodeType === 1);
};

function closest(element, selector) {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_1__["startsWith"])(selector, '>')) {
    selector = selector.slice(1);
  }

  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isNode"])(element) ? element.parentNode && closestFn.call(element, selector) : Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNodes"])(element).map(function (element) {
    return closest(element, selector);
  }).filter(Boolean);
}
function parents(element, selector) {
  var elements = [];
  var parent = Object(_lang__WEBPACK_IMPORTED_MODULE_1__["toNode"])(element).parentNode;

  while (parent && parent.nodeType === 1) {
    if (matches(parent, selector)) {
      elements.push(parent);
    }

    parent = parent.parentNode;
  }

  return elements;
}

var escapeFn = window.CSS && CSS.escape || function (css) {
  return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) {
    return "\\".concat(match);
  });
};

function escape(css) {
  return Object(_lang__WEBPACK_IMPORTED_MODULE_1__["isString"])(css) ? escapeFn.call(null, css) : '';
}

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map