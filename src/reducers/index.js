import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import pets from "./pets";
import categories from "./categories";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "pet_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the Pet edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  pets: pets,
  categories: categories
});
