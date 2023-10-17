import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <BreadCrumb title="Favorite List" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="cross"
                className="cross img-fluid position-absolute"
              />
              <div className="wishlist-card-image">
                <img
                  src="/images/watch.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="px-2 py-3">
                <h5 className="title">
                  Apple Watch Series 9 Wifi Ultra HD Pro Vip
                </h5>
                <h6 className="price">$200</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="/images/cross.svg"
                alt="cross"
                className="cross img-fluid position-absolute"
              />
              <div className="wishlist-card-image">
                <img
                  src="/images/watch.jpg"
                  alt="watch"
                  className="img-fluid w-100"
                />
              </div>
              <div className="px-2 py-3">
                <h5 className="title">
                  Apple Watch Series 9 Wifi Ultra HD Pro Vip
                </h5>
                <h6 className="price">$200</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
