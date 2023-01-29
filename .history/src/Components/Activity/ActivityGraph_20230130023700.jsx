import React, { useState, useEffect } from "react";
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

const ActivityGraph = ({ TooltipContent }) => {
  const [selectedData, setSelectedData] = useState(null);

  const handleBarClick = (data) => {
    setSelectedData(data);
  };

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  return (
    <ResponsiveContainer width="100%" aspect={7}>
      <BarChart data={Data()} outerRadius={10} onClick={handleBarClick}>
        <XAxis
          dataKey="id"
          stroke="#9a9a9a"
          interval="preserveStartEnd"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="height"
          stroke="#9a9a9a"
          interval="preserveStartEnd"
          domain={[0, 250, 500, 750]}
          tickFormatter={(value) => (value <= 0 ? 0 : value + " m")}
          axisLine={false}
          tickLine={false}
        />
        <CartesianGrid
          stroke="#e0dfdf"
          vertical={false}
          horizontal
          strokeWidth={0.6}
        />
        <Bar
          chartX={100}
          chartY={200}
          barCategoryGap={10}
          barSize={15}
          dataKey="allowed"
          stackId="a"
          fill="rgb(0, 221, 118)"
          radius={[0, 0, 15, 15]}
          background={{ fill: "#5590ff13" }}
        />
        <Bar
          chartX={100}
          chartY={200}
          barCategoryGap="10%"
          barSize={15}
          dataKey="blocked"
          stackId="a"
          fill="rgb(255, 19, 129)"
          radius={[10, 10, 0, 0]}
        />
        <Tooltip
          content={<TooltipContent />}
          cursor={{ fill: "blue", opacity: 0 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityGraph;
