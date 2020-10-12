import React from "react";
import { Switch, Redirect } from "react-router-dom";
import {
  homepageRoute,
  myProjectsRoute,
  createProjectRoute,
} from "../../shared/routes";
import Home from "./home/home";
import Navbar from "../../components/navbar/navbar";
import PrivateRoute from "../../components/privateRoute/privateRoute";
import MyProjects from "./myProjects/myProjects";
import CreateProject from "./createProject/createProject";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute
          path={homepageRoute()}
          component={Home}
          allowedRoles={["user", "admin"]}
        />
        <PrivateRoute
          path={createProjectRoute()}
          component={CreateProject}
          allowedRoles={["admin", "user"]}
        />
        <PrivateRoute
          path={myProjectsRoute()}
          component={MyProjects}
          allowedRoles={["user", "admin"]}
        />
        <Redirect to={homepageRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
