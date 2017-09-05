import url from 'url';
import {
  returnChartData,
  returnTradeHistory,
} from './index';

describe('Poloniex API', () => {
  describe('returnChartData', () => {
    describe('when currencyPair is not in the list of currency pairs', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'currencyPair', period: 300, start: 0, end: 600,
        })).toThrow();
      });
    });

    describe('when period is not in the list of periods', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 'period', start: 0, end: 600,
        })).toThrow();
      });
    });

    describe('when start is not a number', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: 'start', end: 600,
        })).toThrow();
      });
    });

    describe('when start is a negative number', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: -1, end: 600,
        })).toThrow();
      });
    });

    describe('when end is not a number', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: 0, end: 'end',
        })).toThrow();
      });
    });

    describe('when end is greater than 9999999999', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: 0, end: 9999999999 + 1,
        })).toThrow();
      });
    });

    describe('when end is less than start + period', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: 0, end: 299,
        })).toThrow();
      });
    });

    describe('when given valid currencyPair, period, start, and end', () => {
      it('makes a request to the Poloniex API and returns a promise', (done) => {
        const currencyPair = 'USDT_BTC';
        const period = 300;
        const start = 0;
        const end = 600;
        returnChartData({
          currencyPair, period, start, end,
        }).then((response) => {
          const params = url.parse(response.request.responseURL, true).query;
          expect(params.currencyPair).toEqual(currencyPair);
          expect(params.period).toEqual(period.toString());
          expect(params.start).toEqual(start.toString());
          expect(params.end).toEqual(end.toString());
          done();
        });
      });
    });
  });

  describe('returnTradeHistory', () => {
    describe('when start is not a number', () => {
      it('throws an error', () => {
        expect(() => returnTradeHistory({ start: 'start', end: 600 })).toThrow();
      });
    });

    describe('when start is a negative number', () => {
      it('throws an error', () => {
        expect(() => returnTradeHistory({ start: -1, end: 600 })).toThrow();
      });
    });

    describe('when end is not a number', () => {
      it('throws an error', () => {
        expect(() => returnTradeHistory({ start: 0, end: 'end' })).toThrow();
      });
    });

    describe('when end is greater than 9999999999', () => {
      it('throws an error', () => {
        expect(() => returnTradeHistory({ start: 0, end: 9999999999 + 1 })).toThrow();
      });
    });

    describe('when end is less than or equal to start', () => {
      it('throws an error', () => {
        expect(() => returnTradeHistory({ start: 1, end: 0 })).toThrow();
        expect(() => returnTradeHistory({ start: 0, end: 0 })).toThrow();
      });
    });

    describe('when given valid start and end', () => {
      it('makes a request to the Poloniex API and returns a promise', (done) => {
        const start = 300;
        const end = 600;
        returnTradeHistory({ start, end }).then((response) => {
          const params = url.parse(response.request.responseURL, true).query;
          expect(params.start).toEqual(start.toString());
          expect(params.end).toEqual(end.toString());
          done();
        });
      });
    });
  });
});
