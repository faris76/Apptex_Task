import React from "react";

const GridCard = ({
  imgBig,
  stock,
  price,
  name,
  onCheckBoxClicked,
  onCheckBoxUnchecked,
}) => {
  return (
    <div className="mb-4">
      <div className="relative">
        <img src={imgBig} />
        <input
          onClick={() => {
            onCheckBoxClicked(), onCheckBoxUnchecked();
          }}
          type="checkbox"
          className="absolute top-2 right-2 w-4 h-4 text-primary bg-white border-gray-300 rounded focus:ring-primary   focus:ring-2 "
        />
        <div className="bg-primary text-white absolute top-2 left-2 rounded-lg text-[10px] p-1">
          Women
        </div>
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="font-[600] text-xs">{name}</div>
        <div className="text-[10px] text-[#898989]">{stock} in Stock</div>
        <div className="font-[600] text-xs mt-2">${price}</div>
      </div>
    </div>
  );
};

export default GridCard;
