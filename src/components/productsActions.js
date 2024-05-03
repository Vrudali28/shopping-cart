// productsActions.js

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// productsActions.js

// productsActions.js

export const fetchProducts = () => async (dispatch) => {
    try {
      const response = await fetch("https://vrudali28.github.io/ProductsFolder/products.json");
      const productsData = await response.json();
      const productsArray = Array.isArray(productsData.products) ? productsData.products.map(product => ({ ...product, quantity: 0 })) : [];
      dispatch({ type: FETCH_PRODUCTS, payload: productsArray });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  
  


export const updateQuantity = (index, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { index, quantity },
});
