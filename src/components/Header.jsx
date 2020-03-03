import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
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
        <Nav className="mr-auto" />
        <FilterContainer />
        <Button>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
