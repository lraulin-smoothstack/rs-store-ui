import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

const AccountModal = ({
  email,
  first_name,
  last_name,
  address,
  phone,
  updateUserDetails,
}) => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [newFirstName, setNewFirstName] = useState(first_name || "");
  const [newLastName, setNewLastName] = useState(last_name || "");
  const [newAddress, setNewAddress] = useState(address || "");
  const [newPhone, setNewPhone] = useState(phone || "");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    event.stopPropagation();
    updateUserDetails({
      email,
      first_name: newFirstName,
      last_name: newLastName,
      address: newAddress,
      phone: newPhone,
    });
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
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  readOnly
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={newFirstName}
                  onChange={e => setNewFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={newLastName}
                  onChange={e => setNewLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={newAddress}
                  onChange={e => setNewAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={newPhone}
                  onChange={e => setNewPhone(e.target.value)}
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
