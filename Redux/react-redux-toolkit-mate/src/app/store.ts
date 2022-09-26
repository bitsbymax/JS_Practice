// npm i redux @types/redux
import { combineReducers, legacy_createStore } from 'redux';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer
});
const store = legacy_createStore(reducer);

export type RootState = ReturnType<typeof store.getState>; //утиліта ReturnType дає можливість вказати хуку useSelector через generic type яким буде тип поточного стану
//приклад для state.amount
/*
  type RootState = EmptyObject & {
    amount: number;
  }
*/
export default store;
