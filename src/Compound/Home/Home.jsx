import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import Tshirt from "../Header/T-shirt/Tshirt";
import Cart from "./Cart/Cart";

const Home = () => {
  const products = useLoaderData();
  //console.log(products);
  const [cart, setCart] = useState([]);

  const handlerBuyButton = (Tshirt) => {
    const exist = cart.find((t) => t._id === Tshirt._id);
    if (exist) {
      return;
    } else {
      const newProduct = [...cart, Tshirt];
      setCart(newProduct);
    }

    //console.log(Tshirt);
  };

  const removeButton = (id) => {
    const remaining = cart.filter((pd) => pd._id !== id);
    setCart(remaining);
    //console.log(id);
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
          <Cart cart={cart} removeButton={removeButton}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
