import React from "react";
import logoDeliveroo from "../assets/img/logo-deliveroo.svg";

const Header = () => {
  return (
    <header>
      <img
        src={logoDeliveroo}
        alt="logo-deliveroo"
        className="logo-deliveroo"
      />
    </header>
  );
};

export default Header;
