import React, { useContext } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Card } from "primereact/card";

import { GlobalStore } from "../../store/global-store";
import { ReactComponent as Avatar } from "../../images/avatar.svg";

import Logo from "../../images/logo.svg";

import "./navbar.scss";
import { useHistory, Link } from "react-router-dom";
import {
  loginRoute,
  myProjectsRoute,
  homepageRoute,
  createProjectRoute,
  allUsersRoute,
} from "../../shared/routes";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const {
    logout,
    state: { user },
  } = useContext(GlobalStore);
  const items = [
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

  const logoutItems = [
    {
      label: "Logout",
      icon: "pi pi-fw pi-sign-out",
      command: () => {
        logout();
        history.push(loginRoute());
      },
    },
  ];
  return (
    <div className="container">
      {/* MOBILE NAVBAR */}
      <div className="nav" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <div className="nav__menu--opened">
            <i className="pi pi-times opened__icon"></i>
            <div className="opened__links">
              <Link to={homepageRoute()} className="opened__link">
                Home
              </Link>
              <Link to={myProjectsRoute()} className="opened__link">
                My Projects
              </Link>
              <Link to={createProjectRoute()} className="opened__link">
                Create Project
              </Link>
              <Link to={loginRoute()} onClick={logout} className="opened__link">
                Logout
              </Link>{" "}
            </div>
          </div>
        ) : (
          <i className="pi pi-bars nav__menu--closed"></i>
        )}
      </div>

      {/* DESKTOP NAVBAR */}
      <Card className="card">
        <img src={Logo} alt="Logo" className="card__logo" />
        <h3>{user.username}</h3>
        <h5>{user.email}</h5>
        <Avatar className="card__avatar" />
      </Card>
      <PanelMenu model={items} className="menu" />
      <PanelMenu model={logoutItems} className="logout" />
    </div>
  );
};

export default Navbar;
