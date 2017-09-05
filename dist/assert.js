'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (expr, message) {
  if (!expr) {
    throw new Error(message || 'Assertion');
  }
};