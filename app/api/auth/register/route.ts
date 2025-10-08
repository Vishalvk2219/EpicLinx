import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET; // Make sure it's set in .env.local

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { email, password, isEmailVerified, role } = body;

    // ✅ 1. Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    // ✅ 2. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists. Please login." },
        { status: 409 }
      );
    }


    // ✅ 4. Create new user
    const newUser = await User.create({
      email:email,
      password: password,
      isEmailVerified:isEmailVerified || false,
      role: role || "creator", // default role
    });

    // ✅ 5. Generate JWT token
    const token = jwt.sign(
      { id: newUser._id.toString(),email:email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ 6. Remove password from response
    const userResponse = newUser.toObject();
    delete userResponse.password;

    // ✅ 7. Return success
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully.",
        token,
        user: userResponse,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Register Error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again.", error: error.message },
      { status: 500 }
    );
  }
}
