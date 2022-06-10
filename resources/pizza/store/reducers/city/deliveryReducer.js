import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  city: null,
  type: window.localStorage.getItem("deliveryType") || 0,
};

export const fetchSetCity = createAsyncThunk("delivery/fetchSetCity", async (id) => {
  const response = await axios.get(`/ajax/cities/${id}`);

  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
});

export const citySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSetCity.fulfilled, (state, action) => {
      state.city = action.payload;
    });
  },
});

export const { setCity, setType } = citySlice.actions;

export default citySlice.reducer;
