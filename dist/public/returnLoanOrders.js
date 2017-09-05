'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require('../assert');

var _assert2 = _interopRequireDefault(_assert);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

var _currencies = require('../currencies');

var _currencies2 = _interopRequireDefault(_currencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Returns the list of loan offers and demands for a given currency.
* @namespace poloniex
* @method returnLoanOrders
* @param {Object} options - currency
* @return {Promise} response
*/
exports.default = function (_ref) {
  var currency = _ref.currency;

  (0, _assert2.default)(_currencies2.default[currency], 'Invalid currency, ' + currency + ', must be one of: ' + Object.keys(_currencies2.default).join(', '));

  return _client2.default.get('/public', {
    params: {
      command: 'returnLoanOrders',
      currency: currency
    }
  });
};