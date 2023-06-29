import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "~/Pages/Cart/cartSlice";
import { addWishList } from "~/Pages/WishList/wishlistSlice";
import { toast } from "react-toastify";

function CardProduct({ product, categories, productReview }) {
  //product phai map truoc khi truyen qua day
  const dispath = useDispatch();
  function handleAddToCart(product) {
    console.log(1);
    const action = addToCart(product);
    dispath(action);
  }
  function handleAddToWishList(product) {
    const action = addWishList(product);
    dispath(action);
  }

  const wishLists = useSelector((state) => state.wishLists);
  localStorage.setItem("wishLists", JSON.stringify(wishLists));
  const notifyAddToCart = () =>
    toast.success("Đã thêm vào giỏ hàng ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyAddToWishList = () =>
    toast.success("Đã thêm vào danh sách yêu thích ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div key={product.id} className="product">
      <Link to={`/products/${product.id}`} reloadDocument>
        <div className="product-img">
          <img
            alt={product.tile}
            src={require(`../../assets/images/products/${product.photo}`)}
          />
          <div className="product-label">
            <span className="sale">Discount {product.discount} %</span>
            <span className="new">NEW</span>
            {/* {new Date(product.createdAt).toDateString() ==
                                        new Date().toDateString() && (
                                        
            )} */}
          </div>
        </div>
      </Link>
      <div className="product-body">
        <p className="product-category">
          {categories.map((cate) =>
            product.catId === cate.id ? cate.title : ""
          )}
        </p>
        <h3 className="product-name">{product.title}</h3>
        <h4 className="product-price">
          {/* test */}
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </h4>
        <div className="product-rating">
          {productReview.map((productRev) => {
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
              </div>
            ) : (
              ""
            );
          })}
        </div>
        <div className="product-btns">
          <Button
            id={product.id}
            className="add-to-wishlist"
            onClick={() => {
              notifyAddToCart();
              return handleAddToCart(product);
            }}
            bsPrefix="q"
          >
            <i
              id={product.id}
              className="fa fa-shopping-cart"
              aria-hidden="true"
            ></i>
            <span className="tooltipp">Add to cart</span>
          </Button>
          <Button
            id={product.id}
            className="add-to-wishlist"
            onClick={() => {
              notifyAddToWishList();
              return handleAddToWishList(product);
            }}
            bsPrefix="q"
          >
            <i id={product.id} className="fa fa-heart-o"></i>
            <span className="tooltipp">Add to wishlist</span>
          </Button>
          <button className="add-to-compare">
            <i className="fa fa-exchange"></i>
            <span className="tooltipp">Add to compare</span>
          </button>

          <Button id={product.id} className="quick-view" bsPrefix="q">
            <i id={product.id} className="fa fa-eye"></i>
            <span className="tooltipp">Quick view</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
