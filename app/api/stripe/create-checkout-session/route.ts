// pages/api/stripe/create-checkout-session.ts

import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: true, message: "Email is required" },
        { status: 400 }
      );
    }

    // ✅ Use your static price ID from Stripe Dashboard
    const STATIC_PRICE_ID = process.env.STRIPE_STATIC_PRICE_ID || "price_1SF7AkIXAlxzlwICv5CqQiCL";

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription", // or 'payment' if it's one-time
      line_items: [
        {
          price: STATIC_PRICE_ID,
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_URL}/creator/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/creator/cancel`,
      payment_method_types: ["card"],
    });

    return NextResponse.json({
      checkoutSessionClientSecret: session.id,
    });
  } catch (error: any) {
    console.error("Stripe Payment Error:", error);
    return NextResponse.json(
      { error: true, message: error.message },
      { status: 500 }
    );
  }
}
