import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = ({ department, setDepartment }) => {
  const onClickDepartment = department => {
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
        <Form inline>
          <Button
            active={department === "mens"}
            onClick={() => onClickDepartment("mens")}
          >
            Men's
          </Button>
          <Button
            active={department === "womens"}
            onClick={() => onClickDepartment("womens")}
          >
            Women's
          </Button>
          <Button
            active={department === "kids"}
            onClick={() => onClickDepartment("kids")}
          >
            Kid's
          </Button>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;
