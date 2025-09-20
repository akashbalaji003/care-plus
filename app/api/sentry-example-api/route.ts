import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  // If you want this log, keep it *before* the return:
  // console.log("this will run");

  return NextResponse.json({ success: true });
}
