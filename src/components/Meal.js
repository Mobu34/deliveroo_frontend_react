import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ index, meal, total, setTotal, basket, setBasket }) => {
  const handleClick = () => {
    const price = +meal.price;
    setTotal(total + price);

    const newBasket = [...basket];
    if (newBasket.length === 0) {
      newBasket.push({ name: meal.title, price: meal.price, quantity: 1 });
      setBasket(newBasket);
    } else {
      for (let i = 0; i < newBasket.length; i++) {
        if (newBasket[i].name === meal.title) {
          newBasket[i].quantity = newBasket[i].quantity + 1;
          setBasket(newBasket);
          break;
        } else if (i === newBasket.length - 1) {
          newBasket.push({ name: meal.title, price: meal.price, quantity: 1 });
          setBasket(newBasket);
          break;
        }
      }
    }
  };

  return (
    <div className="meal" onClick={handleClick}>
      <div className="meal-details">
        <h4>{meal.title}</h4>
        <p>{meal.description.slice(0, 100)}</p>
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
