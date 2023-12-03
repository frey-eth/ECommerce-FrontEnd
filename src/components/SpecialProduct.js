import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct(props) {
  const { title, brand, images, totalRatings, price, sold, quantity, _id } =
    props;
  return (
    <div className="col-6">
      <div className="special-product-card h-100">
        <div className="d-flex">
          <div className="w-50">
            <img
              src={images[0].url}
              alt="watch"
              className="img-fluid flex-grow-1"
            />
          </div>
          <div className="special-product-content flex-grow-1">
            <h5 className="brand text-danger">{brand}</h5>
            <Link
              className="title text-uppercase text-dark"
              to={`/product/${_id}`}
            >
              {title}
            </Link>
            <ReactStars
              count={5}
              size={24}
              value={totalRatings}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">${price * 0.75}</span>
              <strike className="m-xl-2">${price}</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0 d-flex gap-1">
                <b>5</b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge p-2 bg-warning">1</span>:
                <span className="badge p-2 bg-warning">1</span>:
                <span className="badge p-2 bg-warning">1</span>
              </div>
            </div>
            <div className="product-count mt-3">
              <p>Products: {quantity}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: quantity / (quantity + sold) }}
                  aria-valuenow={(quantity * 100) / (quantity + sold)}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>
            <Link className="button my-3">Add to Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
