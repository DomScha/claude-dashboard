import { NextResponse } from "next/server";
import type { ConversationSession } from "@/types";

export async function GET() {
  const mockData: ConversationSession[] = [];
  return NextResponse.json(mockData);
}
