import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CardProduct from "~/Components/CardProduct";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTREVIEW,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";
function Carousel(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productReview, setProductReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => {
      return setCategories(item.data);
    });
    GET_ALL_PRODUCTS("products").then((item) => {
      setLoading(false);
      return setProducts(item.data);
    });
    GET_ALL_PRODUCTREVIEW("ProductReviews").then((item) => {
      return setProductReview(item.data);
    });
  }, []);

  var setting = {
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 300,
    dots: false,
    infinity: true,
    arrows: true,
    response: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">{props.title}</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li className={currentCategory === "all" ? "active" : ""}>
                    <a
                      onClick={() => setCurrentCategory("all")}
                      data-toggle="tab"
                      className="text-decoration-none"
                    >
                      Tất cả
                    </a>
                  </li>
                  {categories.map((category) => {
                    return (
                      <li
                        key={category.id}
                        className={
                          category.id === currentCategory ? "active" : ""
                        }
                      >
                        <a
                          key={category.id}
                          data-toggle="tab"
                          onClick={() => setCurrentCategory(category.id)}
                          className="text-decoration-none"
                        >
                          {category.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* section - title  */}

            {/* product tab-slick  */}
            {/* product tab-slick  */}
            <div id="product-container" className="col-md-12">
              <div className="row">
                <div className="product-tabs">
                  {/* tab */}
                  <div id={"tab" + props.id} className="tab-pane active">
                    <div
                      className="product-slick text-center"
                      data-nav={"#slick-nav-" + props.id}
                    >
                      {loading ? (
                        <span className="loader"></span>
                      ) : (
                        <Slider {...setting}>
                          {products.length > 2 &&
                            products.map((product) => {
                              if (product.catId === currentCategory) {
                                return (
                                  <CardProduct
                                    key={product.id}
                                    product={product}
                                    categories={categories}
                                    productReview={productReview}
                                  />
                                );
                              } else if (currentCategory === "all") {
                                return (
                                  <CardProduct
                                    key={product.id}
                                    product={product}
                                    categories={categories}
                                    productReview={productReview}
                                  />
                                );
                              } else {
                                return "";
                              }
                            })}
                        </Slider>
                      )}
                    </div>
                    <div
                      id={"slick-nav" + props.id}
                      className="products-slick-nav"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* aaaa */}
        <Link className="text-decoration-none " to={"all-products"}>
          <div className="text-center mt-3 ">...Xem tất cả sảm phẩm</div>
        </Link>
      </div>
      {/* Container */}
    </div>
  );
}
export default Carousel;
