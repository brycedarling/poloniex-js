import client from '../client';

/**
* Returns the ticker for all markets.
* @namespace poloniex
* @method returnTicker
* @return {Promise} response
*/
export default () => client.get('/public', {
  params: {
    command: 'returnTicker',
  },
});
