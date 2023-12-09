import React, { useState, useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { getCategories } from "../features/productCategory/categorySlice";
import { Link } from "react-router-dom";

const OurStore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const categoryState = useSelector((state) => state.category.categories);
  const [grid, setGrid] = useState(4);
  return (
    <>
      <BreadCrumb title="Store" />
      <Container class1="store-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop by Categories</h3>
              <ul className="ps-0">
                {categoryState.map((category) => (
                  <li className="text-uppercase" key={category._id}>
                    {category?.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In stock(1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="priceInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="priceInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    iPhone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    iPad
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Macbook
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    AirPod
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              {productState?.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <div className="random-products d-flex my-2">
                    <div className="w-50">
                      <img
                        src={item?.images[0].url}
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <Link
                        to={`/product/${item?._id}`}
                        className="text-uppercase fs-6 text-dark"
                      >
                        {item?.title}
                      </Link>
                      <ReactStars
                        count={5}
                        size={15}
                        value={item?.totalRating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>${item?.price}</b>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Feature</option>
                    <option value="best-selling" selected="selected">
                      Best selling
                    </option>
                    <option value="title-ascending">A-Z</option>
                    <option value="title-descending">Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="grid d-flex gap-10 align-items-center">
                    <img
                      src="/images/gr4.svg"
                      alt="grid"
                      className="img-fluid d-block"
                      onClick={() => {
                        setGrid(3);
                      }}
                    />
                    <img
                      src="/images/gr3.svg"
                      alt="grid"
                      className="img-fluid d-block"
                      onClick={() => {
                        setGrid(4);
                      }}
                    />
                    <img
                      src="/images/gr2.svg"
                      alt="grid"
                      className="img-fluid d-block"
                      onClick={() => {
                        setGrid(6);
                      }}
                    />
                    <img
                      src="/images/gr.svg"
                      alt="grid"
                      className="img-fluid d-block"
                      onClick={() => {
                        setGrid(12);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex flex-wrap">
                {productState.map((data, index) => {
                  return <ProductCard key={index} grid={grid} data={data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
