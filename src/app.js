import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Browse, Signin, Signup } from "./page";

import * as ROUTES from './constants/router';

import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

import { useAuthListener } from "./hook";

export default function App() {
  const { user } = useAuthListener();
  console.log(user);

  return (
    <Router>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>


        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}> 
        <Home />
      </IsUserRedirect>

    </Router>
  )
}