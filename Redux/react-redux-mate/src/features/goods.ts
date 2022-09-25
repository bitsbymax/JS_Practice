const ADD = 'goods/ADD';
const TAKE = 'goods/TAKE';
const CLEAR = 'goods/CLEAR';

type AddAction = { type: typeof ADD; payload: string; };
type TakeAction = { type: typeof TAKE; payload: string; };
type ClearAction = { type: typeof CLEAR; };

type Action = AddAction | TakeAction | ClearAction;

const add = (good: string): AddAction => ({ type: ADD, payload: good });
const take = (good: string): TakeAction => ({ type: TAKE, payload: good });
const clear = (): ClearAction => ({ type: CLEAR });

export const actions = {
  add, take, clear
};

const goodsReducer = (goods: string[] = [], action: Action) => {
  switch (action.type) {
    case 'goods/ADD':
      return [...goods, action.payload];
    case 'goods/TAKE':
      return goods.filter(good => good !== action.payload);
    case 'goods/CLEAR':
      return [];
    default:
      return goods;
  }
};

export default goodsReducer;
