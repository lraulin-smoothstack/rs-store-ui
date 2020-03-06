import React from "react";
import LoginHeader from "../components/LoginHeader";
import { connect } from "react-redux";
import { login } from "../actions";
import { getEmail } from "../reducers";

const LoginContainer = () => (
  <LoginHeader
    onClickLogin={({ email, password }) => login({ email, password })}
  />
);

const mapStateToProps = state => ({
  email: getEmail(state),
});

export default connect(mapStateToProps, { login })(LoginContainer);
