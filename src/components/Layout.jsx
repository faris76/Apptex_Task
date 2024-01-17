import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="basis-[14%]">
        <Sidebar />
      </div>
      <div className="basis-[86%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
