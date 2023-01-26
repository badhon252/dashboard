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
    <div>
      <ResponsiveContainer width="100%" height={500} aspect="4">
        <BarChart data={Data()} outerRadius={10}>
          <XAxis dataKey="id" stroke="#9a9a9a" interval={"preserveStartEnd"} />
          <YAxis
            dataKey="height"
            stroke="#9a9a9a"
            interval={"preserveStartEnd"}
            domain={Data()}
            tickFormatter={(value) => `${value} m`}
          />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />

          <Bar
            barSize={15}
            dataKey="allowed"
            strokeWidth={1}
            stackId="a"
            fill="rgb(0, 205, 38)"
            radius={[0, 0, 15, 15]}
            background={{ fill: "#5590ff13" }}
          />

          <Bar
            barSize={15}
            dataKey="blocked"
            strokeWidth={1}
            stackId="a"
            fill="rgb(255, 89, 89)"
            radius={[10, 10, 0, 0]}
          ></Bar>

          <Tooltip content={CustomTooltip} cursor={{ fill: "blue" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;
