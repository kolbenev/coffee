import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetItems } from "@/shared/lib/fetchGetItem/fetchGetItems";

export const getProducts = createAsyncThunk("PRODUCTS/GET", () =>
  fetchGetItems("catalog/")
);

const productsSlice = createSlice({
  name: "PRODUCTS",
  initialState: [],
  extraReducers: (build) => {
    build.addCase(getProducts.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default productsSlice.reducer;
