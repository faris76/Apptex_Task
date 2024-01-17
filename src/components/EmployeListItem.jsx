import React from "react";

const EmployeListItem = ({ img, name, email }) => {
  return (
    <div className="bottom-gray flex gap-2 py-2">
      <div>
        <img src={img} className="w-8 xl:w-9" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="text-text text-xs xl:text-sm">{name}</div>
        <div className="text-[#949494] text-[10px] xl:text-xs">{`${
          email.length > 22 ? email.substr(1, 20) + "..." : email
        }`}</div>
      </div>
    </div>
  );
};

export default EmployeListItem;
