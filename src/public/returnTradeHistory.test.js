import url from 'url';
import returnTradeHistory from './returnTradeHistory';

describe('Poloniex Public API', () => {
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
      it('requests returnTradeHistory and returns a promise', async () => {
        const start = 300;
        const end = 600;
        const response = await returnTradeHistory({ start, end });
        const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
        expect(hostname).toEqual('poloniex.com');
        expect(pathname).toEqual('/public');
        expect(query.command).toEqual('returnTradeHistory');
        expect(query.start).toEqual(start.toString());
        expect(query.end).toEqual(end.toString());
      });
    });
  });
});
