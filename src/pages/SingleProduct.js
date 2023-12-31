import React, { useEffect, useRef, useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  getAllProducts,
  getProduct,
  rating,
} from "../features/products/productSlice";
import Loading from "../components/Loading";
import { getTokenFromLocalStorage } from "../utils/axiosConfig";
import { addProductToCart, getUserCart } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";

const reviewSchema = Yup.object({
  comment: Yup.string().required("At least 10 letters"),
  star: Yup.number().required("Your Rating"),
});

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
      dispatch(getAllProducts());
      dispatch(getUserCart());
    }
  }, [productId]);

  useEffect(() => {
    const mainProductWrapper = document.querySelector(".main-product-wrapper");
    if (mainProductWrapper) {
      mainProductWrapper.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [productId]);

  const productState = useSelector((state) => state.product);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const productData = productState.productData?.product;
  const popularProducts = productState.products.filter(
    (product) => product.tag == "popular"
  );
  useEffect(() => {
    for (let idx = 0; idx < cartState?.length; idx++) {
      if (productId === cartState[idx]?.productId?._id) {
        setAlreadyAdded(true);
        break;
      }
    }
  }, [cartState]);

  const copyToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
    } catch (error) {
      throw new Error(error);
    }
  };

  const props = {
    width: 600,
    height: 600,
    zoomWidth: 600,
    img: productData?.images[0].url,
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      prodID: productId,
      comment: "",
      star: 0,
    },
    validationSchema: reviewSchema,
    onSubmit: (values) => {
      dispatch(rating(values));
      formik.resetForm();
      toast.success("You have posted a review for this product!!");
      setTimeout(() => {
        window.location.reload(); // Reload the page
      }, 3000);
    },
  });

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
                        <img src={img.url} className="img-fluid" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-6">
                <div className="main-product-details">
                  <div className="border-bottom">
                    <h3 className="title text-uppercase">
                      {productData?.title}
                    </h3>
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
                    {/* <div className="d-flex gap-10 flex-column my-2 mb-3">
                      <h3 className="product-heading">Size:</h3>
                      <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 border-secondary bg-white text-dark">
                          S
                        </span>
                        <span className="badge border border-1 border-secondary bg-white text-dark">
                          M
                        </span>
                      </div>
                    </div> */}
                    {alreadyAdded === false && (
                      <>
                        <div className="d-flex gap-10 flex-column my-2">
                          <h3 className="product-heading">Color:</h3>
                          <Color
                            setColor={setColor}
                            colorData={productData.color}
                          />
                        </div>
                        <div className="d-flex gap-10 flex-row align-items-center my-2 mb-3">
                          <h3 className="product-heading">Quantity:</h3>
                          <div className="">
                            <input
                              type="number"
                              min="1"
                              max="10"
                              name="quantity"
                              className="form-control"
                              style={{ width: "70px" }}
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    )}
                    <div className="d-flex flex-row align-items-center gap-30 py-3">
                      <button
                        className="button border-0"
                        onClick={() => {
                          if (alreadyAdded) {
                            navigate("/cart");
                          } else {
                            if (color === null) {
                              toast.error("Please Choose an color");
                            } else {
                              const userId = getTokenFromLocalStorage._id;
                              const values = {
                                userId: userId,
                                quantity: quantity,
                                productId: productId,
                                color: color,
                                price: productData?.price,
                              };
                              dispatch(addProductToCart(values))
                                .unwrap()
                                .then(() => navigate("/cart"));
                            }
                          }
                        }}
                      >
                        {alreadyAdded === false ? "Add to Cart" : "Go to card"}
                      </button>
                      {alreadyAdded === false && (
                        <button className="button border-0">Buy it Now</button>
                      )}
                    </div>
                    <div className="d-flex gap-15 align-items-center flex-row">
                      <div>
                        <AiOutlineHeart className="fs-5 me-2" />
                        <button
                          className="border-0 bg-transparent"
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
                          value={productData?.totalRating * 1}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">
                          Based on {productData?.ratings?.length} Reviews
                        </p>
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
                    <form
                      onSubmit={formik.handleSubmit}
                      className="d-flex flex-column gap-15"
                    >
                      <h4>Write a Review</h4>
                      <div>
                        <ReactStars
                          count={5}
                          size={20}
                          edit={true}
                          onChange={(newRating) =>
                            formik.setFieldValue("star", newRating)
                          }
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="30"
                          rows="10"
                          className="form-control w-100"
                          placeholder="Comment"
                          onChange={formik.handleChange}
                          value={formik.values.comment}
                          onBlur={formik.handleBlur}
                        ></textarea>
                      </div>
                      <div>
                        <button className="button" type="submit">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews">
                    {productData?.ratings?.map((review, idx) => (
                      <div className="review" key={idx}>
                        <div className="d-flex gap-10 align-items-center">
                          <h6 className="mb-0">{review.postedBy.name}</h6>
                          <ReactStars
                            count={5}
                            size={15}
                            value={review.star}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className="mt-4">{review.comment}</p>
                      </div>
                    ))}
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
              <div className="d-flex flex-row flex-wrap">
                {popularProducts.slice(0, 4).map((product) => (
                  <div className="d-flex w-25" key={product._id}>
                    <ProductCard data={product} />
                  </div>
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
