import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { homepageRoute, myProjectsRoute } from "../../shared/routes";
import Home from "./home/home";
import Navbar from "../../components/navbar/navbar";
import PrivateRoute from "../../components/privateRoute/privateRoute";
import MyProjects from "./myProjects/myProjects";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute
          path={homepageRoute()}
          component={Home}
          allowedRoles={["user"]}
        />
        <PrivateRoute
          path={myProjectsRoute()}
          component={MyProjects}
          allowedRoles={["user"]}
        />
        <Redirect to={homepageRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
