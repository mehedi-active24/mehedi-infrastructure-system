"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Representative domain reputation monitoring data.
// Pattern: typical of a sending fleet post-forensic audit intervention —
// Low/Bad tiers declining as authentication issues are resolved,
// High tier climbing as domain reputation recovers.
const data = [
  { day: "Jul 1",  High: 18, Medium: 38, Low: 29, Bad: 6 },
  { day: "Jul 3",  High: 19, Medium: 37, Low: 28, Bad: 6 },
  { day: "Jul 5",  High: 18, Medium: 36, Low: 30, Bad: 7 },
  { day: "Jul 7",  High: 20, Medium: 37, Low: 29, Bad: 6 },
  { day: "Jul 9",  High: 21, Medium: 36, Low: 28, Bad: 5 },
  { day: "Jul 11", High: 23, Medium: 36, Low: 26, Bad: 5 },
  { day: "Jul 13", High: 25, Medium: 35, Low: 25, Bad: 4 },
  { day: "Jul 15", High: 27, Medium: 35, Low: 23, Bad: 4 },
  { day: "Jul 17", High: 29, Medium: 34, Low: 21, Bad: 3 },
  { day: "Jul 19", High: 31, Medium: 33, Low: 20, Bad: 3 },
  { day: "Jul 21", High: 33, Medium: 32, Low: 18, Bad: 2 },
  { day: "Jul 23", High: 36, Medium: 31, Low: 16, Bad: 2 },
  { day: "Jul 25", High: 39, Medium: 30, Low: 14, Bad: 2 },
  { day: "Jul 27", High: 42, Medium: 29, Low: 12, Bad: 1 },
  { day: "Jul 29", High: 45, Medium: 28, Low: 11, Bad: 1 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0d0f12] border border-white/10 p-3 text-[10px] font-mono space-y-1">
      <p className="text-white/40 uppercase tracking-wider mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center justify-between gap-4">
          <span style={{ color: entry.color }} className="uppercase">{entry.name}</span>
          <span className="text-white/70">{entry.value} domains</span>
        </div>
      ))}
    </div>
  );
};

export default function PostmasterAuditVisual() {
  return (
    <div className="border border-border-subtle bg-bg-dark overflow-hidden">

      {/* Panel header */}
      <div className="border-b border-border-subtle px-5 py-3 flex items-center justify-between bg-surface/40">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono text-text-secondary uppercase tracking-widest">
            Google Postmaster · Domain Reputation Monitoring
          </span>
        </div>
        <span className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-wider hidden sm:inline">
          Jul 1 – Jul 30 · 48-Domain Fleet
        </span>
      </div>

      {/* Chart */}
      <div className="p-5">
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 4, right: 16, left: -20, bottom: 0 }}>
              <CartesianGrid
                strokeDasharray="2 4"
                stroke="rgba(255,255,255,0.05)"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
                interval={2}
              />
              <YAxis
                tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "monospace" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ fontSize: "9px", fontFamily: "monospace", textTransform: "uppercase", paddingTop: "12px" }}
                formatter={(value) => (
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>{value}</span>
                )}
              />
              <Line
                type="monotone"
                dataKey="High"
                stroke="#34d399"
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 3, fill: "#34d399" }}
              />
              <Line
                type="monotone"
                dataKey="Medium"
                stroke="#fbbf24"
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 3, fill: "#fbbf24" }}
              />
              <Line
                type="monotone"
                dataKey="Low"
                stroke="#f87171"
                strokeWidth={1.5}
                dot={false}
                activeDot={{ r: 3, fill: "#f87171" }}
              />
              <Line
                type="monotone"
                dataKey="Bad"
                stroke="#6b7280"
                strokeWidth={1}
                strokeDasharray="3 2"
                dot={false}
                activeDot={{ r: 3, fill: "#6b7280" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Panel footer */}
      <div className="border-t border-border-subtle px-5 py-2.5 flex items-start justify-between gap-4">
        <p className="text-[9px] font-mono text-text-secondary/30 uppercase tracking-wider leading-relaxed max-w-lg">
          Representative domain reputation trajectory. Pattern typical of a sending fleet during forensic audit and post-intervention recovery — Low/Bad tiers declining as authentication failures are resolved, High tier recovering as domain reputation stabilises.
        </p>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">Recovery</span>
        </div>
      </div>

    </div>
  );
}
