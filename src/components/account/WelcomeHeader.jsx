import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import AccountModal from "./AccountModal";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const WelcomeHeader = ({ user, logout, updateUserDetails }) => {
  const extractUsername = (username) =>
    /(.+)@(.+){2,}\.(.+){2,}/.test(username)
      ? username.substr(0, username.indexOf("@"))
      : username;

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="signinPopover">
          <Popover.Content>
            <ButtonGroup vertical>
              <AccountModal user={user} updateUserDetails={updateUserDetails} />
              {user.isAdmin && (
                <Button variant="primary">
                  <Link to="/products" style={{ color: "white" }}>
                    Products
                  </Link>
                </Button>
              )}
              {user.isAdmin && (
                <Button variant="primary">
                  <Link to="/coupons" style={{ color: "white" }}>
                    Coupons
                  </Link>
                </Button>
              )}
              {user.isAdmin && (
                <Button variant="primary">
                  <Link to="/taxes" style={{ color: "white" }}>
                    Taxes
                  </Link>
                </Button>
              )}
              {user.isAdmin && (
                <Button variant="primary">
                  <Link to="/reports" style={{ color: "white" }}>
                    Reports
                  </Link>
                </Button>
              )}
              <Button
                variant="danger"
                onClick={() => logout()}
                style={{ float: "right" }}
              >
                Log Out
              </Button>
            </ButtonGroup>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="success">
        Welcome, {user.firstName || user.username}!
      </Button>
    </OverlayTrigger>
  );
};

export default WelcomeHeader;
