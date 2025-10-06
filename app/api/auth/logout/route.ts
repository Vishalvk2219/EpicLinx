import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    // Clear token cookie (if you store JWT in cookies)
    response.cookies.set("token", "", { maxAge: 0, path: "/" });

    return response;
  } catch (err) {
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}
