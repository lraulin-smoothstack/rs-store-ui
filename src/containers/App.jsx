import React from "react";
import ProductsContainer from "./ProductsContainer";
import Header from "../components/Header";
import { connect } from "react-redux";
import { recoverLogin } from "../actions";
import shop from "../api/shop";

const App = ({ recoverLogin }) => {
  recoverLogin();
  // console.log("CALLING UPDATE USER FROM APP");
  // shop.updateUser({
  //   id: 2,
  //   email: "customer@customer.com",
  //   address: "Elm Street",
  //   first_name: "TESTNAME",
  //   last_name: "Spratt",
  //   phone: "867-5309",
  //   jwt:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN1c3RvbWVyQGN1c3RvbWVyLmNvbSIsInJvbGUiOjEsImlhdCI6MTU4Mzk2NzEyMiwiZXhwIjoxNTg0MDUzNTIyfQ.Krb4dz0tEU6LTRENcLzFpDxn3BnIJBLoT63WZTyQCHE",
  // });

  return (
    <div>
      <Header />
      <ProductsContainer />
    </div>
  );
};

export default connect(null, { recoverLogin })(App);
