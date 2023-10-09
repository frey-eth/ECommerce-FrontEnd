import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct() {
  return (
    <div className="col-6">
      <div className="special-product-card">
        <div className="d-flex">
          <div>
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Apple</h5>
            <h6 className="title">iPhone 15 Promax</h6>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$500</span>
              <strike className="m-xl-2">$700</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-15 align-items-center">
                <span className="badge p-2 bg-warning">1</span>:
                <span className="badge p-2 bg-warning">1</span>:
                <span className="badge p-2 bg-warning">1</span>
              </div>
            </div>
            <div className="product-count mt-3">
              <p>Products: 5</p>
              <div class="progress">
                <div
                  class="progress-bar w-25"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
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
