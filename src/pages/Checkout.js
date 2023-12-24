import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import {
  createOrder,
  emptyUserCart,
  getUserCart,
} from "../features/user/userSlice";
import { getTokenFromLocalStorage } from "../utils/axiosConfig";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCoupons } from "../features/coupon/couponSlice";

const orderValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  city: Yup.string().required("City is required"),
  district: Yup.string().required("District is required"),
  address: Yup.string().required("Address is required"),
});

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipCost, setShipCost] = useState(20);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const userData = getTokenFromLocalStorage;

  useEffect(() => {
    formik.values.city = selectedCity?.name;
    formik.values.district = selectedDistrict?.name;
    formik.values.discount = discount;
  }, [selectedCity, selectedDistrict, discount]);

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    dispatch(getCoupons());
    if (getTokenFromLocalStorage._id !== undefined) {
      dispatch(getUserCart());
    }
  }, []);

  const cartState = useSelector((state) => state.auth.cartProducts);
  const couponState = useSelector((state) => state.coupon.coupons);
  useEffect(() => {
    if (cartState && cartState.length > 0) {
      const total = cartState.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      if (total > 500) {
        setShipCost(0);
      }
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartState]);

  const handleCityChange = (event) => {
    const selectedCityCode = parseInt(event.target.value);
    if (!isNaN(selectedCityCode)) {
      const selectedCity = cities.find(
        (city) => city.code === selectedCityCode
      );
      setSelectedCity(selectedCity);
      const districtsOfSelectedCity = selectedCity
        ? selectedCity.districts
        : [];
      setDistricts(districtsOfSelectedCity);
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrictCode = parseInt(event.target.value);
    if (!isNaN(selectedDistrictCode)) {
      const selectedDistrict = districts.find(
        (district) => district.code === selectedDistrictCode
      );
      setSelectedDistrict(selectedDistrict);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      city: "",
      district: "",
      address: "",
      discount: discount,
    },
    validationSchema: orderValidationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      const orderData = {
        user: getTokenFromLocalStorage?._id,
        orderItems: [...cartState],
        shippingInfo: {
          name: values.name,
          mobile: values.phoneNumber,
          city: values.city,
          district: values.district,
          address: values.address,
        },
        totalPrice: totalPrice + shipCost,
        totalPriceAfterDiscount:
          (totalPrice + shipCost) * (1 - values.discount / 100),
      };
      dispatch(createOrder(orderData))
        .unwrap()
        .then(() => {
          dispatch(emptyUserCart());
          navigate("/product");
        });
    },
  });

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Amazune</h3>
              <nav
                style={{ "--bs-breadcrumb-divider:": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Card
                    </Link>
                  </li>
                  &nbsp;
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                  &nbsp;
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp;
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                </ol>
              </nav>
              <h4 className="title">Contact Information</h4>
              <p className="user-details total">
                {userData?.name} ({userData?.email})
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex gap-15 justify-content-between flex-wrap flex-column"
              >
                <div className="">
                  <label
                    htmlFor="name"
                    id="name"
                    className="d-flex align-items-center mb-2"
                  >
                    <BiUser className="mx-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="d-flex flex-column">
                  <label
                    htmlFor="phoneNumber"
                    id="phoneNumber"
                    className="d-flex align-items-center mb-2"
                  >
                    <BsTelephone className="mx-2" /> Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="error">{formik.errors.phoneNumber}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="cityDropdown" className="mb-2">
                    <ImLocation className="mx-2" /> City
                  </label>
                  <select
                    id="cityDropdown"
                    onChange={handleCityChange}
                    value={selectedCity ? selectedCity.code : ""}
                    className="form-control"
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city.code} value={city.code}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.city && formik.errors.city ? (
                    <div className="error">{formik.errors.city}</div>
                  ) : null}
                </div>
                <div className="d-flex flex-column mb-2">
                  <label htmlFor="districtDropdown " className="mb-2">
                    <ImLocation className="mx-2" /> District
                  </label>
                  <select
                    id="districtDropdown"
                    className="form-control"
                    onChange={handleDistrictChange}
                  >
                    <option value="">Select District</option>
                    {districts.map((district) => (
                      <option key={district.code} value={district.code}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.district && formik.errors.district ? (
                    <div className="error">{formik.errors.district}</div>
                  ) : null}
                </div>
                <div className="">
                  <label
                    htmlFor="address"
                    id="address"
                    className="d-flex align-items-center mb-2"
                  >
                    <ImLocation className="mx-2" /> Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="22 Quang Trung, Phường 6,..."
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to={`/cart`} className="text-dark">
                    <IoIosArrowBack />
                    Return to Cart
                  </Link>
                  <button className="button" type="submit">
                    Continue to shipping
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 align-items-center mb-2"
                    >
                      <div className="w-75 d-flex align-items-center gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-5px", right: "-5px" }}
                            className="badge position-absolute bg-secondary text-white rounded-circle"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            src={item?.productId?.images[0].url}
                            alt="product"
                            className="img-fluid"
                          />
                        </div>
                        <div>
                          <h5 className="total-price text-uppercase">
                            {item?.productId?.title}
                          </h5>
                          <p className="total">{item?.color.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>${item?.quantity * item?.price}</h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total mb-0">Shipping</p>
                <p className="total-price mb-0">${shipCost}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="total">Subtotal</p>
                <p className="total-price">${totalPrice}</p>
              </div>
              <div className="border-0 mt-2">
                <div className="input-group">
                  <input
                    id="coupon"
                    type="text"
                    className="form-control"
                    placeholder="Coupon"
                    aria-label="Coppon"
                    onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                  />
                  <div className="input-group-append mx-1">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => {
                        let foundDiscount = 0;
                        couponState?.some((item) => {
                          if (item?.name == coupon) {
                            foundDiscount = item?.discount;
                            return true;
                          }
                          return false;
                        });
                        setDiscount(foundDiscount);
                      }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between justify-content-center mt-2">
              <p className="total">Discount</p>
              <p className="total-price">{discount}%</p>
            </div>
             <div className="d-flex justify-content-between justify-content-center mt-2">
              <p className="total">Payment Methods</p>
              <p className="total-price">COD</p>
            </div>
            <div className="d-flex justify-content-between justify-content-center mt-2">
              <p className="total">Total After Discount</p>
              <p className="total-price">
                ${((totalPrice + shipCost) * (100 - discount)) / 100}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
