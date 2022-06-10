import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/city/cityReducer";

const reducer = {
  city: cityReducer,
};

const store = configureStore({
  reducer,
});

export default store;
