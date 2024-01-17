import React from "react";
import Logo from "../assets/logo.png";
import SidebarButton from "./SidebarButton";

import DashboardIcon from "../assets/Graph.png";
import TodoIcon from "../assets/todo.svg";
import OrdersIcon from "../assets/orders.svg";
import ProductIcon from "../assets/products.svg";
import EmployeeIcon1 from "../assets/employs1.png";
import ServicesIcon from "../assets/services.png";
import EmployeeIcon2 from "../assets/employs2.svg";
import PayrollIcon from "../assets/payroll.png";

import { Link, useLocation } from "react-router-dom";
import UserIcon from "./UserIcon";

const Sidebar = () => {
  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];

  const Linkness = (type = "") => {
    let classes = "";
    if (type === subpage) {
      classes += "bg-primary";
    }
    return classes;
  };

  return (
    <div className="bg-pureBlack w-full h-[100vh] flex flex-col justify-between items-center">
      <div className="flex justify-center items-center pt-16 flex-col gap-16">
        <img src={Logo} alt="" />
        <div className="w-full px-4 flex flex-col gap-2">
          <Link to={"/"} className={`rounded-lg ${Linkness("")}`}>
            <SidebarButton name={"Dashboard"} img={DashboardIcon} />
          </Link>
          <SidebarButton name={"Todos"} img={TodoIcon} />

          <SidebarButton name={"Orders"} img={OrdersIcon} />

          <Link
            to={"/products"}
            className={`rounded-lg ${Linkness("products")}`}
          >
            <SidebarButton name={"Products"} img={ProductIcon} />
          </Link>
          <SidebarButton name={"Employs"} img={EmployeeIcon1} />
          <SidebarButton name={"Services"} img={ServicesIcon} />
          <SidebarButton name={"Employs"} img={EmployeeIcon2} />
          <SidebarButton name={"Payroll"} img={PayrollIcon} />
        </div>
      </div>
      <UserIcon />
    </div>
  );
};

export default Sidebar;
