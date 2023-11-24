import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { VscGitCompare } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  getAllProducts,
  getProduct,
} from "../features/products/productSlice";
import Loading from "../components/Loading";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[2];
  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
      dispatch(getAllProducts());
    }
  }, [productId]);

  const productState = useSelector((state) => state.product);
  const productData = productState.productData?.product;
  const popularProducts = productState.products.filter(
    (product) => product.tag == "popular"
  );
  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (error) {
      throw new Error(error);
    }
  };

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: productData?.images[0].url,
  };

  return (
    <>
      {productData ? (
        <div>
          <BreadCrumb title={productData?.title} />
          <Container class1="main-product-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-6">
                <div className="main-product-image">
                  <div>
                    <ReactImageZoom {...props} />
                  </div>
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                  {productData.images.map((img, index) => {
                    return (
                      <div key={index}>
                        <img src={img.url} alt="" className="img-fluid" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-6">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3 className="title">{productData?.title}</h3>
                  </div>
                  <div className="border-bottom">
                    <p className="price">${productData?.price}</p>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={productData?.totalRating * 1}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 num-reviews">
                        ({productData?.ratings?.length} reviews)
                      </p>
                    </div>
                    <a className="review-btn" href="#review">
                      Write a review
                    </a>
                  </div>
                  <div className="border-bottom py-3">
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Type:</h3>
                      <p className="product-data">{productData?.slug}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Brand:</h3>
                      <p className="product-data">{productData?.brand}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Category:</h3>
                      <p className="product-data">{productData?.category}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Tags:</h3>
                      <p className="product-data">{productData?.tag}</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Avaibility:</h3>
                      <p className="product-data">
                        {productData?.quantity} In Stock
                      </p>
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
                        <button className="border-0 bg-transparent"
                          onClick={() => {
                            dispatch(addToWishList(productData?._id));
                          }}
                        >
                          Add to Wishlist
                        </button>
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
                        <button
                          className="border-0 bg-transparent"
                          onClick={() =>
                            copyToClipboard(
                              `http://localhost:3000` + location.pathname
                            )
                          }
                        >
                          Copy Product Link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container class1="description-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                  <p>{productData.description}</p>
                </div>
              </div>
            </div>
          </Container>
          <Container class1="reviews-wrapper py-5 home-wrapper-2">
            <div className="row" id="review">
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
                          value={3}
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
                          value={3}
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
                          value={3}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-4">San pham nhu con cak</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container class1="featured-wrapper py-5 home-wrapper-2">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <div className="row">
                {popularProducts.slice(0, 4).map((product) => (
                  <ProductCard key={product._id} data={product} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SingleProduct;
