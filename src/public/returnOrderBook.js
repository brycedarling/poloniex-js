import assert from '../assert';
import client from '../client';
import currencyPairs from '../currencyPairs';

/**
 * Returns the order book for a given market.
 * You may set currencyPair to "all" to get the order books of all markets.
 * @function returnOrderBook
 * @static
 * @param {object} options - currencyPair, depth
 * @return {Promise} response
 */
export default ({ currencyPair, depth }) => {
  assert(
    currencyPair === 'all' || currencyPairs[currencyPair],
    `Invalid currencyPair, ${currencyPair}, must be one of: all, ${Object.keys(currencyPairs).join(', ')}`,
  );

  if (typeof depth !== 'undefined') {
    assert(
      typeof depth === 'number',
      `Invalid depth, ${depth}, must be a number`,
    );
  }

  return client.get('/public', {
    params: {
      command: 'returnOrderBook',
      currencyPair,
      depth,
    },
  });
};
