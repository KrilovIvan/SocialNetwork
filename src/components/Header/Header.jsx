import React from "react";
import hheader from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={hheader.Header}>
      <NavLink to="/profile" className={hheader.navLink}>
        <img
          src="https://csportal.directstar.ru/cspss/scripts/images/honor/chaticon.png"
          alt="logo"
        />
        SOCIAL
      </NavLink>
      <div className={hheader.loginCont}>
        {props.isAuth ? (
          <div className={hheader.login}>{props.login}</div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
