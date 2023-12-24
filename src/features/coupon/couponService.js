import axios from "axios";
import { baseUrl } from "../../utils/axiosConfig";

const getCoupon = async () => {
  const response = await axios.get(`${baseUrl}coupon`);
  return response.data;
};
const couponService = {
  getCoupon,
};

export default couponService;
