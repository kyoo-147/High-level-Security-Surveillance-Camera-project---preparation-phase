import React from "react";
import { MdCameraswitch, MdDashboard } from "react-icons/md";
import { GrDirections } from "react-icons/gr";
import MenuLink from "./MenuLink.jsx";

const MENU_ITEMS = [
  {
    title: "Trang",
    list: [
      // {
      //   path: "/dashboard",
      //   icon: <MdDashboard />,
      //   title: "Trang chủ",
      // },
      {
        path: "/camera",
        icon: <MdCameraswitch />,
        title: "Quản lý Camera",
      },
    ],
  },
  // {
  //   title: "Khác",
  //   list: [
  //     {
  //       path: "/analytics",
  //       icon: <MdDashboard />,
  //       title: "Thống kê",
  //     },
  //   ],
  // },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        href="#"
        className="mb-5 mt-4 flex items-center justify-center"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="me-3 h-7 sm:h-10"
          alt="Flowbite Logo"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            Traffico
          </span>
          <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
            Dashboard
          </span>
        </div>
      </a>
      <ul className={`list-none`}>
        {MENU_ITEMS.map((item, index) => (
          <li key={index}>
            <span className="my-3 block text-xs font-bold text-gray-500">
              {item.title}
            </span>
            {item.list.map((subItem, index) => (
              <MenuLink key={index} items={subItem} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
