/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import HomeD from "@/pages/dashbord/Home";
import NotFound from "@/pages/NotFound";
import Security from "@/components/Security/Security";
import { rootLoader } from "@/services/loaders";
import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Presentation = lazy(() => import("@/pages/Presentation"));
const News = lazy(() => import("@/pages/News"));
const Contact = lazy(() => import("@/pages/Contact"));
const Calendar = lazy(() => import("@/pages/Calendar"));
//
const UserD = lazy(() => import("@/pages/dashbord/User"));
const MatchD = lazy(() => import("@/pages/dashbord/Match"));
const NewsD = lazy(() => import("@/pages/dashbord/News"));
const PartnerD = lazy(() => import("@/pages/dashbord/Partner"));
const ContactD = lazy(() => import("@/pages/dashbord/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/presentation",
        element: <Presentation />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: (
          <Security>
            <HomeD />
          </Security>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <Security>
            <UserD />
          </Security>
        ),
      },
      {
        path: "/dashboard/matchs",
        element: (
          <Security>
            <MatchD />
          </Security>
        ),
      },
      {
        path: "/dashboard/news",
        element: (
          <Security>
            <NewsD />
          </Security>
        ),
      },
      {
        path: "/dashboard/partners",
        element: (
          <Security>
            <PartnerD />
          </Security>
        ),
      },
      {
        path: "/dashboard/contact",
        element: (
          <Security>
            <ContactD />
          </Security>
        ),
      },
    ],
  },
]);
