import { createReducer } from '@reduxjs/toolkit';
import { addTodo, incrementCount, requestTodos, setNewTodo, updateName } from './actions';

const initialState = {
  count: 0,
  name: 'Toto',
  todos: {
    loading: false,
    items: [
      { id: Math.random(), title: 'DEF', completed: false },
      { id: Math.random(), title: 'XYZ', completed: true },
      { id: Math.random(), title: 'GHI', completed: false },
    ],
    newTodo: 'ABC',
  }
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementCount, (state, action) => {
      state.count++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(addTodo, (state, action) => {
      // Sans Redux Toolkit, on doit gérer
      // l'immuabilité du state nous même :
      // return {
      //   ...state,
      //   todos: {
      //     ...state.todos,
      //     items: [
      //       ...state.todos.items,
      //       action.payload
      //     ]
      //   }
      // };

      // Avec Redux Toolkit c'est lui qui gère :
      state.todos.items.push(action.payload);
      // state.todos.newTodo = '';
    })
    .addCase(setNewTodo, (state, action) => {
      state.todos.newTodo = action.payload;
    })
    .addCase(requestTodos.pending, (state, action) => {
      state.todos.loading = true;
    })
    .addCase(requestTodos.fulfilled, (state, action) => {
      state.todos.loading = false;
      state.todos.items = [
        ...state.todos.items,
        ...action.payload,
      ]
    })
    .addCase(requestTodos.rejected, (state, action) => {
      state.todos.loading = false;
    });
});
