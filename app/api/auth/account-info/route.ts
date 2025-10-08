import { NextResponse } from "next/server";
import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, username, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    // update fields
    user.username = username;
    user.password = password;
    user.onboardingStatus = 3;

    // this will trigger your pre('save') hook
    await user.save();

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error("Account Info Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
