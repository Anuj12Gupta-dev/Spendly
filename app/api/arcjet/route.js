// app/api/arcjet/route.js
import aj from "@/lib/arcjet";
import { NextResponse } from "next/server";

export async function GET(req) {
  // You can adjust this logic as you like. This is just a simple example.
  const decision = await aj.protect(req, { requested: 1 });

  if (decision.isDenied()) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ ok: true });
}
