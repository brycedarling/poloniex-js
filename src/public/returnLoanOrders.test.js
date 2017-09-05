import url from 'url';
import returnLoanOrders from './returnLoanOrders';

describe('Poloniex Public API', () => {
  describe('returnLoanOrders', () => {
    describe('when currency is not in the list of currencies', () => {
      it('throws an error', () => {
        expect(() => returnLoanOrders({
          currency: 'currency',
        })).toThrow();
      });
    });

    describe('when given valid currency', () => {
      it('requests returnLoanOrders and returns a promise', (done) => {
        const currency = 'BTC';
        returnLoanOrders({ currency }).then((response) => {
          const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
          expect(hostname).toEqual('poloniex.com');
          expect(pathname).toEqual('/public');
          expect(query.command).toEqual('returnLoanOrders');
          expect(query.currency).toEqual(currency);
          done();
        });
      });
    });
  });
});
