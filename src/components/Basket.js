import React from "react";
import BasketButton from "./BasketButton";
import SubBasket from "./SubBasket";

const Basket = ({ total, setTotal, basket, setBasket }) => {
  const handleClick = () => {
    if (total > 0) {
      console.log("GO");
    }
  };
  const deliveryCharge = 2.5;
  return (
    <div className="basket">
      {total === 0 ? (
        <>
          <BasketButton className="empty-basket" />
          <div className="empty">Votre panier est vide </div>
        </>
      ) : (
        <>
          <BasketButton className="filled-basket" handleClick={handleClick} />
          <div>
            <div className="sub-basket-container">
              {basket.map((item, index) => {
                return (
                  <SubBasket
                    key={index}
                    index={index}
                    item={item}
                    total={total}
                    setTotal={setTotal}
                    basket={basket}
                    setBasket={setBasket}
                  />
                );
              })}
            </div>
            <div className="sub-total">
              <span>Sous-total</span>
              <span>{total} €</span>
            </div>
            <div className="delivery-charge">
              <span>Frais de livraison</span>
              <span>{deliveryCharge} €</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>{total + deliveryCharge} €</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
