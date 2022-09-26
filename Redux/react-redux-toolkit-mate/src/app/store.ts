// npm i redux @types/redux
import { configureStore } from '@reduxjs/toolkit';
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const store = configureStore({//?замість того, щоб використовувати окремо combineReducers і потім передавати комбіновий reducer в createStore ми просто використовуємо configureStore з redux-toolkit, який під капотом сам викор. combineReducers, додатково підключає devTools extension і крім того автоматично підключає thunk middleware
  reducer: {
    amount: amountReducer,
    goods: goodsReducer,
    position: positionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>; //утиліта ReturnType дає можливість вказати хуку useSelector через generic type яким буде тип поточного стану
//приклад для state.amount
/*
  type RootState = EmptyObject & {
    amount: number;
  }
*/
export type AppDispatch = typeof store.dispatch; //тип для кастомного хука useAppDispatch
export default store;
