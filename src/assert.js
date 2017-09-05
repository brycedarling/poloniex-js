export default (expr, message) => {
  if (!expr) {
    throw new Error(message || 'Assertion');
  }
};
