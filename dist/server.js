require("source-map-support").install();
global.assets = require("./assets.json");
module.exports =
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
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(33);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/index.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(8);

var config = {
  all: {
    env: "development" || 'development',
    isDev: "development" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'http://localhost:3002/todos/'
  },
  test: {},
  development: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'http://localhost:3002/todos/'
  }
};

module.exports = merge(config.all, config[config.all.env]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', '/home/nurzhamal/maddevs/redux_arc_ssr/src/config.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(35);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/actions.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodoRequest = addTodoRequest;
exports.addTodoSuccess = addTodoSuccess;
exports.getTodosRequest = getTodosRequest;
exports.getTodosSuccess = getTodosSuccess;
exports.toggleTodoRequest = toggleTodoRequest;
exports.toggleTodoSuccess = toggleTodoSuccess;
exports.deleteTodoRequest = deleteTodoRequest;
exports.deleteTodoSuccess = deleteTodoSuccess;
function addTodoRequest(text) {
  return {
    type: 'ADD_TODO',
    text: text
  };
}
function addTodoSuccess(text, response) {
  return {
    type: 'ADD_TODO_SUCCESS',
    payload: {
      response: response
    },
    text: text
  };
}

function getTodosRequest() {
  return {
    type: 'GET_TODOS'
  };
}
function getTodosSuccess(response) {
  return {
    type: 'GET_TODOS_SUCCESS',
    payload: {
      response: response
    }
  };
}

function toggleTodoRequest(todo) {
  return {
    type: 'TOGGLE_TODO',
    todo: todo
  };
}
function toggleTodoSuccess(response) {
  return {
    type: 'TOGGLE_TODO_SUCCESS'
  };
}

function deleteTodoRequest(id) {
  return {
    type: 'DELETE_TODO',
    id: id
  };
}
function deleteTodoSuccess(id) {
  return {
    type: 'DELETE_TODO_SUCCESS',
    id: id
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(addTodoRequest, 'addTodoRequest', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(addTodoSuccess, 'addTodoSuccess', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(getTodosRequest, 'getTodosRequest', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(getTodosSuccess, 'getTodosSuccess', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(toggleTodoRequest, 'toggleTodoRequest', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(toggleTodoSuccess, 'toggleTodoSuccess', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(deleteTodoRequest, 'deleteTodoRequest', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');

  __REACT_HOT_LOADER__.register(deleteTodoSuccess, 'deleteTodoSuccess', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/actions.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      return [].concat(_toConsumableArray(state), [{
        id: action.payload.response.id,
        text: action.payload.response.text,
        completed: action.payload.response.completed
      }]);
    case 'DELETE_TODO_SUCCESS':
      return state.filter(function (todo) {
        return todo.id !== action.id;
      });
    case 'TOGGLE_TODO_SUCCESS':
      return state.map(function (todo) {
        return todo.id === action.id ? _extends({}, todo, {
          completed: !todo.completed
        }) : todo;
      });
    case 'GET_TODOS_SUCCESS':
      return state.concat(action.payload.response);
    default:
      return state;
  }
};

var _default = todos;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(todos, 'todos', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/reducer.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(40);

var _path = __webpack_require__(44);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(41);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(51);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(14);

var _server = __webpack_require__(46);

var _reactRedux = __webpack_require__(4);

var _reactRouter = __webpack_require__(47);

var _reactRouterServer = __webpack_require__(10);

var _config = __webpack_require__(2);

var _configure = __webpack_require__(28);

var _configure2 = _interopRequireDefault(_configure);

var _api = __webpack_require__(27);

var _api2 = _interopRequireDefault(_api);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(18);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(17);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { basename: _config.basename, context: context, location: location },
      _react2.default.createElement(_App2.default, null)
    )
  ));
  return (0, _reactRouterServer.renderToString)(app);
};

var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var assets = global.assets;
  var state = '\n    window.__SERVER_STATE__ = ' + (0, _serializeJavascript2.default)(serverState) + ';\n    window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(initialState) + ';\n  ';
  var html = _react2.default.createElement(_Html2.default, { styles: styles, assets: assets, state: state, content: content });
  return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(html);
};

var app = (0, _express2.default)();

app.use(_config.basename, _express2.default.static(_path2.default.resolve(process.cwd(), 'dist/public')));

app.use(function (req, res, next) {
  var location = req.url;
  var store = (0, _configure2.default)({}, { api: _api2.default.create() });
  var context = {};
  var sheet = new _styledComponents.ServerStyleSheet();

  renderApp({ store: store, context: context, location: location, sheet: sheet }).then(function (_ref3) {
    var serverState = _ref3.state,
        content = _ref3.html;

    if (context.status) {
      res.status(context.status);
    }
    if (context.url) {
      res.redirect(context.url);
    } else {
      var initialState = store.getState();
      res.send(renderHtml({ serverState: serverState, initialState: initialState, content: content, sheet: sheet }));
    }
  }).catch(next);
});

app.use(function (err, req, res, next) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var content = (0, _server.renderToStaticMarkup)(sheet.collectStyles(_react2.default.createElement(_Error2.default, null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

app.listen(_config.port, function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + _config.host + ':' + _config.port + _config.basename + '/'));
  }
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/home/nurzhamal/maddevs/redux_arc_ssr/src/server.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', '/home/nurzhamal/maddevs/redux_arc_ssr/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/home/nurzhamal/maddevs/redux_arc_ssr/src/server.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  h1{\n    text-align: center;\n  }\n  body {\n    diplay: flex;\n    background-color: darkgrey;\n  }\n  li {\n    cursor:pointer;\n    list-style: none;\n  }\n  ul {\n    padding: 0;\n  }\n  input:focus{\n    outline:none;\n  }\n  input{\n    width: 350px;\n    padding: 15px 32px;\n  }\n  input[type="text"] {\n    padding: 10px;\n    border: none;\n    border-bottom: solid 3px #c9c9c9;\n    transition: border 0.3s;\n  }\n  input[type="text"]:focus,\n  input[type="text"].focus {\n    border-bottom: solid 3px grey;\n  }\n  input::-webkit-input-placeholder {\n    color: grey;\n    transition: all 0.5s;\n  }\n  input:focus::-webkit-input-placeholder {\n    color: violet;\n  }\n  .btn{\n    width: 100%;\n    background-color: grey;\n    cursor: pointer;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border: 0 solid;\n    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n    outline: 1px solid;\n    outline-color: rgba(255, 255, 255, .5);\n    outline-offset: 0px;\n    text-shadow: none;\n    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  }\n  .btn2{\n    background-color: grey;\n    border: none;\n    color: white;\n    padding: 9px 30px;\n    padding-top:8px;\n    border-bottom: 3px solid #c9c9c9;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor:pointer;\n  }\n  .btn2:hover {\n    color: #c9c9c9;\n  }\n  .btn:hover{\n    border: 0px solid;\n    box-shadow: inset 0 0 5px rgba(255, 255, 255, .5), 0 0 5px rgba(255, 255, 255, .2);\n    outline-color: rgba(255, 255, 255, 0);\n    outline-offset: 10px;\n    text-shadow: 1px 1px 2px #427388;\n  }\n  div{\n    width: 500px;\n  }\n  ul>div>li{\n    margin-right: auto;\n  }\n  ul>div{\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .btn3{\n    border-radius:50%;\n    cursor:pointer;\n  }\n  .btn3:hover{\n    background-color:red;\n    transition:all 0.5s;\n  }\n'], ['\n  h1{\n    text-align: center;\n  }\n  body {\n    diplay: flex;\n    background-color: darkgrey;\n  }\n  li {\n    cursor:pointer;\n    list-style: none;\n  }\n  ul {\n    padding: 0;\n  }\n  input:focus{\n    outline:none;\n  }\n  input{\n    width: 350px;\n    padding: 15px 32px;\n  }\n  input[type="text"] {\n    padding: 10px;\n    border: none;\n    border-bottom: solid 3px #c9c9c9;\n    transition: border 0.3s;\n  }\n  input[type="text"]:focus,\n  input[type="text"].focus {\n    border-bottom: solid 3px grey;\n  }\n  input::-webkit-input-placeholder {\n    color: grey;\n    transition: all 0.5s;\n  }\n  input:focus::-webkit-input-placeholder {\n    color: violet;\n  }\n  .btn{\n    width: 100%;\n    background-color: grey;\n    cursor: pointer;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border: 0 solid;\n    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n    outline: 1px solid;\n    outline-color: rgba(255, 255, 255, .5);\n    outline-offset: 0px;\n    text-shadow: none;\n    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  }\n  .btn2{\n    background-color: grey;\n    border: none;\n    color: white;\n    padding: 9px 30px;\n    padding-top:8px;\n    border-bottom: 3px solid #c9c9c9;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    cursor:pointer;\n  }\n  .btn2:hover {\n    color: #c9c9c9;\n  }\n  .btn:hover{\n    border: 0px solid;\n    box-shadow: inset 0 0 5px rgba(255, 255, 255, .5), 0 0 5px rgba(255, 255, 255, .2);\n    outline-color: rgba(255, 255, 255, 0);\n    outline-offset: 10px;\n    text-shadow: 1px 1px 2px #427388;\n  }\n  div{\n    width: 500px;\n  }\n  ul>div>li{\n    margin-right: auto;\n  }\n  ul>div{\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .btn3{\n    border-radius:50%;\n    cursor:pointer;\n  }\n  .btn3:hover{\n    background-color:red;\n    transition:all 0.5s;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(48);

var _styledComponents = __webpack_require__(14);

var _reactHelmet = __webpack_require__(9);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _components = __webpack_require__(1);

var _default2 = __webpack_require__(23);

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      { titleTemplate: 'ARc - %s' },
      _react2.default.createElement(
        'title',
        null,
        'Atomic React'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _default3.default },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _components.HomePage, exact: true })
      )
    )
  );
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/App.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

var _default = ErrorPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorPage, 'ErrorPage', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/Error.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/Error.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(9);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
};

Html.propTypes = {
  styles: _propTypes2.default.node.isRequired,
  assets: _propTypes2.default.shape({
    css: _propTypes2.default.array.isRequired,
    js: _propTypes2.default.array.isRequired
  }).isRequired,
  state: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired
};

var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/Html.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(_ref) {
  var onAddTodo = _ref.onAddTodo;

  var input = void 0;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          e.preventDefault();
          onAddTodo(input.value);
          input.value = '';
        } },
      _react2.default.createElement('input', { type: 'text', ref: function ref(node) {
          input = node;
        }, placeholder: 'input todo' }),
      _react2.default.createElement(
        'button',
        { className: 'btn2', type: 'submit' },
        ' Add Todo '
      )
    )
  );
};

