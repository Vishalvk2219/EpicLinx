import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// 🟢 Define your real Stripe Price IDs here
const PRICE_MAP: Record<string, string> = {
  nano: "price_1SF7AkIXAlxzlwICv5CqQiCL",   // Replace with your real Price ID
  
};

export async function POST(req: Request) {
  try {
    const { email, plan, currency, recurring_interval, trial } = await req.json();

    const priceId = PRICE_MAP[plan];
    if (!priceId) {
      return NextResponse.json({ error: `Invalid plan: ${plan}` }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: trial ? 7 : undefined,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Payment Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
