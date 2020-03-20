import React, { useEffect } from "react";
import LoginHeader from "../components/account/LoginHeader";
import { connect } from "react-redux";
import {
  login,
  recoverLogin,
  register,
  logout,
  updateUserDetails,
} from "../actions";
import {
  getFirstName,
  getLastName,
  getEmail,
  getAddress,
  getPhone,
  getRole,
} from "../reducers";
import WelcomeHeader from "../components/account/WelcomeHeader";

const LoginContainer = ({
  address,
  email,
  first_name,
  last_name,
  login,
  logout,
  phone,
  recoverLogin,
  register,
  updateUserDetails,
  role,
}) => {
  useEffect(() => {
    if (!email) recoverLogin();
  }, [email]);

  return (
    <>
      {email ? (
        <WelcomeHeader
          address={address}
          email={email}
          first_name={first_name}
          last_name={last_name}
          phone={phone}
          logout={logout}
          updateUserDetails={updateUserDetails}
          role={role}
        />
      ) : (
        <LoginHeader login={login} register={register} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  email: getEmail(state),
  first_name: getFirstName(state),
  last_name: getLastName(state),
  address: getAddress(state),
  phone: getPhone(state),
  role: getRole(state),
});

const mapDispatchToProps = {
  login,
  logout,
  recoverLogin,
  register,
  updateUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
