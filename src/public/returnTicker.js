import client from '../client';

/**
 * Returns the ticker for all markets.
 * @function returnTicker
 * @static
 * @return {Promise} response
 */
export default () => client.get('/public', {
  params: {
    command: 'returnTicker',
  },
});
