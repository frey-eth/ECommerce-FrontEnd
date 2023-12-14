import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/user/userSlice";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state.product?.products);
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setProductOpt] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(getUserCart());
    if (cartState && cartState.length > 0) {
      const total = cartState.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartState]);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      data.push({
        id: productState[index],
        prod: productState[index]?._id,
        name: productState[index]?.title.toUpperCase(),
      });
    }

    setProductOpt(data);
  }, [productState]);
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 3 Products & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:0352498496">
                  0352498496
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">
                  Amazune
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  options={productOpt}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                  }}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search for products here..."
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-end gap-15">
                {/* <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0 p-2">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div> */}
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0 p-2">
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  {authState.user !== null ? (
                    <div className="dropdown">
                      <button
                        className="btn text-white d-flex align-items-center"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="/images/user.svg" alt="user" />
                        <p className="mb-0 p-2">My Account</p>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={"/profile"}>
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`/login`}
                            className="dropdown-item"
                            type="button"
                            onClick={() => {
                              localStorage.clear();
                              this.forceUpdate();
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-10 text-white"
                    >
                      <img src="/images/user.svg" alt="user" />
                      <p className="mb-0 p-2">Login</p>
                    </Link>
                  )}
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column p-2">
                      <span className="badge bg-white text-dark">
                        {cartState?.length || "0"}
                      </span>
                      <p className="mb-0">${totalPrice}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="/images/menu.svg" />
                      <span className="d-inline-block mx-2">Action</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item text-white"
                          to="/product"
                        >
                          Store
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/cart">
                          Cart
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/blogs">
                      Blog
                    </NavLink>
                    <NavLink className="text-white" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
