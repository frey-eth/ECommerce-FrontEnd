import React from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsTiktok,
  BsPhone,
  BsMailbox,
} from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newletter" />
                <h2 className="mb-0 text-white">Sign Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Your Email..."
                  aria-label="Enter Your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Address : 155 Alexander, <br /> Linh Trung, Thu Duc District,{" "}
                  <br />
                  Ho Chi Minh City
                  <br />
                  Zipcode: 70012
                </address>
                <a
                  href="tel:84352498496"
                  className="text-white d-flex flex-row"
                >
                  <BsPhone className="text-white fs-4" />
                  <h6 className="ms-2">+84 352 498 496</h6>
                </a>
                <a
                  href="mailto:contactfreyforwork@gmail.com"
                  className="text-white d-flex flex-row"
                >
                  <BsMailbox className="text-white fs-4" />
                  <h6 className="ms-2">Contactfreyforwork@gmail.com</h6>
                </a>

                <div className="social_icon d-flex align-items-center gap-30 mt-3">
                  <a href="https://www.instagram.com/phamvanduong__/">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="https://www.facebook.com/imlookingformysunflower/">
                    <BsFacebook className="text-white fs-4" />
                  </a>
                  <a href="https://twitter.com/Vitameowww">
                    <BsTwitter className="text-white fs-4" />
                  </a>
                  <a href="https://www.tiktok.com/@just.frey_">
                    <BsTiktok className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/term-conditions">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Clother</Link>
                <Link className="text-white py-2 mb-1">Glass</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
                <Link className="text-white py-2 mb-1">Sneaker</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
