import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const Register = ({ register, email, setEmail, password, setPassword }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    if (password === confirmPassword) {
      setPasswordMismatch(false);
      register({ email, password });
    } else {
      setPasswordMismatch(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formRegisterPlaintextEmail">
        <Col sm="10">
          <Form.Label>Email</Form.Label>
          <Form.Control
            plaintext
            placeholder="email@example.com"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formRegisterPlaintextPassword">
        <Col sm="10">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formRegisterConfirmPassword">
        <Col sm="10">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
          />
        </Col>
      </Form.Group>
      {passwordMismatch && (
        <Alert variant={"danger"}>Passwords do not match.</Alert>
      )}
      <Button variant="primary" type="submit" style={{ float: "right" }}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
