import React from "react";
import ReactStars from "react-rating-stars-component";

function SpecialProduct() {
  return (
    <div className="col">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" />
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
            <div className="discount-till">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
