import rtk from '@reduxjs/toolkit';
import { reducer, incrementCount, updateName } from './slices.js';
import { countSelector, nameSelector } from './selectors.js';

/** @type {import('redux').Store} */
const store = rtk.configureStore({
  reducer: reducer,
});

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
