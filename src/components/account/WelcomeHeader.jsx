import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import AccountModal from "./AccountModal";
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const WelcomeHeader = ({
  address,
  email,
  first_name,
  last_name,
  phone,
  logout,
  updateUserDetails,
  role,
}) => {
  const extractUsername = email => email.substr(0, email.indexOf("@"));

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="signinPopover">
          <Popover.Content>
            <ButtonGroup vertical>
              <AccountModal
                address={address}
                email={email}
                first_name={first_name}
                last_name={last_name}
                phone={phone}
                updateUserDetails={updateUserDetails}
              />
              {(role == 2 || role == 4) && (
                <Link to="/products">
                  <Button variant="primary">Products</Button>
                </Link>
              )}
              {(role == 2 || role == 4) && (
                <Link to="/coupons">
                  <Button variant="primary">Coupons</Button>
                </Link>
              )}
              {(role == 3 || role == 4) && (
                <Link to="/taxes">
                  <Button variant="primary">Taxes</Button>
                </Link>
              )}
              {(role == 3 || role == 4) && (
                <Link to="/reports">
                  <Button variant="primary">Reports</Button>
                </Link>
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
        Welcome, {first_name || extractUsername(email)}!
      </Button>
    </OverlayTrigger>
  );
};

export default WelcomeHeader;
