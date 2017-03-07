import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";

// Pet delete component
export default class PetDeletePrompt extends React.Component {
  // render
  render() {
    const {show, pet, hideDelete, petDelete} = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete pet <strong>{pet.name}</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hideDelete}>No</Button>
          <Button bsStyle="primary" onClick={petDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
PetDeletePrompt.propTypes = {
  show: PropTypes.bool.isRequired,
  pet: PropTypes.object.isRequired,
  hideDelete: PropTypes.func.isRequired,
  petDelete: PropTypes.func.isRequired,
}
