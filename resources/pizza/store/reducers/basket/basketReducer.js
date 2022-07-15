import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

let initialState = {
  products: [],
  lastUpdate: null,
  isOpen: false,
};

const date = dayjs();

const currentDate = "" + date.day() + date.year();

const localStorageBasket = window.localStorage.getItem("basket");

if (localStorageBasket) {
  const basket = JSON.parse(localStorageBasket);

  if (currentDate !== basket.lastUpdate) {
    window.localStorage.removeItem("basket");
  } else {
    initialState = {
      ...basket,
      isOpen: false,
    };
  }
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const duplicateIndexes = [];
      // state.products.findIndex(
      //   (product) => product.id === action.payload.id
      // );

      state.products.forEach((product, index) => {
        if (product.id === action.payload.id) duplicateIndexes.push(index);
      });

      if (duplicateIndexes.length === 0) {
        const data = {
          ...action.payload,
          count: 1,
          searchId: state.products.length,
        };

        state.products.push(data);

        state.lastUpdate = "" + currentDate;

        window.localStorage.setItem("basket", JSON.stringify(state));
      } else {
        let finded;

        for (const duplicateIndex of duplicateIndexes) {
          const duplicate = state.products[duplicateIndex];

          const isDuplicate =
            JSON.stringify(duplicate.data) === JSON.stringify(action.payload.data);

          console.log(
            duplicateIndex,
            isDuplicate,
            JSON.stringify(duplicate.data),
            action.payload.data
          );

          if (isDuplicate && duplicate.count < 100) {
            duplicate.count = duplicate.count + 1;
            finded = true;
            break;
          }
        }

        if (!finded) {
          const data = {
            ...action.payload,
            count: 1,
            searchId: state.products.length,
          };

          console.log(data, "aaaa");

          state.products.push(data);
        }

        window.localStorage.setItem("basket", JSON.stringify(state));
      }
    },
    addDuplicate: (state, action) => {
      const index = state.products.findIndex((product) => action.payload === product.searchId);

      const product = state.products[index];

      if (product.count < 100) {
        product.count = product.count + 1;

        window.localStorage.setItem("basket", JSON.stringify(state));
      }
    },
    removeBasket: (state, action) => {
      const index = state.products.findIndex((product) => action.payload === product.searchId);

      const product = state.products[index];

      if (product.count > 1) {
        product.count = product.count - 1;
      } else {
        state.products.splice(index, 1);

        if (state.products.length === 0) state.isOpen = false;
      }

      window.localStorage.setItem("basket", JSON.stringify(state));
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { addBasket, addDuplicate, removeBasket, setOpen } = basketSlice.actions;

export default basketSlice.reducer;
