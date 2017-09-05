import assert from '../assert';
import client from '../client';
import currencyPairs from '../currencyPairs';
import periods from '../periods';

// TODO: document method arguments, currencyPair and period and start and end, all required
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
  assert(
    typeof end === 'number' && end < 9999999999,
    `Invalid end, ${end}, must be a number less than 9999999999`,
  );
  assert(
    end >= start + period,
    `Invalid end, ${end}, must be >= start + period (${start + period})`,
  );

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
