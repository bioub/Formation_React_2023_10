import rtk from '@reduxjs/toolkit';
import { incrementCount, updateName } from './actions.js';

const initialState = {
  count: 0,
  name: 'Toto',
};

export const reducer = rtk.createReducer(initialState, (builder) => {
  builder
    .addCase(incrementCount, (state, action) => {
      state.count++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});

/*
export function reducer(state = initialState, action) {
  switch (action.type) {
    case incrementCount.type:
      return {
        ...state,
        count: state.count + 1,
      };
    case updateName.type:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
*/
