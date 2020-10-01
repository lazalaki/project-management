import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { registerRoute, loginRoute } from "../../shared/routes";
import Register from "../../view/onboarding/register/register";
import Login from "../../view/onboarding/login/login";

const Onboarding = () => {
  return (
    <Switch>
      <Route path={registerRoute()} component={Register} />
      <Route path={loginRoute()} component={Login} />
      <Redirect to={loginRoute()} />
    </Switch>
  );
};

export default Onboarding;
