import axios from 'axios';

const client = axios.create({
  baseURL: 'https://poloniex.com/',
});

// TODO: implement other public API methods
// returnTicker
// return24Volume
// returnOrderBook
// returnCurrencies
// returnLoanOrders

// TODO: implement trading API methods

// TODO: add all other currency pairs
export const currencyPairs = {
  USDT_BTC: true,
  USDT_ETH: true,
  USDT_LTC: true,
};

const currencyPairsList = Object.keys(currencyPairs).join(', ');

export const periods = {
  300: true,
  900: true,
  1800: true,
  7200: true,
  14400: true,
  86400: true,
};

const periodsList = Object.keys(periods).join(', ');

const assert = (expr, message) => {
  if (!expr) {
    throw new Error(message || 'Assertion');
  }
};

// TODO: document method arguments, currencyPair and period and start and end, all required
export const returnChartData = ({
  currencyPair, period, start, end,
}) => {
  assert(
    currencyPairs[currencyPair],
    `Invalid currencyPair, ${currencyPair}, must be one of: ${currencyPairsList}`,
  );
  assert(
    periods[period],
    `Invalid period, ${period}, must be one of: ${periodsList}`,
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

// TODO: document method arguments, start and end, all optional
export const returnTradeHistory = (options = {}) => {
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
