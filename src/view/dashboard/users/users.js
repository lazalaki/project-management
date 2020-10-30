import React, { useEffect, useState } from "react";

// import { MultiSelect } from "primereact/multiselect";
import {
  allUsersRequest,
  setRoleRequest,
} from "../../../services/api/user/userService";

// import "./users.scss";
// import ButtonComp from "../../../components/button/button";
// import { showMessage } from "../../../services/shared/toastService";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [usersValue, setUsersValue] = useState();

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   const getAllUsers = async () => {
//     const { data } = await allUsersRequest();
//     setUsers(data.users);
//   };

//   const addAdminHandler = async () => {
//     try {
//       console.log(usersValue);
//       await setAdminRoleRequest(usersValue);
//       showMessage("Success", "Admin added", "success");
//       setUsersValue();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const cancelHandler = () => {
//     setUsersValue();
//   };

//   return (
//     <div className="users">
//       <div className="users__select">
//         <MultiSelect
//           placeholder="Select Users..."
//           optionLabel="email"
//           optionValue="id"
//           value={usersValue}
//           options={users}
//           onChange={(e) => setUsersValue(e.target.value)}
//           filter
//         />
//         <div className="users__button">
//           <ButtonComp
//             label={"Save"}
//             onClick={addAdminHandler}
//             disabled={!usersValue}
//           />

//           <ButtonComp
//             label={"Cancel"}
//             disabled={!usersValue}
//             onClick={cancelHandler}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Users;
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import "./users-table.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState();
  const [role, setRole] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    updateRole();
    getAllUsers();
  }, [role]);

  const getAllUsers = async () => {
    const { data } = await allUsersRequest();
    setUsers(data.users);
  };
  const updateRole = async () => {
    const body = {
      id,
      role,
    };
    await setRoleRequest(id, body);
  };

  const roles = [{ role: "superAdmin" }, { role: "admin" }, { role: "user" }];

  const header = (
    <div className="table-header">
      List of Users
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
      </span>
    </div>
  );

  const roleBodyTemplate = () => {
    users.map((user) => (
      <React.Fragment>
        <span className="p-column-title">Name</span>
        {user.role}
      </React.Fragment>
    ));
  };

  return (
    <div className="datatable-filter-demo">
      <div className="card">
        <DataTable
          value={users}
          paginator
          rows={10}
          header={header}
          className="p-datatable-customers"
          globalFilter={globalFilter}
          emptyMessage="No customers found."
          onRowClick={(e) => setId(e.data.id)}
        >
          <Column
            field="username"
            header="Username"
            filter
            filterPlaceholder="Search by username"
          />
          <Column
            field="email"
            header="Email"
            filter
            filterPlaceholder="Search by Email"
          />
          <Column
            columnKey="id"
            field="role"
            header="Role"
            body={roleBodyTemplate()}
            filter
            filterPlaceholder="Search by Role"
            editor={() => (
              <Dropdown
                optionLabel="role"
                value={role}
                options={roles}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Update role"
              />
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};
export default Users;

// const nameBodyTemplate = () => {
//   users.map((user) => (
//     <React.Fragment>
//       <span className="p-column-title">Name</span>
//       {user.username}
//     </React.Fragment>
//   ));
// };

// const emailBodyTemplate = () => {
//   users.map((user) => (
//     <React.Fragment>
//       <span className="p-column-title">Email</span>
//       {user.email}
//     </React.Fragment>
//   ));
// };

// const roleBodyTemplate = () => {
//   users.map((user) => (
//     <React.Fragment>
//       <input
//         type="text"
//         name="role"
//         id="role"
//         value={user.role}
//         onChange={handleChange}
//       />
//     </React.Fragment>
//   ));
// };
// return (
//   <div>
//     {users.map((user) => (
//       <input value={user.role} name="role" id="role" type="text" />
//     ))}
//   </div>
// );
//   users.map((user) => (
//     <React.Fragment>
//       <span className="p-column-title">ASD</span>
//       {user.username}
//     </React.Fragment>
//   ));
// };

// const roleEditBodyTemplate = () => {
//   users.map((user) => (
//     <React.Fragment>
//       <span className="p-column-title">Role</span>
//       <input type="text" name="role" id="role" value={user.role} />
//     </React.Fragment>
//   ));
// };

// const buttonBodyTemplate = () => {
//   return (
//     <React.Fragment>
//       <span className="p-column-title">Edit</span>
//       <button>Edit</button>
//     </React.Fragment>
//   );
// };
