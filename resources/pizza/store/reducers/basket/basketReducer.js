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
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (duplicateIndex === -1) {
        const data = {
          ...action.payload,
          count: 1,
        };

        state.products.push(data);

        state.lastUpdate = "" + currentDate;

        window.localStorage.setItem("basket", JSON.stringify(state));
      } else {
        const duplicate = state.products[duplicateIndex];

        const isDuplicate = JSON.stringify(duplicate.data) === JSON.stringify(action.payload.data);

        if (isDuplicate) {
          duplicate.count = duplicate.count + 1;
        }

        window.localStorage.setItem("basket", JSON.stringify(state));
      }
    },
  },
});

export const { addBasket } = basketSlice.actions;

export default basketSlice.reducer;
