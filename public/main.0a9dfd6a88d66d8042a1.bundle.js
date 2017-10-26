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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DictionaryProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CorsRequest = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DictionaryProvider = function () {
    function DictionaryProvider() {
        _classCallCheck(this, DictionaryProvider);
    }

    _createClass(DictionaryProvider, [{
        key: 'find',
        value: function find(text) {
            var headers = new Headers();
            headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
            return new Promise(function (resolve, reject) {
                fetch('lemma', { method: 'POST', body: 'text=' + text, headers: headers }).then(function (response) {
                    return resolve(response.json());
                }).catch(function (e) {
                    reject(e);
                });
            });
        }
    }]);

    return DictionaryProvider;
}();

exports.DictionaryProvider = DictionaryProvider;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lemma = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lemma = function () {
    function Lemma(container) {
        _classCallCheck(this, Lemma);

        this._container = container;
        this._container.classList.add('lemma');
        this._container.innerHTML = '<div class="written-form"></div><div class="phonetic-forms"></div>';
    }

    _createClass(Lemma, [{
        key: 'item',
        set: function set(_ref) {
            var w = _ref.w,
                p = _ref.p,
                x = _ref.x;

            this._container.querySelector('.written-form').innerText = w;
            this._container.querySelector('.phonetic-forms').innerHTML = p.map(function (i) {
                return '<div class="phonetic-form">' + i + '</div>';
            }).join('');
        }
    }]);

    return Lemma;
}();

exports.Lemma = Lemma;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(9);

var _EventTarget2 = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function (_EventTarget) {
    _inherits(SearchBox, _EventTarget);

    function SearchBox(container, _ref) {
        var provider = _ref.provider;

        _classCallCheck(this, SearchBox);

        var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this));

        _this._container = container;
        _this._container.classList.add('search-box');
        _this._container.innerHTML = '<input type="text" value="">';
        _this._provider = provider;
        _this._onInput = _this._onInput.bind(_this);
        _this._container.addEventListener('keydown', _this._onInput);
        return _this;
    }

    _createClass(SearchBox, [{
        key: '_onInput',
        value: function _onInput(e) {
            var _this2 = this;

            switch (e.keyCode) {
                case 13:
                    this._provider.find(this._container.querySelector('input').value.trim()).then(function (e) {
                        var event = document.createEvent('Event');
                        event.initEvent('change', false, false);
                        event.detail = e;
                        _this2.dispatchEvent(event);
                    }).catch(function (e) {
                        console.log(e);
                    });
                    break;
                default:
                    break;
            }
        }
    }]);

    return SearchBox;
}(_EventTarget2.EventTarget);

exports.SearchBox = SearchBox;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function Application(container, _ref) {
    var lemma = _ref.lemma;

    _classCallCheck(this, Application);

    this._container = container;
    this._container.classList.add('application');
    this._lemma = lemma;
};

exports.Application = Application;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CorsRequest = function () {
    function CorsRequest() {
        _classCallCheck(this, CorsRequest);
    }

    _createClass(CorsRequest, [{
        key: 'get',
        value: function get(url) {
            return new Promise(function (resolve, reject) {
                var frm = document.createElement('iframe');
                frm.style.display = 'none';
                document.body.appendChild(frm);
                frm.src = url;
                var handle = function handle(e) {
                    resolve(e);
                    frm.contentWindow.removeEventListener('message', handle);
                    document.body.removeChild(frm);
                };
                frm.contentWindow.addEventListener('message', handle);

                frame.contentWindow.postMessage({}, '*');
            });
        }
    }]);

    return CorsRequest;
}();

exports.CorsRequest = CorsRequest;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventTarget = function () {
    function EventTarget() {
        _classCallCheck(this, EventTarget);

        this.listeners = {};
    }

    _createClass(EventTarget, [{
        key: "addEventListener",
        value: function addEventListener(type, callback) {
            if (!(type in this.listeners)) {
                this.listeners[type] = [];
            }
            this.listeners[type].push(callback);
        }
    }, {
        key: "removeEventListener",
        value: function removeEventListener(type, callback) {
            if (!(type in this.listeners)) {
                return;
            }
            var stack = this.listeners[type];
            for (var i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === callback) {
                    stack.splice(i, 1);
                    return this.removeEventListener(type, callback);
                }
            }
        }
    }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
            if (!(event.type in this.listeners)) {
                return;
            }
            var stack = this.listeners[event.type];
            // event.target = this;
            for (var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event);
            }
        }
    }]);

    return EventTarget;
}();

exports.EventTarget = EventTarget;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _main = __webpack_require__(3);

var _SearchBox = __webpack_require__(2);

var _DictionaryProvider = __webpack_require__(0);

var _Lemma = __webpack_require__(1);

var searchBox = new _SearchBox.SearchBox(document.getElementById('search'), {
    provider: new _DictionaryProvider.DictionaryProvider()
});

var lemma = new _Lemma.Lemma(document.getElementById('lemma'));
searchBox.addEventListener('change', function (e) {
    lemma.item = e.detail;
});
var app = new _main.Application(document.getElementById('content'), { lemma: lemma });

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.0a9dfd6a88d66d8042a1.bundle.js.map