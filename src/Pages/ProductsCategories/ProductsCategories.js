import { useEffect, useState } from "react";
import CardProduct from "~/Components/CardProduct";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTREVIEW,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";

function ProductsCategories({ catId }) {
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
      <div className="container">
        <div className="row">
          {products.map((product) =>
            product.catId === catId ? (
              <div key={product.id} className="col-md-3">
                <CardProduct
                  product={product}
                  categories={categories}
                  productReview={productReview}
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsCategories;
