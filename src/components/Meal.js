import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ index, meal, total, setTotal, basket, setBasket }) => {
  const handleClick = () => {
    const price = +meal.price;
    setTotal(total + price);

    const newBasket = [...basket];
    newBasket.push({ name: meal.title, price: meal.price, quantity: 1 });
    setBasket(newBasket);
  };

  return (
    <div className="meal" onClick={handleClick}>
      <div className="meal-details">
        <h4>{meal.title}</h4>
        <p>{meal.description}</p>
        <span>
          {meal.price} €{" "}
          <strong>
            {meal.popular && (
              <span>
                <FontAwesomeIcon icon="star" /> Populaire
              </span>
            )}
          </strong>
        </span>
      </div>
      <img src={meal.picture} className={meal.picture ? "picture" : null} />
    </div>
  );
};

export default Meal;
