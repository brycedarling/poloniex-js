'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnLoanOrders = require('./returnLoanOrders');

var _returnLoanOrders2 = _interopRequireDefault(_returnLoanOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Poloniex Public API', function () {
  describe('returnLoanOrders', function () {
    describe('when currency is not in the list of currencies', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnLoanOrders2.default)({
            currency: 'currency'
          });
        }).toThrow();
      });
    });

    describe('when given valid currency', function () {
      it('requests returnLoanOrders and returns a promise', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var currency, response, _url$parse, hostname, pathname, query;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currency = 'BTC';
                _context.next = 3;
                return (0, _returnLoanOrders2.default)({ currency: currency });

              case 3:
                response = _context.sent;
                _url$parse = _url2.default.parse(response.request.responseURL, true), hostname = _url$parse.hostname, pathname = _url$parse.pathname, query = _url$parse.query;

                expect(hostname).toEqual('poloniex.com');
                expect(pathname).toEqual('/public');
                expect(query.command).toEqual('returnLoanOrders');
                expect(query.currency).toEqual(currency);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      })));
    });
  });
});