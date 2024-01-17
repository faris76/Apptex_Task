import React from "react";

const SidebarButton = ({ name, img }) => {
  return (
    <div className="flex text-pureWhite items-center gap-2 py-2 px-2 rounded-lg text-xs xl:text-sm shadow">
      <div>
        <img src={img} />
      </div>
      <div>{name}</div>
    </div>
  );
};

export default SidebarButton;
