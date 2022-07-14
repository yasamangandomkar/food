import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from "./FoodsSlice";

export const store = configureStore({
  reducer: {
    FoodSlice: FoodReducer,
  },
});
