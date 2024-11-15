import React, { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import Layout from "./layouts/default/index";
import DashboardLayout from "./layouts/admin";
import AuthLayout from "./layouts/default/AuthLayout";
import useLayoutSelector from "./hooks/useLayoutSelector";
import AuthProvider from "./components/AuthProvider/AuthProvider";

function App() {
  const { isAuthLayout, isdashboardLayout } = useLayoutSelector();

  return (
    <AuthProvider>
      {isAuthLayout ? (
        <AuthLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AuthLayout>
      ) : isdashboardLayout ? (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ) : (
        <Layout>
          <Suspense>
            <Outlet />
          </Suspense>
        </Layout>
      )}
    </AuthProvider>
  );
}

export default App;
