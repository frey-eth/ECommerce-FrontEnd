import axios from "axios";
import { baseUrl, config } from "../../utils/axiosConfig";
const register = async (userData) => {
  const response = await axios.post(`${baseUrl}user/register`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${baseUrl}user/login`, userData);
  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
  }
  return response.data;
};

const getUserWishList = async () => {
  const response = await axios.get(`${baseUrl}user/wishlist`, config);
  return response.data;
};

const addProductToCart = async (cartData) => {
  const response = await axios.post(`${baseUrl}user/cart`, cartData, config);
  return response.data;
};

const getUserCart = async () => {
  const response = await axios.get(`${baseUrl}user/cart`, config);
  return response.data;
};

const deleteUserCart = async (id) => {
  const response = await axios.delete(`${baseUrl}user/cart/${id}`, config);
  return response.data;
};

const updateProductQuantityFromCart = async (cartDetail) => {
  const response = await axios.put(
    `${baseUrl}user/cart/update-cart/${cartDetail._id}/${cartDetail.quantity}`,
    null,
    config
  );
  return response.data;
};

const createOrder = async (orderData) => {
  const response = await axios.post(
    `${baseUrl}user/cart/cart-order`,
    orderData,
    config
  );
  return response.data;
};

const emptyUserCart = async () => {
  const response = await axios.delete(`${baseUrl}user/cart/empty-cart`, config);
  return response.data;
};

const getUserOrder = async () => {
  const response = await axios.get(`${baseUrl}user/get-user-order`, config);
  return response.data;
};

const deleteUserOrder = async (id) => {
  const response = await axios.delete(
    `${baseUrl}user/delete-order/${id}`,
    config
  );
  return response.data;
};

const updateUser = async (data) => {
  const response = await axios.put(`${baseUrl}user/edit-user`, data, config);
  return response.data;
};

const forgotPasswordToken = async (data) => {
  const response = await axios.post(
    `${baseUrl}user/forgot-password-token`,
    data,
    config
  );
  return response.data;
};

const resetPasswordToken = async (data) => {
  const response = await axios.put(
    `${baseUrl}user/reset-password/${data.token}`,
    { password: data?.password },
    config
  );
  return response.data;
};

export const authService = {
  register,
  login,
  getUserWishList,
  addProductToCart,
  getUserCart,
  deleteUserCart,
  updateProductQuantityFromCart,
  createOrder,
  emptyUserCart,
  getUserOrder,
  deleteUserOrder,
  updateUser,
  forgotPasswordToken,
  resetPasswordToken,
};
