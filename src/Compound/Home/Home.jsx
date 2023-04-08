import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Tshirt from "../Header/T-shirt/Tshirt";

const Home = () => {
  const products = useLoaderData();
  //console.log(products);
  const [cart, setCart] = useState([]);

  const handlerBuyButton = (id) => {
    setCart(id);
    console.log(id);
  };

  return (
    <div>
      <h2 className="text">Products: {products.length}</h2>
      <div className="container">
        <div className="grid">
          {products.map((pd) => (
            <Tshirt
              key={pd._id}
              product={pd}
              handlerBuyButton={handlerBuyButton}
            ></Tshirt>
          ))}
        </div>
        <div className="cart">
          <h3>cart summary: {cart}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
