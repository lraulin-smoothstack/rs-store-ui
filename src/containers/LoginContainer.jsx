import React, { useEffect } from "react";
import LoginHeader from "../components/header/LoginHeader";
import { connect } from "react-redux";
import { login, recoverLogin } from "../actions";
import { getFirstName, getEmail } from "../reducers";
import WelcomeHeader from "../components/header/WelcomeHeader";

const LoginContainer = ({ email, firstName, login, recoverLogin }) => {
  useEffect(() => {
    if (!email) recoverLogin();
  }, [email]);

  return (
    <>
      {email ? (
        <WelcomeHeader firstName={firstName} />
      ) : (
        <LoginHeader
          onClickLogin={({ email, password }) => login({ email, password })}
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  email: getEmail(state),
  firstName: getFirstName(state),
});

const mapDispatchToProps = {
  login,
  recoverLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
