import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
} from "~/Services/Api/apiServices";
import { useDebounce } from "~/hooks";
function Header() {
  // search
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const debouncedValue = useDebounce(searchValue, 500);
  const [popupSearch, setPopupSearch] = useState(true);
  const [currentSelectSearch, setCurrentSelectSearch] = useState("all");
  const qtyWishList = useSelector((state) => state.wishLists).length;
  const qtyCart = useSelector((state) => state.carts).length;

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
    setPopupSearch(true);
  };
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    GET_ALL_PRODUCTS(`products?search=${searchValue}`).then((item) => {
      setSearchResult(item.data);
    });
  }, [debouncedValue]);
  useEffect(() => {
    GET_ALL_CATEGORIES("categories").then((item) => setCategories(item.data));
  }, []);
  function handleHideResult() {
    setSearchResult([]);
    setSearchValue("");
  }
  function handleBtnSearch() {
    setPopupSearch(false);
  }
  function handleChangeSelect(e) {
    let select = e.target;
    let value = select.options[select.selectedIndex].value;
    setCurrentSelectSearch(+value);
  }
  // end search

  return (
    <>
      <header id="top-header">
        <div className="container">
          <ul className="header-links">
            <li>
              <a href="#" className="text-decoration-none">
                <i className="fa fa-phone" aria-hidden="true"></i>
                +08-8402340823
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                <i className="fa fa-envelope-o"></i>
                dung0vs@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                <i className="fa fa-map-marker "></i>
                20 Tang Nhon Phu
              </a>
            </li>
          </ul>
          <ul className="header-links">
            <li>
              <a href="#" className="text-decoration-none">
                <i className="fa fa-vnd"></i>
                VND
              </a>
            </li>
          </ul>
        </div>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                  <Link to="/" className="logo">
                    <img
                      src={require("~/assets/images/logo4.png")}
                      alt=""
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                {/* search */}
                <div className="header-search">
                  <Tippy
                    placement="bottom"
                    onClickOutside={handleHideResult}
                    interactive
                    visible={searchResult.length > 0 && popupSearch}
                    render={(attrs) => (
                      <div className="wrapper" tabIndex="-1" {...attrs}>
                        {searchResult.map((result) => {
                          if (result.catId === currentSelectSearch) {
                            setPopupSearch(true);
                            return (
                              <div
                                onClick={() => setSearchValue(result.title)}
                                key={result.id}
                                className="result"
                              >
                                {result.title}
                              </div>
                            );
                          } else if (currentSelectSearch === "all") {
                            setPopupSearch(true);
                            return (
                              <div
                                onClick={() => setSearchValue(result.title)}
                                key={result.id}
                                className="result"
                              >
                                {result.title}
                              </div>
                            );
                          } else {
                            setPopupSearch(false);
                          }
                        })}
                      </div>
                    )}
                  >
                    <form>
                      <select
                        className="input-select"
                        onChange={handleChangeSelect}
                      >
                        <option value="all">Tất cả sảm phẩm</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.title}
                          </option>
                        ))}
                      </select>

                      <input
                        className="input"
                        placeholder="Tìm kiếm tại đây"
                        onChange={handleChange}
                        value={searchValue}
                      ></input>

                      {searchValue !== "" && (
                        <i
                          onClick={() => setSearchValue("")}
                          className={`clear fa fa-times-circle-o`}
                          aria-hidden="true"
                        ></i>
                      )}

                      <Link to={`search?value=${searchValue}`}>
                        <button
                          onClick={handleBtnSearch}
                          type="submit"
                          className="search-btn"
                        >
                          Search
                        </button>
                      </Link>
                    </form>
                  </Tippy>
                </div>
              </div>
              <div className="col-md-3">
                <div className="header-ctn ">
                  <div>
                    <Link to="/wishlist" className="text-decoration-none">
                      <i className="fa fa-heart-o"></i>
                      <span>Yêu thích</span>
                      <div className="qty">{qtyWishList}</div>
                    </Link>
                  </div>
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle text-decoration-none"
                      to={"/shopping-cart"}
                    >
                      <i className="fa fa-shopping-cart"></i>
                      <span>Giỏ hàng</span>
                      <div className="qty">{qtyCart}</div>
                    </Link>
                  </div>
                  <div className="menu-toggle">
                    <a href="/">
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
