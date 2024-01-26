import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { AppstoreOutlined, FolderOutlined } from "@ant-design/icons";
import { mainProtectedRoute } from "./routes";

export type MenuItem = Required<MenuProps>["items"][number];
const menuItems: MenuItem[] = [
    {
        key: "dashboard",
        icon: <AppstoreOutlined className="h-3 w-3 text-gray-400" />,
        label: <Link to={ mainProtectedRoute.home.path}>Dashboard</Link>,
    },
    {
        key: "guardian",
        icon: <AppstoreOutlined className="h-3 w-3 text-gray-400" />,
        label: "Guardian Management",
        children: [
            {
                key: "View-Guardians",
                label: (
                    <Link to={mainProtectedRoute.guardian.path}>
                       View Guardians
                    </Link>
                ),
            }
        ],
    },
]

export default menuItems    
    // children: [
    //     {
    //         key: "hey",
    //         label: 
    //     },
    // ],