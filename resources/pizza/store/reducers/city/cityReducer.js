import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  current: null,
};

export const fetchSetCity = createAsyncThunk("city/fetchSetCity", async (id) => {
  const response = await axios.get(`ajax/cities/${id}`);

  if (response.status === 200) {
    return response.data;
  } else {
    return null;
  }
});

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSetCity.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
