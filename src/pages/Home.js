import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  src="/images/main-banner-1.jpg"
                  alt="main banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad 13 Pro</h5>
                  <p>From $999 Or $41/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-01.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Seller</h4>
                    <h5>Macbook</h5>
                    <p> $999</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-02.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Apple Watch</h5>
                    <p> $999</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-03.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>iPad</h5>
                    <p> $999</p>
                  </div>
                </div>

                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-04.jpg"
                    alt="main banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Headphone</h5>
                    <p>$999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p>From all order over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surpise Offers</h6>
                    <p>Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support Online 24/7</h6>
                    <p>Shop with an export</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p>Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="category d-flex gap-30 align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>
                <div className="category d-flex gap-30 align-items-center">
                  <div>
                    <h6>SmartTV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="tv" />
                </div>
                <div className="category d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/watch.jpg" alt="watch" />
                </div>
                <div className="category d-flex gap-30 align-items-center">
                  <div>
                    <h6>Head Phone</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="headphone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
