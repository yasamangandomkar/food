import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import FoodReducer from "./FoodsSlice";

export const store = configureStore({
  reducer: {
    FoodSlice: FoodReducer,
    cart: cartReducer,
  },
});
