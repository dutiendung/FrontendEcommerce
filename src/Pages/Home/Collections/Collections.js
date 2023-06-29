import { Link } from "react-router-dom";

function Collections() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src={require("~/assets/images/shop01.png")} alt="" />
              </div>
              <div></div>
              <div className="shop-body">
                <h3>
                  Laptop <br />
                  Collection
                </h3>
                <Link to="laptop">
                  <div className="cta-btn  text-decoration-none">
                    Mua ngay <i className="fa fa-arrow-circle-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/*yy  */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img
                  alt=""
                  src={require("~/assets/images/collectionwatch.png")}
                ></img>
              </div>
              <div className="shop-body">
                <h3>
                  Đồng hồ <br />
                  Collection
                </h3>
                <Link to="dong-ho">
                  <div href="/" className="cta-btn  text-decoration-none">
                    Mua ngay <i className="fa fa-arrow-circle-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/*yy  */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img
                  alt=""
                  src={require("~/assets/images//products/collectionPhone.jpg")}
                />
              </div>
              <div className="shop-body">
                <h3>
                  Điện thoại <br />
                  Collection
                </h3>
                <Link to="dien-thoai">
                  <div href="/" className="cta-btn  text-decoration-none">
                    Mua ngay <i className="fa fa-arrow-circle-right"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/*yy  */}
        </div>
      </div>
    </div>
  );
}

export default Collections;
