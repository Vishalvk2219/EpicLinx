import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    // Clear the token cookie completely
    response.cookies.set({
      name: "accessToken",          // your cookie name
      value: "",
      path: "/",              // match the original cookie path
      httpOnly: true,         // same as when you set it
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),   // forces immediate expiration
    });

    return response;
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}
