'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnTradeHistory = require('./returnTradeHistory');

var _returnTradeHistory2 = _interopRequireDefault(_returnTradeHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex API', function () {
  describe('returnTradeHistory', function () {
    describe('when start is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 'start', end: 600 });
        }).toThrow();
      });
    });

    describe('when start is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: -1, end: 600 });
        }).toThrow();
      });
    });

    describe('when end is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 0, end: 'end' });
        }).toThrow();
      });
    });

    describe('when end is greater than 9999999999', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 0, end: 9999999999 + 1 });
        }).toThrow();
      });
    });

    describe('when end is less than or equal to start', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 1, end: 0 });
        }).toThrow();
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 0, end: 0 });
        }).toThrow();
      });
    });

    describe('when given valid start and end', function () {
      it('requests returnTradeHistory and returns a promise', function (done) {
        var start = 300;
        var end = 600;
        (0, _returnTradeHistory2.default)({ start: start, end: end }).then(function (response) {
          var _url$parse = _url2.default.parse(response.request.responseURL, true),
              hostname = _url$parse.hostname,
              pathname = _url$parse.pathname,
              query = _url$parse.query;

          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnTradeHistory');
          expect(query.start).toEqual(start.toString());
          expect(query.end).toEqual(end.toString());
          done();
        });
      });
    });
  });
});