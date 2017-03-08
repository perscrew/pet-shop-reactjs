import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import PetDeletePrompt from "../../src/components/common/PetDeletePrompt";

// unit tests for the PetDeletePrompt component
describe('PetDeletePrompt component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {show: true, pet: {}, hidePet: ()=>{}, petDelete: ()=>{}};
      const wrapper = shallow(<PetDeletePrompt {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