var _default = AddTodo;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddTodo, 'AddTodo', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/organisms/AddTodo/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/organisms/AddTodo/index.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      todo = _ref.todo;

  var handleClick = function handleClick(e) {
    todo.completed = !todo.completed;
    onClick(todo);
  };
  return _react2.default.createElement(
    'li',
    {
      onClick: handleClick,
      style: {
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? 'red' : 'green'
      }
    },
    todo.text
  );
};

Todo.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  todo: _propTypes2.default.object.isRequired
};

var _default = Todo;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Todo, 'Todo', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/organisms/Todo/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/organisms/Todo/index.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
  var todos = _ref.todos,
      onTodoClick = _ref.onTodoClick,
      onDeleteTodo = _ref.onDeleteTodo,
      onGet = _ref.onGet;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      null,
      todos.map(function (todo) {
        return _react2.default.createElement(
          'div',
          { key: todo.id },
          _react2.default.createElement(_components.Todo, { todo: todo, onClick: onTodoClick }),
          _react2.default.createElement(
            'button',
            { className: 'btn3', onClick: function onClick() {
                onDeleteTodo(todo.id);
              } },
            'x'
          )
        );
      })
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn', onClick: function onClick() {
          onGet();
        } },
      'Get Todos from API'
    )
  );
};

