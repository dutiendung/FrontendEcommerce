import { Link } from "react-router-dom";
import Slider from "react-slick";
function WidgetColumn({ title, products, catId }) {
  let setting = {
    infinity: true,
    autoplay: true,
    speed: 300,
    dots: true,
    arrows: false,
  };

  return (
    <div>
      <div className="section-title">
        <h4 className="title">{title}</h4>
        <div className="section-nav">
          <div id="slick-nav-1" className="products-slick-nav"></div>
        </div>
      </div>
      <div className="products-widget-slick" data-nav="#slick-nav-1"></div>
      <Slider {...setting}>
        <div>
          {products.map((product, index) => {
            return (
              product.catId === catId && (
                <div key={product.id}>
                  <div className="product-widget">
                    <div className="product-img">
                      <img
                        alt={product.title}
                        src={require(`../../../../assets/images/products/${product.photo}`)}
                      />
                    </div>
                    <div className="product-body">
                      <h3 className="product-name">
                        <Link reloadDocument to={`/products/${product.id}`}>
                          <div className="text-decoration-none" href="/">
                            {product.title}
                          </div>
                        </Link>
                      </h3>
                      <h4 className="product-price">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                      </h4>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div>
          {products.map((product, index) => {
            return (
              product.catId === catId && (
                <div key={product.id}>
                  <div className="product-widget">
                    <div className="product-img">
                      <img
                        alt={product.title}
                        src={require(`../../../../assets/images/products/${product.photo}`)}
                      />
                    </div>
                    <div className="product-body">
                      <h3 className="product-name">
                        <a className="text-decoration-none" href="/">
                          {product.title}
                        </a>
                      </h3>
                      <h4 className="product-price">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                      </h4>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </Slider>
    </div>
  );
}

export default WidgetColumn;
