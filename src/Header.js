import React from "react";
import { ReactComponent as Logo } from "./icons/baseline-translate-24px.svg";

function Header() {
  return (
    <div className="header">
      <Logo />
      <div>Sy'k Fiar translator</div>
    </div>
  );
}

export default Header;
