const actions = [
  { type: 'add', payload: 1 },
  { type: 'add', payload: 2 },
  { type: 'take', payload: 3 },
  { type: 'add', payload: 4 },
  { type: 'add', payload: 5 },
  { type: 'take', payload: 6 },
  { type: 'add', payload: 7 },
  { type: 'add', payload: 8 },
  { type: 'add', payload: 9 },
  { type: 'add', payload: 10 },
];

const initialState = {
  value: 100,
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'add':
      return {
        ...state,
        value: state.value + action.payload,
      }

    case 'take':
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

console.log(
  actions.reduce(reducer, initialState)
);
