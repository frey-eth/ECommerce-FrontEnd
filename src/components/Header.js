import React from "react";
import { NavLink, Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over 3 Products & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:0352498496">
                  0352498496
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Ecommerce</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
