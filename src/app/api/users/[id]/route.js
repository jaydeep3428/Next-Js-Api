import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
  const userData = user.filter((item) => item.Id == content.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { Result: "No Data Found" }
      : { Result: userData[0] },
    { status: 200 }
  );
}

export async function PUT(request, content) {
  let payload = await request.json();

  payload.id = content.params.id;
  console.log(payload);

  if (!payload.Name || !payload.Age || !payload.Email) {
    return NextResponse.json(
      {
        Result: "Requset Data Is Not Found",
        success: false,
      },
      { status: 400 }
    );
  }
  return NextResponse.json({ Result: payload, success: true }, { status: 200 });
}

export function DELETE(request, content) {
  let id = content.params.id;

  if (id) {
    return NextResponse.json(
      { result: "user delete", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Some Error Occured!", success: false },
      { status: 400 }
    );
  }
}
