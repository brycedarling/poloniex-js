'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnLoanOrders = require('./returnLoanOrders');

var _returnLoanOrders2 = _interopRequireDefault(_returnLoanOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex Public API', function () {
  describe('returnLoanOrders', function () {
    describe('when currency is not in the list of currencies', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnLoanOrders2.default)({
            currency: 'currency'
          });
        }).toThrow();
      });
    });

    describe('when given valid currency', function () {
      it('requests returnLoanOrders and returns a promise', function (done) {
        var currency = 'BTC';
        (0, _returnLoanOrders2.default)({ currency: currency }).then(function (response) {
          var _url$parse = _url2.default.parse(response.request.responseURL, true),
              hostname = _url$parse.hostname,
              pathname = _url$parse.pathname,
              query = _url$parse.query;

          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnOrderBook');
          expect(query.currency).toEqual(currency);
          done();
        });
      });
    });
  });
});