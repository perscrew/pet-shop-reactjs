import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import PetListElement from "./PetListElement";
import PetDeletePrompt from "./PetDeletePrompt";

// Pet list component
export class PetList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      delete_show: false,
      delete_pet: {},
    };

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);
    this.petDelete = this.petDelete.bind(this);
  }

  // render
  render() {
    // pagination
    const {pets, page} = this.props;
    const per_page = 10;
    const pages = Math.ceil(pets.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    // show the list of pets
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {pets.map((pet, index) => {
            if (index >= start_offset && start_count < per_page) {
              start_count++;
              return (
                <PetListElement key={index} pet={pet} showDelete={this.showDelete}/>
              );
            }
          })}
          </tbody>
        </Table>

        <Pagination className="pets-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>

        <PetDeletePrompt show={this.state.delete_show} pet={this.state.delete_pet}
          hideDelete={this.hideDelete} petDelete={this.petDelete} />
      </div>
    );
  }

  // change the pet lists' current page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

  // show the delete pet prompt
  showDelete(pet) {
    // change the local ui state
    this.setState({
      delete_show: true,
      delete_pet: pet,
    });
  }

  // hide the delete pet prompt
  hideDelete() {
    // change the local ui state
    this.setState({
      delete_show: false,
      delete_pet: {},
    });
  }

  // delete the pet
  petDelete() {
    // delete the pet
    this.props.dispatch({
      type: 'PETS_DELETE',
      pet_id: this.state.delete_pet.id,
    });

    // hide the prompt
    this.hideDelete();
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    pets: state.pets,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(PetList);
