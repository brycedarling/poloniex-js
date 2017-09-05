'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex API', function () {
  describe('returnChartData', function () {
    describe('when currencyPair is not in the list of currency pairs', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'currencyPair', period: 300, start: 0, end: 600
          });
        }).toThrow();
      });
    });

    describe('when period is not in the list of periods', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'USDT_BTC', period: 'period', start: 0, end: 600
          });
        }).toThrow();
      });
    });

    describe('when start is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'USDT_BTC', period: 300, start: 'start', end: 600
          });
        }).toThrow();
      });
    });

    describe('when start is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'USDT_BTC', period: 300, start: -1, end: 600
          });
        }).toThrow();
      });
    });

    describe('when end is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: 'end'
          });
        }).toThrow();
      });
    });

    describe('when end is greater than 9999999999', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: 9999999999 + 1
          });
        }).toThrow();
      });
    });

    describe('when end is less than start + period', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnChartData)({
            currencyPair: 'USDT_BTC', period: 300, start: 0, end: 299
          });
        }).toThrow();
      });
    });

    describe('when given valid currencyPair, period, start, and end', function () {
      it('makes a request to the Poloniex API and returns a promise', function (done) {
        var currencyPair = 'USDT_BTC';
        var period = 300;
        var start = 0;
        var end = 600;
        (0, _index.returnChartData)({
          currencyPair: currencyPair, period: period, start: start, end: end
        }).then(function (response) {
          var params = _url2.default.parse(response.request.responseURL, true).query;
          expect(params.currencyPair).toEqual(currencyPair);
          expect(params.period).toEqual(period.toString());
          expect(params.start).toEqual(start.toString());
          expect(params.end).toEqual(end.toString());
          done();
        });
      });
    });
  });

  describe('returnTradeHistory', function () {
    describe('when start is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnTradeHistory)({ start: 'start', end: 600 });
        }).toThrow();
      });
    });

    describe('when start is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnTradeHistory)({ start: -1, end: 600 });
        }).toThrow();
      });
    });

    describe('when end is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnTradeHistory)({ start: 0, end: 'end' });
        }).toThrow();
      });
    });

    describe('when end is greater than 9999999999', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnTradeHistory)({ start: 0, end: 9999999999 + 1 });
        }).toThrow();
      });
    });

    describe('when end is less than or equal to start', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _index.returnTradeHistory)({ start: 1, end: 0 });
        }).toThrow();
        expect(function () {
          return (0, _index.returnTradeHistory)({ start: 0, end: 0 });
        }).toThrow();
      });
    });

    describe('when given valid start and end', function () {
      it('makes a request to the Poloniex API and returns a promise', function (done) {
        var start = 300;
        var end = 600;
        (0, _index.returnTradeHistory)({ start: start, end: end }).then(function (response) {
          var params = _url2.default.parse(response.request.responseURL, true).query;
          expect(params.start).toEqual(start.toString());
          expect(params.end).toEqual(end.toString());
          done();
        });
      });
    });
  });
});