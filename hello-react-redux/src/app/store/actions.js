import { createAction } from '@reduxjs/toolkit';

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
