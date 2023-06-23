import { Route, Routes } from "react-router-dom";
import AllProducts from "~/Components/AllProducts";
import Search from "~/Pages/Search";
import Home from "~/layouts/Home";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/AllProducts" element={<AllProducts />} />
      </Routes>
    </main>
  );
}

export default Main;
