import React from "react";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = (props) => {
  return (
    <div className="flex justify-between gap-2 items-center">
      <div>
        <div className="flex items-center gap-1">
          <img className="w-4 h-4" src={props.icon} alt="" />
          <h1 className="text-sm text-white">{props.title}</h1>
        </div>
        <h1 className="text-white text-bold">{props.number}</h1>
        <Link style={{ color: props.color }} to="/">
          View all
        </Link>
      </div>

      <div>
        <ResponsiveContainer width={80} height={30}>
          <LineChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: 10, y: 60 }}
            />
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke={props.color}
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div>
          <div style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
            {props.percentage}%
          </div>
          <h1 className="text-gray-400">this month</h1>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
