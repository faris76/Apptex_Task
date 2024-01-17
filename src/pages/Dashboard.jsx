import NotificationIcon from "../assets/notifications.svg";
import BarGraph from "../components/BarGraph";
import EmployeesList from "../components/EmployeesList";
import LineGraph from "../components/LineGraph";
import ProductDetailsList from "../components/ProductDetailsList";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className=" basis-[75%] px-4 py-6 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-xl capitalize font-[600] text-heading">
            dashboard overview
          </h1>
          <div className="w-8 h-8 rounded-lg bg-secondary flex justify-center items-center">
            <img src={NotificationIcon} />
          </div>
        </div>
        <div className="grid grid-cols-2 h-full gap-4 mt-8">
          <div className="bg-secondary rounded-lg">
            <BarGraph />
          </div>
          <div className="row-span-2 bg-secondary rounded-lg">
            <ProductDetailsList />
          </div>
          <div className="bg-secondary rounded-lg">
            <LineGraph />
          </div>
        </div>
      </div>

      <div className="basis-[25%]">
        <EmployeesList />
      </div>
    </div>
  );
};

export default Dashboard;
