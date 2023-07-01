import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmptyProduct from "~/Components/EmptyProduct";
import { addToCart } from "../Cart/cartSlice";
import { removeItemWishList } from "./wishlistSlice";
function WishList() {
  const wishLists = useSelector((state) => state.wishLists);
  localStorage.setItem("wishLists", JSON.stringify(wishLists));
  const dispath = useDispatch();
  function handleRemoveWishList(id) {
    const action = removeItemWishList(id);
    dispath(action);
  }
  function calcSalePrice(price, discount) {
    return price - (price / 100) * discount;
  }
  function handleAddToCart(wishList) {
    handleRemoveWishList(wishList.id);
    const action = addToCart(wishList);
    dispath(action);
  }
  const notify = () => toast("Đã thêm vào giỏ hàng!");

  return (
    <>
      {wishLists.length !== 0 ? (
        <div className="wishlist">
          <div className="text-center title my-5">
            <h1 className="text-center "> My wishlist</h1>
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <div className="content container">
            <div className="row text-center">
              <div className="col-md-4">
                <h4>Tên sảm phẩm</h4>
              </div>
              <div className="col-md-4">
                <h4>Giá bán</h4>
              </div>
              <div className="col-md-4">
                <h4>Số lượng còn lại trong kho</h4>
              </div>
            </div>
            <div className="wishlist-product">
              {wishLists.map((wishList, index) => (
                <div key={index} className="row items">
                  <div className="col-md-4 wishlist-name">
                    <i
                      className="fa fa-trash wishlist-remove "
                      onClick={() => handleRemoveWishList(wishList.id)}
                      aria-hidden="true"
                    ></i>
                    <Link to={`/products/${wishList.id}`}>
                      {wishList.title}
                    </Link>
                  </div>
                  <div className="col-md-4 text-center wishlist-price">
                    <span>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(
                        calcSalePrice(wishList.price, wishList.discount)
                      )}
                    </span>
                    <span className="original-price">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(wishList.price)}
                    </span>
                  </div>
                  <div className="col-md-4 text-center wishlist-stock">
                    {wishList.stock}
                    <i
                      onClick={() => {
                        notify();
                        let obj = {
                          //fix Object is not extensible
                          ...wishList,
                        };
                        handleAddToCart(obj);
                      }}
                      className="fa fa-cart-plus wishlist-addcart"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <EmptyProduct
          title="Danh sách yêu thích của bạn đang trống"
          subTitle="Hãy chọn các sản phẩm yêu thích"
        />
      )}
    </>
  );
}

export default WishList;
