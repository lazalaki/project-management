import React, { useEffect } from "react";
import { Panel } from "primereact/panel";
import { Dropdown } from "primereact/dropdown";

import "./tasks.scss";
import { useContext } from "react";
import { GlobalStore } from "../../../../store/global-store";

const Tasks = ({ projectId }) => {
  const {
    getAllTasks,
    state: { tasks },
  } = useContext(GlobalStore);

  useEffect(() => {
    if (projectId) {
      getAllTasks(projectId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  if (!tasks) return null;
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="task">
            <Panel header={task.title} className="task__panel">
              <div className="task__body">
                <p>Assigned to: {task.user.username}</p>
                {/* <Dropdown
                  optionLabel="status1"
                  className="task__dropdown"
                  value={task.status}
                  options={statuses}
                  onChange={(event) => onChangeHandler(event)}
                /> */}
                <p>Status: {task.status}</p>
                {/* <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option value="not">Not</option>
                  <option value="yes">yes</option>
                  <option value="finished">finished</option>
                </select> */}
              </div>
            </Panel>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
