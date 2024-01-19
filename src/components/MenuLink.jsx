import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const MenuLink = ({ items }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={items.path}

      className={clsx(
        "flex items-center gap-5 rounded-md p-5 text-gray-600 transition-colors duration-200 hover:text-gray-400",
        {
          ["bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"]:
            pathname === items.path,
        },
      )}
      exact
    >
      {items.icon}
      {items.title}
    </Link>
  );
};

MenuLink.defaultProps = {
  items: {
    path: "/",
    icon: "",
    title: "Menu Link",
  },
};

export default MenuLink;
