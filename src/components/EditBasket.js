import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditBasket = ({
  icon,
  index,
  item,
  total,
  setTotal,
  basket,
  setBasket,
}) => {
  const handleClick = () => {
    if (icon === "plus") {
      const newBasket = [...basket];
      newBasket[index].quantity++;
      setBasket(newBasket);

      const price = +item.price;
      setTotal(total + price);
    } else {
      if (item.quantity === 1) {
        const newBasket = [...basket];
        newBasket.splice(index, 1);
        setBasket(newBasket);

        if (newBasket.length === 0) {
          setTotal(0);
        } else {
          const price = +item.price;
          setTotal(total - price);
        }
      } else {
        const newBasket = [...basket];
        newBasket[index].quantity--;
        const price = +item.price;
        setTotal(total - price);
      }
    }
  };

  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={handleClick}
      className="edit-basket"
    />
  );
};

export default EditBasket;
