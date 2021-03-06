import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes.js";

import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import Projects from "./Components/Projects";

import Dashboard from "./Components/Admin/Dashboard";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        {/* TODO:
            =======================
            add complete set of admin routes
        */}
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/projects"
          exact
          component={Projects}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
