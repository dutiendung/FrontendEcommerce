import { createSlice } from "@reduxjs/toolkit";
export const wishlist = createSlice({
  name: "wishList",
  initialState: JSON.parse(localStorage.getItem("wishLists")),
  reducers: {
    addWishList: (state, action) => {
      state.push(action.payload);
    },
    removeItemWishList: (state, action) => {
      return state.filter((products) => products.id !== action.payload);
    },
  },
});

const { reducer, actions } = wishlist;
export const { addWishList, removeItemWishList } = actions;
export default reducer;
