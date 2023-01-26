import "./Activity.css";
// import { useState } from "react";
import Data from "../Data";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
} from "recharts";

import ActivityHeader from "./ActivityHeader";

export default function Activity() {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="date-label">26 Jan 2023</p>

          <div className="d-flex">
            <div className="tooltip-allowed ">
              <p className="label">
                <span>00</span> Allowed
              </p>
              <p className="label">
                <span>00</span>
                {`${payload[0].value}`}
              </p>
            </div>

            <div className="tooltip-blocked">
              <p className="label">
                <span>00</span> Blocked
              </p>
              <p className="label">
                <span>00</span>
                {`${payload[1].value}`}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="activity">
      <ActivityHeader />

      <div className="activity_graph">
        {/* barhcart Code goes here  */}
        <ResponsiveContainer width="100%" aspect="4">
          <BarChart data={Data()} outerRadius={10}>
            <XAxis
              dataKey="id"
              stroke="#9a9a9a"
              interval={"preserveStartEnd"}
            />
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

            <Tooltip content={<CustomTooltip />} cursor={{ fill: "blue" }} />
          </BarChart>
        </ResponsiveContainer>
        <div className="link py-4 px-3">See All {">"} </div>
      </div>
    </div>
  );
}
