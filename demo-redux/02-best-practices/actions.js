// action creator
// fonction qui créé l'action

import { INCREMENT_COUNT, UPDATE_NAME } from "./constants.js";

// Convention Flux Standard Action (FSA)
// l'action doit avoir type (obligatoire)
// si valeur la clé s'appelle payload

export function incrementCount() {
  return { type: INCREMENT_COUNT };
}

export function updateName(name = '') {
  return { type: UPDATE_NAME, payload: name };
}