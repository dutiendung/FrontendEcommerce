import { useEffect, useState } from "react";
import { GET_ALL_PRODUCTS } from "~/Services/Api/apiServices";
import WidgetColumn from "./WidgetColumn/WidgetColumn";
function Widgets() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GET_ALL_PRODUCTS("products").then((item) => {
      return setProducts(item.data);
    });
  }, []);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-6">
            <WidgetColumn
              title="Điện thoại bán chạy"
              products={products}
              catId={1}
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <WidgetColumn
              title="Laptop bán chạy"
              products={products}
              catId={2}
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <WidgetColumn
              title="Đồng hồ bán chạy"
              products={products}
              catId={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
