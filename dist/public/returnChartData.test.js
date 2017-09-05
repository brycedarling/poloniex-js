'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnChartData = require('./returnChartData');

var _returnChartData2 = _interopRequireDefault(_returnChartData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex API', function () {
  describe('returnChartData', function () {
    describe('when currencyPair is not in the list of currency pairs', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'currencyPair', period: 300, start: 0, end: 600
          });
        }).toThrow();
      });
    });

    describe('when period is not in the list of periods', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 'period', start: 0, end: 600
          });
        }).toThrow();
      });
    });

    describe('when start is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: 'start', end: 600
          });
        }).toThrow();
      });
    });

    describe('when start is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: -1, end: 600
          });
        }).toThrow();
      });
    });

    describe('when end is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: 'end'
          });
        }).toThrow();
      });
    });

    describe('when end is greater than 9999999999', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: 9999999999 + 1
          });
        }).toThrow();
      });
    });

    describe('when end is less than start + period', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: 299
          });
        }).toThrow();
      });
    });

    describe('when given valid currencyPair, period, start, and end', function () {
      it('requests returnChartData and returns a promise', function (done) {
        var currencyPair = 'USDT_BTC';
        var period = 300;
        var start = 0;
        var end = 600;
        (0, _returnChartData2.default)({
          currencyPair: currencyPair, period: period, start: start, end: end
        }).then(function (response) {
          var _url$parse = _url2.default.parse(response.request.responseURL, true),
              hostname = _url$parse.hostname,
              pathname = _url$parse.pathname,
              query = _url$parse.query;

          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnChartData');
          expect(query.currencyPair).toEqual(currencyPair);
          expect(query.period).toEqual(period.toString());
          expect(query.start).toEqual(start.toString());
          expect(query.end).toEqual(end.toString());
          done();
        });
      });
    });
  });
});