import React from "react";
import EditBasket from "./EditBasket";

const SubBasket = ({ index, item, total, setTotal, basket, setBasket }) => {
  return (
    <div>
      <span>
        <EditBasket
          icon="minus"
          index={index}
          item={item}
          total={total}
          setTotal={setTotal}
          basket={basket}
          setBasket={setBasket}
        />{" "}
        {item.quantity}{" "}
        <EditBasket
          icon="plus"
          index={index}
          item={item}
          total={total}
          setTotal={setTotal}
          basket={basket}
          setBasket={setBasket}
        />
      </span>
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  );
};

export default SubBasket;
