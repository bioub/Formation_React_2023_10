import { legacy_createStore } from 'redux';

const initialState = {
  count: 0,
  name: 'Toto',
};

// Reducer
// Fonction Pure
// - prédictive (appelée avec des paramètres donnés, elle
// a toujours le même retour), exemple sum(1, 3) === 4
// contre-exemple randomInt(0, 100) === ?
// - ne doit pas modifier ses paramètres
// (dans un reducer on retourne le nouveau, sans modifier
// le state précédent) -> le state doit être immuable
// - ne doit pas avoir de side-effect (modifier le localStorage, appel HTTP...)

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}

/** @type {import('redux').Store} */
const store = legacy_createStore(reducer);

console.log('state initial', store.getState());

// Pattern Observer
// buttonEl.addEventListener('click', () => {});
// buttonEl.dispatchEvent(new MouseEvent('click'));

store.subscribe(() => {
  console.log('state subscribe', store.getState());
});
store.dispatch({ type: 'INCREMENT_COUNT' });
store.dispatch({ type: 'UPDATE_NAME', name: 'Romain' });
store.dispatch({ type: 'INCREMENT_COUNT' });
store.dispatch({ type: 'INCREMENT_COUNT' });
