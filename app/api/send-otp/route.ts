import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { OTP } from "@/models/Otp";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
    }

    // Generate 6-digit OTP
    const plainOtp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to DB (hashed automatically by pre-save hook)
    const otpDoc = new OTP({
      email,
      otp: plainOtp,
      type: "signup",
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // expires in 5 mins
    });
    await otpDoc.save();

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    const mailOptions = {
      from: `"EpicLinx" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your EpicLinx OTP Code",
      text: `Your OTP code is: ${plainOtp}`,
      html: `<p>Your <b>OTP</b> code is: <b>${plainOtp}</b></p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
