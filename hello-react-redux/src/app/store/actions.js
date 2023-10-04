import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodos } from '../api';

export const incrementCount = createAction('INCREMENT_COUNT');
export const updateName = createAction('UPDATE_NAME');

// export function addTodo(title) {
//   return {
//     type: 'ADD_TODO',
//     payload: {
//       id: Math.random(),
//       title: title,
//       completed: false,
//     }
//   }
// }

export const addTodo = createAction('ADD_TODO', (title) => ({
  payload: {
    id: Math.random(),
    title: title,
    completed: false,
  },
}));
export const setNewTodo = createAction('SET_NEW_TODO');

// export function requestTodos() {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: 'REQUEST_TODOS' });
//       const todos = await fetchTodos();
//       dispatch({ type: 'REQUEST_TODOS_SUCCEED', payload: todos });
//     }
//     catch (err) {
//       dispatch({ type: 'REQUEST_TODOS_FAILED', error: true, payload: err });
//     }
//   };
// }

export const requestTodos = createAsyncThunk('REQUEST_TODOS', async () => {
  const todos = await fetchTodos();
  return todos;
});