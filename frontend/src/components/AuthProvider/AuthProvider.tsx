import { ReactNode, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { loginService, logoutService } from "@/services";
import { UserLogin, User, AuthContextValue } from "@/interfaces/User.interface";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const initialUser = useLoaderData() as User;
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(initialUser);

  const login = async (data: UserLogin): Promise<void> => {
    try {
      const newUser = await loginService(data);
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await logoutService();
      setUser(null);
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const contextValue: AuthContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
