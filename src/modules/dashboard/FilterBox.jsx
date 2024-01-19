import FilterBoxItem from "./FilterBoxItem.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices/storageSlice.js";
import { MdCameraAlt } from "react-icons/md";

const FILTER_ITEMS = [
  {
    id: 1,
    icon: <MdCameraAlt size={30} className={`text-blue-500`} />,
    title: `Camera`,
    description: `Hiển thị camera quan sát ở các khu vực ngã tư`,
  },
  // {
  //   id: 2,
  //   icon: <MdCameraAlt size={30} color={`#10B981`} />,
  //   title: "Tình trạng giao thông",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
  // {
  //   id: 3,
  //   icon: <MdCameraAlt size={30} color={`#10B981`} />,
  //   title: "Cảnh báo",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // },
];

const FilterBox = () => {
  const { filter } = useSelector((state) => state.storage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setFilter(
        Object.fromEntries(FILTER_ITEMS.map((item) => [item.id, false])),
      ),
    );
  }, [FILTER_ITEMS, dispatch]);

  const onChange = (id) => {
    console.log(filter);
    dispatch(setFilter({ ...filter, [id]: !filter[id] }));
  };

  return (
    <ul className="flex flex-col gap-5">
      {FILTER_ITEMS.map((item, index) => {
        return (
          <FilterBoxItem
            key={item.id}
            item={item}
            checked={filter[item.id]}
            onChange={onChange}
          />
        );
      })}
    </ul>
  );
};

export default FilterBox;
