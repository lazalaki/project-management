import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Onboarding from "../view/onboarding";
import { onboardingRoute, dashboardRoute } from "../shared/routes";
import Dashboard from "./dashboard";

const View = () => {
  return (
    <Switch>
      <Route path={onboardingRoute()} component={Onboarding} />
      <Route path={dashboardRoute()} component={Dashboard} />
      <Redirect to={onboardingRoute()} />
    </Switch>
  );
};

export default View;
