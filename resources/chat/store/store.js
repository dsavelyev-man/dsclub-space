import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user/userReducer";
import chatsReducer from "./reducers/chats/chatsReducer";

const reducer = {
  user: userReducer,
  chats: chatsReducer
};

const store = configureStore({
  reducer,
});

export default store;