TodoList.propTypes = {
  todos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    completed: _propTypes2.default.bool.isRequired,
    text: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: _propTypes2.default.func.isRequired
};

var _default = TodoList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TodoList, 'TodoList', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/organisms/TodoList/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/organisms/TodoList/index.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '\u2728',
      'Todo List',
      '\u2728'
    ),
    _react2.default.createElement(_containers.AddTodo, null),
    _react2.default.createElement(_containers.VisibleTodo, null)
  );
};

var _default = HomePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/pages/HomePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/pages/HomePage/index.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = __webpack_require__(52);

var theme = {}; // https://github.com/diegohaz/arc/wiki/Styling


theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

var _default = theme;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/components/themes/default.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = undefined;

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(5);

var _components = __webpack_require__(1);

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: function onAddTodo(text) {
      return dispatch((0, _actions.addTodoRequest)(text));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_components.AddTodo);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/AddTodo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/AddTodo.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withServerState = exports.mapDispatchToProps = exports.mapStateToProps = exports.PostListContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _components = __webpack_require__(1);

var _config = __webpack_require__(2);

var _reactRouterServer = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostListContainer = exports.PostListContainer = function (_Component) {
  _inherits(PostListContainer, _Component);

  function PostListContainer() {
    _classCallCheck(this, PostListContainer);

    return _possibleConstructorReturn(this, (PostListContainer.__proto__ || Object.getPrototypeOf(PostListContainer)).apply(this, arguments));
  }

  _createClass(PostListContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          onGet = _props.onGet,
          cleanServerState = _props.cleanServerState,
          hasServerState = _props.hasServerState,
          setServerState = _props.setServerState;

      if (!hasServerState) {
        if (_config.isServer) {
          onGet();
          setServerState();
        } else {
          onGet();
        }
      } else if (_config.isBrowser) {
        cleanServerState();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          todos = _props2.todos,
          onDeleteTodo = _props2.onDeleteTodo,
          onGet = _props2.onGet,
          onTodoClick = _props2.onTodoClick;

      return _react2.default.createElement(_components.TodoList, { todos: todos, onGet: onGet, onDeleteTodo: onDeleteTodo, onTodoClick: onTodoClick });
    }
  }]);

  return PostListContainer;
}(_react.Component);

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGet: function onGet() {
      return dispatch((0, _actions.getTodosRequest)());
    },
    onTodoClick: function onTodoClick(todo) {
      return dispatch((0, _actions.toggleTodoRequest)(todo));
    },
    onDeleteTodo: function onDeleteTodo(id) {
      return dispatch((0, _actions.deleteTodoRequest)(id));
    }
  };
};

