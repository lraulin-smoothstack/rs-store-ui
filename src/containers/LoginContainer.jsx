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
import { getUser } from "../reducers";
import WelcomeHeader from "../components/account/WelcomeHeader";

const LoginContainer = ({
  user,
  login,
  logout,
  recoverLogin,
  register,
  updateUserDetails,
}) => {
  useEffect(() => {
    if (!user.username) recoverLogin();
  }, [user.username, recoverLogin]);

  return (
    <>
      {user.username ? (
        <WelcomeHeader
          user={user}
          logout={logout}
          updateUserDetails={updateUserDetails}
        />
      ) : (
        <LoginHeader login={login} register={register} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const mapDispatchToProps = {
  login,
  logout,
  recoverLogin,
  register,
  updateUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
