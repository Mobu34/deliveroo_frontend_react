import React from "react";

const BasketButton = ({ className, handleClick }) => {
  return (
    <button className={className} onClick={handleClick}>
      Valider mon panier
    </button>
  );
};

export default BasketButton;
