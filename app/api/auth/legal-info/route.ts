import { NextResponse } from "next/server";
import connectDB  from "@/lib/database/mogooose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, abn } = await req.json();

    const user = await User.findOneAndUpdate(
      { email },
      { abn, onboardingStatus: 2 },
      { new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error("Legal Info Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
