'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _return24Volume = require('./return24Volume');

var _return24Volume2 = _interopRequireDefault(_return24Volume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Poloniex Public API', function () {
  describe('return24Volume', function () {
    it('requests return24Volume from the Poloniex API and returns a promise', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _url$parse, hostname, pathname, query;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _return24Volume2.default)();

            case 2:
              response = _context.sent;
              _url$parse = _url2.default.parse(response.request.responseURL, true), hostname = _url$parse.hostname, pathname = _url$parse.pathname, query = _url$parse.query;

              expect(hostname).toEqual('poloniex.com');
              expect(pathname).toEqual('/public');
              expect(query.command).toEqual('return24hVolume');

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });
});