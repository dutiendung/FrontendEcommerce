import { useDispatch, useSelector } from "react-redux";
import EmptyProduct from "~/Components/EmptyProduct/EmptyProduct";
import { addToCart, decrementAnItem, removeToCart } from "./cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const carts = useSelector((state) => state.carts);
  localStorage.setItem("carts", JSON.stringify(carts));
  const dispath = useDispatch();

  function calcSalePrice(price, discount) {
    return price - (price / 100) * discount;
  }
  function handleIncrementItem(product) {
    const action = addToCart(product);
    dispath(action);
  }
  function handleDecrementItem(product) {
    const action = decrementAnItem(product);
    dispath(action);
  }
  function handleRemoveCart(product) {
    const action = removeToCart(product);
    dispath(action);
  }
  const totalItem = carts.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  const totalPrice = carts.reduce((total, product) => {
    return total + calcSalePrice(product.price, product.discount) * totalItem;
  }, 0);

  return (
    <>
      {carts.length != 0 ? (
        <div className="cart-container">
          <div className="cart text-center d-flex justify-content-center my-5">
            <table className="table table-bordered w-75">
              <thead>
                <tr className="table-active">
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Sảm phẩm</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <button>
                          <i
                            onClick={() => handleRemoveCart(cart)}
                            className="fa fa-times"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </td>
                      <td className="cart-img">
                        <img
                          className="w-50"
                          alt=""
                          src={require(`../../assets/images/products/${cart.photo}`)}
                        />
                      </td>
                      <td>
                        <Link
                          className="text-muted"
                          to={`/products/${cart.id}`}
                        >
                          {cart.title}
                        </Link>
                      </td>
                      <td>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(calcSalePrice(cart.price, cart.discount))}
                      </td>
                      <td>
                        <div className="border w-50 d-flex justify-content-around mx-auto">
                          <span className="decrease">
                            <i
                              onClick={() => handleDecrementItem(cart)}
                              className="decrease-icon fa fa-minus"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="quantity"> {cart.quantity}</span>
                          <span className="increase">
                            <i
                              onClick={() => handleIncrementItem(cart)}
                              className="increase-icon fa fa-plus"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
                      </td>
                      <td>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(
                          calcSalePrice(cart.price, cart.discount) *
                            cart.quantity
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="total">
            <h3 className="title">Tổng giỏ hàng</h3>
            <div className="total-items">
              Tổng sảm phẩm: {totalItem} sảm phẩm
            </div>
            <div className="total-price">
              Thành tiền:{" "}
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalPrice)}
            </div>
            <div className="payment">
              <button>Tiến hành thanh toán</button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyProduct
          title="Giỏ hàng của bạn đang trống"
          subTitle="Hãy thêm các sản phẩm yêu thích vào giỏ hàng"
        />
      )}
    </>
  );
}

export default Cart;
