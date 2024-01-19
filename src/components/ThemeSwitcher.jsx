import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import useTheme from "../hook/useTheme.js";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const  { theme , toggleTheme } = useTheme()


  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
};

export default ThemeSwitcher;