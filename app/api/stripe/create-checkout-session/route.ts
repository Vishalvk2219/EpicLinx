import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, plan, currency, recurring_interval, trial } = body;

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: currency || "usd",
            recurring: { interval: recurring_interval || "month" },
            product_data: { name: plan || "Default Plan" },
            unit_amount: 1000, // $10.00
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: trial ? 7 : undefined,
      },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: true, message: error.message || "Failed to create session" },
      { status: 500 }
    );
  }
}
