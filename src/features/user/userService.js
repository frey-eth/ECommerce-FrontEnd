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

export const authService = {
  register,
  login,
  getUserWishList,
  addProductToCart,
  getUserCart,
  deleteUserCart,
};
