import React, { FC, useMemo } from "react";
import { Layout, Menu, SiderProps } from "antd";
import useWindowDimensions from "../../utils/useWindowsDimensions";
import { MenuItem } from "../Routes/menusItems";
import "./sider.scss";
const { Sider } = Layout;

interface SideBarProps {
  collapsed: boolean;
  onCollapse(value: boolean): void;
  menuItems: MenuItem[];
}

const SideBar: FC<SideBarProps> = ({ collapsed, onCollapse, menuItems }) => {
  const { width: windowWidth } = useWindowDimensions();

  const breakpointParams: SiderProps =
    windowWidth <= 1024 ? { breakpoint: "lg", collapsedWidth: "0" } : {};

  return (
    <Sider
      {...breakpointParams}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className="sider-class"
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={["dashboard"]}
        mode="inline"
        items={menuItems}
      />
    </Sider>
  );
};

export default SideBar;
