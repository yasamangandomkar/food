import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  cartItems: [],
  totalAmount: 0,
  cartVisible: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1;
    },
    toggle(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});
export const { addToCart, addItem, toggle } = cartSlice.actions;
export default cartSlice.reducer;
