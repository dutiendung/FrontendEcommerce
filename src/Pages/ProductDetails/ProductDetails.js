import { useEffect, useState } from "react";
import {
  GET_ALL_PRODUCTREVIEW,
  GET_PRODUCT_ID,
} from "~/Services/Api/apiServices";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../Cart/cartSlice";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [productReview, setProductReview] = useState([]);
  const dispath = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    GET_PRODUCT_ID("products", id).then((item) => {
      return setProduct(item.data);
    });
    GET_ALL_PRODUCTREVIEW("ProductReviews").then((item) => {
      return setProductReview(item.data);
    });
  }, []);
  function calcSalePrice(price, discount) {
    return price - (price / 100) * discount;
  }
  function handleAddToCart(product) {
    const action = addToCart(product);
    dispath(action);
  }
  function notofiAddToCart() {
    toast("Đã thêm vào giỏ hàng ", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="container detail">
      <div className="row p-5">
        <div className="col-md-4 p-10">
          <div className="p-10">
            <img
              className="img-fluid w-70"
              alt={product.tile}
              src={
                product.photo &&
                require(`../../assets/images/products/${product.photo}`)
              }
            />
          </div>
        </div>
        <div className="col-md-7">
          <h1>{product.title}</h1>
          <div className="product-rating">
            {productReview.map((productRev, index) => {
              return productRev.productId === product.id ? (
                <div key={productRev.id}>
                  <i
                    className={
                      productRev.rate >= 1
                        ? "fa fa-star"
                        : productRev.rate > 0 && productRev.rate < 1
                        ? "fa fa-star-half-o"
                        : "fa fa-star-o"
                    }
                  ></i>
                  <i
                    className={
                      productRev.rate >= 2
                        ? "fa fa-star"
                        : productRev.rate > 0 && productRev.rate < 2
                        ? "fa fa-star-half-o"
                        : "fa fa-star-o"
                    }
                  ></i>
                  <i
                    className={
                      productRev.rate >= 3
                        ? "fa fa-star"
                        : productRev.rate > 0 && productRev.rate < 3
                        ? "fa fa-star-half-o"
                        : "fa fa-star-o"
                    }
                  ></i>
                  <i
                    className={
                      productRev.rate >= 4
                        ? "fa fa-star"
                        : productRev.rate > 0 && productRev.rate < 4
                        ? "fa fa-star-half-o"
                        : "fa fa-star-o"
                    }
                  ></i>
                  <i
                    className={
                      productRev.rate >= 5
                        ? "fa fa-star"
                        : productRev.rate > 0 && productRev.rate < 5
                        ? "fa fa-star-half-o"
                        : "fa fa-star-o"
                    }
                  ></i>
                  <span className="m-2">{index} đánh giá</span>
                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className="product-price">
            <h4>Mua ngay</h4>
            <h2>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(calcSalePrice(product.price, product.discount))}
            </h2>
            <span className="text-decoration-line-through m-3">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)}
            </span>
          </div>

          <div className="product-desc">
            <h5 className="summary"> {product.summary}</h5>
            <h3>
              <i className="fa fa-cog" aria-hidden="true"></i>
              {"  "}
              Thông số kỹ thuật
            </h3>
            <div>{product.description}</div>
            <div className="product-action">
              <span className="buy-now">Mua ngay</span>
              <span
                className="add-to-cart"
                onClick={() => {
                  notofiAddToCart();
                  return handleAddToCart(product);
                }}
              >
                Thêm vào giỏ hàng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
