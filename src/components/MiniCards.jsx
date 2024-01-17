import React from "react";

const MiniCards = ({ img, title, amount, bg }) => {
  return (
    <div className="flex gap-2 bg-white rounded-lg px-2 py-1 flex-1">
      <div className={`${bg} flex justify-center items-center p-1 rounded-lg`}>
        <img src={img} />
      </div>
      <div className="flex flex-col">
        <div className="text-[#949494] text-[8px]">{title}</div>
        <div className="text-text text-[10px]">{amount}</div>
      </div>
    </div>
  );
};

export default MiniCards;
