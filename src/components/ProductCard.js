import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="wishlist" />
          </Link>
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
          <p className="price">500$</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="/images/prodcompare.svg" alt="addcard" />
            </Link>
            <Link>
              <img src="/images/view.svg" alt="addcard" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="addcard" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
