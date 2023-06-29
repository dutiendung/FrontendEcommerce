import wishListReducer from "~/Pages/WishList/wishlistSlice";
import cartReducer from "~/Pages/Cart/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    wishLists: wishListReducer,
    carts: cartReducer,
  },
});
