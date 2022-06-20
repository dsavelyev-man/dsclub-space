import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

let initialState = {
  products: [],
  lastUpdate: null,
};

const date = dayjs();

const currentDate = "" + date.day() + date.year();

const localStorageBasket = window.localStorage.getItem("basket");

if (localStorageBasket) {
  const basket = JSON.parse(localStorageBasket);

  if (currentDate !== basket.lastUpdate) {
    window.localStorage.removeItem("basket");
  } else {
    initialState = basket;
  }
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.products.push(action.payload);

      state.lastUpdate = "" + currentDate;

      window.localStorage.setItem("basket", JSON.stringify(state));
    },
  },
});

export const { addBasket } = basketSlice.actions;

export default basketSlice.reducer;
