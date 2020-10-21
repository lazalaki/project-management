import React from "react";
import { Switch, Redirect } from "react-router-dom";
import {
  homepageRoute,
  myProjectsRoute,
  createProjectRoute,
  singleProjectRoute,
  allUsersRoute,
} from "../../shared/routes";
import Home from "./home/home";
import Navbar from "../../components/navbar/navbar";
import PrivateRoute from "../../components/privateRoute/privateRoute";
import MyProjects from "./myProjects/myProjects";
import CreateProject from "./createProject/createProject";
import SingleProject from "./singleProject/singleProject";
import Users from "./users/users";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute
          path={homepageRoute()}
          component={Home}
          allowedRoles={["user", "admin", "superAdmin"]}
          redirect={myProjectsRoute()}
        />

        <PrivateRoute
          path={createProjectRoute()}
          component={CreateProject}
          redirect={myProjectsRoute()}
          allowedRoles={["admin", "superAdmin"]}
        />

        <PrivateRoute
          path={singleProjectRoute()}
          component={SingleProject}
          allowedRoles={["user", "admin", "superAdmin"]}
          redirect={myProjectsRoute()}
        />

        <PrivateRoute
          path={myProjectsRoute()}
          component={MyProjects}
          allowedRoles={["user", "admin", "superAdmin"]}
          redirect={myProjectsRoute()}
        />
        <PrivateRoute
          path={allUsersRoute()}
          component={Users}
          redirect={myProjectsRoute()}
          allowedRoles={["superAdmin"]}
        />

        <Redirect to={homepageRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
