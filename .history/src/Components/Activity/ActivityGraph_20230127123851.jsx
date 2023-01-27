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
import { useState } from "react";

const ActivityGraph = ({ CustomTooltip }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    //? Creating Bars
    <ResponsiveContainer width="100%" aspect="6">
      <BarChart data={Data()} outerRadius={10}>
        <XAxis dataKey="id" stroke="#9a9a9a" interval={"preserveStartEnd"} />
        <YAxis
          dataKey="height"
          stroke="#9a9a9a"
          interval={"preserveStartEnd"}
          domain={[0, 250, 500, 750]}
          tickFormatter={(value) => `${value} m`}
        />
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />

        <Bar
          barSize={15}
          dataKey="allowed"
          strokeWidth={1}
          stackId="a"
          onMouseEnter={(data, index) => {
            setHoveredBar(index);
            fill={hoveredBar === index ? "rgb(0, 255, 149)" : "#8884d8"}
          }}
          onMouseLeave={() => {
            setHoveredBar(null);
          }}
          radius={[0, 0, 15, 15]}
          background={{ fill: "#5590ff13" }}
        />

        <Bar
          barSize={15}
          dataKey="blocked"
          strokeWidth={1}
          stackId="a"
          fill="rgb(255, 19, 129)"
          radius={[10, 10, 0, 0]}
        ></Bar>

        <Tooltip content={<CustomTooltip />} cursor={{ fill: "blue" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityGraph;
