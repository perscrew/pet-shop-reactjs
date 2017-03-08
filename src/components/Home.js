import React from "react";
import PetList from "./common/PetList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <PetList/>
      </div>
    );
  }
}
