import React, { useState } from "react";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const [checkBoxClicked, setCheckBoxClicked] = useState(false);

  const onCheckBoxClicked = () => {
    setCheckBoxClicked(true);
  };

  const onCheckBoxUnchecked = () => {
    // Check if any checkbox is still checked
    const anyCheckboxChecked = document.querySelector(
      'input[type="checkbox"]:checked'
    );

    // If none are checked, set checkBoxClicked to false
    if (!anyCheckboxChecked) {
      setCheckBoxClicked(false);
    }
  };

  const popUp = (
    <div className="border-[1px] px-4 rounded-lg py-3 border-solid border-[#EFF1F4] bg-white fixed bottom-10 right-32 card-shadow capitalize flex gap-2 text-xs">
      <div className="border-[1px] border-solid border-[#EFF1F4] px-2 py-2 rounded-lg cursor-pointer">
        add product to purchase
      </div>
      <div className="border-[1px] border-solid border-[#EFF1F4] px-2 py-2 rounded-lg cursor-pointer">
        delete products
      </div>
      <div className="border-[1px] border-solid border-[#EFF1F4] px-2 py-2 rounded-lg cursor-pointer">
        add stock
      </div>
    </div>
  );
  return (
    <div className="relative h-[100vh] overflow-scroll">
      {/* <div className="absolute bottom-0">sdfsdf</div> */}
      <div className="ml-4 mr-16 flex flex-col">
        <div className="flex justify-between items-center my-6">
          <div className="text-xl font-bold">Products</div>
          <div className="bg-primary  text-white flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer">
            <div>
              <img
                src="/plus.svg"
                className="border-dotted border-[1px] border-white rounded-full"
              />
            </div>
            <div className="text-xs">New Product</div>
          </div>
        </div>
        <div>
          <ProductTable
            onCheckBoxClicked={onCheckBoxClicked}
            onCheckBoxUnchecked={onCheckBoxUnchecked}
          />
        </div>
      </div>
      {checkBoxClicked ? popUp : null}
    </div>
  );
};

export default Products;
