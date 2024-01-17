import React from "react";

const ProductDetailListItem = ({ item, img, price, sold }) => {
  return (
    <div className="bottom-gray flex items-center justify-between mt-2">
      <div className="flex gap-3 py-1">
        <img src={img} className="w-8 h-8 xl:w-9 xl:h-9" />
        <div className="flex flex-col gap-1">
          <div className="text-[10px] xl:text-xs font-bold text-[#151D48]">
            {item}
          </div>
          <div className="text-[8px] xl:text-[10px] text-[#737791]">
            ${price}
          </div>
        </div>
      </div>
      <div className="text-[10px] xl:text-xs font-bold text-[#151D48]">
        {sold} Sold
      </div>
    </div>
  );
};

export default ProductDetailListItem;
