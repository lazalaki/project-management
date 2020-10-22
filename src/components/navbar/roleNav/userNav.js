import React from "react";
import { Link } from "react-router-dom";
import { homepageRoute, myProjectsRoute } from "../../../shared/routes";
import history from "../../../shared/history";

export const userNav = [
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
];

const UserNav = () => {
  const adminMobileNav = [
    { id: 1, to: homepageRoute(), name: "Home" },
    { id: 2, to: myProjectsRoute(), name: "My Projects" },
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

export default UserNav;