var withServerState = exports.withServerState = (0, _reactRouterServer.fetchState)(function (state) {
  return {
    hasServerState: !!state.data
  };
}, function (actions) {
  return {
    setServerState: function setServerState(todos) {
      return actions.done({ todos: todos });
    },
    cleanServerState: function cleanServerState() {
      return actions.done();
    }
  };
});

var _default = withServerState((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostListContainer));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PostListContainer, 'PostListContainer', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/VisibleTodo.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/VisibleTodo.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/VisibleTodo.js');

  __REACT_HOT_LOADER__.register(withServerState, 'withServerState', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/VisibleTodo.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/VisibleTodo.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Containers
var req = __webpack_require__(34);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/home/nurzhamal/maddevs/redux_arc_ssr/src/containers/index.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(42);

var _queryString = __webpack_require__(45);

var _merge = __webpack_require__(8);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/API-service


var checkStatus = exports.checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = exports.parseJSON = function parseJSON(response) {
  return response.json();
};

var parseSettings = function parseSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      data = _ref.data,
      locale = _ref.locale,
      otherSettings = _objectWithoutProperties(_ref, ['method', 'data', 'locale']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale
  };
  var settings = (0, _merge2.default)({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};

exports.parseSettings = parseSettings;
var parseEndpoint = exports.parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : _config.apiUrl + endpoint;
  var querystring = params ? '?' + (0, _queryString.stringify)(params) : '';
  return '' + url + querystring;
};

var api = {};

api.request = function (endpoint) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = _ref2.params,
      settings = _objectWithoutProperties(_ref2, ['params']);

  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(parseJSON);
};['delete', 'get'].forEach(function (method) {
  api[method] = function (endpoint, settings) {
    return api.request(endpoint, _extends({ method: method }, settings));
  };
});['post', 'put', 'patch'].forEach(function (method) {
  api[method] = function (endpoint, data, settings) {
    return api.request(endpoint, _extends({ method: method, data: data }, settings));
  };
});

