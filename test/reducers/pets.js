import assert from "assert";
import pets from "../../src/reducers/pets";

// unit tests for the pets reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Pets reducer', () => {
  describe('PETS_LIST_SAVE', () => {
    it('should return a list of pets', () => {
      assert.deepEqual(
        pets({}, {
          type: 'PETS_LIST_SAVE',
          pets: [{
            id: 1,
            name: 'Some name',
            quantity: '1',
            category: {id:1, name:"category_test"}
          }],
        }), [{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }]
      );
    });
  });

  describe('PETS_ADD_SAVE', () => {
    it('should return a new pet array element', () => {
      assert.deepEqual(
        pets([{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }], {
          type: 'PETS_ADD_SAVE',
          pet: {
            id: 2,
            name: 'Some name 2',
            quantity: '1',
            category: {id:1, name:"category_test"}
          },
        }), [{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }, {
          id: 2,
          name: 'Some name 2',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }]
      );
    });
  });

  describe('PETS_EDIT_SAVE', () => {
    it('should return an edited pet array element', () => {
      assert.deepEqual(
        pets([{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }, {
          id: 2,
          name: 'Some name 2',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }], {
          type: 'PETS_EDIT_SAVE',
          pet: {
            id: 2,
            name: 'Changed name 2',
            quantity: '1',
            category: {id:1, name:"category_test"}
          },
        }), [{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }, {
          id: 2,
          name: 'Changed name 2',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }]
      );
    });
  });

  describe('PETS_DELETE_SAVE', () => {
    it('should return the pet array without the deleted element', () => {
      assert.deepEqual(
        pets([{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }, {
          id: 2,
          name: 'Some name 2',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }], {
          type: 'PETS_DELETE_SAVE',
          pet_id: 2,
        }), [{
          id: 1,
          name: 'Some name',
          quantity: '1',
          category: {id:1, name:"category_test"}
        }]
      );
    });
  });
});
