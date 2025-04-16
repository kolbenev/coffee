import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetItems } from "@/shared/lib/fetchGetItem/fetchGetItems";

export const getMarqueeData = createAsyncThunk("MARQUEE/GET", () =>
  fetchGetItems("futures/")
);

const marqueeSlice = createSlice({
  name: "MARQUEE",
  initialState: [],
  extraReducers: (build) => {
    build.addCase(getMarqueeData.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default marqueeSlice.reducer;
