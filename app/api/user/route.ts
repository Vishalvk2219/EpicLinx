import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET not set");

export async function GET(req: Request) {
  try {
    await connectDB();

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 403 }
      );
    }

    const { email } = decoded;
    const user = await User.findOne({ email }).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user, found: true }, { status: 200 });
  } catch (error: any) {
    console.error("User fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 403 }
      );
    }

    const { email } = decoded;
    const body = await req.json();

    // disallow updating email, password, or _id
    const disallowedFields = ["email", "password", "_id"];
    for (const key of disallowedFields) {
      if (body[key] !== undefined) delete body[key];
    }

    const updatedUser = await User.findOneAndUpdate({ email }, body, {
      new: true,
      runValidators: true,
      select: "-password",
    });

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, user: updatedUser, message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("User update error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
