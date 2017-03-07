// Pets reducer
export default function pets(state = {}, action) {
  switch (action.type) {
    case 'PETS_LIST_SAVE':
      return action.pets;

    case 'PETS_ADD_SAVE':
      const pet = action.pet;
      pet.id = pet.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, user];

    case 'PETS_EDIT_SAVE':
      return state.map(pet =>
        Number(pet.id) === Number(action.pet.id) ? {...action.pet} : pet
      );
      break;

    case 'PETS_DELETE_SAVE':
      return state.filter(pet =>
        Number(pet.id) !== Number(action.pet_id)
      );

    // initial state
    default:
      return state;
  }
}
