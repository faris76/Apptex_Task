import React from "react";

const TableRow = ({
  img,
  name,
  product_id,
  category,
  stock,
  price,
  id,
  onCheckBoxClicked,
  onCheckBoxUnchecked,
}) => {
  const stockStyle = stock < 1 ? "bg-[#FDECEC]" : "";
  const isStockZero = stock < 1;
  return (
    <tr className="bottom-gray text-text">
      <td className="pl-4">
        <input
          type="checkbox"
          value={id}
          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary   focus:ring-2 "
          onClick={() => {
            onCheckBoxClicked(), onCheckBoxUnchecked();
          }}
        />
      </td>
      <th scope="row" className="pr-8 pl-2 py-3">
        <div className="flex items-center gap-2">
          <img src={img} />
          <p className="font-medium text-xs">{name}</p>
        </div>
      </th>
      <td className="pr-8 pl-2 py-3">
        <p className="text-xs rounded-full flex items-center text-[#091E42] ">
          {product_id}
        </p>
      </td>
      <td className="pr-8 pl-2 py-3 text-sm">{category}</td>
      <td className="pr-8 pl-2 py-3 text-sm ">
        <p
          className={
            "text-xs rounded-full flex items-center justify-center " +
            stockStyle
          }
        >
          {isStockZero ? <img src="/_Dot.svg" className="m-1" /> : null}
          {stock}
        </p>
      </td>
      <td className="pr-8 pl-2 py-3 text-sm w-24">
        <p className="text-xs bg-[#F5F6F7] rounded-full flex items-center justify-center">
          ${price}
        </p>
      </td>
      <td className="pr-8 pl-2 py-3 text-sm">
        <img src="/more.svg" />
      </td>
    </tr>
  );
};

export default TableRow;
