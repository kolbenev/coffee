import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "@/entities/storeProducts";
import { newsSlice } from "@/features/NewsList";
import { pricesSlice } from "@/features/PricesTable";
import { marqueeSlice } from "@/features/Marquee";

export default configureStore({
  reducer: {
    products: productsSlice,
    news:newsSlice,
    prices:pricesSlice,
    marquee:marqueeSlice
  },
});
