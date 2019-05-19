import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/translate">En -> SF</NavLink>
      <NavLink to="/translate">SF -> En</NavLink>
      <NavLink to="/" exact>
        Add
      </NavLink>
    </nav>
  );
}

export default Menu;
