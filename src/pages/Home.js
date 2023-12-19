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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../components/Loading";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: window.innerWidth >= 768 ? 4 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllBlog());
  }, []);
  const blogState = useSelector((state) => state.blog.blogs);
  const { isLoading, isSuccess, isError } = useSelector(
    (state) => state.product
  );
  const productState = useSelector((state) => state.product.products);

  return (
    <>
      <Container class1="home-wrapper-2 py-5">
        <div className="d-flex flex-wrap flex-row">
          <div
            className="d-flex align-content-start"
            style={window.innerWidth >= 764 ? { maxWidth: "50%" } : {}}
          >
            <div className="main-banner position-relative">
              <img
                src="/images/main-banner-1.jpg"
                alt="main banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad 13 Pro</h5>
                <p>From $999 Or $41/mo.</p>
                <Link className="button" to="/product">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-wrap justify-content-between align-items-center"
            style={window.innerWidth >= 764 ? { maxWidth: "50%" } : {}}
          >
            <Link className="small-banner position-relative mt-1" to="/product">
              <img
                src="/images/catbanner-01.jpg"
                alt="main banner"
                className="img-fluid rounded-3"
              />
              <div className="small-banner-content position-absolute d-flex flex-column justify-content-between">
                <h4>Best Seller</h4>
                <h5 className="text-dark">Macbook</h5>
                <p> $999</p>
              </div>
            </Link>

            <Link className="small-banner position-relative mt-1" to="/product">
              <img
                src="/images/catbanner-02.jpg"
                alt="main banner"
                className="img-fluid rounded-3"
              />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5 className="text-dark">Apple Watch</h5>
                <p> $999</p>
              </div>
            </Link>

            <Link className="small-banner position-relative mt-1" to="/product">
              <img
                src="/images/catbanner-03.jpg"
                alt="main banner"
                className="img-fluid rounded-3"
              />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5 className="text-dark">iPad</h5>
                <p> $999</p>
              </div>
            </Link>

            <Link className="small-banner position-relative mt-1" to="/product">
              <img
                src="/images/catbanner-04.jpg"
                alt="main banner"
                className="img-fluid rounded-3"
              />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5 className="text-dark">Headphone</h5>
                <p>$999</p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-1 py-2">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <Marquee>
                {services?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex align-items-center mx-5 gap-10"
                    >
                      <img src={item.image} alt="services" />
                      <div>
                        <h6>{item.title}</h6>
                        <p className="mb-0">{item.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-row flex-wrap justify-content-around justify-content-center">
              <div className="category d-flex align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src="/images/camera.jpg"
                  className="img-fluid"
                  alt="camera"
                />
              </div>
              <div className="category d-flex align-items-center">
                <div>
                  <h6>SmartTV</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/tv.jpg" className="img-fluid" alt="tv" />
              </div>
              <div className="category d-flex align-items-center">
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src="/images/watch2.png"
                  alt="watch"
                  className="img-fluid"
                />
              </div>
              <div className="category d-flex align-items-center">
                <div>
                  <h6>Head Phone</h6>
                  <p>10 Items</p>
                </div>
                <img
                  src="/images/headphone.jpg"
                  alt="headphone"
                  className="img-fluid"
                />
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
          {isLoading ? (
            Loading()
          ) : (
            <Slider {...settings}>
              {productState &&
                productState?.map((item, index) => {
                  if (item.tag === "featured")
                    return <ProductCard key={index} data={item} />;
                })}
            </Slider>
          )}
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="special-heading">Special Products</h3>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {isLoading ? (
            <div className="row">
              <Loading />
            </div>
          ) : (
            productState &&
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
            })
          )}
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="d-flex flex-wrap">
            {isLoading ? (
              <div className="row">
                <Loading />
              </div>
            ) : (
              productState &&
              productState?.map((item, index) => {
                if (item.tag === "popular")
                  return <PopularCard key={index} data={item} />;
              })
            )}
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
          <div className="d-flex flex-wrap">
            {isLoading ? (
              <div className="flex-row">
                <Loading />
              </div>
            ) : (
              blogState &&
              blogState?.slice(0, 3).map((item, index) => {
                return (
                  <div className="col-3">
                    <BlogCard key={index} data={item} style={{ flex: "1" }} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
