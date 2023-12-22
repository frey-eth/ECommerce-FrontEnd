import axios from "axios";
import { baseUrl } from "../../utils/axiosConfig";

const getBlogCategory = async () => {
  const response = await axios.get(`${baseUrl}blogcategory/`);
  return response.data;
};
const blogcategoryService = {
  getBlogCategory,
};

export default blogcategoryService;
