import axios from "axios";
import { baseUrl } from "../../utils/axiosConfig";
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

export const authService = {
  register,
  login,
};
