import React, { useState } from "react";
import { Button, OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

const LoginHeader = ({ login, register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState("login");

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id="signinPopover">
          <Popover.Content>
            <Tabs
              id="controlled-tab-example"
              activeKey={loginOrRegister}
              onSelect={k => setLoginOrRegister(k)}
            >
              <Tab eventKey="login" title="Log In">
                <Login
                  login={login}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                />
              </Tab>
              <Tab eventKey="register" title="Register">
                <Register
                  register={register}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                />
              </Tab>
            </Tabs>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary">Log In</Button>
    </OverlayTrigger>
  );
};

export default LoginHeader;
