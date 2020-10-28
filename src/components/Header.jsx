import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import FilterContainer from "../containers/FilterContainer";
import LoginContainer from "../containers/LoginContainer";
import CartContainer from "../containers/CartContainer";
import { Link } from "react-router-dom";

const Header = (props) => (
  <>
    <Navbar bg="primary" variant="dark" fixed="top">
      <Link to="/">
        <Navbar.Brand>GC Fashion Store</Navbar.Brand>
      </Link>
      <Nav className="mr-auto" />
      <Link to="/" replace>
        Home
      </Link>
      <Link to="/products" replace>
        Products
      </Link>
      <Link to="/coupons" replace>
        Coupons
      </Link>
      <Link to="/taxes" replace>
        Taxes
      </Link>
      <Link to="/reports" replace>
        Reports
      </Link>
      <FilterContainer />
      <LoginContainer />
      <CartContainer />
    </Navbar>
  </>
);

export default Header;
