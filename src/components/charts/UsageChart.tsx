"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { ChartDataPoint } from "@/types";
import { formatTokens } from "@/lib/utils";

interface UsageChartProps {
  data: ChartDataPoint[];
}

export function UsageChart({ data }: UsageChartProps) {
  if (data.length === 0) {
    return (
      <div className="flex h-48 items-center justify-center text-sm text-slate-600">
        No data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="inputGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="outputGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis dataKey="date" tick={{ fill: "#64748b", fontSize: 11 }} />
        <YAxis tickFormatter={formatTokens} tick={{ fill: "#64748b", fontSize: 11 }} />
        <Tooltip
          contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
          labelStyle={{ color: "#94a3b8" }}
          formatter={(value) => (typeof value === "number" ? formatTokens(value) : String(value))}
        />
        <Area type="monotone" dataKey="inputTokens" stroke="#6366f1" fill="url(#inputGrad)" name="Input" />
        <Area type="monotone" dataKey="outputTokens" stroke="#10b981" fill="url(#outputGrad)" name="Output" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
