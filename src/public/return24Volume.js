import client from '../client';

export default () => client.get('/public', {
  params: {
    command: 'return24Volume',
  },
});
