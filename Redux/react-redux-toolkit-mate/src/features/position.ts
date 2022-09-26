import { createSlice, Dispatch } from '@reduxjs/toolkit';

type Position = {
  x: number,
  y: number;
};
const startPosition: Position = { x: 0, y: 0 };
const positionSlice = createSlice({
  name: 'position',
  initialState: startPosition,
  reducers: {//actions
    moveLeft: position => { position.x -= 1; },
    moveRight: position => { position.x += 1; },
    moveUp: position => { position.y -= 1; },
    moveDown: position => { position.y += 1; }
  }
});

export const { moveDown, moveLeft, moveRight, moveUp } = positionSlice.actions;
export default positionSlice.reducer;

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const doACircle = (delay: number) => {//action creator який повертає thunk
  return async (dispatch: Dispatch) => {//?функція, яка приймає Dispatch і далі виконує якісь дії з redux store, називається Thunk. Additionaly it accepts also getState() method. Thunk functions are not directly called by application code. Instead they are passed to store.dispatch()
    /* const thunkFunction = (dispatch, getState) => {
        logic here that can dispatch actions or read state
    } 
    store.dispatch(thunkFunction);
    */
   dispatch(moveRight());//цей код працювати не буде без асинхронності, так як всі діспатчі виконаються синхронно один за одним і лише тоді відбудеться оновлення компоненту
   await wait(delay);
   dispatch(moveDown());
   await wait(delay);
   dispatch(moveLeft());
   await wait(delay);
   dispatch(moveUp());
   await wait(delay);
  }  
}