import React from "react";

function Menu() {
  return (
    <nav>
      <Item text="Home" active />
      <Item text="En -> SF" />
      <Item text="SF -> En" />
      <Item text="Add" />
    </nav>
  );
}

/**
 *
 * @param {Object} props
 * @param {string} props.text
 * @param {boolean} [props.active]
 */
function Item({ text, active = false }) {
  return (
    <a href="#" className={active ? "active" : ""}>
      {text}
    </a>
  );
}

export default Menu;
