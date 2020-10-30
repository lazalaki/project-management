import React, { useContext } from "react";
import { GlobalStore } from "../../../../store/global-store";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "./projectMembers.scss";

const ProjectMembers = () => {
  const {
    state: { selectedProject },
  } = useContext(GlobalStore);

  if (!selectedProject) {
    return <></>;
  }

  console.log(selectedProject.members);
  return (
    <div className="members">
      <h2 className="members__title">Project Members</h2>
      <div className="members__table">
        <DataTable value={selectedProject.members}>
          <Column field="username" header="Username"></Column>
          <Column field="email" header="Email"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ProjectMembers;
