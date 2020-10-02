import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { homepageRoute } from "../../shared/routes";
import Home from "./home/home";
import Navbar from "../../components/navbar/navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={homepageRoute()} component={Home} />
        <Redirect to={homepageRoute()} />
      </Switch>
    </>
  );
};

export default Dashboard;
