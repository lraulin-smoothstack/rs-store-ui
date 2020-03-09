import React, { useEffect } from "react";
import LoginHeader from "../components/account/LoginHeader";
import { connect } from "react-redux";
import { login, recoverLogin, register } from "../actions";
import { getFirstName, getEmail } from "../reducers";
import WelcomeHeader from "../components/account/WelcomeHeader";

const LoginContainer = ({ email, firstName, login, recoverLogin }) => {
  useEffect(() => {
    if (!email) recoverLogin();
  }, [email]);

  return (
    <>
      {email ? (
        <WelcomeHeader firstName={firstName} />
      ) : (
        <LoginHeader login={login} register={register} />
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
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
