import assert from '../assert';
import client from '../client';
import currencies from '../currencies';

/**
 * Returns the list of loan offers and demands for a given currency.
 * @function returnLoanOrders
 * @static
 * @param {object} options - currency
 * @return {Promise} response
 */
export default ({ currency }) => {
  assert(
    currencies[currency],
    `Invalid currency, ${currency}, must be one of: ${Object.keys(currencies).join(', ')}`,
  );

  return client.get('/public', {
    params: {
      command: 'returnLoanOrders',
      currency,
    },
  });
};
