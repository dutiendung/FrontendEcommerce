function Collections() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src={require("~/assets/images/shop01.png")}></img>
              </div>
              <div></div>
              <div className="shop-body">
                <h3>
                  Laptop <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn  text-decoration-none">
                  Mua ngay <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/*yy  */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img src={require("~/assets/images/shop03.png")}></img>
              </div>
              <div className="shop-body">
                <h3>
                  Phụ kiện <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn  text-decoration-none">
                  Mua ngay <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/*yy  */}
          <div className="col-md-4 col-xs-6">
            <div className="shop">
              <div className="shop-img">
                <img
                  src={require("~/assets/images//products/collectionPhone.jpg")}
                ></img>
              </div>
              <div className="shop-body">
                <h3>
                  Điện thoại <br />
                  Collection
                </h3>
                <a href="#" className="cta-btn  text-decoration-none">
                  Mua ngay <i className="fa fa-arrow-circle-right"></i>
                </a>
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
