import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "./icons/baseline-home-24px.svg";

function Menu() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/en-to-sf">En -> SF</NavLink>
      <NavLink to="/sf-to-en">SF -> En</NavLink>
      <NavLink to="/add" exact>
        Add
      </NavLink>
      <NavLink to="/" exact className="mobile">
        <HomeIcon className="home-icon" />
      </NavLink>
      <NavLink to="/en-to-sf" className="mobile">
        EN
      </NavLink>
      <NavLink to="/sf-to-en" className="mobile">
        SF
      </NavLink>
    </nav>
  );
}

export default Menu;
