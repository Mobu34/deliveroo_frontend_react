import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Main from "./components/Main";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlus, faMinus);

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [basket, setBasket] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <span>En cours de chargement...</span>
      ) : (
        <Main
          data={data}
          total={total}
          setTotal={setTotal}
          basket={basket}
          setBasket={setBasket}
        />
      )}
    </div>
  );
};

export default App;
