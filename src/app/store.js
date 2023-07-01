import cartReducer from "~/Pages/Cart/cartSlice";
import wishListReducer from "~/Pages/WishList/wishlistSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    wishLists: wishListReducer,
    carts: cartReducer,
  },
});
