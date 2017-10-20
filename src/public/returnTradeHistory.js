import assert from '../assert';
import client from '../client';

/**
 * Returns trade history for a given market.
 * @function returnTradeHistory
 * @static
 * @param {object} options - start and end are both optional
 * @return {Promise} response
 */
export default (options = {}) => {
  if (typeof options.start !== 'undefined') {
    assert(
      typeof options.start === 'number' && options.start >= 0,
      `Invalid start, ${options.start}, must be a non-negative number`,
    );
  }

  if (typeof options.end !== 'undefined') {
    assert(
      options.end < 9999999999,
      `Invalid end, ${options.end}, must be a number less than 9999999999`,
    );

    if (typeof options.start !== 'undefined') {
      assert(
        options.end > options.start,
        `Invalid end, ${options.end}, must be greater than start (${options.start})`,
      );
    }
  }

  return client.get('/public', {
    params: {
      command: 'returnTradeHistory',
      start: options.start,
      end: options.end,
    },
  });
};
