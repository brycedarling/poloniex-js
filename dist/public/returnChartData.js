'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require('../assert');

var _assert2 = _interopRequireDefault(_assert);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

var _currencyPairs = require('../currencyPairs');

var _currencyPairs2 = _interopRequireDefault(_currencyPairs);

var _periods = require('../periods');

var _periods2 = _interopRequireDefault(_periods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Returns candlestick chart data.
* @namespace poloniex
* @method returnChartData
* @param {Object} options - currencyPair, period, start, end
* @return {Promise} response
*/
exports.default = function (_ref) {
  var currencyPair = _ref.currencyPair,
      period = _ref.period,
      start = _ref.start,
      end = _ref.end;

  (0, _assert2.default)(_currencyPairs2.default[currencyPair], 'Invalid currencyPair, ' + currencyPair + ', must be one of: ' + Object.keys(_currencyPairs2.default).join(', '));
  (0, _assert2.default)(_periods2.default[period], 'Invalid period, ' + period + ', must be one of: ' + Object.keys(_periods2.default).join(', '));
  (0, _assert2.default)(typeof start === 'number' && start >= 0, 'Invalid start, ' + start + ', must be a non-negative number');
  if (typeof end !== 'undefined') {
    (0, _assert2.default)(typeof end === 'number' && end >= 0, 'Invalid end, ' + end + ', must be a non-negative number');
    (0, _assert2.default)(end >= start + period, 'Invalid end, ' + end + ', must be >= start + period (' + (start + period) + ')');
  }

  return _client2.default.get('/public', {
    params: {
      command: 'returnChartData',
      currencyPair: currencyPair,
      start: start,
      end: end,
      period: period
    }
  });
};