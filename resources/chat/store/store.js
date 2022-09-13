import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user/userReducer";

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
});

export default store;
