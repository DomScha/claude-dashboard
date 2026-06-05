import { NextResponse } from "next/server";
import type { ProjectActivity } from "@/types";

export async function GET() {
  const mockData: ProjectActivity[] = [];
  return NextResponse.json(mockData);
}
