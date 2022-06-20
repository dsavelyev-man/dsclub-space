import { configureStore } from "@reduxjs/toolkit";
import deliveryReducer from "./reducers/delivery/deliveryReducer";
import basketReducer from "./reducers/basket/basketReducer";

const reducer = {
  delivery: deliveryReducer,
  basket: basketReducer,
};

const store = configureStore({
  reducer,
});

export default store;
