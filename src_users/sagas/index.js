import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { petsFetchList, petsAddEdit, petsDelete, petsFetchCategories } from "./pets";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'PETS_FETCH_LIST', petsFetchList),
    fork(takeLatest, 'PETS_ADD_EDIT', petsAddEdit),
    fork(takeLatest, 'PETS_DELETE', petsDelete),
    fork(takeLatest, 'PETS_FETCH_CATEGORY', petsFetchCategories),
  ];
}
