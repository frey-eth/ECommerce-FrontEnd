import React, { useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { VscGitCompare } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ML773_VW_34FR+watch-case-45-stainless-graphite-s9_VW_34FR+watch-face-45-stainless-graphite-s9_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507905569",
  };

  return (
    <>
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="/images/watch.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="/images/watch.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="/images/watch.jpg" alt="" className="img-fluid" />
                </div>
                <div>
                  <img src="/images/watch.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Watch for Professional Man</h3>
                </div>
                <div className="border-bottom">
                  <p className="price">$ 250</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 num-reviews">(2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">Apple</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Avaibility:</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 border-secondary bg-white text-dark">
                        S
                      </span>
                      <span className="badge border border-1 border-secondary bg-white text-dark">
                        M
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-10 flex-row align-items-center my-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
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
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0">Add to Cart</button>
                      <button className="button border-0">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex gap-15 align-items-center flex-row">
                    <div>
                      <AiOutlineHeart className="fs-5 me-2" />
                      <a href="">Add to Wishlist</a>
                    </div>
                    <div>
                      <VscGitCompare className="fs-5 me-2" />
                      <a href="">Add to Compare</a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3 mb-3">
                    <div className="d-flex gap-10 align-items-center">
                      <FaShippingFast />
                      <h3 className="product-heading">Shipping & Return</h3>
                    </div>
                    <p className="product-data">
                      Free shipping and returns available on all orders!
                    </p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3 mb-3">
                    <div className="d-flex gap-10 align-items-center">
                      <BsShare />
                      <a
                        href="javascript:void(0);"
                        onClick={() => copyToClipboard("hello world")}
                      >
                        Copy Product Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2" id="review">
        <div className="container-xxl">
          <div className="row">
            <h3>Reviews</h3>
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-4">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-15">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="#review"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <form action="" className="d-flex flex-column gap-15">
                    <h4>Write a Review</h4>
                    <div>
                      <ReactStars
                        count={5}
                        size={20}
                        value="0"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="form-control w-100"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Pham Van Duong</h6>
                      <ReactStars
                        count={5}
                        size={15}
                        value="3"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
