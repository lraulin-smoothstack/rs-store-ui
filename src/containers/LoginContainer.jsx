import React from "react";
import {
  Button,
  Col,
  Form,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";

const LoginContainer = () => (
  <OverlayTrigger
    trigger="click"
    placement="bottom"
    overlay={
      <Popover id="signinPopover">
        <Popover.Content>
          <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
              {/* <Form.Label column sm="2"> */}
              <Col sm="10">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext placeholder="email@example.com" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Col sm="10">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit" style={{ float: "right" }}>
              Submit
            </Button>
          </Form>
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="secondary">Sign In</Button>
  </OverlayTrigger>
);

export default LoginContainer;
