import url from 'url';
import return24Volume from './return24Volume';

describe('Poloniex Public API', () => {
  describe('return24Volume', () => {
    it('requests return24Volume from the Poloniex API and returns a promise', async () => {
      const response = await return24Volume();
      const { hostname, pathname, query } = url.parse(response.request.responseURL, true);
      expect(hostname).toEqual('poloniex.com');
      expect(pathname).toEqual('/public');
      expect(query.command).toEqual('return24hVolume');
    });
  });
});
