'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnTradeHistory = require('./returnTradeHistory');

var _returnTradeHistory2 = _interopRequireDefault(_returnTradeHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Poloniex Public API', function () {
  describe('returnTradeHistory', function () {
    describe('when start is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 'start', end: 600 });
        }).toThrow();
      });
    });

    describe('when start is a negative number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: -1, end: 600 });
        }).toThrow();
      });
    });

    describe('when end is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 0, end: 'end' });
        }).toThrow();
      });
    });

    describe('when end is greater than 9999999999', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 0, end: 9999999999 + 1 });
        }).toThrow();
      });
    });

    describe('when end is less than or equal to start', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 1, end: 0 });
        }).toThrow();
        expect(function () {
          return (0, _returnTradeHistory2.default)({ start: 0, end: 0 });
        }).toThrow();
      });
    });

    describe('when given valid start and end', function () {
      it('requests returnTradeHistory and returns a promise', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var start, end, response, _url$parse, hostname, pathname, query;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                start = 300;
                end = 600;
                _context.next = 4;
                return (0, _returnTradeHistory2.default)({ start: start, end: end });

              case 4:
                response = _context.sent;
                _url$parse = _url2.default.parse(response.request.responseURL, true), hostname = _url$parse.hostname, pathname = _url$parse.pathname, query = _url$parse.query;

                expect(hostname).toEqual('poloniex.com');
                expect(pathname).toEqual('/public');
                expect(query.command).toEqual('returnTradeHistory');
                expect(query.start).toEqual(start.toString());
                expect(query.end).toEqual(end.toString());

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      })));
    });
  });
});