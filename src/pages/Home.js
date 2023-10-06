import React from "react";
import { Link } from "react-router-dom";

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
              <div className="services d-flex align-content-center justify-content-between">
                <div>
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
