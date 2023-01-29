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
  return (
    //? Creating Bars
    <ResponsiveContainer width="100%" aspect="6">
      <BarChart data={Data()} outerRadius={10}>
        <XAxis dataKey="id" stroke="#9a9a9a" interval={"preserveStartEnd"} />
        <YAxis
          dataKey="height"
          stroke="#9a9a9a"
          interval={"preserveStartEnd"}
          domain={[0, 1000]}
          tickFormatter={(value) => (value <= 0 ? 0 : value + " m")}
        />
        <CartesianGrid stroke="#e0dfdf" vertical={false} horizontal={true} />
        <Bar
          barSize={15}
          dataKey="allowed"
          strokeWidth={1}
          stackId="a"
          fill="rgb(0, 221, 118)"
          radius={[0, 0, 15, 15]}
          background={{ fill: "#5590ff13" }}
        />{" "}
        barGap={-1}
        <Bar
          barSize={15}
          dataKey="blocked"
          strokeWidth={1}
          stackId="a"
          fill="rgb(255, 19, 129)"
          radius={[10, 10, 0, 0]}
        ></Bar>
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "blue", opacity: 0.2 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityGraph;
