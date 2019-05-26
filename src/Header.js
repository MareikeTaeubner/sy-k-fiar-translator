import React from "react";
import { ReactComponent as Logo } from "./icons/baseline-translate-24px.svg";

function Header() {
  return (
    <header>
      <Logo className="logo" />
      <div>Sy'k Fiar translator</div>
    </header>
  );
}

export default Header;
