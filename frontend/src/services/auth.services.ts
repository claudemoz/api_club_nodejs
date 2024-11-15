import axios from "@/configs/axios";
import { User, UserLogin } from "@/interfaces/User.interface";

export const registerService = async (user: UserLogin): Promise<User> => {
  const response = await axios.post(`/user/register`, user);
  return response.data;
};
export const loginService = async (user: UserLogin): Promise<User> => {
  const response = await axios.post(`/user/login`, user);
  return response.data;
};

export const logoutService = (): Promise<void> => {
  return axios.post(`/user/logout`);
};
