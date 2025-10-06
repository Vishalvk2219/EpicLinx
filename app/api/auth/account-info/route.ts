import { NextResponse } from "next/server";
import  connectDB  from "@/lib/database/mogooose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, username, password } = await req.json();

    const user = await User.findOneAndUpdate(
      { email },
      { username, password, onboardingStatus: 3 },
      { new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error("Account Info Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
