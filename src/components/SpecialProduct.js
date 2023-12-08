import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../features/user/userSlice";

function SpecialProduct(props) {
  const dispatch = useDispatch();
  const { title, brand, images, totalRatings, price, sold, quantity, _id } =
    props;
  return (
    <div className="flex-grow-1">
      <div className="special-product-card h-100">
        <div className="d-flex flex-wrap">
          <img
            src={images[0].url}
            alt="watch"
            className="d-flex flex-grow-1 flex-wrap img-fluid"
            style={{ width: "260px" }}
          />
          <div className="special-product-content flex-column flex-grow-1 flex-wrap">
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
              <strike className="m-xl-2 mx-1">${price}</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0 d-flex gap-1">
                <span className="badge p-2 bg-danger-subtle">5 D</span>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge p-2 bg-warning">19 h</span>:
                <span className="badge p-2 bg-warning">54 m</span>:
                <span className="badge p-2 bg-warning">12 s</span>
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
            <Link className="button my-3" to={`/product/${_id}`}>
              Add to card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
