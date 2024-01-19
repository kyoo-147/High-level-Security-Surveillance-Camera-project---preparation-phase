import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdLogout, MdPublic } from "react-icons/md";
import { useAuth } from "../context/FirebaseAuthContext.jsx";
import avatar from "../assets/images/noavatar.png";

const items = [
  {
    title: "Thông tin cá nhân",
    icon: <MdPublic className="mr-2 h-5 w-5" />,
  },
  {
    title: "Đăng xuất",
    icon: <MdLogout className="mr-2 h-5 w-5" />,
  },
];

const AvatarDropdown = () => {
  const { logout, user } = useAuth();

  const handleDropdown = (item) => {
    switch (item.title) {
      case "Thông tin cá nhân":
        break;
      case "Đăng xuất":
        logout();
        break;
      default:
        break;
    }
  };
  return (
    <div className="relative z-10 inline-block text-left">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <img
            className={`inline-block h-8 w-8 rounded-full`}
            src={avatar}
            alt={``}
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800">
            <div className="px-1 py-1 ">
              {items.map((item) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => handleDropdown(item)}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-3 py-3 text-sm dark:text-gray-300`}
                    >
                      {item.icon}
                      {item.title}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AvatarDropdown;

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}
