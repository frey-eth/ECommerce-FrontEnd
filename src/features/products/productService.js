import axios from "axios";
import { baseUrl, config } from "../../utils/axiosConfig";
const getAllProducts = async () => {
  const response = await axios.get(`${baseUrl}product/`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${baseUrl}product/${id}`);
  return response.data;
};

const addToWishList = async (prodID) => {
  const response = await axios.put(
    `${baseUrl}product/wishlist`,
    {
      prodID,
    },
    config
  );
  return response.data;
};

export const productService = {
  getAllProducts,
  getProduct,
  addToWishList,
};
