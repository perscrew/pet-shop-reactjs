import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { PetList } from "../../src/components/common/PetList";

// unit tests for the PetList component
describe('PetList component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {pets: []};
      const wrapper = shallow(<PetList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
