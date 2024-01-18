import React, { useState } from "react";

const MyModal = ({ setShowModal }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-[520px] flex flex-col">
        <div className="flex justify-between items-center bottom-gray pb-2">
          <h3 className="capitalize font-[600] text-heading text-xl">
            update products quantities
          </h3>
          <div
            className="bg-[#E5E5E5] rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <img src="/close.svg" />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <input
            type="number"
            className="w-36 border-[1px] border-[#0000001a] rounded-lg"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div className="bg-primary rounded-lg text-white p-2 font-medium">
            Add Quantity
          </div>
        </div>
        <div className="mt-6 font-[600] text-sm">
          3 Variants Will Be Changed
        </div>
        <div className="text-[#585858] text-xs mt-3">
          <div className="flex items-center justify-between">
            <div>Short T-Shirt</div>
            <div className="flex items-center">
              <div className="text-black font-bold">100</div>
              <div>
                <img src="/arrow.svg" />
              </div>
              <div className="text-primary font-bold">
                {100 + Number(quantity)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>Hair Dryer</div>
            <div className="flex items-center">
              <div className="text-black font-bold">100</div>
              <div>
                <img src="/arrow.svg" />
              </div>
              <div className="text-primary font-bold">
                {100 + Number(quantity)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>Beard Machine</div>
            <div className="flex items-center">
              <div className="text-black font-bold">100</div>
              <div>
                <img src="/arrow.svg" />
              </div>
              <div className="text-primary font-bold">
                {100 + Number(quantity)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-4">
          <div
            onClick={() => {
              setShowModal(false);
            }}
            className="bg-[#FF5757] text-white h-9 w-24 rounded-lg cursor-pointer font-[600] text-sm flex justify-center items-center"
          >
            Cancel
          </div>
          <div
            onClick={() => {
              setShowModal(false);
            }}
            className="bg-primary text-white h-9 w-24 rounded-lg cursor-pointer font-[600] text-sm flex justify-center items-center"
          >
            Done
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
