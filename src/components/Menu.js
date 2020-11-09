import React from "react";
import Category from "./Category";

const Menu = ({ data, total, setTotal, basket, setBasket }) => {
  return (
    <div className="menu">
      {data.categories.map((category, index) => {
        if (category.meals.length > 0) {
          return (
            <Category
              key={index}
              index={index}
              category={category}
              total={total}
              setTotal={setTotal}
              basket={basket}
              setBasket={setBasket}
            />
          );
        }
      })}
    </div>
  );
};

export default Menu;
