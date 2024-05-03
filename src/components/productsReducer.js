// productsReducer.js

import { FETCH_PRODUCTS, UPDATE_QUANTITY } from "./productsActions";

const initialState = {
  products: [], // Initialize products as an empty array
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case UPDATE_QUANTITY:
      const updatedProducts = state.products.map((product, index) => {
        if (index === action.payload.index) {
          return { ...product, quantity: parseInt(action.payload.quantity) };
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};

export default productsReducer;
