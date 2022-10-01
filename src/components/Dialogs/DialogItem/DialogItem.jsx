import React from "react";
import { NavLink } from "react-router-dom";
import dlgitm from "./DialogItem.module.css";

const DialogItem = (props) => {
  const activeLink = (navData) =>
    navData.isActive ? dlgitm.active : dlgitm.dialog;
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className={activeLink}>
      <div className={dlgitm.dialog}>{props.name}</div>
    </NavLink>
  );
};

export default DialogItem;
