import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CardProduct from "~/Components/CardProduct/CardProduct";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTREVIEW,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";
function Carousel(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productReview, setProductReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(1);

  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => {
      return setCategories(item.data);
    });
  }, []);
  useEffect(() => {
    GET_ALL_PRODUCTS("products").then((item) => {
      return setProducts(item.data);
    });
  }, []);
  useEffect(() => {
    GET_ALL_PRODUCTREVIEW("ProductReviews").then((item) => {
      return setProductReview(item.data);
    });
  }, []);

  var setting = {
    slidesToShow: 4,
    slidesToScroll: 3,
    autoPlay: true,
    infinity: true,
    dots: false,
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
                  {categories.map((cate) => (
                    <li
                      key={cate.id}
                      className={cate.id === currentCategory ? "active" : ""}
                    >
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        key={cate.id}
                        data-toggle="tab"
                        onClick={() => setCurrentCategory(cate.id)}
                        className="text-decoration-none"
                      >
                        {cate.title}
                      </a>
                    </li>
                  ))}
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
                      className="product-slick"
                      data-nav={"#slick-nav-" + props.id}
                    >
                      <Slider {...setting}>
                        {products.length > 0 &&
                          products.map((product) => {
                            //tttt
                            if (product.catId === currentCategory) {
                              return (
                                <CardProduct
                                  product={product}
                                  categories={categories}
                                  productReview={productReview}
                                />
                              );
                            } else if (currentCategory === 13) {
                              return (
                                <CardProduct
                                  product={product}
                                  categories={categories}
                                  productReview={productReview}
                                />
                              );
                            } else {
                              return <div></div>;
                            }
                          })}
                      </Slider>
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
        <Link className="text-decoration-none " to={"/AllProducts"}>
          <div className="text-center mt-3 ">...Xem tất cả sảm phẩm</div>
        </Link>
      </div>
      {/* Container */}
    </div>
  );
}
export default Carousel;
