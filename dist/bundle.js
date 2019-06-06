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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/derekrush/sites/css_assessment/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/derekrush/sites/css_assessment/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/socket.io-client/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/socket.io-client/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open '/Users/derekrush/sites/css_assessment/node_modules/socket.io-client/lib/index.js'");

/***/ }),

/***/ "./src/client/components/header.tsx":
/*!******************************************!*\
  !*** ./src/client/components/header.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function Header(props) {
    const [dropdownActive, setDropdownActive] = React.useState(false);
    const [orderFilter, setOrderFilter] = React.useState('');
    const { handleInitCallback, setFilterCallback } = props;
    function handleInputChange(e) {
        const ev = e.currentTarget;
    }
    function toggleDropdown(e) {
        setDropdownActive(!dropdownActive);
    }
    function closeDropdown() {
        if (dropdownActive) {
            setTimeout(() => {
                setDropdownActive(false);
            }, 300);
        }
    }
    function onInputKeyPressed(e) {
        console.log(e);
    }
    return (React.createElement("header", { className: "flex flex-wrap rounded-lg shadow-lg mx-4 border border-gray-800" },
        React.createElement("div", { className: "title mx-4 mt-4 text-xl" },
            "Front-end Engineering Challenge",
            React.createElement("span", { className: "block text-sm" }, "by Derek Rush")),
        React.createElement("div", { className: "flex-1 mx-4" },
            React.createElement("div", { className: "push_button blue_push", onClick: handleInitCallback }, "Initialize")),
        React.createElement("input", { className: "w-1/4 lg:w-1/5 m-4", name: "name", type: "text", placeholder: "Filter", value: name, onChange: handleInputChange, onClick: toggleDropdown, onKeyDown: onInputKeyPressed }),
        React.createElement("div", { className: `${dropdownActive ? 'block' : 'hidden'} dropdown-options` })));
}
exports.Header = Header;


/***/ }),

/***/ "./src/client/components/order_card.tsx":
/*!**********************************************!*\
  !*** ./src/client/components/order_card.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
class OrderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingHistory: false,
        };
        this.humanizeStatus = this.humanizeStatus.bind(this);
        this.colorizeStatus = this.colorizeStatus.bind(this);
        this.toggleHistory = this.toggleHistory.bind(this);
    }
    humanizeStatus(status) {
        if (status === 'CREATED') {
            return 'Cooking Now';
        }
        else if (status === 'COOKED') {
            return 'Prepared';
        }
        else if (status === 'DRIVER_RECEIVED') {
            return 'Out for Delivery';
        }
        else if (status === 'DELIVERED') {
            return 'Delivered';
        }
        else {
            return 'Cancelled';
        }
    }
    colorizeStatus(status) {
        if (status === 'CREATED') {
            return 'yellow';
        }
        else if (status === 'COOKED') {
            return 'orange';
        }
        else if (status === 'DRIVER_RECEIVED') {
            return 'blue';
        }
        else if (status === 'DELIVERED') {
            return 'green';
        }
        else {
            return 'red';
        }
    }
    toggleHistory(e) {
        e.preventDefault();
        const { showingHistory } = this.state;
        this.setState({ showingHistory: !showingHistory });
    }
    render() {
        const { showingHistory } = this.state;
        const { eventName, destination, name, id, history } = this.props;
        return (React.createElement("div", { className: `order-card-basic ${this.colorizeStatus(eventName)}` }, !showingHistory ? (React.createElement("div", null,
            React.createElement("div", { className: "history-action text-xs" },
                React.createElement("a", { href: "#", onClick: this.toggleHistory }, "History")),
            React.createElement("div", null,
                React.createElement("label", { className: "text-xs" }, "Status"),
                React.createElement("p", { className: "status-text" }, this.humanizeStatus(eventName))),
            React.createElement("div", null,
                React.createElement("label", { className: "text-xs" }, "Destination"),
                React.createElement("p", null, destination)),
            React.createElement("div", { className: "flex" },
                React.createElement("div", { className: "flex-1" },
                    React.createElement("label", { className: "block text-xs" }, "Name"),
                    React.createElement("p", { className: "block" }, name)),
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-xs text-right" }, "ID"),
                    React.createElement("p", { className: "block text-right" }, id))))) : (React.createElement("div", null,
            React.createElement("div", { className: "history-action text-xs" },
                React.createElement("a", { href: "#", onClick: this.toggleHistory }, "Info")),
            history.map((hist, i) => (React.createElement("div", { key: `history_${i}_${id}` },
                React.createElement("div", { className: "mt-2" },
                    React.createElement("p", null, this.humanizeStatus(hist.event_name)),
                    React.createElement("label", { className: "text-xs" },
                        "Sent ",
                        hist.sent_at_second,
                        " seconds ago")))))))));
    }
}
exports.OrderCard = OrderCard;


/***/ }),

