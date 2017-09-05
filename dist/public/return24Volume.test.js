'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _return24Volume = require('./return24Volume');

var _return24Volume2 = _interopRequireDefault(_return24Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Poloniex Public API', function () {
  describe('return24Volume', function () {
    it('requests return24Volume from the Poloniex API and returns a promise', function (done) {
      (0, _return24Volume2.default)().then(function (response) {
        var _url$parse = _url2.default.parse(response.request.responseURL, true),
            hostname = _url$parse.hostname,
            pathname = _url$parse.pathname,
            query = _url$parse.query;

        expect(hostname).toEqual('poloniex.com');
        expect(pathname).toEqual('/public');
        expect(query.command).toEqual('return24Volume');
        done();
      });
    });
  });
});