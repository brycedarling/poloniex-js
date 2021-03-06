import url from 'url';
import returnChartData from './returnChartData';

describe('Poloniex Public API', () => {
  describe('returnChartData', () => {
    describe('when currencyPair is not in the list of currency pairs', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'currencyPair', period: 300, start: 0,
        })).toThrow();
      });
    });

    describe('when period is not in the list of periods', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 'period', start: 0,
        })).toThrow();
      });
    });

    describe('when start is not a number', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: 'start',
        })).toThrow();
      });
    });

    describe('when start is a negative number', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: -1,
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

    describe('when end is a negative number', () => {
      it('throws an error', () => {
        expect(() => returnChartData({
          currencyPair: 'USDT_BTC', period: 300, start: 0, end: -1,
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
      it('requests returnChartData and returns a promise', async () => {
        const currencyPair = 'USDT_BTC';
        const period = 300;
        const start = 0;
        const end = 600;
        const response = await returnChartData({
          currencyPair, period, start, end,
        });
        const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
        expect(hostname).toEqual('poloniex.com');
        expect(pathname).toEqual('/public');
        expect(query.command).toEqual('returnChartData');
        expect(query.currencyPair).toEqual(currencyPair);
        expect(query.period).toEqual(period.toString());
        expect(query.start).toEqual(start.toString());
        expect(query.end).toEqual(end.toString());
      });

      it('returns dates that are Date objects', async () => {
        const currencyPair = 'USDT_BTC';
        const period = 300;
        const start = 0;
        const end = 600;
        const response = await returnChartData({
          currencyPair, period, start, end,
        });
        expect(response.data[0].date).toBeInstanceOf(Date);
      });
    });

    describe('when given valid currencyPair, period, and start', () => {
      it('requests returnChartData and returns a promise', async () => {
        const currencyPair = 'USDT_BTC';
        const period = 300;
        const start = Date.now() - 1000;
        const response = await returnChartData({
          currencyPair, period, start,
        });
        const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
        expect(hostname).toEqual('poloniex.com');
        expect(pathname).toEqual('/public');
        expect(query.command).toEqual('returnChartData');
        expect(query.currencyPair).toEqual(currencyPair);
        expect(query.period).toEqual(period.toString());
        expect(query.start).toEqual(start.toString());
      });

      it('returns dates that are Date objects', async () => {
        const currencyPair = 'USDT_BTC';
        const period = 300;
        const start = Date.now() - 1000;
        const response = await returnChartData({
          currencyPair, period, start,
        });
        expect(response.data[0].date).toBeInstanceOf(Date);
      });
    });
  });
});