/***/ "./src/client/components/orders_list.tsx":
/*!***********************************************!*\
  !*** ./src/client/components/orders_list.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const order_card_1 = __webpack_require__(/*! ./order_card */ "./src/client/components/order_card.tsx");
class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        };
    }
    render() {
        const { orders } = this.props;
        return (React.createElement("div", null,
            React.createElement("ul", { className: "flex flex-wrap mx--4" }, orders.map((ord, i) => (React.createElement("li", { key: `ev_${i}_${ord.id}`, className: "w-full md:w-1/2 lg:w-1/4 list-none p-4" },
                React.createElement(order_card_1.OrderCard, { destination: ord.destination, eventName: ord.event_name, name: ord.name, history: ord.history, id: ord.id })))))));
    }
}
exports.OrderList = OrderList;


/***/ }),

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const ioClient = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
const header_1 = __webpack_require__(/*! ./components/header */ "./src/client/components/header.tsx");
const orders_list_1 = __webpack_require__(/*! ./components/orders_list */ "./src/client/components/orders_list.tsx");
const endpoint = 'http://localhost:5000/api';
__webpack_require__(/*! ./styles/default.css */ "./src/client/styles/default.css");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        };
        this.initializeDataStream = this.initializeDataStream.bind(this);
        this.setFilter = this.setFilter.bind(this);
    }
    initializeDataStream() {
        this.setState({ orders: [] });
        const socket = ioClient.connect(endpoint);
        socket.emit('initialize', { event: 'INIT' });
        socket.on('FromAPI', responses => {
            for (let resOrder of responses) {
                const { orders } = this.state;
                if (resOrder.event_name === 'CREATED') {
                    this.setState(prevState => ({
                        orders: prevState.orders.concat(Object.assign({}, resOrder, { history: [resOrder] })),
                    }));
                }
                else {
                    this.setState(prevState => ({
                        orders: prevState.orders.map(ord => ord.id === resOrder.id
                            ? Object.assign({}, ord, { event_name: resOrder.event_name, history: ord.history.concat(Object.assign({}, resOrder, { active: true })) }) : ord),
                    }));
                }
            }
        });
    }
    setFilter(filter) {
        console.log('FILTER', filter);
    }
    render() {
        const { orders } = this.state;
        return (React.createElement("div", { className: "container mx-auto my-8" },
            React.createElement(header_1.Header, { handleInitCallback: this.initializeDataStream, setFilterCallback: this.setFilter }),
            orders.length > 0 ? (React.createElement(orders_list_1.OrderList, { orders: orders })) : (React.createElement("p", { className: "title mx-4 text-xl mt-4" }, "Loading..."))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));


/***/ }),

/***/ "./src/client/styles/default.css":
/*!***************************************!*\
  !*** ./src/client/styles/default.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/Users/derekrush/sites/css_assessment/node_modules/normalize.css/normalize.css'\n    at Object.openSync (fs.js:449:3)\n    at Object.readFileSync (fs.js:349:35)\n    at /Users/derekrush/sites/css_assessment/node_modules/tailwindcss/lib/plugins/preflight.js:18:64\n    at plugins.forEach.plugin (/Users/derekrush/sites/css_assessment/node_modules/tailwindcss/lib/util/processPlugins.js:47:5)\n    at Array.forEach (<anonymous>)\n    at _default (/Users/derekrush/sites/css_assessment/node_modules/tailwindcss/lib/util/processPlugins.js:46:11)\n    at /Users/derekrush/sites/css_assessment/node_modules/tailwindcss/lib/processTailwindFeatures.js:33:58\n    at LazyResult.run (/Users/derekrush/sites/css_assessment/node_modules/postcss/lib/lazy-result.js:295:14)\n    at LazyResult.asyncTick (/Users/derekrush/sites/css_assessment/node_modules/postcss/lib/lazy-result.js:208:26)\n    at LazyResult.asyncTick (/Users/derekrush/sites/css_assessment/node_modules/postcss/lib/lazy-result.js:221:14)\n    at /Users/derekrush/sites/css_assessment/node_modules/postcss/lib/lazy-result.js:213:17\n    at runLoaders (/Users/derekrush/sites/css_assessment/node_modules/webpack/lib/NormalModule.js:302:20)\n    at /Users/derekrush/sites/css_assessment/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/derekrush/sites/css_assessment/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/Users/derekrush/sites/css_assessment/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Promise.resolve.then.then.catch (/Users/derekrush/sites/css_assessment/node_modules/postcss-loader/src/index.js:208:9)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map