import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import watch from "../images/watch.jpg";
const Cart = () => {
  return (
    <>
      <BreadCrumb title="cart" />
      <section className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-content-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between">
                <div className="cart-col-1 gap-15 align-items-center d-flex">
                  <div className="w-25">
                    <img
                      src={watch}
                      alt="Product image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75">
                    <h5 className="title">Apple Watch</h5>
                    <p className="color"></p>
                    <p className="size">S M L</p>
                  </div>
                </div>
                <div className="cart-col-2 d-flex align-items-center">
                  <h5 className="price">$100.00</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center">
                  <div className="">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      name=""
                      id=""
                      className="form-control"
                      style={{ width: "70px" }}
                    />
                  </div>
                </div>
                <div className="cart-col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
