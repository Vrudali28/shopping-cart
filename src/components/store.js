// store.js

import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { thunk, withExtraArgument } from 'redux-thunk';
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
