import { createReducer } from '@reduxjs/toolkit';
import { incrementCount, updateName } from './actions';

const initialState = {
  count: 0,
  name: 'Toto',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementCount, (state, action) => {
      state.count++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});
