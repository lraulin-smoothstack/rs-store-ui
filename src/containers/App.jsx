import React from "react";
import ProductsContainer from "./ProductsContainer";
import Header from "../components/Header";
import { connect } from "react-redux";
import { recoverLogin } from "../actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import shop from "../api/shop";

const App = ({ recoverLogin }) => {
  recoverLogin();

  return (
    <div>
      <Switch>
        <Route path="/test">
          <h1>Test</h1>
        </Route>
        <Route path="/">
          <Header />
          <ProductsContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default connect(null, { recoverLogin })(App);
