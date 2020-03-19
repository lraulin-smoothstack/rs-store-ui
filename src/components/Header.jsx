import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import FilterContainer from "../containers/FilterContainer";
import LoginContainer from "../containers/LoginContainer";
import CartContainer from "../containers/CartContainer";

const Header = props => (
  <>
    <Navbar bg="primary" variant="dark" fixed="top">
      <Navbar.Brand href="#home">GC Fashion Store</Navbar.Brand>
      <Nav className="mr-auto" />
      <FilterContainer />
      <LoginContainer />
      <CartContainer />
    </Navbar>
  </>
);

export default Header;
