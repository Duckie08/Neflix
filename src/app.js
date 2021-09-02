import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Browse, Signin, Signup } from "./page";

import * as ROUTES from './constants/router';

export default function App() {
  return (
    <Router>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

    </Router>
    )
}