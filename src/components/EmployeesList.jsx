import { useState } from "react";
import { employsIn } from "../../data";
import { employsBreak } from "../../data";
import { employsOut } from "../../data";
import EmployeListItem from "./EmployeListItem";

const EmployeesList = () => {
  const [activeTab, setActiveTab] = useState("in");

  const onTabClick = (tab) => {
    setActiveTab(tab);
  };

  const activeStyle =
    " bg-primary text-white flex-1 py-[2px] xl:py-1 flex flex-col items-center justify-center";
  const inactiveStyle =
    "flex-1 py-[2px] xl:py-1 flex flex-col items-center justify-center";

  // Employees In
  const employeeIn = employsIn.map((employee) => (
    <EmployeListItem key={employee.id} {...employee} />
  ));
  // Employees at break
  const employeeBreak = employsBreak.map((employee) => (
    <EmployeListItem key={employee.id} {...employee} />
  ));

  //Employees Out
  const employeeOut = employsOut.map((employee) => (
    <EmployeListItem key={employee.id} {...employee} />
  ));
  return (
    <div className="bg-secondary w-full h-[100vh] px-4 pt-20">
      <div>
        <h2 className="text-text font-[600]">Employs</h2>

        {/* Tabs */}
        <div className="flex w-full text-[10px] xl:text-xs text-black  py-2 cursor-pointer">
          <div
            className={activeTab === "in" ? activeStyle : inactiveStyle}
            onClick={() => onTabClick("in")}
          >
            <div>In</div>
            <div>0{employeeIn.length}</div>
          </div>
          <div
            className={activeTab === "break" ? activeStyle : inactiveStyle}
            onClick={() => onTabClick("break")}
          >
            <div>Break</div>
            <div>0{employeeBreak.length}</div>
          </div>
          <div
            className={activeTab === "out" ? activeStyle : inactiveStyle}
            onClick={() => onTabClick("out")}
          >
            <div>Out</div>
            <div>0{employeeOut.length}</div>
          </div>
        </div>
        {/* Tabs End */}
        <div>
          {activeTab === "in" ? employeeIn : null}
          {activeTab === "break" ? employeeBreak : null}
          {activeTab === "out" ? employeeOut : null}
        </div>
        <div className="text-[10px] selection:xl:text-xs flex justify-center items-center py-4 cursor-pointer">
          View Detail
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
