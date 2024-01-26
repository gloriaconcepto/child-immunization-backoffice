import React from "react";
import { RouteObject } from "react-router-dom";
import DashBoard from "../Dashboard";
import LoginPage from "../Login";
import GuardianManagement from "../Guardian";

interface RouteInfo {
    path: string;
    element: React.ReactNode;
  }
 const baseRoute='/layout' 
 export const mainProtectedRoute={
    home: {
        base:baseRoute,
        relativePath: "/layout",
        path: `${baseRoute}`,
    },
    guardian: {
        base:baseRoute,
        relativePath: "/guardian",
        path: `${baseRoute}/guardian`,
    },
 }
export const protectedRoutes: RouteObject[] = [
  {
    path: mainProtectedRoute.home.path,
    element: <DashBoard/>
  },
  {
    path: mainProtectedRoute.guardian.path,
    element: <GuardianManagement/>
  },
];

export const nonProtectedRoutes: Record<string,RouteInfo>= {
  loginComponent: {
    path: ".",
    element: <LoginPage />
  }
};
