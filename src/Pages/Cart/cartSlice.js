import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "carts",
  initialState: JSON.parse(localStorage.getItem("carts")),
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.findIndex((x) => x.id === product.id);
      if (index >= 0) {
        state[index].quantity += 1;
      } else {
        product.quantity = 1;
        state.push(product);
      }
    },
    addToCartFromWishList: (state, action) => {
      const product = action.payload;
      const index = state.findIndex((x) => x.id === product.id);
      if (index >= 0) {
        state[index].quantity += 1;
      } else {
        const product = action.payload;
        console.log(product);
        state.push(product);
      }
    },
    decrementAnItem: (state, action) => {
      const product = action.payload;
      const index = state.findIndex((x) => x.id === product.id);
      if (state[index].quantity > 1) {
        state[index].quantity -= 1;
      }
    },
    removeToCart: (state, action) => {
      const products = action.payload;
      return state.filter((product) => product.id !== products.id);
    },
  },
});
const { reducer, actions } = cart;
export const {
  addToCart,
  decrementAnItem,
  addToCartFromWishList,
  removeToCart,
} = actions;
export default reducer;
