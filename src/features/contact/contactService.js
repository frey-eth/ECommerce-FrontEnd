import axios from "axios";
import { baseUrl } from "../../utils/axiosConfig";

const createEnquiry = async (value) => {
  const response = await axios.post(`${baseUrl}enquiry/`, value);
  return response.data;
};
const contactService = {
  createEnquiry,
};

export default contactService;
