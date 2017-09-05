import assert from '../assert';
import client from '../client';
import currencyPairs from '../currencyPairs';
import periods from '../periods';

/**
* Returns candlestick chart data.
* @namespace poloniex
* @method returnChartData
* @param {Object} options - currencyPair, period, start, end
* @return {Promise} response
*/
export default ({
  currencyPair, period, start, end,
}) => {
  assert(
    currencyPairs[currencyPair],
    `Invalid currencyPair, ${currencyPair}, must be one of: ${Object.keys(currencyPairs).join(', ')}`,
  );
  assert(
    periods[period],
    `Invalid period, ${period}, must be one of: ${Object.keys(periods).join(', ')}`,
  );
  assert(
    typeof start === 'number' && start >= 0,
    `Invalid start, ${start}, must be a non-negative number`,
  );
  if (typeof end !== 'undefined') {
    assert(
      typeof end === 'number' && end >= 0,
      `Invalid end, ${end}, must be a non-negative number`,
    );
    assert(
      end >= start + period,
      `Invalid end, ${end}, must be >= start + period (${start + period})`,
    );
  }

  return client.get('/public', {
    params: {
      command: 'returnChartData',
      currencyPair,
      start,
      end,
      period,
    },
  });
};
