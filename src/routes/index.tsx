import React, { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layout/dashboard/index.tsx";
import MainLayout from "../layout/main/index.tsx";
import { DEFAULT_PATH } from "../config.tsx";
import GeneralApp from "../pages/dashboard/generalApp.tsx";
import Group from "../pages/dashboard/group.tsx";
import Call from "../pages/dashboard/call.tsx";
import Profile from "../pages/dashboard/profile.tsx";
import Settings from "../pages/dashboard/settings.tsx";

const Router = () => {
  const Register = lazy(() => import("../pages/auth/register.tsx"));
  const Login = lazy(() => import("../pages/auth/login.tsx"));
  const Page404 = lazy(() => import("../pages/404.tsx"));

  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Navigate to={DEFAULT_PATH} replace /> },
        { path: "app", element: <GeneralApp /> },
        { path: "group", element: <Group /> },
        { path: "call", element: <Call /> },
        { path: "settings", element: <Settings /> },
        { path: "profile", element: <Profile /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
};
export default Router;
