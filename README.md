# poloniex-js

## Functions

<dl>
<dt><a href="#return24Volume">return24Volume()</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns the 24-hour volume for all markets, plus totals for primary currencies.</p>
</dd>
<dt><a href="#returnChartData">returnChartData(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns candlestick chart data.</p>
</dd>
<dt><a href="#returnTicker">returnTicker()</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns the ticker for all markets.</p>
</dd>
<dt><a href="#returnTradeHistory">returnTradeHistory(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Returns trade history for a given market.</p>
</dd>
</dl>

<a name="return24Volume"></a>

## return24Volume() ⇒ <code>Promise</code>
Returns the 24-hour volume for all markets, plus totals for primary currencies.

**Kind**: global function  
**Returns**: <code>Promise</code> - response  
<a name="returnChartData"></a>

## returnChartData(options) ⇒ <code>Promise</code>
Returns candlestick chart data.

**Kind**: global function  
**Returns**: <code>Promise</code> - response  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | currencyPair, period, start, end |

<a name="returnTicker"></a>

## returnTicker() ⇒ <code>Promise</code>
Returns the ticker for all markets.

**Kind**: global function  
**Returns**: <code>Promise</code> - response  
<a name="returnTradeHistory"></a>

## returnTradeHistory(options) ⇒ <code>Promise</code>
Returns trade history for a given market.

**Kind**: global function  
**Returns**: <code>Promise</code> - response  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | start and end are both optional |

