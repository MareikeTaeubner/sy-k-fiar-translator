import React from "react";
import { NavLink } from "react-router-dom";

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
    </nav>
  );
}

export default Menu;
