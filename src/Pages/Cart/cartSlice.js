import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "carts",
  initialState: JSON.parse(localStorage.getItem("carts")),
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});
const { reducer, actions } = cart;
export const { addToCart, removeToCart } = actions;
export default reducer;
