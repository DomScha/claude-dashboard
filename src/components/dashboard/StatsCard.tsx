interface StatsCardProps {
  title: string;
  value: string;
  unit: string;
  delta?: string;
}

export function StatsCard({ title, value, unit, delta }: StatsCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-bold text-slate-100">{value}</p>
      <p className="text-xs text-slate-600">{unit}</p>
      {delta && (
        <p className="mt-2 text-xs text-emerald-400">{delta}</p>
      )}
    </div>
  );
}
