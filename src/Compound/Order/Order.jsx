import React from "react";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const order = useLoaderData();
  console.log(order);
  return (
    <div>
      <h2>This is order page</h2>
    </div>
  );
};

export default Order;
