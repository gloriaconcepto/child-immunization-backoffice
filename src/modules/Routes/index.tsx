import React, { useEffect, useState } from "react";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useRoutes
} from "react-router-dom";
import { Layout } from "antd";
import { nonProtectedRoutes, protectedRoutes } from "./routes";
import menuItems from "./menusItems";
import ProtectedRoute from "./protectedRoute";
import "./layout.scss";
import SideBar from "../Sidebar";
import {useAuth } from "../../shared/authContext";
// import Layout as cous from "../Layout";
const { Header,Content } = Layout;

const MainApp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
 
  const {authenticated} = useAuth();
  const elements = useRoutes(protectedRoutes)
 
  return (
    < >
   
      <Routes>
        <Route path="/" element={nonProtectedRoutes.loginComponent.element} />
        <Route
          path={"/layout/*"}
          element={
            <ProtectedRoute isSignedIn={authenticated}>
              <Layout className="main-wrapper">
                <SideBar
                  collapsed={collapsed}
                  onCollapse={(value) => setCollapsed(value)}
                  menuItems={menuItems}
                />
                <Layout>
                  <Header className="header"></Header>
                  <Content className="containter">
                  {elements}
                  </Content>
            
             
          
                </Layout>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </>
  );
};
export default MainApp;
