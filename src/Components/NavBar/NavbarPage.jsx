import "./style.css";
import { Link } from "react-router-dom";
import Search from "../Search";

import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="opa" color="black" dark expand="md">
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <MDBNavbarBrand active="true">
            <strong className="white-text">HOME</strong>
          </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav center="true">
            <Search />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
