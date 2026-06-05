export interface UsageRecord {
  date: string;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  requestCount: number;
  estimatedCostUsd: number;
  model: string;
}

export interface ProjectActivity {
  id: string;
  name: string;
  path: string;
  lastActive: string;
  sessionCount: number;
  totalTokens: number;
}

export interface ConversationSession {
  id: string;
  projectId: string;
  projectName: string;
  startedAt: string;
  endedAt: string | null;
  model: string;
  inputTokens: number;
  outputTokens: number;
  messageCount: number;
  summary: string;
}

export interface DashboardStats {
  totalRequests: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  totalCostUsd: number;
  activeProjects: number;
  totalSessions: number;
}

export interface ChartDataPoint {
  date: string;
  inputTokens: number;
  outputTokens: number;
  cost: number;
  requests: number;
}
