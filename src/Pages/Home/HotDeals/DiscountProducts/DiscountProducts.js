import { useEffect, useState } from "react";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTREVIEW,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";
import CardProduct from "~/Components/CardProduct";
import HotDeals from "../HotDeals";

function DiscountProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productReview, setProductReview] = useState([]);

  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => {
      return setCategories(item.data);
    });
    GET_ALL_PRODUCTS("products").then((item) => {
      return setProducts(item.data);
    });
    GET_ALL_PRODUCTREVIEW("ProductReviews").then((item) => {
      return setProductReview(item.data);
    });
  }, []);
  return (
    <>
      <HotDeals displayBtn={"d-none"} />
      <div className="container">
        <div className="row">
          {products.map((product) => {
            if (product.discount >= 10) {
              return (
                <div key={product.id} className="col-md-3">
                  <CardProduct
                    product={product}
                    categories={categories}
                    productReview={productReview}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default DiscountProducts;
