import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    console.log("🟢 Received data:", data);

    // ✅ 1. Check if user exists
    let user = await User.findOne({ email: data.email });

    if (user) {
      console.log("🟡 Existing user found, updating...");
      // ✅ 2. Update existing user with any new fields provided
      Object.assign(user, data);
      await user.save();

      // ✅ 3. Generate new JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      return NextResponse.json(
        {
          message: "User updated successfully",
          token,
          user,
        },
        { status: 200 }
      );
    }

    // ✅ 4. Create new user if not found
    user = await User.create({
      ...data,
    });

    // ✅ 5. Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ 6. Return new user + token
    return NextResponse.json(
      {
        message: "User registered successfully",
        token,
        user,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("❌ Register Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
