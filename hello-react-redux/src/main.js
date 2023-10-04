import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { reducer } from './app/store/reducer';

import App from './app/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const store = configureStore({
  reducer: reducer,
});

root.render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>  
);  