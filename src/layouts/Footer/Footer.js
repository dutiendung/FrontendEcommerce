function Footer() {
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <div className="footer-title">Giới thiệu</div>
                <p>Du Tien Dung</p>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="text-decoration-none">
                      <i className="fa fa-map-marker"></i>
                      20 Tang Nhon Phu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <i className="fa fa-phone"></i>
                      +84 333499547
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      <i className="fa fa-envelope-o"></i>
                      dung0svs@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* het */}
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <div className="footer-title">Ngành hàng</div>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="text-decoration-none">
                      Giảm giá
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Điện thoại
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Máy tính bảng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Phụ kiện
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*dd  */}
            <div className="clearfix visible-xs"></div>
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <div className="footer-title">Liên hệ</div>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="text-decoration-none">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Chính sách mua hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Mua hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Điều khoản dịch vụ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*ttttttt  */}
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <div className="footer-title">Dịch vụ</div>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="text-decoration-none">
                      Tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Giỏ hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Ưa thích
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Theo dõi đơn hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      Trợ giúp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="footer-payments">
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="fa fa-cc-visa"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="fa fa-credit-card"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="fa fa-cc-paypal"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="fa fa-cc-mastercard"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="fa fa-cc-discover"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none">
                    <i className="fa fa-cc-amex"></i>
                  </a>
                </li>
              </ul>
              <span className="coppyright">
                Coppyright &copy;
                {new Date().getFullYear()} All rights reserved | This template
                is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="#">DuTienDung</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
