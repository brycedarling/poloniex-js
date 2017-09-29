import url from 'url';
import returnTicker from './returnTicker';

describe('Poloniex Public API', () => {
  describe('returnTicker', () => {
    it('requests returnTicker from the Poloniex API and returns a promise', async () => {
      const response = await returnTicker();
      const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
      expect(hostname).toEqual('poloniex.com');
      expect(pathname).toEqual('/public');
      expect(query.command).toEqual('returnTicker');
    });
  });
});
