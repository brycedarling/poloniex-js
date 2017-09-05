'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnChartData = require('./returnChartData');

var _returnChartData2 = _interopRequireDefault(_returnChartData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex Public API', function () {
  describe('returnChartData', function () {
    describe('when currencyPair is not in the list of currency pairs', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'currencyPair', period: 300, start: 0
          });
        }).toThrow();
      });
    });

    describe('when period is not in the list of periods', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 'period', start: 0
          });
        }).toThrow();
      });
    });

    describe('when start is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: 'start'
          });
        }).toThrow();
      });
    });

    describe('when start is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: -1
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

    describe('when end is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnChartData2.default)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: -1
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

      describe('when given valid currencyPair, period, and start', function () {
        it('requests returnChartData and returns a promise', function (done) {
          var currencyPair = 'USDT_BTC';
          var period = 300;
          var start = 0;
          var end = 600;
          (0, _returnChartData2.default)({
            currencyPair: currencyPair, period: period, start: start, end: end
          }).then(function (response) {
            var _url$parse2 = _url2.default.parse(response.request.responseURL, true),
                hostname = _url$parse2.hostname,
                pathname = _url$parse2.pathname,
                query = _url$parse2.query;

            expect(hostname).toEqual('poloniex.com');
            expect(pathname).toEqual('/public');
            expect(query.command).toEqual('returnChartData');
            expect(query.currencyPair).toEqual(currencyPair);
            expect(query.period).toEqual(period.toString());
            expect(query.start).toEqual(start.toString());
            done();
          });
        });
      });
    });
  });
});