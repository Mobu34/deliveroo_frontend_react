import React from "react";
import Title from "./Title";
import Baseline from "./Baseline";
import Photo from "./Photo";
import Menu from "./Menu";
import Basket from "./Basket";

const Main = ({ data, total, setTotal, basket, setBasket }) => {
  return (
    <main>
      <section className="container-restaurant">
        <div className="container">
          <div className="restaurant">
            <div className="container-infos">
              <Title title={data.restaurant.name} />
              <Baseline baseline={data.restaurant.description} />
            </div>
            <Photo photo={data.restaurant.picture} />
          </div>
        </div>
      </section>
      <div className="container">
        <section className="container-menu">
          <Menu
            data={data}
            total={total}
            setTotal={setTotal}
            basket={basket}
            setBasket={setBasket}
          />
          <Basket
            total={total}
            setTotal={setTotal}
            basket={basket}
            setBasket={setBasket}
          />
        </section>
      </div>
    </main>
  );
};

export default Main;
