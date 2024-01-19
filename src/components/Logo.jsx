const Logo = () => {
  return (
    <a href="#" className="mb-5 mt-4 flex items-center justify-center">
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
  );
};
export default Logo;
