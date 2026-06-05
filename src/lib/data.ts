import type { ChartDataPoint, DashboardStats, UsageRecord } from "@/types";

export function aggregateStats(records: UsageRecord[]): DashboardStats {
  return records.reduce(
    (acc, r) => ({
      totalRequests: acc.totalRequests + r.requestCount,
      totalInputTokens: acc.totalInputTokens + r.inputTokens,
      totalOutputTokens: acc.totalOutputTokens + r.outputTokens,
      totalCostUsd: acc.totalCostUsd + r.estimatedCostUsd,
      activeProjects: acc.activeProjects,
      totalSessions: acc.totalSessions,
    }),
    {
      totalRequests: 0,
      totalInputTokens: 0,
      totalOutputTokens: 0,
      totalCostUsd: 0,
      activeProjects: 0,
      totalSessions: 0,
    } satisfies DashboardStats
  );
}

export function toChartData(records: UsageRecord[]): ChartDataPoint[] {
  return records.map((r) => ({
    date: r.date,
    inputTokens: r.inputTokens,
    outputTokens: r.outputTokens,
    cost: r.estimatedCostUsd,
    requests: r.requestCount,
  }));
}
