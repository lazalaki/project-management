import React, { useContext, useState } from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Card } from "primereact/card";
import { useHistory, Link } from "react-router-dom";

import { GlobalStore } from "../../store/global-store";
import { ReactComponent as Avatar } from "../../images/avatar.svg";
import SuperAdminMobileNav, { superAdminNav } from "./roleNav/superAdminNav";
import AdminMobileNav, { adminNav } from "./roleNav/adminNav";
import UserNav, { userNav } from "./roleNav/userNav";
import Logo from "../../images/logo.svg";
import { loginRoute } from "../../shared/routes";

import "./navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const {
    logout,
    state: { user },
  } = useContext(GlobalStore);

  const nav = () => {
    switch (user.role) {
      case "admin":
        return adminNav;
      case "superAdmin":
        return superAdminNav;
      case "user":
        return userNav;

      default:
        return userNav;
    }
  };

  const responsiveNav = () => {
    switch (user.role) {
      case "admin":
        return <AdminMobileNav />;
      case "superAdmin":
        return <SuperAdminMobileNav />;
      case "user":
        return <UserNav />;

      default:
        return userNav;
    }
  };

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
              {responsiveNav()}{" "}
              <Link
                to={loginRoute()}
                onClick={logout}
                className="opened__link--logout"
              >
                Logout
              </Link>
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
      <PanelMenu model={nav()} className="menu" />
      <PanelMenu model={logoutItems} className="logout" />
    </div>
  );
};

export default Navbar;
