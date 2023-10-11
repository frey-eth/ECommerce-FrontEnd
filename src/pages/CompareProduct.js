import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <>
      <BreadCrumb title="Compare Product" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="/images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 GB Ram 8 GB ROM 7 Inch With Wi-fi + 4G Tablet
                  </h5>
                  <h6 className="price mb-3">$100</h6>
                </div>
                <div>
                  <div className="product-detail">
                    <h5>Brand</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Avaibility</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size</h5>
                    <p>S M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="/images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0 GB Ram 8 GB ROM 7 Inch With Wi-fi + 4G Tablet
                  </h5>
                  <h6 className="price mb-3">$100</h6>
                </div>
                <div>
                  <div className="product-detail">
                    <h5>Brand</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Avaibility</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size</h5>
                    <p>S M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
