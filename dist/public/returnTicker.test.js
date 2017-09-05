'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnTicker = require('./returnTicker');

var _returnTicker2 = _interopRequireDefault(_returnTicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('returnTicker', function () {
  it('requests returnTicker from the Poloniex API and returns a promise', function (done) {
    (0, _returnTicker2.default)().then(function (response) {
      var _url$parse = _url2.default.parse(response.request.responseURL, true),
          hostname = _url$parse.hostname,
          pathname = _url$parse.pathname,
          query = _url$parse.query;

      expect(hostname).toEqual('poloniex.com');
      expect(pathname).toEqual('/public');
      expect(query.command).toEqual('returnTicker');
      done();
    });
  });
});