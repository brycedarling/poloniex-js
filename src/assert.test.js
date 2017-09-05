import assert from './assert';

describe('assert', () => {
  describe('when given a truthy expression', () => {
    it('does not throw an assertion error', () => {
      expect(() => assert(true)).not.toThrow();
      expect(() => assert({})).not.toThrow();
      expect(() => assert([])).not.toThrow();
      expect(() => assert('a')).not.toThrow();
      expect(() => assert(1)).not.toThrow();
    });
  });

  describe('when given a falsy expression', () => {
    it('throws an assertion error', () => {
      expect(() => assert(false)).toThrow();
      expect(() => assert(null)).toThrow();
      expect(() => assert(undefined)).toThrow();
      expect(() => assert('')).toThrow();
      expect(() => assert(0)).toThrow();
    });
  });

  describe('when given a falsy expression and a message', () => {
    it('throws an error with the given message', () => {
      expect(() => assert(false, 'message')).toThrow('message');
    });
  });
});
