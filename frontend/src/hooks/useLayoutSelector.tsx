import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useLayoutSelector = () => {
  const { pathname } = useLocation();
  const authPaths = useMemo(() => ["/login", "/register"], []);

  const isAuthLayout = useMemo(
    () => authPaths.includes(pathname),
    [authPaths, pathname]
  );

  const path = pathname.split("/")[1];
  const isdashboardLayout = useMemo(
    () => localStorage.getItem("user") && path === "dashboard",
    [path]
  );

  return { isAuthLayout, isdashboardLayout };
};

export default useLayoutSelector;
