import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";
interface LayoutProps {
  children: ReactNode;
}
export default function Security({ children }: LayoutProps) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}
