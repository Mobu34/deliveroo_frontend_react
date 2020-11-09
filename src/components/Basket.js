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
          <div>Votre panier est vide </div>
        </>
      ) : (
        <>
          <BasketButton className="filled-basket" handleClick={handleClick} />
          <div>
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
            <div>
              <span>Sous-total</span>
              <span>{total} €</span>
            </div>
            <div>
              <span>Frais de livraison</span>
              <span>{deliveryCharge} €</span>
            </div>
            <div>
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
