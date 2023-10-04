import { legacy_createStore } from 'redux';
import { reducer } from './reducer.js';
import { incrementCount, updateName } from './actions.js';
import { countSelector, nameSelector } from './selectors.js';

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log('state initial', store.getState());

// Pattern Observer
// buttonEl.addEventListener('click', () => {});
// buttonEl.dispatchEvent(new MouseEvent('click'));

store.subscribe(() => {
  const state = store.getState();
  const count = countSelector(state);
  const name = nameSelector(state);
  console.log('name:', name, 'count:', count);
});
store.dispatch(incrementCount());
store.dispatch(updateName('Romain'));
store.dispatch(incrementCount());
store.dispatch(incrementCount());
