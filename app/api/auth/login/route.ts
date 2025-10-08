import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import connectDB from "@/lib/database/mogooose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in environment variables");
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const { username, password } = await req.json();

    // 🧩 Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    // 🔍 Find user by email (username acts as email)
    const user = await User.findOne({ email: username }).select("+password");

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 🔐 Validate password
    const isPasswordValid = await user.comparePassword(password);
    // const isPasswordValid = user.password === password;
    // console.log(user.password,password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 🪪 Generate JWT token
    const token = jwt.sign(
      { id: user._id.toString(),email:username, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 🧹 Convert user to plain object & remove password
    const userResponse = user.toObject();
    delete userResponse.password; // ensures password never goes to frontend

    // ✅ Send back everything (except password)
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        token,
        user: userResponse,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
