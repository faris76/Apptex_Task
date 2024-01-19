import React from "react";

const ProductDetail = () => {
  return (
    <div>
      <div className=" text-heading font-bold text-xl ps-4 mt-6">
        Products Detail
      </div>
      <div className="grid grid-cols-2 w-[750px] mt-20 ml-16 gap-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="grid col-span-4 mb-4">
            <img src="/Product1.png" />
          </div>
          <div>
            <img src="/thumbnail1.png" />
          </div>
          <div>
            <img src="/thumbnail2.png" />
          </div>
          <div>
            <img src="/thumbnail3.png" />
          </div>
          <div>
            <img src="/thumbnail4.png" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-col gap-[2px] bottom-gray-2 pb-4 mb-4">
              <div className="font-bold text-2xl text-text">
                Fair lovely Cream
              </div>
              <div className="text-[#949494] font-[600] text-normal">
                Face Care <span className="font-thin text-xs">(Category)</span>
              </div>
            </div>
            <div className="text-xs bottom-gray-2 pb-4 mb-4">
              <div className="text-[#9A9A9A] mb-2">Description</div>
              <div className="text-text">
                Sollicitudin vulputate felis lectus neque nam fermentum aliquam.
                Accumsan nulla lectus massa id feugiat. At lorem sodales
                porttitor semper. Metus eleifend et nunc in malesuada eget nisl
                eget. Lectus erat sit aenean facilisi quis. Amet montes sapien
                enim ut.{" "}
                <span className="text-[#EF6A1F] cursor-pointer">More...</span>
              </div>
            </div>
            <div className="bottom-gray-2 pb-4 mb-4s">
              <div className="text-[#9A9A9A] text-xs mb-2">Price</div>
              <div>
                <span className="font-bold text-xl mr-2">$535</span>
                <span className="text-[#9A9A9A] line-through">$600</span>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col justify-between gap-2">
                <div className="text-[#9A9A9A] text-xs">Sold</div>
                <div>11</div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-[#9A9A9A] text-xs">In Stock</div>
                <div>29</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-[#FF5757] text-xs text-white w-42 px-6 py-3 flex items-center justify-center rounded-xl cursor-pointer ">
              Add Stock
            </div>
            <div className="bg-primary text-xs text-white w-42 px-4 py-3 flex items-center justify-center rounded-xl cursor-pointer focus:ring-4 focus:ring-primary">
              Delete Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
