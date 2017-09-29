'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var markets = {
  BTC: ['AMP', 'ARDR', 'BCH', 'BCN', 'BCY', 'BELA', 'BLK', 'BTCD', 'BTM', 'BTS', 'BURST', 'CLAM', 'DASH', 'DCR', 'DGB', 'DOGE', 'EMC2', 'ETC', 'ETH', 'EXP', 'FCT', 'FLDC', 'FLO', 'GAME', 'GNO', 'GNT', 'GRC', 'HUC', 'LBC', 'LSK', 'LTC', 'MAID', 'NAUT', 'NAV', 'NEOS', 'NMC', 'NOTE', 'NXC', 'NXT', 'OMNI', 'PASC', 'PINK', 'POT', 'PPC', 'PPC', 'RADS', 'REP', 'RIC', 'SBD', 'SC', 'SJCX', 'STEEM', 'STR', 'STRAT', 'SYS', 'VIA', 'VRC', 'VTC', 'XBC', 'XCP', 'XEM', 'XMR', 'XPM', 'XRP', 'XVC', 'ZEC', 'ZRX'],
  ETH: ['BCH', 'ETC', 'GNO', 'GNT', 'LSK', 'REP', 'STEEM', 'ZEC', 'ZRX'],
  XMR: ['BCN', 'BLK', 'BTCD', 'DASH', 'LTC', 'MAID', 'NXT', 'ZEC'],
  USDT: ['BCH', 'BTC', 'DASH', 'ETC', 'ETH', 'LTC', 'NXT', 'REP', 'STR', 'XMR', 'XRP', 'ZEC']
};

var currencyPairs = {};

Object.keys(markets).forEach(function (market) {
  var currencies = markets[market];
  currencies.forEach(function (currency) {
    var currencyPair = market + '_' + currency;
    currencyPairs[currencyPair] = currencyPair;
  });
});

exports.default = currencyPairs;