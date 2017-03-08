import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that pets list
    this.props.dispatch({
      type: 'PETS_FETCH_LIST',
      options: {page: this.props -1, size: 10} // TODO get page from state
    });
    // in a second time load pet categories form edit/ad form
    this.props.dispatch({type: 'PETS_FETCH_CATEGORY'});
  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    const {pets, children} = this.props;
    if (!pets.length) {
      return (
        <ProgressBar active now={100}/>
      );
    }

    // render
    return (
      <div className="container">
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
        <div className="footer">
          <img src="/media/logo.svg"/>
          <span>
            Simple Pet Shop apps building using React JS
          </span>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    pets: state.pets || [],
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  };
}
export default connect(mapStateToProps)(App);
