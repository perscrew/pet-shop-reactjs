import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>
            Home
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/pet-edit">
          <NavItem>
            Add a Pet <Glyphicon glyph="plus-sign"/>
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
