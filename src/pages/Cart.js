import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import watch from "../images/watch.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <BreadCrumb title="cart" />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
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
                  <img src={watch} alt="Product image" className="img-fluid" />
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
              <div className="cart-col-3 d-flex align-items-center gap-15">
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
                <RiDeleteBin6Line size="24" className="text-danger" />
              </div>
              <div className="cart-col-4 d-flex align-items-center">
                <h5 className="price">$100.00</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between">
              <div className="">
                <Link className="button" to="/product">
                  Continue To Shopping
                </Link>
              </div>
              <div className="d-flex align-items-end flex-column">
                <h4>Total: $1000</h4>
                <p>Taxes and shipping calculate at checkout</p>
                <Link className="button" to="/checkout">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
