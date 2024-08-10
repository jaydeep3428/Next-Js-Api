import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {
  let payload = await req.json();
  console.log(payload.name);
  if (!payload.Name || !payload.Age || !payload.Email) {
    return NextResponse.json(
      { Result: "Require Field Not Found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { Result: "New User Created", success: true },
    { status: 201 }
  );
}
