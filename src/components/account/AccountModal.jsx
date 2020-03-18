import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

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

  const handleSubmit = () => {
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
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            readOnly
          />
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={newFirstName}
            onChange={e => setNewFirstName(e.target.value)}
          />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={newLastName}
            onChange={e => setNewLastName(e.target.value)}
          />
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={newAddress}
            onChange={e => setNewAddress(e.target.value)}
          />
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={newPhone}
            onChange={e => setNewPhone(e.target.value)}
          />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AccountModal;
