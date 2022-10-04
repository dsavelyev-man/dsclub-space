import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: {}
};

export const dragSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat(state, action) {

      state.chats[action.payload.id] = {
        ...action.payload
      }
    },
    addMessages(state, action) {
      const id = action.payload.chat;
      const chat = state.chats[id]

      if(chat) {
        chat.messages.unshift(...action.payload.messages)
        chat.nextPage = chat.nextPage + 1;
      }
    }
  },
});

export const { addChat, addMessages } = dragSlice.actions;

export default dragSlice.reducer;
