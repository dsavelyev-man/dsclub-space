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
        ...action.payload,
        message: {
          text: "",
          extra: null
        }
      }
    },
    setMessage(state, action) {
      const chat = state.chats[action.payload.id];

      if(state.chats[action.payload.id]) {
        state.chats[action.payload.id].message = action.payload.message
      }
    },
    setChats(state, action) {
      action.chats.forEach((chat) => {

      })
    },
    addMessages(state, action) {
      const id = action.payload.chat;
      const chat = state.chats[id]

      if(chat) {
        chat.messages.unshift(...action.payload.messages)
        chat.nextPage = chat.nextPage + 1;
      }
    },
    addMessage(state, action) {
      const chat = state.chats[action.payload.chat];

      if(chat) {
        chat.messages.push(action.payload.message)
      }
    }
  },
});

export const { addChat, addMessages, addMessage, setMessage, setChats } = dragSlice.actions;

export default dragSlice.reducer;
