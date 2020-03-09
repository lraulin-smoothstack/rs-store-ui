import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = ({ handleSubmit, email, setEmail, password, setPassword }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group as={Row} controlId="formPlaintextEmail">
      {/* <Form.Label column sm="2"> */}
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

    <Form.Group as={Row} controlId="formPlaintextPassword">
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
    <Button variant="primary" type="submit" style={{ float: "right" }}>
      Submit
    </Button>
  </Form>
);

export default Login;
