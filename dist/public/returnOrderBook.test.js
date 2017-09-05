'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnOrderBook = require('./returnOrderBook');

var _returnOrderBook2 = _interopRequireDefault(_returnOrderBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex Public API', function () {
  describe('returnOrderBook', function () {
    describe('when currencyPair is not in the list of currency pairs', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnOrderBook2.default)({
            currencyPair: 'currencyPair'
          });
        }).toThrow();
      });
    });

    describe('when depth is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnOrderBook2.default)({
            currencyPair: 'USDT_BTC', depth: 'depth'
          });
        }).toThrow();
      });
    });

    describe('when currencyPair is all', function () {
      it('requests returnOrderBook and returns a promise', function (done) {
        var currencyPair = 'all';
        (0, _returnOrderBook2.default)({ currencyPair: currencyPair }).then(function (response) {
          var _url$parse = _url2.default.parse(response.request.responseURL, true),
              hostname = _url$parse.hostname,
              pathname = _url$parse.pathname,
              query = _url$parse.query;

          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnOrderBook');
          expect(query.currencyPair).toEqual(currencyPair);
          done();
        });
      });
    });

    describe('when given valid currencyPair', function () {
      it('requests returnOrderBook and returns a promise', function (done) {
        var currencyPair = 'USDT_BTC';
        (0, _returnOrderBook2.default)({ currencyPair: currencyPair }).then(function (response) {
          var _url$parse2 = _url2.default.parse(response.request.responseURL, true),
              hostname = _url$parse2.hostname,
              pathname = _url$parse2.pathname,
              query = _url$parse2.query;

          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnOrderBook');
          expect(query.currencyPair).toEqual(currencyPair);
          done();
        });
      });
    });

    describe('when given valid currencyPair and depth', function () {
      it('requests returnOrderBook and returns a promise', function (done) {
        var currencyPair = 'USDT_BTC';
        var depth = 10;
        (0, _returnOrderBook2.default)({ currencyPair: currencyPair, depth: depth }).then(function (response) {
          var _url$parse3 = _url2.default.parse(response.request.responseURL, true),
              hostname = _url$parse3.hostname,
              pathname = _url$parse3.pathname,
              query = _url$parse3.query;

          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnOrderBook');
          expect(query.currencyPair).toEqual(currencyPair);
          expect(query.depth).toEqual(depth.toString());
          done();
        });
      });
    });
  });
});