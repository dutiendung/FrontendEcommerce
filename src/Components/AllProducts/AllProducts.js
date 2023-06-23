import { useEffect, useState } from "react";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTREVIEW,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";
import CardProduct from "../CardProduct/CardProduct";

function AllProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productReview, setProductReview] = useState([]);

  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => {
      return setCategories(item.data);
    });
  }, []);
  useEffect(() => {
    GET_ALL_PRODUCTS("products").then((item) => {
      return setProducts(item.data);
    });
  }, []);
  useEffect(() => {
    GET_ALL_PRODUCTREVIEW("ProductReviews").then((item) => {
      return setProductReview(item.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3">
              <CardProduct
                product={product}
                categories={categories}
                productReview={productReview}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
