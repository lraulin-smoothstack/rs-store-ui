import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { states } from "../../constants.js";

const AccountModal = ({ user, updateUserDetails }) => {
  const [show, setShow] = useState(false);
  const [validated, _] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    username: user && user.username ? user.username : "",
    phone: user && user.phone ? user.phone : "",
    firstName: user && user.firstName ? user.firstName : "",
    lastName: user && user.lastName ? user.lastName : "",
    address:
      user && user.address
        ? {
            street: user.address.street || "",
            city: user.address.city || "",
            state: user.address.state || "",
            zip: user.address.zip || "",
          }
        : { street: "", city: "", state: "", zip: "" },
  });
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setUserData({
      ...userData,
      address: {
        ...userData.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    event.stopPropagation();
    updateUserDetails({ ...user, ...userData });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        User Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="usernameFG">
                <Form.Label>username address</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  placeholder="Enter username"
                  value={userData.username}
                  readOnly
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="firstNameFG">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={userData.firstName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="lastNameFG">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={userData.lastName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="streetFG">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter street"
                  name="street"
                  value={userData.address.street}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="cityFG">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  name="city"
                  value={userData.address.city}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="stateFG">
                <Form.Label>State</Form.Label>
                <Form.Control
                  as="select"
                  name="state"
                  value={userData.address.state}
                  onChange={handleAddressChange}
                >
                  <option value={""}>Select Your State</option>
                  {Object.entries(states).map(([abbreviation, state]) => (
                    <option value={abbreviation} key={abbreviation}>
                      {state}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="zipFG">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zip"
                  name="zip"
                  value={userData.address.zip}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="phoneFG">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form.Row>
            <Button
              variant="secondary"
              // onClick={handleClose}
              type="submit"
            >
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AccountModal;
