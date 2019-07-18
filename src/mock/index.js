import MockAdapter from 'axios-mock-adapter';
import simplify from './simplify';

function mockInstance() {}

const mock = new MockAdapter(mockInstance);

simplify(mock, [
  require('./mock-user-center').default
])
