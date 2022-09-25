const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAction = { type: typeof ADD; payload: number; };
type TakeAction = { type: typeof TAKE; payload: number; };
type ClearAction = { type: typeof CLEAR; };

type Action = AddAction | TakeAction | ClearAction;

const add = (value: number): AddAction => ({ type: ADD, payload: value });
const take = (value: number): TakeAction => ({ type: TAKE, payload: value });
const clear = (): ClearAction => ({ type: CLEAR });

export const actions = {
  add, take, clear
};
const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;
    case 'amount/TAKE': {
      if (action.payload > amount) {
        return amount;
      }
      return amount - action.payload;
    }
    case 'amount/CLEAR':
      return 0;
    default:
      return amount;
  }
};

export default amountReducer;
