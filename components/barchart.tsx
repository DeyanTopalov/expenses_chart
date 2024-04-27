"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
} from "recharts";
import { chartData } from "@lib/utils";

type TooltipProps = {
  active: boolean;
  payload: any[];
  label: string;
};

const CustomTooltip = ({ payload, label, active }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className=" -ml-14 rounded-md bg-slate-950 px-4 py-2  shadow-2xl">
        <p className="font-bold text-white">{`$ ${payload[0].value}`}</p>
      </div>
    );
  }
};

const BarChartComponent = () => {
  const today = new Date();
  const currentWeekday = today
    .toLocaleDateString("en-us", {
      weekday: "short",
    })
    .toLowerCase();

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
          position={{ y: 0 }}
        />
        <Bar
          dataKey="amount"
          radius={[5, 5, 5, 5]}
          className="cursor-pointer transition-all  duration-100 ease-in-out"
        >
          {chartData.map((item) => (
            <Cell
              cursor="pointer"
              fill={
                item.day === currentWeekday
                  ? "hsl(var(--cyan))"
                  : "hsl(var(--soft-red))"
              }
              key={`cell-${item.day}`}
              className="hover:opacity-75"
            />
          ))}
        </Bar>
        ;
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
