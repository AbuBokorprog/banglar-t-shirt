import React from "react";
import "./T-shirt.css";

const Tshirt = (props) => {
  const { _id, index, price, picture, name } = props.product;
  const handlerBuyButton = props.handlerBuyButton;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
      <button onClick={() => handlerBuyButton(_id)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
