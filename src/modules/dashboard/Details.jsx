import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineWarning } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdArrowOutward, MdArrowUpward, MdArrowForward, MdArrowBack } from "react-icons/md";

const Details = (showDetails) => {
    return (
        <div className="mt-5 mb-3 rounded-lg border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:py-4 w-full">

            {showDetails.showDetails.idStatus === "Bình thường" ?
                <div>
                    <div className="flex space-x-3">
                        <div className=" text-lg antialiased font-bold uppercase text-green-700 dark:text-gray-300">
                            3 PHÚT
                        </div>
                        <div className="text-gray-500 text-lg justify-items-center">
                            (1,3 km)
                        </div>
                    </div>

                    <p className="text-gray-500 dark:text-gray-300">
                        {showDetails.showDetails.content}
                        <br />
                        {showDetails.showDetails.fact}
                    </p>
                    <div className="flex mt-4 space-x-5 items-center">
                        <MdOutlineWarning color={"#F59E0B"} size={30} />
                        <div className="truncate text-left text-sm items-center">
                            Thận trọng: đường đi bộ đôi khi không giống với thực tế
                        </div>
                    </div>
                    <div className="mt-4 text-base">
                        Tòa Án Nhân Dân Thành Phố Tuy Hòa
                    </div>
                    <div className={`text-sm text-gray-500 dark:text-gray-300 my-0`}>
                        80 Nguyễn Huệ, Phường 5, Tuy Hòa, Phú Yên, Việt Nam
                    </div>

                    <div className="flex mt-4 ml-1 space-x-7">
                        <MdArrowUpward size={25} />
                        <div className="truncate items-center text-left text-sm">
                            Đi về hướng Đông trên Nguyễn Huệ về phía ĐL Hùng Vương
                            <div className="flex mt-1 items-center space-x-5">
                                <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                <div className="text-blue-600 text-left text-sm"> Đi qua Bản Đồ Ăn Uống Phú Yên (ở bên phải cách 90m) </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex mt-4 ml-1 space-x-7">
                        <MdArrowOutward size={25} />
                        <div className="truncate items-center text-left text-sm">
                            Chếch sang phải tại Khách Sạn Oanh Linh vào Nguyễn Duẩn
                            <div className="flex mt-1 items-center space-x-5">
                                <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                <div className="text-blue-600 text-left text-sm"> Đi qua Thẩm Mỹ Thanh Phương (ở bên phải cách 23m) </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 ml-1 space-x-7">
                        <MdArrowForward size={25} />
                        <div className="truncate items-center text-left text-sm">
                            Rẽ phải tại Nhà riêng An Định vào Lê Duẩn
                            <div className="flex mt-1 items-center space-x-5">
                                <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                <div className="text-blue-600 text-left text-sm"> Đi qua Công Ty Tnhh Bệnh Viện Đa Khoa Bảo Sơn
                                    (ở bên trái cách 33m) </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 ml-1 space-x-7">
                        <MdArrowBack size={25} />
                        <div className="truncate items-center text-left text-sm">
                            Rẽ trái tại Đặc sản Phú Yên Phú An Nam vào Nguyễn Du

                            <div className="flex mt-1 items-center space-x-5">
                                <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                <div className="text-blue-600 text-left text-sm"> Đi qua Quán 77 Nguyễn Du (ở bên trái cách 26m)</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 ml-1 space-x-7">
                        <MdArrowForward size={25} />
                        <div className="truncate items-center text-left text-sm">
                            Rẽ phải vào Độc Lập
                            <div className="flex mt-1 items-center space-x-5">
                                <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                <div className="text-blue-600 text-left text-sm"> Điểm đến sẽ ở bên phải</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-base">
                        UBND Tỉnh Phú Yên
                    </div>
                    <div className={`text-sm text-gray-500 dark:text-gray-300 my-0`}>
                        07 Độc Lập, Phường 6, Tuy Hòa, Phú Yên
                    </div>
                </div>

                : <p>
                    <div>
                        <div className="flex space-x-3">
                            <div className=" text-lg antialiased font-bold uppercase text-red-700 dark:text-gray-300">
                                10 PHÚT
                            </div>
                            <div className="text-gray-500 text-lg justify-items-center">
                                (1,3 km)
                            </div>
                        </div>

                        <p className="text-gray-500 dark:text-gray-300">
                            {showDetails.showDetails.content}
                            <br />
                            {showDetails.showDetails.fact}
                        </p>
                        <div className="flex mt-4 space-x-5 items-center">
                            <MdOutlineWarning color={"#F59E0B"} size={30} />
                            <div className="truncate text-left text-sm items-center">
                                Thận trọng: đường đi bộ đôi khi không giống với thực tế
                            </div>
                        </div>
                        <div className="mt-4 text-base">
                            Tòa Án Nhân Dân Thành Phố Tuy Hòa
                        </div>
                        <div className={`text-sm text-gray-500 dark:text-gray-300 my-0`}>
                            80 Nguyễn Huệ, Phường 5, Tuy Hòa, Phú Yên, Việt Nam
                        </div>

                        <div className="flex mt-4 ml-1 space-x-7">
                            <MdArrowUpward size={25} />
                            <div className="truncate items-center text-left text-sm">
                            Đi về hướng Đông lên Nguyễn Huệ về phía ĐL Hùng Vương
                                <div className="flex mt-1 items-center space-x-5">
                                    <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                    <div className="text-blue-600 text-left text-sm"> Đi qua một vòng xuyến </div>
                                </div>
                                <div className="flex mt-1 items-center space-x-5">
                                    <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                    <div className="text-blue-600 text-left text-sm"> Đi qua Bản Đồ Ăn Uống Phú Yên (ở phía bên phải) </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex mt-4 ml-1 space-x-7">
                            <MdArrowForward size={25} />
                            <div className="truncate items-center text-left text-sm">
                            Rẽ phải vào Độc Lập
                                <div className="flex mt-1 items-center space-x-5">
                                    <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                    <div className="text-blue-600 text-left text-sm"> Đi qua Khách sạn Công Đoàn (ở phía bên phải) </div>
                                </div>
                                <div className="flex mt-1 items-center space-x-5">
                                    <RiErrorWarningFill color={"#0b62f5"} size={17} />
                                    <div className="text-blue-600 text-left text-sm">  Điểm đến sẽ ở bên phải </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-base">
                            UBND Tỉnh Phú Yên
                        </div>
                        <div className={`text-sm text-gray-500 dark:text-gray-300 my-0`}>
                            07 Độc Lập, Phường 6, Tuy Hòa, Phú Yên
                        </div>
                    </div>
                </p>}
        </div>
    )
}

Details.propTypes = {
    showDetails: PropTypes.object.isRequired
};

export default Details