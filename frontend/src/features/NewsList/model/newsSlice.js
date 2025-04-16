import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchGetItems } from "../../../shared/lib/fetchGetItem/fetchGetItems";

export const getNews = createAsyncThunk("NEWS/GET", () =>
  fetchGetItems("news/")
);

const newsSlice = createSlice({
  name: "NEWS",
  initialState: [],
  extraReducers: (build) => {
    build.addCase(getNews.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default newsSlice.reducer;
