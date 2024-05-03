// App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./components/store";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
