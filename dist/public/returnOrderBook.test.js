'use strict';

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _returnOrderBook = require('./returnOrderBook');

var _returnOrderBook2 = _interopRequireDefault(_returnOrderBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Poloniex Public API', function () {
  describe('returnOrderBook', function () {
    describe('when currencyPair is not in the list of currency pairs', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnOrderBook2.default)({
            currencyPair: 'currencyPair'
          });
        }).toThrow();
      });
    });

    describe('when depth is not a number', function () {
      it('throws an error', function () {
        expect(function () {
          return (0, _returnOrderBook2.default)({
            currencyPair: 'USDT_BTC', depth: 'depth'
          });
        }).toThrow();
      });
    });

    describe('when currencyPair is all', function () {
      it('requests returnOrderBook and returns a promise', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var currencyPair, response, _url$parse, hostname, pathname, query;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currencyPair = 'all';
                _context.next = 3;
                return (0, _returnOrderBook2.default)({ currencyPair: currencyPair });

              case 3:
                response = _context.sent;
                _url$parse = _url2.default.parse(response.request.responseURL, true), hostname = _url$parse.hostname, pathname = _url$parse.pathname, query = _url$parse.query;

                expect(hostname).toEqual('poloniex.com');
                expect(pathname).toEqual('/public');
                expect(query.command).toEqual('returnOrderBook');
                expect(query.currencyPair).toEqual(currencyPair);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      })));
    });

    describe('when given valid currencyPair', function () {
      it('requests returnOrderBook and returns a promise', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var currencyPair, response, _url$parse2, hostname, pathname, query;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currencyPair = 'USDT_BTC';
                _context2.next = 3;
                return (0, _returnOrderBook2.default)({ currencyPair: currencyPair });

              case 3:
                response = _context2.sent;
                _url$parse2 = _url2.default.parse(response.request.responseURL, true), hostname = _url$parse2.hostname, pathname = _url$parse2.pathname, query = _url$parse2.query;

                expect(hostname).toEqual('poloniex.com');
                expect(pathname).toEqual('/public');
                expect(query.command).toEqual('returnOrderBook');
                expect(query.currencyPair).toEqual(currencyPair);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      })));
    });

    describe('when given valid currencyPair and depth', function () {
      it('requests returnOrderBook and returns a promise', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var currencyPair, depth, response, _url$parse3, hostname, pathname, query;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currencyPair = 'USDT_BTC';
                depth = 10;
                _context3.next = 4;
                return (0, _returnOrderBook2.default)({ currencyPair: currencyPair, depth: depth });

              case 4:
                response = _context3.sent;
                _url$parse3 = _url2.default.parse(response.request.responseURL, true), hostname = _url$parse3.hostname, pathname = _url$parse3.pathname, query = _url$parse3.query;

                expect(hostname).toEqual('poloniex.com');
                expect(pathname).toEqual('/public');
                expect(query.command).toEqual('returnOrderBook');
                expect(query.currencyPair).toEqual(currencyPair);
                expect(query.depth).toEqual(depth.toString());

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      })));
    });
  });
});