import { call, put } from "redux-saga/effects";
import sinon from 'sinon';
import { expectSaga } from 'redux-saga-test-plan';
import assert from "assert";
import { petsFetchList, petsAddEdit, petsDelete } from "../../src/sagas/pets";
import ApiPets from "../../src/api/pets";



// unit tests for the pets saga
describe('Pets saga', () => {

  describe('petsFetchList()', () => {
    // mock fetch list results
    const serviceResponse = {content:[{name:"pet name", quantity: 2, category: {id:1, name:"category Name"}}]};
    sinon.stub(ApiPets, 'getList').returns(serviceResponse);

    it('should return the PETS_LIST_SAVE action', () => {
      expectSaga(petsFetchList, {options: {page:0, size:10}})
        .put({type: 'PETS_LIST_SAVE', pets: serviceResponse});
    });

  });

  describe('petsAddEdit() - add', () => {
    // mock pet add response
    const serviceResponse = {
      name:"pet name",
      quantity: 2,
      category: {id:1, name:"category Name"}
    };
    sinon.stub(ApiPets, 'addEdit').returns(serviceResponse);

    const action = {
      pet: {},
      callbackSuccess: () => {},
    };
    it('should return the PETS_ADD_SAVE action', () => {
      expectSaga(petsAddEdit, action)
        .put({type: 'PETS_ADD_SAVE', pets: serviceResponse});
    });

  });

  describe('petsAddEdit() - edit', () => {
    // response is already mocked for addEdit service
    const serviceResponse = {
      name:"pet name",
      quantity: 2,
      category: {id:1, name:"category Name"}
    };

    const action = {
      pet: {id: 1},
      callbackSuccess: () => {},
    };

    it('should return the PETS_ADD_SAVE action', () => {
      expectSaga(petsAddEdit, action)
        .put({type: 'PETS_EDIT_SAVE', pets: serviceResponse});
    });
  });

  describe('petsDelete()', () => {
    // mock delete service
    sinon.stub(ApiPets, 'delete').returns({});

    const action = {
      pet_id: 1,
    };

    it('should return the PETS_DELETE_SAVE action', () => {
      expectSaga(petsDelete, action)
        .put({type: 'PETS_DELETE_SAVE', action});
    });
  });

});
