import { configureStore } from "@reduxjs/toolkit";
import deliveryReducer from "./reducers/city/deliveryReducer";

const reducer = {
  delivery: deliveryReducer,
};

const store = configureStore({
  reducer,
});

export default store;
