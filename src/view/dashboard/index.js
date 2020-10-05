import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { homepageRoute } from "../../shared/routes";
import Home from "./home/home";
import Navbar from "../../components/navbar/navbar";
import PrivateRoute from "../../components/privateRoute/privateRoute";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <PrivateRoute path={homepageRoute()} component={Home} />
        <Redirect to={homepageRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
