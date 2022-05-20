import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer.js';

const initialState = {
  accountOwner: 'John Doe',
  address: 'Miami',
  balance: 0,
};
const store = createStore(reducer, initialState);

export default store;
