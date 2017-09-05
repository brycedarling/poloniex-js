'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require('../assert');

var _assert2 = _interopRequireDefault(_assert);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: document method arguments, start and end, all optional
exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof options.start !== 'undefined') {
    (0, _assert2.default)(typeof options.start === 'number' && options.start >= 0, 'Invalid start, ' + options.start + ', must be a non-negative number');
  }

  if (typeof options.end !== 'undefined') {
    (0, _assert2.default)(options.end < 9999999999, 'Invalid end, ' + options.end + ', must be a number less than 9999999999');

    if (typeof options.start !== 'undefined') {
      (0, _assert2.default)(options.end > options.start, 'Invalid end, ' + options.end + ', must be greater than start (' + options.start + ')');
    }
  }

  return _client2.default.get('/public', {
    params: {
      command: 'returnTradeHistory',
      start: options.start,
      end: options.end
    }
  });
};