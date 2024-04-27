"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import { chartData } from "@lib/utils";

type TooltipProps = {
  active: boolean;
  payload: any[];
  label: string;
};

const CustomTooltip = ({ payload, label, active }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="text-clr-cyan fond-bold rounded-md bg-white px-4 py-2 shadow-2xl">
        <p className="font-medium capitalize">{label}</p>
        <p className="text-clr-brown-800 font-bold">{`$ ${payload[0].value}`}</p>
      </div>
    );
  }
};

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{
            fill: "hsl(var(--brown-600))",
          }}
          className="text-sm font-medium"
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <CustomTooltip
              payload={payload ? payload : []}
              label={label}
              active={active ?? false}
            />
          )}
          cursor={{ fill: "white" }}
        />

        <Bar
          dataKey="amount"
          fill="hsl(var(--soft-red))"
          radius={[5, 5, 5, 5]}
          className="hover:fill-clr-cyan cursor-pointer transition-all duration-100 ease-in-out"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
