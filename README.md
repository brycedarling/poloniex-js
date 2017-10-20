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


<a name="return24Volume"></a>

## .return24Volume() ⇒ <code>Promise</code>
Returns the 24-hour volume for all markets, plus totals for primary currencies.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  
<a name="returnChartData"></a>

## .returnChartData(options) ⇒ <code>Promise</code>
Returns candlestick chart data.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | currencyPair, period, start, end |

<a name="returnCurrencies"></a>

## .returnCurrencies() ⇒ <code>Promise</code>
Returns information about currencies.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  
<a name="returnLoanOrders"></a>

## .returnLoanOrders(options) ⇒ <code>Promise</code>
Returns the list of loan offers and demands for a given currency.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | currency |

<a name="returnOrderBook"></a>

## .returnOrderBook(options) ⇒ <code>Promise</code>
Returns the order book for a given market.
You may set currencyPair to "all" to get the order books of all markets.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | currencyPair, depth |

<a name="returnTicker"></a>

## .returnTicker() ⇒ <code>Promise</code>
Returns the ticker for all markets.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  
<a name="returnTradeHistory"></a>

## .returnTradeHistory(options) ⇒ <code>Promise</code>
Returns trade history for a given market.

**Kind**: static function  
**Returns**: <code>Promise</code> - response  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | start and end are both optional |

