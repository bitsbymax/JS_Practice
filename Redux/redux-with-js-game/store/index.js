import { createStore, combineReducers } from '../redux.js';

import amountReducer, { selectors as AmountSelectors } from './amount.js';
import positionReducer, { getX, getY, actions as positionActions } from './position.js';
import goodsReducer from './goods.js';

export function getAmount(state) {
  return AmountSelectors.getAmount(state.amount);
}

export function hasEnoughMoney(state, payment) {
  return getAmount(state) >= payment;
}

export function getPosition(state) {
  return {
    x: getX(state.position),
    y: getY(state.position),
  };
}

export function getDistanceTo(state, point) {
  const { x, y } = getPosition(state);

  return Math.abs(x - point.x) + Math.abs(y - point.y);
}

export const actions = {
  doACircle(delay) {
    return (dispatch) => {
      return new Promise(resolve => {
        dispatch(positionActions.moveRight());
  
        setTimeout(() => {
          dispatch(positionActions.moveDown());
        }, delay);
  
        setTimeout(() => {
          dispatch(positionActions.moveLeft());
        }, 2 * delay);
  
        setTimeout(() => {
          dispatch(positionActions.moveUp());
  
          resolve();
        }, 3 * delay);
      });
    };
  },
}
const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer,
});

const store = createStore(reducer);

export default store;
