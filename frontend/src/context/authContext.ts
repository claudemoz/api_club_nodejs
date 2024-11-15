import { createContext } from "react";
import { AuthContextValue } from "@/interfaces/User.interface";

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  login: async () => {},
  logout: async () => {},
});
