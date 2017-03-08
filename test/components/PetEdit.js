import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { PetEdit } from "../../src/components/PetEdit";

// unit tests for the PetEdit component
describe('PetEdit component', () => {
  describe('render()', () => {
    it('should render the add pet form', () => {
      const props = {pet: {}, categories: [], handleSubmit: ()=>{}};
      const wrapper = shallow(<PetEdit {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
