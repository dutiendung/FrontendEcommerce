import { Route, Routes } from "react-router-dom";
import AllProducts from "~/Pages/AllProducts";
import Cart from "~/Pages/Cart/Cart";
import DiscountProducts from "~/Pages/Home/HotDeals/DiscountProducts";
import ProductDetails from "~/Pages/ProductDetails";
import ProductsCategories from "~/Pages/ProductsCategories";
import Search from "~/Pages/Search";
import WishList from "~/Pages/WishList/WishList";
import Home from "~/layouts/Home";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="discount-products" element={<DiscountProducts />} />
        <Route path="laptop" element={<ProductsCategories catId={2} />} />
        <Route path="dien-thoai" element={<ProductsCategories catId={1} />} />
        <Route path="dong-ho" element={<ProductsCategories catId={4} />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="shopping-cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default Main;
