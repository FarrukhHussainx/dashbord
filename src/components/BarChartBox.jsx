import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const BarChartBox = (props) => {
  return (
    <div>
      <h1 className="text-white text-md">{props.title}</h1>

      <ResponsiveContainer width="99%" height={70}>
        <BarChart data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
