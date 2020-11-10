import React from "react";
import logoDeliveroo from "../assets/img/logo-deliveroo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img
          src={logoDeliveroo}
          alt="logo-deliveroo"
          className="logo-deliveroo"
        />
      </div>
    </header>
  );
};

export default Header;
