import React, { useState, useEffect } from "react";
import { getSingleProjectRequest } from "../../../services/api/project/projectsService";
import { useParams } from "react-router-dom";

const SingleProject = () => {
  const [project, setProject] = useState();

  useEffect(() => {
    fetchProject();
  }, []);

  const { id } = useParams();
  const fetchProject = async () => {
    try {
      const { data } = await getSingleProjectRequest(id);
      setProject(data.project);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>{project?.title}</p>
      <p>{project?.description}</p>
    </div>
  );
};

export default SingleProject;
