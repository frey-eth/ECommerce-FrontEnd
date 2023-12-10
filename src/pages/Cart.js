import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { TbShoppingCartCancel } from "react-icons/tb";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineDoneOutline } from "react-icons/md";
import {
  deleteUserCart,
  deleteUserOrder,
  getUserCart,
  getUserOrder,
  updateProductQuantityFromCart,
} from "../features/user/userSlice";
import { Modal } from "antd";

const { confirm } = Modal;

const Cart = () => {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    dispatch(getUserOrder());
  }, []);
  useEffect(() => {
    dispatch(getUserCart());
  }, [ ]);
  const cartState = useSelector((state) => state.auth.cartProducts);
  const orderState = useSelector((state) => state.auth.orderedData);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (cartState && cartState.length > 0) {
      const total = cartState.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cartState]);
  const showDeleteConfirm = (record) => {
    confirm({
      title: "Do You Want To Delete This Product?",
      onOk() {
        dispatch(deleteUserCart(record._id));
      },
    });
  };

  const showCancelConfirm = (record) => {
    confirm({
      title: "Do you want to delete cancel this order?",
      onOk() {
        dispatch(deleteUserOrder(record._id));
        dispatch(getUserOrder());
      },
    });
  };

  return (
    <>
      <BreadCrumb title="cart" />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
        {cartState?.length > 0 ? (
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex align-content-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cart-data py-3 d-flex justify-content-between"
                    >
                      <div className="cart-col-1 gap-15 align-items-center d-flex p-2">
                        <div className="w-25">
                          <img
                            src={item?.productId?.images[0].url}
                            alt="Product image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="w-75">
                          <h5 className="title text-uppercase">
                            {item?.productId?.title}
                          </h5>
                          <p className="color">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="cart-col-2 d-flex align-items-center">
                        <h5 className="price">${item?.price}</h5>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div className="">
                          <input
                            type="number"
                            min="1"
                            max="10"
                            defaultValue={item?.quantity}
                            onChange={(e) => {
                              const cartDetail = {
                                _id: item?._id,
                                quantity: e.target.value,
                              };
                              dispatch(
                                updateProductQuantityFromCart(cartDetail)
                              )
                                .unwrap()
                                .then(() => {
                                  setTrigger(!trigger);
                                });
                            }}
                            className="form-control"
                            style={{ width: "70px" }}
                          />
                        </div>
                        <RiDeleteBin6Line
                          onClick={() => showDeleteConfirm(item)}
                          size="24"
                          className="text-danger"
                        />
                      </div>
                      <div className="cart-col-4 d-flex align-items-center">
                        <h5 className="price">${item.price * item.quantity}</h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between">
                <div className="">
                  <Link className="button" to="/product">
                    Continue To Shopping
                  </Link>
                </div>
                <div className="d-flex align-items-end flex-column">
                  <h4>Total: ${totalPrice}</h4>
                  <p>Taxes and shipping calculate at checkout</p>
                  <Link className="button" to="/checkout">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-center flex-column gap-15">
            <BsCart4 style={{ height: "300px", width: "300px" }} />
            <h3>YOUR CART IS EMPTY!</h3>
            <Link className="button" to="/product">
              Shopping now
            </Link>
          </div>
        )}
      </Container>
      {orderState?.length > 0 && (
        <Container class1="cart-wrapper py-5 home-wrapper-2">
          <h6 className="">YOUR ORDERED</h6>
          <div className="d-flex flex-column">
            {orderState?.map((order) => (
              <div className="d-flex justify-content-between align-items-center">
                <div
                  key={order._id}
                  className="order-item my-1 border-2 bg-white rounded-2 justify-content-between d-flex flex-row align-items-center w-100"
                >
                  <div>
                    {order?.orderItems?.map((item) => (
                      <div
                        key={item._id}
                        className="d-flex align-items-center flex-row p-2"
                      >
                        <img
                          src={item?.productId?.images[0].url}
                          style={{ height: "50px" }}
                        />
                        <h6 className="text-uppercase mx-2 align-items-center">
                          {item?.productId?.title}
                          <p
                            style={{
                              fontSize: "12px",
                              textTransform: "none",
                            }}
                          >
                            Quantity: {item.quantity}
                          </p>
                        </h6>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex flex-column m-3 align-items-end">
                    <p
                      className="badge text-bg-success"
                      style={{ height: "20px", width: "100px" }}
                    >
                      {order?.orderStatus}
                    </p>
                    <p className="text-success p-0 m-0">
                      ${order.totalPriceAfterDiscount}
                    </p>
                  </div>
                </div>
                <div className="p-2">
                  {order?.orderStatus === "Ordered" ? (
                    <TbShoppingCartCancel
                      className="fs-2 text-danger"
                      id="cancel order"
                      onClick={() => {
                        showCancelConfirm(order);
                      }}
                      type="button"
                    />
                  ) : order?.orderStatus === "In Progress" ? (
                    <FaClockRotateLeft className="fs-2 text-warning" />
                  ) : (
                    <MdOutlineDoneOutline className="fs-2 text-success" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Cart;
