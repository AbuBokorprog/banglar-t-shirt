import React from "react";
import "./T-shirt.css";

const Tshirt = ({ product, handlerBuyButton }) => {
  const { _id, index, price, picture, name } = product;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
      <button onClick={() => handlerBuyButton(product)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
