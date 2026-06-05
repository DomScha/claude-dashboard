import { StatsCard } from "@/components/dashboard/StatsCard";
import { UsageChart } from "@/components/charts/UsageChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">Overview</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Requests" value="—" unit="requests" />
        <StatsCard title="Input Tokens" value="—" unit="tokens" />
        <StatsCard title="Output Tokens" value="—" unit="tokens" />
        <StatsCard title="Estimated Cost" value="—" unit="USD" />
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-200">
          Token Usage (Last 30 Days)
        </h2>
        <UsageChart data={[]} />
      </div>
    </div>
  );
}
