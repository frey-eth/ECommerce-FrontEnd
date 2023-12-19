import React, { useState, useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { getCategories } from "../features/productCategory/categorySlice";

const OurStore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
  }, []);

  const productState = useSelector((state) => state.product.products);
  const { isSuccess } = useSelector((state) => state.product);
  useEffect(() => {
    setFilteredProducts(productState);
  }, [isSuccess]);
  const categoryState = useSelector((state) => state.category.categories);
  const [filteredProducts, setFilteredProducts] = useState(productState);
  const [grid, setGrid] = useState(4);
  const [availabilityFilter, setAvailabilityFilter] = useState({
    inStock: false,
    outOfStock: false,
  });
  const [priceFilter, setPriceFilter] = useState({
    from: "",
    to: "",
  });
  const [tagFilters, setTagFilters] = useState([]);
  const [sortOption, setSortOption] = useState("title-ascending");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filterCategories = (category) => {
    let filteredList = productState;

    if (category !== selectedCategory) {
      if (category === "All") {
        setFilteredProducts(productState);
      } else {
        filteredList = filteredList.filter(
          (product) => product.category === category
        );
        setFilteredProducts(filteredList);
      }
      setSelectedCategory(category);
    } else {
      setFilteredProducts(productState);
      setSelectedCategory("All");
    }
  };

  useEffect(() => {
    filterProducts();
  }, [availabilityFilter, priceFilter, tagFilters]);

  const filterProducts = () => {
    let filteredList = [...productState];
    if (availabilityFilter.inStock) {
      filteredList = filteredList?.filter((product) => product.quantity > 0);
    }
    if (availabilityFilter.outOfStock) {
      filteredList = filteredList?.filter((product) => product.quantity === 0);
    }

    if (priceFilter.from !== "" && priceFilter.to !== "") {
      filteredList = filteredList?.filter(
        (product) =>
          product.price >= parseInt(priceFilter.from) &&
          product.price <= parseInt(priceFilter.to)
      );
    }

    if (tagFilters.length > 0) {
      filteredList = filteredList.filter((product) =>
        tagFilters.every((tag) => product?.tag?.includes(tag))
      );
    }
    switch (sortOption) {
      case "title-ascending":
        filteredList.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-descending":
        filteredList.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-ascending":
        filteredList.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        break;
      case "price-descending":
        filteredList.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        break;
      case "created-ascending":
        filteredList.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        break;
      case "created-descending":
        filteredList.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      default:
        // No sorting
        break;
    }
    setFilteredProducts(filteredList);
  };
  return (
    <>
      <BreadCrumb title="Store" />
      <Container class1="store-wrapper home-wrapper-2 py-3 d-flex flex-wrap">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop by Categories</h3>
              <ul className="ps-0">
                <li
                  value="All"
                  onClick={() => {
                    filterCategories("All");
                  }}
                >
                  All
                </li>
                {categoryState.map((category) => (
                  <li
                    key={category._id}
                    className="text-uppercase"
                    onClick={() => {
                      filterCategories(category.title);
                    }}
                  >
                    {category?.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={availabilityFilter.inStock}
                      onChange={() =>
                        setAvailabilityFilter({
                          ...availabilityFilter,
                          inStock: !availabilityFilter.inStock,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="">
                      In stock ({productState?.length})
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={availabilityFilter.outOfStock}
                      onChange={() =>
                        setAvailabilityFilter({
                          ...availabilityFilter,
                          outOfStock: !availabilityFilter.outOfStock,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="priceInput"
                      placeholder="From"
                      value={priceFilter.from}
                      onChange={(e) =>
                        setPriceFilter({ ...priceFilter, from: e.target.value })
                      }
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="priceInput1"
                      placeholder="To"
                      value={priceFilter.to}
                      onChange={(e) =>
                        setPriceFilter({ ...priceFilter, to: e.target.value })
                      }
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {categoryState.map((category) => (
                    <span
                      key={category._id}
                      className={`badge bg-light text-secondary rounded-3 py-2 px-3 ${
                        tagFilters.includes(category.title) ? "active" : ""
                      }`}
                      onClick={() => {
                        if (tagFilters.includes(category.title)) {
                          setTagFilters(
                            tagFilters.filter((tag) => tag !== category.title)
                          );
                        } else {
                          setTagFilters([...tagFilters, category.title]);
                        }
                      }}
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    className="form-control form-select"
                    id=""
                    value={sortOption}
                    onChange={(e) => {
                      setSortOption(e.target.value);
                      filterProducts();
                    }}
                  >
                    <option value="title-ascending">A-Z</option>
                    <option value="title-descending">Z-A</option>
                    <option value="price-ascending">Price, low to high </option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">
                    {filteredProducts.length} Products
                  </p>
                  <div className="grid d-flex gap-10 align-items-center">
                    <img
                      src="/images/gr4.svg"
                      alt="grid"
                      className={`img-fluid d-block ${
                        grid === 3 ? "active" : ""
                      }`}
                      onClick={() => {
                        setGrid(3);
                      }}
                    />
                    <img
                      src="/images/gr3.svg"
                      alt="grid"
                      className={`img-fluid d-block ${
                        grid === 4 ? "active" : ""
                      }`}
                      onClick={() => {
                        setGrid(4);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list">
              <div className="d-flex flex-wrap">
                {filteredProducts?.map((data, index) => (
                  <ProductCard key={index} grid={grid} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
