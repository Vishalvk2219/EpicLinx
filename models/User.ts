import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";
import { BlobOptions } from "buffer";

// Define user interface
export interface IUser extends Document {
  role: "creator" | "brand" | "admin"; // Example enum roles
  profileImageUrl?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  displayName?: string;
  location?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  otherSocial?: string;
  categories?: string[];
  companyName?: string;
  shopAddress?: string;
  businessWebsite?: string;
  businessDescription?: string;
  abn?: string;
  username?: string;
  password?: string;
  heardAboutUs?: string;
  notificationsEnabled?: boolean;
  agreedToTerms?: boolean;
  isEmailVerified:boolean;
  onboardingStatus: number; // 1-4 steps completed

  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define schema
const userSchema = new Schema<IUser>(
  {
    role: { type: String, enum: ["creator", "brand", "admin"] },
    profileImageUrl: String,
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phone: String,
    displayName: String,
    location: String,
    instagram: String,
    facebook: String,
    tiktok: String,
    otherSocial: String,
    categories: [String],
    companyName: String,
    shopAddress: String,
    businessWebsite: String,
    businessDescription: String,
    abn: String,
    username: String,
    password: { type: String, minlength: 6 },
    heardAboutUs: String,
    notificationsEnabled: { type: Boolean, default: true },
    agreedToTerms: { type: Boolean, default: false },
    onboardingStatus: { type: Number, default: 1 },
  },
  { timestamps: true }
);

// 🔑 Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as any);
  }
});

// 🔑 Add comparePassword method
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  if (!this.password) return false;
  return bcrypt.compare(candidatePassword, this.password);
};

// Prevent model overwrite in Next.js
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
