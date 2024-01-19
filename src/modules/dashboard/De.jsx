import Title from "./Title"
import { MdCameraAlt, MdOutlineVisibility } from "react-icons/md";
import { CAMERA_DATA } from "../../assets/data/camera.js";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setHideMap } from "../../redux/slices/goongSlice.js";
import { CONTENT } from "../../assets/data/content.js";
import MapBox from "../../components/MapBox.jsx";
import { useState } from "react";
import Details from "./Details.jsx";
import { getContentById } from "../../utils/getContent.js";

const De = () => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState('')
  const viewDetail = (id) => {
    const content = getContentById(id);
    setShowDetails(content)
  }
  return (
    <div
      className={`mb-5  flex w-full flex-col rounded-[10px]  border-gray-300 bg-gray-50 p-5 dark:border-gray-700  dark:bg-gray-800 `}
    >
      <div className={`flex items-center justify-between`}>
        <Title title={`UBND TỈNH PHÚ YÊN`} />
        <button
          onClick={() => dispatch(setHideMap(false))}
          className={`flex items-center gap-2 text-sm text-blue-500`}>
          <IoClose size={20} />
        </button>
      </div>
      {/*desciption*/}
      <div className={`text-sm text-gray-500 dark:text-gray-300`}>
        07 Độc Lập, Phường 6, Tuy Hòa, Phú Yên
      </div>

      {/*List Direction*/}

      {CONTENT.map((item) => (
        <button onClick={() => viewDetail(item.id)}>
          <ul className="mt-5 max-w-md divide-y divide-gray-200 dark:divide-gray-700 w-full ">
            <li className=" mb-3 rounded-lg border-gray-200 bg-white p-5  dark:border-gray-700 dark:bg-gray-800 sm:py-4 w-full hover:bg-gray-100">
              {item.idStatus === "Bình thường" ?
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <FaArrowRight color={"#3B82F6"} size={30} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-left truncate text-sm font-medium uppercase text-gray-900 dark:text-white">
                      {item.content}
                    </p>
                    <div className={`flex items-center space-x-2`}>
                      <MdOutlineWarning color={"#F59E0B"} size={12} />
                      <p className="truncate text-left text-sm text-green-700  dark:text-gray-400">
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div> : <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <FaArrowRight color={"#3B82F6"} size={30} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-left truncate text-sm font-medium uppercase text-gray-900 dark:text-white">
                      {item.content}
                    </p>
                    <div className={`flex items-center space-x-2`}>
                      <MdOutlineWarning color={"#F59E0B"} size={12} />
                      <p className="truncate text-left text-sm text-red-500  dark:text-gray-400">
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div>}
            </li>
          </ul>
        </button>
      ))}
      {showDetails && <Details showDetails={showDetails} />}
    </div>

  );
}

export default De