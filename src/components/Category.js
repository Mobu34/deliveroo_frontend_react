import React from "react";
import CategoryTitle from "./CategoryTitle";
import Meal from "./Meal";

const Category = ({ index, category, total, setTotal, basket, setBasket }) => {
  return (
    <div className="category">
      <CategoryTitle title={category.name} />
      <div className="container-meal">
        {category.meals.map((meal, index) => {
          return (
            <Meal
              key={index}
              index={index}
              meal={meal}
              total={total}
              setTotal={setTotal}
              basket={basket}
              setBasket={setBasket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
