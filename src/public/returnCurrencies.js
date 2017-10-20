import client from '../client';

/**
 * Returns information about currencies.
 * @function returnCurrencies
 * @static
 * @return {Promise} response
 */
export default () => client.get('/public', {
  params: {
    command: 'returnCurrencies',
  },
});
