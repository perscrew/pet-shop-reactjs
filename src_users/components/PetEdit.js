import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm, formValueSelector } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";

// Pet add/edit page component
export class PetEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    //this.handleInitialize();
  }

  handleInitialize() {
    this.state = this.props.initialValues;
    this.props.initialize(this.props.initialValues);
    this.forceUpdate();
  }

  // render
  render() {
    const {pet, categories, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-pet-edit">
        <PageHeader>{'Pet ' + (pet.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="name" label="Name" doValidate={true}/>
          <Field component={FormField} name="quantity" label="Quantity" doValidate={true}/>
          <Field component={FormField} name="category" label="Category"/>

          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
            buttonSave="Save Pet"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'PETS_ADD_EDIT',
        pet: {
          id: values.id || 0,
          name: values.name,
          quantity: values.quantity,
          category: { id: parseInt(values.category) }
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const PetEditForm = reduxForm({
  form: 'pet_edit',
  enableReinitialize : true,
  validate: function (values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if(!values.quantity) {
      errors.quantity = 'Quantity is required';
    }
    return errors;
  },
})(PetEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const pet = state.pets.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    pet: pet,
    initialValues: {name: pet.name, quantity: pet.quantity},
    categories: state.categories
  };
}
export default connect(mapStateToProps)(PetEditForm);
