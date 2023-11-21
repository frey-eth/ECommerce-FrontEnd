import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  return (
    <div
      className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
      <Link
        className="product-card position-relative w-100"
        to={`/product/${data?._id}`}
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="/images/wish.svg" alt="wishlist" />
          </button>
        </div>
        <div className="product-image h-auto">
          <img
            src={data.images[0].url}
            alt="product image"
            className="img-fluid"
          />
          {data.images[1] ? (
            <img
              src={data.images[1]?.url}
              alt="product image"
              className="img-fluid"
            />
          ) : (
            <img
              src={data.images[0].url}
              alt="product image"
              className="img-fluid"
            />
          )}
        </div>
        <div className="product-details">
          <h6 className="brand">{data.brand}</h6>
          <h5 className="product-title">{data.title}</h5>
          <ReactStars
            count={5}
            size={24}
            value={data?.totalRating*1}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
            {data.description}
          </p>
          <p className="price">{data.price}$</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src="/images/prodcompare.svg" alt="addcard" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/view.svg" alt="addcard" />
            </button>
            <button className="border-0 bg-transparent">
              <img src="/images/add-cart.svg" alt="addcard" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
