import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_CATEGORIES } from "~/Services/Api/apiServices";

function Nav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => setCategories(item.data));
  }, []);

  return (
    <nav id="navigation">
      <div className="container">
        <div id="responsive-nav">
          <ul className="main-nav nav nav-navbar">
            <li>
              <Link to={"all-products"}>
                <div>Tất cả sảm phẩm</div>
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link to={category.slug}>
                    <div>{category.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
