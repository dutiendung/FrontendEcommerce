import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "./cartSlice";
import EmptyProduct from "~/Components/EmptyProduct/EmptyProduct";

function Cart() {
  const carts = useSelector((state) => state.carts);
  localStorage.setItem("carts", JSON.stringify(carts));
  const dispath = useDispatch();
  const [count, setCount] = useState(1);
  function handleRemoveCart(cart) {
    const action = removeToCart(cart.id);
    dispath(action);
  }

  let i = 1;
  function calcSalePrice(price, discount) {
    return price - (price / 100) * discount;
  }

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
                  <th scope="col">Giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart, i) => {
                  {
                    console.log(cart);
                  }
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
                      <td> {cart.title}</td>
                      <td>
                        {" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(calcSalePrice(cart.price, cart.discount))}
                      </td>
                      <td>
                        <div className="border  w-50 d-flex justify-content-around mx-auto">
                          <span className="increase">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </span>
                          <span> 1</span>
                          <span className="decrease">
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </span>
                        </div>
                      </td>
                      <td>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(calcSalePrice(cart.price, cart.discount))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
