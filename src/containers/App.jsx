import React from "react";
import ProductsContainer from "./ProductsContainer";
import Header from "../components/Header";
import { connect } from "react-redux";
import { recoverLogin } from "../actions";
import { Switch, Route } from "react-router-dom";
import ManagementRoutes from "../components/management/ManagementRoutes";

const App = ({ recoverLogin }) => {
  recoverLogin();

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductsContainer />
        </Route>
        <ManagementRoutes />
      </Switch>
    </div>
  );
};

export default connect(null, { recoverLogin })(App);
