import React from "react";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalStore } from "../../store/global-store";

const PrivateRoute = ({
  component: Component,
  path,
  allowedRoles = [],
  redirect,
}) => {
  const {
    state: { user },
  } = useContext(GlobalStore);

  // allowedRole = ['ADMIN', 'SUPERADMIN']
  // user.role = 'GUEST'
  const isAllow = allowedRoles.some((role) => role === user?.role);

  return (
    <Route
      path={path}
      render={(props) =>
        user && isAllow ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
};

export default PrivateRoute;
