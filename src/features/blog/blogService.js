import axios from "axios";
import { baseUrl } from "../../utils/axiosConfig";
const getAllBlog = async () => {
  const response = await axios.get(`${baseUrl}blog/`);
  return response.data;
};

const getBlog = async (id) => {
  const response = await axios.get(`${baseUrl}blog/${id}`);
  return response.data;
};

export const blogService = {
  getAllBlog,
  getBlog,
};
