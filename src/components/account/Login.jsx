import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Login = ({ login, username, setusername, password, setPassword }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    login({ username, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formPlaintextusername">
        {/* <Form.Label column sm="2"> */}
        <Col sm="10">
          <Form.Label>username</Form.Label>
          <Form.Control
            plaintext
            placeholder="username@example.com"
            value={username}
            onChange={(event) => setusername(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
          />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit" style={{ float: "right" }}>
        Log In
      </Button>
    </Form>
  );
};

export default Login;
