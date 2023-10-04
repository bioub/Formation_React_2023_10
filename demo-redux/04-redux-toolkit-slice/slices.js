import rtk from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  name: 'Toto',
};

const slice = rtk.createSlice({
  initialState: initialState,
  name: 'demo',
  reducers: {
    incrementCount(state, action) {
      state.count++;
    },
    updateName(state, action) {
      state.name = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const { incrementCount, updateName } = slice.actions;
