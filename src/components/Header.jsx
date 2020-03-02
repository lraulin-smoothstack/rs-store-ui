import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import FilterContainer from "../containers/FilterContainer";

const Header = props => {
  const [department, setDepartment] = useState(null);

  const onSelectDepartment = department => {
    console.log("DEPARTMENT SELECTED: " + department);
    setDepartment(department);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Wu, Raulin & Co. Apparel</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <FilterContainer />
        <Button>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
