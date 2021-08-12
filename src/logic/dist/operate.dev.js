"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = operate;

var _big = _interopRequireDefault(require("big.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function operate(numberOne, numberTwo, operation) {
  var one = (0, _big["default"])(numberOne);
  var two = (0, _big["default"])(numberTwo);

  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === 'x') {
    return one.times(two).toString();
  }

  if (operation === '÷') {
    return one.div(two).toString();
  }

  if (operation === '%') {
    return one.mod(two).toString();
  }

  throw Error("Unknown operation '".concat(operation, "'"));
}