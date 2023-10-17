import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <div
      className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
    >
      <Link className="product-card position-relative w-100" to="/product/:id">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src="/images/wish.svg" alt="wishlist" />
          </button>
        </div>
        <div className="product-image h-auto">
          <img
            src="/images/watch.jpg"
            alt="product image"
            className="img-fluid"
          />
          <img
            src="/images/watch2.png"
            alt="product image"
            className="img-fluid"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">Apple Watch series 6</h5>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
            Apple Watch is a wearable smartwatch that allows users to accomplish
            a variety of tasks, including making phone calls, sending text
            messages and reading email
          </p>
          <p className="price">500$</p>
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
