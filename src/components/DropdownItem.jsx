

const DropdownItem = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    >
      {children}
    </button>
  );
}