import { NextRequest, NextResponse } from "next/server";
import { OTP } from "@/models/Otp";

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: "Missing email or OTP" },
        { status: 400 }
      );
    }

    // Find the latest OTP for this email and type
    const otpDoc = await OTP.findOne({ email, type: "signup" }).sort({ createdAt: -1 });

    if (!otpDoc) {
      return NextResponse.json(
        { success: false, message: "OTP not found" },
        { status: 404 }
      );
    }

    // Check expiration
    if (otpDoc.expiresAt < new Date()) {
      return NextResponse.json(
        { success: false, message: "OTP has expired" },
        { status: 400 }
      );
    }

    // Compare hashed OTP
    const isValid = otpDoc.compareOtp(otp);

    if (!isValid) {
      // Optional: increment attempts
      otpDoc.attempts += 1;
      await otpDoc.save();

      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    // OTP is valid — delete it after verification
    await otpDoc.deleteOne();

    return NextResponse.json(
      { success: true, message: "OTP verified successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { success: false, message: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
