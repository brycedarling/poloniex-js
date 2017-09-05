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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Returns the order book for a given market.
* You may set currencyPair to "all" to get the order books of all markets.
* @namespace poloniex
* @method returnOrderBook
* @param {Object} options - currencyPair, depth
* @return {Promise} response
*/
exports.default = function (_ref) {
  var currencyPair = _ref.currencyPair,
      depth = _ref.depth;

  (0, _assert2.default)(_currencyPairs2.default[currencyPair], 'Invalid currencyPair, ' + currencyPair + ', must be one of: ' + Object.keys(_currencyPairs2.default).join(', '));

  if (typeof depth !== 'undefined') {
    (0, _assert2.default)(typeof depth === 'number', 'Invalid depth, ' + depth + ', must be a number');
  }

  return _client2.default.get('/public', {
    params: {
      command: 'returnOrderBook',
      currencyPair: currencyPair,
      depth: depth
    }
  });
};