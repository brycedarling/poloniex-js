'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the 24-hour volume for all markets, plus totals for primary currencies.
 * @function return24Volume
 * @static
 * @return {Promise} response
 */
exports.default = function () {
  return _client2.default.get('/public', {
    params: {
      command: 'return24hVolume'
    }
  });
};