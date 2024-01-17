import React, { useState } from "react";
import TableRow from "./TableRow";
import { products } from "../../data";

const ProductTable = ({ onCheckBoxClicked, onCheckBoxUnchecked }) => {
  const [showFilterDropDown, setShowFilterDropDow] = useState(false);
  const onFilterClick = () => {
    setShowFilterDropDow(!showFilterDropDown);
  };
  const filterDropDownList = (
    <div className="ease-in border-[1px] border-solid border-[#EFF1F4] absolute right-20 px-1 rounded-b-lg text-sm text-text cursor-pointer bg-white">
      <ul>
        <li className="bottom-gray p-2 hover:bg-secondary">Name</li>
        <li className="bottom-gray p-2 hover:bg-secondary">Product Id</li>
        <li className="bottom-gray p-2 hover:bg-secondary">Category</li>
        <li className="bottom-gray p-2 hover:bg-secondary">Stock</li>
        <li className="p-2 hover:bg-secondary">Price</li>
      </ul>
    </div>
  );
  return (
    <div className="relative">
      <div className="border-[1px] border-solid border-[#EFF1F4] flex items-center justify-between rounded-lg px-1 py-2">
        <div className="flex items-center ">
          <div>
            <img src="/Search.svg" className="cursor-pointer p-2" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Product by name, Product ID or any related keywords"
              className="text-xs xl:text-sm w-96  py-2"
            />
          </div>
        </div>
        <div className="flex gap-1">
          <div
            className="mr-2 flex items-center justify-center border-[1px] border-solid border-[#EFF1F4] rounded-lg px-2 py-1 cursor-pointer"
            onClick={onFilterClick}
          >
            <div className="flex gap-2">
              <img src="/element-1.svg" />
              <div className="text-sm text-text">Filter</div>
            </div>
          </div>
          <div>
            <img
              src="/element-2.svg"
              className="p-1 rounded-lg border-[1px] border-solid border-[#EFF1F4] bg-[#EFF1F4] flex items-center justify-center"
            />
          </div>
          <div className="p-1 rounded-lg border-[1px] border-solid border-[#EFF1F4] flex items-center justify-center">
            <img src="/element-3.svg" />
          </div>
        </div>
      </div>
      {showFilterDropDown ? filterDropDownList : null}
      <div className="mt-4 border-[1px] border-solid border-[#EFF1F4] rounded-lg">
        <table className="w-full">
          <thead className="text-sm text-text bg-[#F8F8F8] text-left">
            <tr>
              <th className="pl-4">
                <input
                  type="checkbox"
                  value={"checkBox"}
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary   focus:ring-2 "
                />
              </th>
              <th scope="col" className="font-thin pr-8 pl-2 py-2 ">
                Name
              </th>
              <th scope="col" className="font-thin pr-6 pl-2 py-2">
                Products Id
              </th>
              <th scope="col" className="font-thin pr-6 pl-2 py-2">
                Category
              </th>
              <th scope="col" className="font-thin pr-6 pl-2 py-2">
                Stock
              </th>
              <th scope="col" className="font-thin pr-6 pl-2 py-2">
                Price
              </th>
              <th scope="col" className="font-thin pr-6 pl-2 py-2"></th>
            </tr>
          </thead>
          <tbody className="text-sm text-left">
            {products.map((product) => (
              <TableRow
                {...product}
                onCheckBoxClicked={onCheckBoxClicked}
                onCheckBoxUnchecked={onCheckBoxUnchecked}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
