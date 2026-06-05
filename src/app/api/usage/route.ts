import { NextResponse } from "next/server";
import type { UsageRecord } from "@/types";

// Placeholder — replace with real Anthropic Usage API call once available
export async function GET() {
  const mockData: UsageRecord[] = [];
  return NextResponse.json(mockData);
}
