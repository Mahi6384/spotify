import React from "react";
import "../style/sidebarOption.css";
import { Icon } from "@mui/material";
function SideBarOption({ title, Icon }) {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
