import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
} from "recharts";
import Data from "../data";
import "./Activity.css";

const ActivityGraph = ({ CustomTooltip }) => {
  const handleBarClick = (data) => {
    console.log(data);
  };

  return (
    //? Creating Bars
    <ResponsiveContainer width="100%" aspect="7">
      <BarChart data={Data()} outerRadius={10} onClick={handleBarClick}>
        <XAxis
          dataKey="id"
          stroke="#9a9a9a"
          interval={"preserveStartEnd"}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="height"
          stroke="#9a9a9a"
          interval={"preserveStartEnd"}
          domain={[0, 750]}
          tickFormatter={(value) => (value <= 0 ? 0 : value + " m")}
          axisLine={false}
          tickLine={false}
        />
        <CartesianGrid
          stroke="#e0dfdf"
          vertical={false}
          horizontal={true}
          strokeWidth={0.6}
        />
        <Bar
          barCategoryGap={10}
          barSize={15}
          dataKey="allowed"
          stackId="a"
          fill="rgb(0, 221, 118)"
          radius={[0, 0, 15, 15]}
          background={{ fill: "#5590ff13" }}
        />{" "}
        <Bar
          barCategoryGap="10%"
          barSize={15}
          dataKey="blocked"
          stackId="a"
          fill="rgb(255, 19, 129)"
          radius={[10, 10, 0, 0]}
        ></Bar>
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "blue", opacity: 0 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityGraph;
