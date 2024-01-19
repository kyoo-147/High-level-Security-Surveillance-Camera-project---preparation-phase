import PropTypes from "prop-types";
import clsx from "clsx";

const FilterBoxItem = ({ item, checked, onChange }) => {
  // console.log(item.id);
  return (
    <li>
      <input
        type="checkbox"
        id={`react-option-${item.id}`}
        checked={checked}
        onChange={() => onChange(item.id)}
        className="peer hidden"
        required=""
      />
      <label
        htmlFor={`react-option-${item.id}`}
        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"
      >
        {/*icon checked góc bên phải*/}
        <div className="relative block">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-500">
            {item.icon}
          </div>
          <div>
            <svg
              className={clsx(
                "absolute right-0 top-0 h-5 w-5 text-blue-600 transition-all duration-300 ease-in-out",
                { "opacity-0": !checked },
                { "opacity-100": checked },
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.293 5.293L9 15.586l-4.293-4.293-1.414 1.414L9 18.414l11.707-11.707-1.414-1.414z"
              />
            </svg>
          </div>
          <div className="mt-2 w-full text-lg font-semibold">{item.title}</div>
          <div className="mt-1 text-gray-500">{item.description} </div>
        </div>
      </label>
    </li>
  );
};

FilterBoxItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterBoxItem;
