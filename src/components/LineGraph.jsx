import { orders } from "../../data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MiniCards from "./MiniCards";

const formatYAxisValue = (value) => {
  if (value >= 1000) {
    return `${value / 1000}k`;
  }
  return value;
};

const LineGraph = () => {
  return (
    <div className="px-2 flex flex-col h-full justify-between">
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm xl:text-base font-[600] text-text">Orders</div>
        <div className="text-[10px] xl:text-xs flex gap-1 text-text">
          <div className="bg-primary text-white px-2 xl:px-3 py-1 xl:py-2 rounded-lg">
            This Month
          </div>
          <div className="bg-white px-2 xl:px-3 py-1 xl:py-2 rounded-lg">
            This Week
          </div>
          <div className="bg-white px-2 xl:px-3 py-1 xl:py-2 rounded-lg">
            Today
          </div>
        </div>
      </div>
      <div className="w-full h-52 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={orders}
            margin={{
              top: 0,
              right: 0,
              left: -30,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 0"
              vertical={false}
              horizontal={true}
              stroke="#F2F2F2"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={{ display: "none" }}
              tick={{ fontSize: 10, fill: "#434343" }}
            />
            <YAxis
              tickFormatter={formatYAxisValue}
              axisLine={false}
              tickLine={{ display: "none" }}
              padding={{ top: 10, bottom: 10 }}
              tick={{ fontSize: 10, fill: "#434343" }}
            />
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#1FA4EF"
              activeDot={{ r: 8 }}
              dot={false}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between gap-1 mb-4">
        <MiniCards
          img={"/Repeat.svg"}
          title={"Pending"}
          amount={28}
          bg={"bg-repeatBg"}
        />
        <MiniCards
          img={"/Unread.svg"}
          title={"Completed"}
          amount={40}
          bg={"bg-completedBg"}
        />
        <MiniCards
          img={"/money.svg"}
          title={"Revenue"}
          amount={"430k"}
          bg={"bg-revenueBg"}
        />
      </div>
    </div>
  );
};

export default LineGraph;