api.create = function () {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    settings: settings,

    setToken: function setToken(token) {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: 'Bearer ' + token
      });
    },
    unsetToken: function unsetToken() {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: undefined
      });
    },
    request: function request(endpoint, settings) {
      return api.request(endpoint, (0, _merge2.default)({}, this.settings, settings));
    },
    post: function post(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'post', data: data }, settings));
    },
    get: function get(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'get' }, settings));
    },
    put: function put(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'put', data: data }, settings));
    },
    patch: function patch(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'patch', data: data }, settings));
    },
    delete: function _delete(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'delete' }, settings));
    }
  };
};

var _default = api;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkStatus, 'checkStatus', '/home/nurzhamal/maddevs/redux_arc_ssr/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', '/home/nurzhamal/maddevs/redux_arc_ssr/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseSettings, 'parseSettings', '/home/nurzhamal/maddevs/redux_arc_ssr/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseEndpoint, 'parseEndpoint', '/home/nurzhamal/maddevs/redux_arc_ssr/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(api, 'api', '/home/nurzhamal/maddevs/redux_arc_ssr/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/services/api/index.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(11);

var _reduxSaga = __webpack_require__(50);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(2);

var _middlewares = __webpack_require__(29);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(30);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(31);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // https://github.com/diegohaz/arc/wiki/Redux-modules


