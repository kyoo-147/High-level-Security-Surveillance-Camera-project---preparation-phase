const Card = ({ icon, title, count, bg }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-[10px] bg-gray-50 p-5`}
    >
      <div className={`flex flex-col gap-2`}>
        <span className={`text-sm  uppercase text-gray-500`}>{title}</span>
        <span className={`text-2xl font-semibold`}>+ {count}</span>
      </div>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-[10px] ${bg}`}
      >
        {icon}
      </div>
    </div>
  );
};


export default Card;