import client from '../client';

/**
 * Returns the 24-hour volume for all markets, plus totals for primary currencies.
 * @function return24Volume
 * @static
 * @return {Promise} response
 */
export default () => client.get('/public', {
  params: {
    command: 'return24hVolume',
  },
});
