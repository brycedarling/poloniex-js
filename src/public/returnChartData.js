import assert from '../assert';
import client from '../client';
import currencyPairs from '../currencyPairs';
import periods from '../periods';

/**
 * Returns candlestick chart data.
 * @function returnChartData
 * @static
 * @param {object} options - currencyPair, period, start, end
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

  const params = {
    command: 'returnChartData',
    currencyPair,
    start,
    period,
  };

  if (typeof end !== 'undefined') {
    params.end = end;
  }

  const promise = client.get('/public', {
    params,
  });

  promise.then((response) => {
    response.data.forEach((tick) => {
      tick.date = new Date(tick.date * 1000); // eslint-disable-line no-param-reassign
    });
  });

  return promise;
};
