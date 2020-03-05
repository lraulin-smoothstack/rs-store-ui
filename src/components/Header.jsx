import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import FilterContainer from "../containers/FilterContainer";
import LoginContainer from "../containers/LoginContainer";

const Header = props => (
  <>
    <Navbar bg="primary" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Wu, Raulin & Co. Apparel</Navbar.Brand>
      <Nav className="mr-auto" />
      <FilterContainer />
      <LoginContainer />
    </Navbar>
  </>
);

export default Header;
