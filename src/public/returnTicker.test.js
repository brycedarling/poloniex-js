import url from 'url';
import returnTicker from './returnTicker';

describe('returnTicker', () => {
  it('requests returnTicker from the Poloniex API and returns a promise', (done) => {
    returnTicker().then((response) => {
      const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
      expect(hostname).toEqual('poloniex.com');
      expect(pathname).toEqual('/public');
      expect(query.command).toEqual('returnTicker');
      done();
    });
  });
});
