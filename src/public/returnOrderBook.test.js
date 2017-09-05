import url from 'url';
import returnOrderBook from './returnOrderBook';

describe('Poloniex Public API', () => {
  describe('returnOrderBook', () => {
    describe('when currencyPair is not in the list of currency pairs', () => {
      it('throws an error', () => {
        expect(() => returnOrderBook({
          currencyPair: 'currencyPair',
        })).toThrow();
      });
    });

    describe('when depth is not a number', () => {
      it('throws an error', () => {
        expect(() => returnOrderBook({
          currencyPair: 'USDT_BTC', depth: 'depth',
        })).toThrow();
      });
    });

    describe('when currencyPair is all', () => {
      it('requests returnOrderBook and returns a promise', (done) => {
        const currencyPair = 'all';
        returnOrderBook({ currencyPair }).then((response) => {
          const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnOrderBook');
          expect(query.currencyPair).toEqual(currencyPair);
          done();
        });
      });
    });

    describe('when given valid currencyPair', () => {
      it('requests returnOrderBook and returns a promise', (done) => {
        const currencyPair = 'USDT_BTC';
        returnOrderBook({ currencyPair }).then((response) => {
          const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnOrderBook');
          expect(query.currencyPair).toEqual(currencyPair);
          done();
        });
      });
    });

    describe('when given valid currencyPair and depth', () => {
      it('requests returnOrderBook and returns a promise', (done) => {
        const currencyPair = 'USDT_BTC';
        const depth = 10;
        returnOrderBook({ currencyPair, depth }).then((response) => {
          const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
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
