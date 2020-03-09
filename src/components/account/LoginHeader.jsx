import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { login } from "../../actions";

const LoginHeader = ({ onClickLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Submitting login with " + email + " and " + password);
    onClickLogin({ email, password });
  };

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="signinPopover">
          <Popover.Content>
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
              <Button
                variant="primary"
                type="submit"
                style={{ float: "right" }}
              >
                Submit
              </Button>
            </Form>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary">Log In</Button>
    </OverlayTrigger>
  );
};

export default LoginHeader;
