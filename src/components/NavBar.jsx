import { useLocation } from "react-router-dom";
import { MdNotifications, MdOutlineChat } from "react-icons/md";
import { useAuth } from "../context/FirebaseAuthContext.jsx";
import AvatarDropdown from "./AvatarDropdown.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

const NavBar = () => {
  const { pathname } = useLocation();

  const { logout, user } = useAuth();
  return (
    <div
      className={`header  flex items-center justify-between rounded-[10px]  border-gray-50  px-5 py-3 dark:bg-gray-800`}
    >
      <div
        className={`text-lg font-semibold capitalize text-gray-700 dark:text-white`}
      >
        {pathname.split("/").pop()}
      </div>
      <div className={`flex items-center gap-5 text-gray-500`}>
        {/*</div>*/}
        <div className={`flex items-center gap-5`}>
          <ThemeSwitcher />
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600`}
          >
            <MdOutlineChat
              className={`text-gray-600 dark:text-gray-400`}
              size={20}
            />
          </div>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600`}
          >
            <MdNotifications size={20} />
          </div>
          <AvatarDropdown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
