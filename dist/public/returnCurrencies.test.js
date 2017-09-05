'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnCurrencies = require('./returnCurrencies');

var _returnCurrencies2 = _interopRequireDefault(_returnCurrencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex Public API', function () {
  describe('returnCurrencies', function () {
    it('requests returnCurrencies from the Poloniex API and returns a promise', function (done) {
      (0, _returnCurrencies2.default)().then(function (response) {
        var _url$parse = _url2.default.parse(response.request.responseURL, true),
            hostname = _url$parse.hostname,
            pathname = _url$parse.pathname,
            query = _url$parse.query;

        expect(hostname).toEqual('poloniex.com');
        expect(pathname).toEqual('/public');
        expect(query.command).toEqual('returnCurrencies');
        done();
      });
    });
  });
});