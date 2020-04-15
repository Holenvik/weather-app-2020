import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { MainPage } from "pages/main";

import { history } from "./history";
import { ROUTE_PATHS } from "data/constants";

export const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path={ROUTE_PATHS.MAIN} component={MainPage} exact />
    </Switch>
  </Router>
);
