import React from "react";
import { useEffect } from "react";
import { projectsRequest } from "../../../services/api/project/projectsService";

const Home = () => {
  useEffect(() => {
    projectsRequest();
  }, []);

  return <div>HOMEPAGE</div>;
};

export default Home;
