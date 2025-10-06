import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET; // make sure to set this in .env.local

export async function GET(req: Request) {
  try {
    await connectDB();

    // ✅ Extract token from Authorization header or cookie
    const authHeader = req.headers.get("authorization");
    console.log(authHeader);
    const tokenFromHeader = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    // Optional: check cookies if you store JWT in cookies
    const cookieHeader = req.headers.get("cookie");
    const tokenFromCookie = cookieHeader
      ?.split("; ")
      .find((c) => c.startsWith("token="))
      ?.split("=")[1];

    const token = tokenFromHeader || tokenFromCookie;

    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    // ✅ Verify JWT
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET) as { _id: string };
    } catch {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 403 });
    }

    // ✅ Fetch user by ID
    const user = await User.findById(decoded._id).select("-password"); // exclude password

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ✅ Return user
    return NextResponse.json({ user,ok:true }, { status: 200 });

  } catch (error: any) {
    console.error("User fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
