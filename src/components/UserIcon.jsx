import React from "react";

const UserIcon = () => {
  return (
    <div className="text-pureWhite flex items-center text gap-1 p-2 mb-12">
      <div className="bg-[#4ECCA3] flex justify-center items-center rounded-full w-8 h-8 font-bold">
        I
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xs xl:text-sm">Ismail Khan</div>
        <div className="text-[10px] xl:text-xs">Brandius Mart</div>
      </div>
    </div>
  );
};

export default UserIcon;
