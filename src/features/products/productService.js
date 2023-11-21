import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const getAllProducts = async () => {
  const response = await axios.get(`${baseUrl}product/`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${baseUrl}product/${id}`);
  return response.data;
};

const addToWishList = async (userData) => {
  const response = await axios.get(`${baseUrl}product/`);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getAllProducts,
  getProduct,
};
