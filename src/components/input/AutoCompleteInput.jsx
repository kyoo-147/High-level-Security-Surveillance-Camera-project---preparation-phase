import { Fragment, useMemo, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const AutoCompleteInput = ({
  items,
  handleSearch,
  handleSelect,
  placeholder,
}) => {

  const { isLoadingOptions} = useSelector((state) => state.goong);

  const [selected, setSelected] = useState(undefined);
  const [query, setQuery] = useState(undefined);
  const filteredPeople = useMemo(() => {
    // chờ có iteam rồi sẽ chạy
    if (items.length === 0) return [];
    return items.filter((value) =>
      value.label.toLowerCase().includes(query?.toLowerCase()),
    );
  }, [items, query]);

  return (
    <>
      <Combobox
        className="w-full"
        value={selected}
        onChange={(person) => {
          setSelected(person);
          handleSelect(person.value);
        }}
      >
        <div className="relative mt-1">
          <div className="flex w-full items-center justify-between rounded-md border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <Combobox.Input
              placeholder={placeholder}
              className="block w-full rounded-md border-0 px-3 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
              displayValue={(person) => person.label}
              onChange={(event) => {
                setQuery(event.target.value);
                handleSearch(event.target.value);
              }}
            />
            <Combobox.Button className="relative inline-flex flex-shrink-0 items-center rounded-r-md bg-transparent px-2 py-2 text-gray-400 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring-0">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md  bg-gray-50 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
            dark:bg-gray-800 dark:text-white
            ">
              {isLoadingOptions ? (
                <span className="block px-3 py-2 text-gray-900 dark:text-white">
                  Đang tìm kiếm...
                </span>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.place_id}
                    className={({ active }) =>
                      clsx(
                        "relative cursor-pointer select-none p-3 text-gray-900",
                        active ? "bg-gray-200" : "",
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate  dark:text-white
                          ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3
                             ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
};

AutoCompleteInput.prototype = {
  items: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AutoCompleteInput;
