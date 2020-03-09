import React from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const WelcomeHeader = ({ firstName }) => {
  const extractUsername = email => email.substr(0, email.indexOf("@"));

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="signinPopover">
          <Popover.Content>
            <Form>
              <Button variant="danger" type="submit" style={{ float: "right" }}>
                Log Out
              </Button>
            </Form>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="success">Welcome, {firstName}!</Button>
    </OverlayTrigger>
  );
};

export default WelcomeHeader;
