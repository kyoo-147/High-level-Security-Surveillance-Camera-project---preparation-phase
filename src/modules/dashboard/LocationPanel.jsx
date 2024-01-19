import Title from "./Title.jsx";
import AutoCompleteInput from "../../components/input/AutoCompleteInput.jsx";
import { MdOutlineLocationSearching } from "react-icons/md";
import FilterBox from "./FilterBox.jsx";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  autoCompleteApiThunk,
  getDirectionThunk,
  getPlaceDetailThunk, setHideMap
} from "../../redux/slices/goongSlice.js";
import clsx from "clsx";

const LocationPanel = () => {
  const dispatch = useDispatch();

  const { origin, destination } = useSelector((state) => state.goong);
  // console.log(origin);
  const handleOriginChange = (value) => {
    dispatch(
      autoCompleteApiThunk({
        type: "origin",
        value,
      }),
    );
  };

  const handleDestinationChange = (value) => {
    dispatch(
      autoCompleteApiThunk({
        type: "destination",
        value,
      }),
    );
  };

  const handleSelectOrigin = (placeId) => {
    dispatch(
      getPlaceDetailThunk({
        type: "origin",
        placeId,
      }),
    );
  };

  const handleSelectDestination = (placeId) => {
    dispatch(
      getPlaceDetailThunk({
        type: "destination",
        placeId,
      }),
    );
  };

  const handleDirection = (e) => {
    dispatch(setHideMap(true))
    e.preventDefault();
    console.log("origin:", origin.coordinates.latitude, origin.coordinates.longitude);
    console.log("destination:", destination.coordinates.latitude, destination.coordinates.longitude);
    dispatch(
      getDirectionThunk({
        origin: `${origin.coordinates.latitude},${origin.coordinates.longitude}`,
        destination: `${destination.coordinates.latitude},${destination.coordinates.longitude}`,
      }),
    );
  };

  const handleOriginChangeDebounced = debounce(handleOriginChange, 500);
  const handleSearchDestinationDebounced = debounce(
    handleDestinationChange,
    500,
  );

  return (
    <div
      className={`flex w-96 flex-none flex-col gap-5 rounded-[10px] bg-gray-50 dark:border-gray-700 dark:bg-gray-800`}
    >
      <div
        className={`mb-5  flex flex-col rounded-[10px] border-gray-300  bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800 `}
      >
        <Title title={`Tìm đường`} />
        <form
          onSubmit={handleDirection}
          className={`flex w-full flex-col gap-3`}
        >
          <div className="r flex items-center justify-center gap-2">
            <AutoCompleteInput
              items={origin ? origin.options : []}
              handleSearch={handleOriginChangeDebounced}
              handleSelect={handleSelectOrigin}
              placeholder={"Điểm xuất phát"}
            />
            <button className="rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <MdOutlineLocationSearching />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <AutoCompleteInput
              placeholder={"Điểm đến"}
              items={destination ? destination.options : []}
              handleSearch={handleSearchDestinationDebounced}
              handleSelect={handleSelectDestination}
            />
            <button className="rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <MdOutlineLocationSearching />
            </button>
          </div>
          <button
            type={`submit`}
            disabled={
              !origin.selected ||
              !destination.selected ||
              origin.selected.place_id === destination.selected.place_id
            }
            className={clsx(
              "mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              {
                ["cursor-not-allowed opacity-50"]:
                  !origin.selected ||
                  !destination.selected ||
                  origin.selected.place_id === destination.selected.place_id,
              },
            )}
          >
            Tìm đường
          </button>
        </form>
        <Title title={`Bộ lọc`} />
        <FilterBox />
      </div>
    </div>
  );
};

export default LocationPanel;
