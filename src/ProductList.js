// ProductList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateQuantity } from "./components/productsActions";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleQuantityChange = (index, quantity) => {
    // Ensure quantity is parsed to an integer
    const parsedQuantity = parseInt(quantity, 10);
    dispatch(updateQuantity(index, parsedQuantity)); // Dispatch the parsed quantity
  };

  return (
    <div>
      <h3>PRODUCTS</h3>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img className="image" src={product.images[0]} alt={product.title} />
            <h4>Quantity:</h4>
            <input
              type="number"
              min="0"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
