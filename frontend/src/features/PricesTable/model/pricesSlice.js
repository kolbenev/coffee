import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetItems } from "@/shared/lib/fetchGetItem/fetchGetItems";
import { fetchPostDiff } from "./utils/fetchPostDiff";

export const getPrices = createAsyncThunk("PRICES/GET", () =>
  fetchGetItems("prices")
);
export const postDiff = createAsyncThunk("PRICES/POST", fetchPostDiff);

const pricesSlice = createSlice({
  name: "PRICES",
  initialState: [],
  extraReducers: (build) => {
    build.addCase(getPrices.fulfilled, (_, action) => {
      return action.payload;
    });

    build.addCase(postDiff.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default pricesSlice.reducer;
