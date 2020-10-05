import React from "react";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginRoute } from "../../shared/routes";
import { GlobalStore } from "../../store/global-store";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const {
    state: { user },
  } = useContext(GlobalStore);

  return (
    <Route
      path={path}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={loginRoute()} />
      }
    />
  );
};

export default PrivateRoute;
