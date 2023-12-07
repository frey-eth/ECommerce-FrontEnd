import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { getAllProducts } from "../features/products/productSlice";
import { getAllBlog } from "../features/blog/blogSlice";
import PopularCard from "../components/PopularCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBlog());
  }, []);
  const blogState = useSelector((state) => state.blog.blogs);
  const productState = useSelector((state) => state.product.products);

  return (
    <>
      <Container class1="home-wrapper-2 py-5">
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
      </Container>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((item, index) => {
                return (
                  <div key={index} className="d-flex align-items-center gap-15">
                    <img src={item.image} alt="services" />
                    <div>
                      <h6>{item.title}</h6>
                      <p className="mb-0">{item.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap justify-content-around">
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
                <img
                  src="/images/watch.jpg"
                  alt="watch"
                  className="img-fluid"
                />
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
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Feature Collections</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tag === "featured")
                return <ProductCard key={index} data={item} />;
            })}
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="special-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item) => {
              if (item.tag === "special")
                return (
                  <SpecialProduct
                    key={item?._id}
                    title={item.title}
                    brand={item.brand}
                    images={item.images}
                    totalRatings={item.totalRatings}
                    sold={item?.sold}
                    price={item.price}
                    quantity={item.quantity}
                    _id={item._id}
                  />
                );
            })}
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tag === "popular")
                  return (
                    <>
                      <PopularCard key={index} data={item} />
                    </>
                  );
              })}
          </div>
        </div>
      </Container>
      <Container class1="marque-wrapper py-5">
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
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row d-flex">
            {blogState &&
              blogState?.slice(0, 4).map((item, index) => {
                return (
                  <div className="col-3">
                    <BlogCard key={index} data={item} style={{ flex: "1" }} />
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
