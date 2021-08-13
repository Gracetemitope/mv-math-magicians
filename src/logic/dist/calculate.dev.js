"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = calculate;

var _operate = _interopRequireDefault(require("./operate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}
/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */


function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: "",
      next: "",
      operation: ""
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    } // If there is an operation, update next


    if (obj.operation) {
      if (obj.next) {
        return {
          next: obj.next + buttonName
        };
      }

      return {
        next: buttonName
      };
    } // If there is no operation, update next and clear the value


    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null
      };
    }

    return {
      next: buttonName,
      total: null
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }

      return {
        next: "".concat(obj.next, ".")
      };
    }

    if (obj.operation) {
      return {
        next: '0.'
      };
    }

    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }

      return {
        total: "".concat(obj.total, ".")
      };
    }

    return {
      total: '0.'
    };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: (0, _operate["default"])(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } // '=' with no operation, nothing to do


    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {
        next: (-1 * parseFloat(obj.next)).toString()
      };
    }

    if (obj.total) {
      return {
        total: (-1 * parseFloat(obj.total)).toString()
      };
    }

    return {};
  } // Button must be an operation
  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }
  // User pressed an operation button and there is an existing operation


  if (obj.operation) {
    return {
      total: (0, _operate["default"])(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  } // no operation yet, but the user typed one
  // The user hasn't typed a number yet, just save the operation


  if (!obj.next) {
    return {
      operation: buttonName
    };
  } // save the operation and shift 'next' into 'total'


  return {
    total: obj.next,
    next: null,
    operation: buttonName
  };
}