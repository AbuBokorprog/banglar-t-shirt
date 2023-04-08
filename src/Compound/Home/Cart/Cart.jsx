import React from "react";

const Cart = (props) => {
  //console.log(props.cart);
  const Cart = props.cart;
  const removeButton = props.removeButton;
  let message;
  if (Cart.length === 0) {
    message = <p>please add some products</p>;
  } else {
    message = (
      <div>
        <p>thanks borolox</p>
      </div>
    );
  }
  return (
    <div>
      <h3 className={`center bold ${Cart.length === 2 ? "red" : "yellow"}`}>
        Products: {props.cart.length}
      </h3>
      {Cart.length === 3 || <h3>tinta to holo na!</h3>}
      {/* {Cart.length === 2 && <span>Double bonanzaa!!!</span>} */}
      {/* {Cart.length > 2 ? <span>aroo kino</span> : <span>fokira</span>} */}
      {/* {message} */}
      {Cart.map((c) => (
        <p key={c._id}>
          {c.name} <button onClick={() => removeButton(c._id)}>remove</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
