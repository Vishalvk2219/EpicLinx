import { NextResponse } from "next/server";
import connectDB from "@/lib/database/mogooose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      profileImageUrl,
      firstName,
      lastName,
      email,
      phone,
      displayName,
      location,
      instagram,
      facebook,
      tiktok,
      otherSocial,
      categories,
      companyName,
      shopAddress,
      businessWebsite,
      businessDescription,
      role,
    } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    // 🔍 Find user by ID
    const user = await User.findOne({email});
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // 🔄 Update allowed fields
    user.profileImageUrl = profileImageUrl ?? user.profileImageUrl;
    user.firstName = firstName ?? user.firstName;
    user.lastName = lastName ?? user.lastName;
    user.phone = phone ?? user.phone;
    user.displayName = displayName ?? user.displayName;
    user.location = location ?? user.location;
    user.instagram = instagram ?? user.instagram;
    user.facebook = facebook ?? user.facebook;
    user.tiktok = tiktok ?? user.tiktok;
    user.otherSocial = otherSocial ?? user.otherSocial;
    user.categories = categories ?? user.categories;
    user.companyName = companyName ?? user.companyName;
    user.shopAddress = shopAddress ?? user.shopAddress;
    user.businessWebsite = businessWebsite ?? user.businessWebsite;
    user.businessDescription = businessDescription ?? user.businessDescription;
    user.role = role ?? user.role;

    // Save changes
    await user.save();

    // Remove password before sending back
    const userResponse = user.toObject();
    delete userResponse.password;

    return NextResponse.json(
      {
        success: true,
        message: "User info updated successfully",
        user: userResponse,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Update user info error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Could not update user." },
      { status: 500 }
    );
  }
}