var devtools = _config.isDev && _config.isBrowser && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var enhancers = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(_middlewares2.default).concat([sagaMiddleware])), devtools()];

  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(_sagas2.default, services);

  if (false) {
    module.hot.accept('./reducer', function () {
      var nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', function () {
      var nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(function () {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(devtools, 'devtools', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/configure.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/configure.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/configure.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(12),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(36);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/middlewares.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(43);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(11);

var _reduxForm = __webpack_require__(49);

var _reduxSagaThunk = __webpack_require__(12);

var _reducer = __webpack_require__(7);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer,
  todos: _reducer2.default
}; // https://github.com/diegohaz/arc/wiki/Reducers


var req = __webpack_require__(37);

req.keys().forEach(function (key) {
  var storeName = (0, _camelCase2.default)(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

var _default = (0, _redux.combineReducers)(reducers);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(req, 'req', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/reducer.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(13);

var req = __webpack_require__(38); // https://github.com/diegohaz/arc/wiki/Sagas


var sagas = req.keys().map(function (key) {
  return req(key).default;
});

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(sagas.map(function (saga) {
            return (0, _effects.fork)(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(sagas, 'sagas', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/sagas.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodo = getTodo;
exports.myGetSaga = myGetSaga;
exports.addTodo = addTodo;
exports.myAddSaga = myAddSaga;
exports.deleteTodo = deleteTodo;
exports.myDeleteSaga = myDeleteSaga;
exports.toggleTodo = toggleTodo;
exports.myToggleSaga = myToggleSaga;

var _effects = __webpack_require__(13);

var _axios = __webpack_require__(39);

var _axios2 = _interopRequireDefault(_axios);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getTodo),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(myGetSaga),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(addTodo),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(myAddSaga),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(deleteTodo),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(myDeleteSaga),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(toggleTodo),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(myToggleSaga);

function getTodo() {
  var response;
  return regeneratorRuntime.wrap(function getTodo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(_axios2.default.get, 'http://localhost:3002/todos/');

        case 2:
          response = _context.sent;
          _context.next = 5;
          return (0, _effects.put)((0, _actions.getTodosSuccess)(response.data));

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
function myGetSaga() {
  var _ref;

  return regeneratorRuntime.wrap(function myGetSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {
            _context2.next = 9;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)('GET_TODOS');

        case 3:
          _ref = _context2.sent;

          _objectDestructuringEmpty(_ref);

          _context2.next = 7;
          return (0, _effects.call)(getTodo);

        case 7:
          _context2.next = 0;
          break;

        case 9:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function addTodo(text) {
  var response;
  return regeneratorRuntime.wrap(function addTodo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.call)(_axios2.default, {
            method: 'POST',
            url: 'http://localhost:3002/todos/',
            data: {
              text: text,
              completed: false
            }
          });

        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return (0, _effects.put)((0, _actions.addTodoSuccess)(text, response.data));

        case 5:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
function myAddSaga() {
  var _ref2, text;

  return regeneratorRuntime.wrap(function myAddSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if (false) {
            _context4.next = 9;
            break;
          }

          _context4.next = 3;
          return (0, _effects.take)('ADD_TODO');

        case 3:
          _ref2 = _context4.sent;
          text = _ref2.text;
          _context4.next = 7;
          return (0, _effects.call)(addTodo, text);

        case 7:
          _context4.next = 0;
          break;

        case 9:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function deleteTodo(id) {
  var response;
  return regeneratorRuntime.wrap(function deleteTodo$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.call)(_axios2.default.delete, 'http://localhost:3002/todos/' + id);

        case 2:
          response = _context5.sent;
          _context5.next = 5;
          return (0, _effects.put)((0, _actions.deleteTodoSuccess)(id));

        case 5:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}
function myDeleteSaga() {
  var _ref3, id;

  return regeneratorRuntime.wrap(function myDeleteSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (false) {
            _context6.next = 9;
            break;
          }

          _context6.next = 3;
          return (0, _effects.take)('DELETE_TODO');

        case 3:
          _ref3 = _context6.sent;
          id = _ref3.id;
          _context6.next = 7;
          return (0, _effects.call)(deleteTodo, id);

        case 7:
          _context6.next = 0;
          break;

        case 9:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function toggleTodo(todo) {
  var response;
  return regeneratorRuntime.wrap(function toggleTodo$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.call)(_axios2.default, {
            method: 'PUT',
            url: 'http://localhost:3002/todos/' + todo.id,
            data: {
              text: todo.text,
              completed: !todo.completed
            }
          });

        case 2:
          response = _context7.sent;
          _context7.next = 5;
          return (0, _effects.put)((0, _actions.toggleTodoSuccess)(response.data.id));

        case 5:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}
function myToggleSaga() {
  var _ref4, todo;

  return regeneratorRuntime.wrap(function myToggleSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (false) {
            _context8.next = 9;
            break;
          }

          _context8.next = 3;
          return (0, _effects.take)('TOGGLE_TODO');

        case 3:
          _ref4 = _context8.sent;
          todo = _ref4.todo;
          _context8.next = 7;
          return (0, _effects.call)(toggleTodo, todo);

        case 7:
          _context8.next = 0;
          break;

        case 9:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.fork)(myGetSaga);

        case 2:
          _context9.next = 4;
          return (0, _effects.fork)(myAddSaga);

        case 4:
          _context9.next = 6;
          return (0, _effects.fork)(myDeleteSaga);

        case 6:
          _context9.next = 8;
          return (0, _effects.fork)(myToggleSaga);

        case 8:
        case 'end':
          return _context9.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getTodo, 'getTodo', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(myGetSaga, 'myGetSaga', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(addTodo, 'addTodo', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(myAddSaga, 'myAddSaga', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(deleteTodo, 'deleteTodo', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(myDeleteSaga, 'myDeleteSaga', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(toggleTodo, 'toggleTodo', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(myToggleSaga, 'myToggleSaga', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/home/nurzhamal/maddevs/redux_arc_ssr/src/store/todo/sagas.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./organisms/AddTodo/index.js": 19,
	"./organisms/Todo/index.js": 20,
	"./organisms/TodoList/index.js": 21,
	"./pages/HomePage/index.js": 22
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AddTodo.js": 24,
	"./VisibleTodo.js": 25
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 34;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todo/actions.js": 6
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 36;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todo/reducer.js": 7
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todo/sagas.js": 32
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map