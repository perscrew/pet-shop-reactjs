import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import PetListElement from "../../src/components/common/PetListElement";

// unit tests for the PetListElement component
describe('PetListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {pet: {name: "test", category: {id: 1}}, showDelete: ()=>{}};
      const wrapper = shallow(<PetListElement {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
