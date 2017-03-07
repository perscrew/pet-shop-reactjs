import { call, put } from "redux-saga/effects";
import ApiPets from "../api/pets";

// fetch the pet's list
export function* petsFetchList(action) {
  // call the api to get the pets list
  const pets = yield call(ApiPets.getList, action.options);

  // save the pets in state
  yield put({
    type: 'PETS_LIST_SAVE',
    pets: pets.content,
  });
}

// add/edit a pet
export function* petsAddEdit(action) {
  // call the api to add/edit the pet
  yield call(ApiPets.addEdit, action.pet);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the pet
  yield put({
    type: action.pet.id ? 'PETS_EDIT_SAVE' : 'PETS_ADD_SAVE',
    pet: action.pet,
  });

  // success
  action.callbackSuccess();
}

// delete a pet
export function* petsDelete(action) {
  // call the api to delete the pet
  yield call(ApiPets.delete, action.pet_id);

  // update the state by removing the pet
  yield put({
    type: 'PETS_DELETE_SAVE',
    pet_id: action.pet_id,
  });
}

// fetch pet categories
export function* petsFetchCategories(action) {
  // call the api to get pets categories
  const categories = yield call(ApiPets.getCategories);

  // update the state by adding categories
  yield put({
    type: 'PETS_CATEGORY_SAVE',
    categories: categories,
  });
}
