'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnTradeHistory = exports.returnChartData = exports.periods = exports.currencyPairs = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _axios2.default.create({
  baseURL: 'https://poloniex.com/'
});

// TODO: implement other public API methods
// returnTicker
// return24Volume
// returnOrderBook
// returnCurrencies
// returnLoanOrders

// TODO: implement trading API methods

// TODO: add all other currency pairs
var currencyPairs = exports.currencyPairs = {
  USDT_BTC: true,
  USDT_ETH: true,
  USDT_LTC: true
};

var currencyPairsList = Object.keys(currencyPairs).join(', ');

var periods = exports.periods = {
  300: true,
  900: true,
  1800: true,
  7200: true,
  14400: true,
  86400: true
};

var periodsList = Object.keys(periods).join(', ');

var assert = function assert(expr, message) {
  if (!expr) {
    throw new Error(message || 'Assertion');
  }
};

// TODO: document method arguments, currencyPair and period and start and end, all required
var returnChartData = exports.returnChartData = function returnChartData(_ref) {
  var currencyPair = _ref.currencyPair,
      period = _ref.period,
      start = _ref.start,
      end = _ref.end;

  assert(currencyPairs[currencyPair], 'Invalid currencyPair, ' + currencyPair + ', must be one of: ' + currencyPairsList);
  assert(periods[period], 'Invalid period, ' + period + ', must be one of: ' + periodsList);
  assert(typeof start === 'number' && start >= 0, 'Invalid start, ' + start + ', must be a non-negative number');
  assert(typeof end === 'number' && end < 9999999999, 'Invalid end, ' + end + ', must be a number less than 9999999999');
  assert(end >= start + period, 'Invalid end, ' + end + ', must be >= start + period (' + (start + period) + ')');

  return client.get('/public', {
    params: {
      command: 'returnChartData',
      currencyPair: currencyPair,
      start: start,
      end: end,
      period: period
    }
  });
};

// TODO: document method arguments, start and end, all optional
var returnTradeHistory = exports.returnTradeHistory = function returnTradeHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof options.start !== 'undefined') {
    assert(typeof options.start === 'number' && options.start >= 0, 'Invalid start, ' + options.start + ', must be a non-negative number');
  }

  if (typeof options.end !== 'undefined') {
    assert(options.end < 9999999999, 'Invalid end, ' + options.end + ', must be a number less than 9999999999');

    if (typeof options.start !== 'undefined') {
      assert(options.end > options.start, 'Invalid end, ' + options.end + ', must be greater than start (' + options.start + ')');
    }
  }

  return client.get('/public', {
    params: {
      command: 'returnTradeHistory',
      start: options.start,
      end: options.end
    }
  });
};