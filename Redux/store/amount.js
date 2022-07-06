const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

export const actions = {
  add: (value) => ({ type: ADD, value}),
  take: (value) => ({ type: TAKE, value}),
  clear: () => ({ type: CLEAR }),
};

export const selectors = {
  getAmount: amount => amount,
};

const amountReducer = (amount = 0, action) => {
  switch (action.type) {
    case ADD:
      return amount + action.value;
    case TAKE:
      if (action.value > amount) {
        return 'You are trying to take more than is left';
      }
      return amount - action.value;
  
    case CLEAR:
      return 0;

    default:
      return amount;
  }
};

export default amountReducer;
