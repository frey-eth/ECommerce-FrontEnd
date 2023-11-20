import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
const register = async (userData) => {
  const response = await axios.post(`${baseUrl}user/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${baseUrl}user/login`, userData);
  return response.data;
};

export const authService = {
  register,
  login,
};
