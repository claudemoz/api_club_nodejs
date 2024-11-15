import axios from "@/configs/axios";
import { User } from "@/interfaces/User.interface";

export const rootLoader = async (): Promise<User> => {
  const response = await axios.get(`/user/current`);
  return response.data;
};
