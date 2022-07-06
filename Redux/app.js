import store, { getDistanceTo, getPosition, actions } from "./store/index.js";
import {
  actions as positionActions,
} from "./store/position.js";

// #region buttons
const up = document.getElementById('up-button');
const down = document.getElementById('down-button');
const left = document.getElementById('left-button');
const right = document.getElementById('right-button');

const truckPosition = document.getElementById('truck-position');
const truck = document.getElementById('truck');

const rotate = document.getElementById('rotate-button');
// #endregion

// #region actions
const {
  moveUp, moveDown, moveRight, moveLeft
} = positionActions;

up.onclick = () => store.dispatch(moveUp());
down.onclick = () => store.dispatch(moveDown());
left.onclick = () => store.dispatch(moveLeft());
right.onclick = () => store.dispatch(moveRight());
rotate.onclick = () => store.dispatch(actions.doACircle(200))
  .then(() => {
    console.log('Just to know that a promise was resolved');
  });
// #endregion


store.subscribe(() => {
  const state = store.getState();
  const { x, y } = getPosition(state);

  const step = 20;

  truckPosition.textContent = `${x}:${y}`;
  truck.style.transform =
    `translate(${x * step}px, ${y * step}px)`;
  truck.textContent = getDistanceTo(
    state,
    { x: 0, y: 0}
  );
});
