"use client";

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { month: "M1", value: 20 },
  { month: "M2", value: 45 },
  { month: "M3", value: 60 },
  { month: "M4", value: 80 },
  { month: "M5", value: 110 },
  { month: "M6", value: 140 },
];

const LineGraph = () => {
  return (
    <div className="w-full h-40 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 12 }}
          />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(271 91% 65%)"
            strokeWidth={3}
            dot={{ r: 4, fill: "hsl(271 91% 65%)" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
