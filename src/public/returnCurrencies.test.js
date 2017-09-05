import url from 'url';
import returnCurrencies from './returnCurrencies';

describe('Poloniex Public API', () => {
  describe('returnCurrencies', () => {
    it('requests returnCurrencies from the Poloniex API and returns a promise', (done) => {
      returnCurrencies().then((response) => {
        const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
        expect(hostname).toEqual('poloniex.com');
        expect(pathname).toEqual('/public');
        expect(query.command).toEqual('returnCurrencies');
        done();
      });
    });
  });
});
