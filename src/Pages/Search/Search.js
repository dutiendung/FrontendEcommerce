import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardProduct from "~/Components/CardProduct/CardProduct";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTREVIEW,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";
function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [productReview, setProductReview] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const value = searchParams.get("value");
  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => {
      return setCategories(item.data);
    });
  }, []);
  useEffect(() => {
    GET_ALL_PRODUCTS(`products?search=${value}`).then((item) => {
      setSearchResult(item.data);
    });
  }, [value]);
  useEffect(() => {
    GET_ALL_PRODUCTREVIEW("ProductReviews").then((item) => {
      return setProductReview(item.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {console.log(searchResult)}
          {searchResult.length !== 0 && value !== "" ? (
            searchResult.map((product) => (
              <div className="col-md-3">
                <CardProduct
                  product={product}
                  categories={categories}
                  productReview={productReview}
                />
              </div>
            ))
          ) : (
            <h4 class="text-center mt-20">
              Không có kết quả nào phù hợp vui lòng nhập từ khóa khác
            </h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
