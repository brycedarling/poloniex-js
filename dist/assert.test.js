'use strict';

var _assert = require('./assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('assert', function () {
  describe('when given a truthy expression', function () {
    it('does not throw an assertion error', function () {
      expect(function () {
        return (0, _assert2.default)(true);
      }).not.toThrow();
      expect(function () {
        return (0, _assert2.default)({});
      }).not.toThrow();
      expect(function () {
        return (0, _assert2.default)([]);
      }).not.toThrow();
      expect(function () {
        return (0, _assert2.default)('a');
      }).not.toThrow();
      expect(function () {
        return (0, _assert2.default)(1);
      }).not.toThrow();
    });
  });

  describe('when given a falsy expression', function () {
    it('throws an assertion error', function () {
      expect(function () {
        return (0, _assert2.default)(false);
      }).toThrow();
      expect(function () {
        return (0, _assert2.default)(null);
      }).toThrow();
      expect(function () {
        return (0, _assert2.default)(undefined);
      }).toThrow();
      expect(function () {
        return (0, _assert2.default)('');
      }).toThrow();
      expect(function () {
        return (0, _assert2.default)(0);
      }).toThrow();
    });
  });

  describe('when given a falsy expression and a message', function () {
    it('throws an error with the given message', function () {
      expect(function () {
        return (0, _assert2.default)(false, 'message');
      }).toThrow('message');
    });
  });
});