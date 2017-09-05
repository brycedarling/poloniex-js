'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _client2.default.get('/public', {
    params: {
      command: 'returnTicker'
    }
  });
};