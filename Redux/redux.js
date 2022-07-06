export function createStore(reducer, initialState = reducer(undefined, {})) {
  let state = initialState;
  let callbacks = [];

  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      if (typeof action === "function") {
        return action(store.dispatch);
      } else {
        state = reducer(state, action);
        callbacks.forEach((f) => f());
      }
    },
    subscribe(f) {
      callbacks.push(f);
    },
  };

  return store;
}

export function combineReducers(reducers) {
  return (state = {}, action) => {
    const result = {};

    for (const key in reducers) {
      result[key] = reducers[key](state[key], action);
    }
    /* {
      amount: 0
      goods: []
      position: {x: 0, y: 0, z: 0}
    } */
    return result;
  };
}
