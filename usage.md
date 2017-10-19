# poloniex-js

## Usage

First, import the Poloniex API client:

```
import poloniexApi from 'poloniex-js';
```

Then, you can call an API method:

```
const response = await poloniexApi.returnChartData({
  currencyPair: poloniexApi.currencyPairs.USDT_BTC,
  period: 300,
  start: 0
});

console.log(response.data);
```

If you only need a single API method:

```
import { return24Volume } from 'poloniex-js';
```

Then, you can call it:

```
const response = await return24Volume();

console.log(response.data);
```

If you instead use or prefer `require` over `import`:

```
const poloniexApi = require('poloniex-js');
```

If you only need a single API method when using `require`:

```
const return24Volume = require('poloniex-js').return24Volume;
```


