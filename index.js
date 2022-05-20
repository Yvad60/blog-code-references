import {
  changeAdressAction,
  depositAction,
  withdrawAction,
} from './redux/actions.js';
import store from './redux/store.js';

console.log('initialState:');
console.log(store.getState());
//
store.dispatch(depositAction(500));
console.log('New state after deposit:');
console.log(store.getState());
//
store.dispatch(changeAdressAction('Paris'));
console.log('New state after change address');
console.log(store.getState());
//
store.dispatch(withdrawAction(300));
console.log('New state after withdraw');
console.log(store.getState());
