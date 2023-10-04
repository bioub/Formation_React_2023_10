import { INCREMENT_COUNT, UPDATE_NAME } from "./constants.js";

const initialState = {
  count: 0,
  name: 'Toto',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}