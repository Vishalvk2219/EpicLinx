import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (request: Request) => {
  try {
    await connectDB();

    const body = await request.json();
    const { password: newPassword } = body;

    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "No token provided" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;

    if (!decoded.email || !newPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid token or missing password" },
        { status: 400 }
      );
    }

    // ✅ await here
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // ✅ this triggers your pre('save') hook (e.g. password hashing)
    user.password = newPassword;
    await user.save();

    return NextResponse.json(
      { success: true, message: "Password changed successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Password update error:", err);
    return NextResponse.json(
      { success: false, message: "Unable to update password" },
      { status: 500 }
    );
  }
};
