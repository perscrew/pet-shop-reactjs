import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// Pet List Element component
export default class PetListElement extends React.Component {
  // render
  render() {
    const {pet, showDelete} = this.props;
    return (
      <tr>
        <td>#{pet.id}</td>
        <td>{pet.name}</td>
        <td>{pet.quantity}</td>
        <td>{pet.category.name}</td>
        <td>
          <Link to={'pet-edit/' + pet.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" className="pet-delete" onClick={() => showDelete(pet)}>
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// prop checks
PetListElement.propTypes = {
  pet: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
