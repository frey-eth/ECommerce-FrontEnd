import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newletter" />
                <h2 className="mb-0 text-white">Sign Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Enter Your Email..."
                  aria-label="Enter Your Email"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Sign Up
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3"></footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()} Powered By Pham Van Duong
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
