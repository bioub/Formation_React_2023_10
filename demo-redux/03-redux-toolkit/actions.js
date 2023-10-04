// action creator
// fonction qui créé l'action

import rtk from "@reduxjs/toolkit";

// Convention Flux Standard Action (FSA)
// l'action doit avoir type (obligatoire)
// si valeur la clé s'appelle payload

export const incrementCount = rtk.createAction('INCREMENT_COUNT');
// export function incrementCount() {
//   return { type: INCREMENT_COUNT };
// }

export const updateName = rtk.createAction("UPDATE_NAME");
// export function updateName(name = '') {
//   return { type: UPDATE_NAME, payload: name };
// }

