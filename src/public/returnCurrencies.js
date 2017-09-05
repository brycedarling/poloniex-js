import client from '../client';

/**
* Returns information about currencies.
* @namespace poloniex
* @method returnCurrencies
* @return {Promise} response
*/
export default () => client.get('/public', {
  params: {
    command: 'returnCurrencies',
  },
});
