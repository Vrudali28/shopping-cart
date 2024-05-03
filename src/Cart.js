// Cart.js

import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const products = useSelector((state) => state.products.products);

  const totalQuantity = Array.isArray(products)
    ? products.reduce((total, product) => total + product.quantity, 0)
    : 0;

  const totalAmount = Array.isArray(products)
    ? products.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      )
    : 0;

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
}

export default Cart;
