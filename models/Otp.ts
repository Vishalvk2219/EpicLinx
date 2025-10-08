import mongoose, { Schema, Document, Model } from "mongoose";
import crypto from "crypto";

export interface IOTP extends Document {
  email: string;
  otp: string; // hashed OTP
  type: "signup" | "login" | "reset" | "2fa";
  expiresAt: Date;
  attempts: number;
  compareOtp: (plainOtp: string) => boolean;
}

const otpSchema: Schema<IOTP> = new Schema(
  {
    email: { type: String, required: true, lowercase: true, index: true },
    otp: { type: String, required: true },
    type: { type: String, enum: ["signup", "login", "reset", "2fa"], default: "signup" },
    expiresAt: { type: Date, required: true },
    attempts: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Method to compare plain OTP with hashed OTP
otpSchema.methods.compareOtp = function (plainOtp: string) {
  const hash = crypto.createHash("sha256").update(plainOtp).digest("hex");
  return hash === this.otp;
};

// Pre-save hook to hash OTP before saving
otpSchema.pre<IOTP>("save", function (next) {
  if (this.isModified("otp")) {
    this.otp = crypto.createHash("sha256").update(this.otp).digest("hex");
  }
  next();
});

// Optional: Auto-delete expired OTPs (using TTL index)
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const OTP: Model<IOTP> = mongoose.models.OTP || mongoose.model<IOTP>("OTP", otpSchema);
