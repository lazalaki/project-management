import React from "react";
import { PanelMenu } from "primereact/panelmenu";
import { Card } from "primereact/card";

import { ReactComponent as Avatar } from "../../images/avatar.svg";

import Logo from "../../images/logo.svg";

import "./navbar.scss";

const Navbar = () => {
  const items = [
    {
      label: "My Projects",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "Create Project",
      icon: "pi pi-fw pi-pencil",
    },
  ];

  const logout = [
    {
      label: "Logout",
      icon: "pi pi-fw pi-sign-out",
    },
  ];

  return (
    <div className="container">
      <Card className="card">
        <img src={Logo} alt="Logo" className="card__logo" />
        <h3>Lazar Erbes</h3>
        <h5>jelenam@gmail.com</h5>
        <Avatar className="card__avatar" />
      </Card>
      <PanelMenu model={items} className="menu" />
      <PanelMenu model={logout} className="logout" />
    </div>
  );
};

export default Navbar;
