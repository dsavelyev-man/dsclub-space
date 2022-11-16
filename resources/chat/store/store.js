import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user/userReducer";
import chatsReducer from "./reducers/chats/chatsReducer";
import filesReducer from "./reducers/files/filesReducer";

const reducer = {
  user: userReducer,
  chats: chatsReducer,
  files: filesReducer,
};

const store = configureStore({
  reducer,
});

export default store;
