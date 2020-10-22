import React from "react";
import { Link } from "react-router-dom";
import {
  homepageRoute,
  myProjectsRoute,
  createProjectRoute,
  allUsersRoute,
} from "../../../shared/routes";
import history from "../../../shared/history";

export const superAdminNav = [
  {
    label: "Home",
    icon: "pi pi-fw pi-home",
    command: () => {
      history.push(homepageRoute());
    },
  },
  {
    label: "My Projects",
    icon: "pi pi-fw pi-home",
    command: () => {
      history.push(myProjectsRoute());
    },
  },
  {
    label: "Create Project",
    icon: "pi pi-fw pi-pencil",
    command: () => {
      history.push(createProjectRoute());
    },
  },
  {
    label: "All Users",
    icon: "pi pi-fw pi-pencil",
    command: () => {
      history.push(allUsersRoute());
    },
  },
];

const SuperAdminMobileNav = () => {
  const adminMobileNav = [
    { id: 1, to: homepageRoute(), name: "Home" },
    { id: 2, to: myProjectsRoute(), name: "My Projects" },
    { id: 3, to: createProjectRoute(), name: "Create Project" },
    { id: 4, to: allUsersRoute(), name: "All Users" },
  ];

  return (
    <div className="mobile__navbar">
      {adminMobileNav.map((nav) => (
        <Link key={nav.id} to={nav.to} className="opened__link">
          {nav.name}
        </Link>
      ))}
    </div>
  );
};

export default SuperAdminMobileNav;
