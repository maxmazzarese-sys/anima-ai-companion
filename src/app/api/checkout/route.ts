import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured. Add STRIPE_SECRET_KEY." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { priceId } = body;

    // Fallback to env vars if priceId is the placeholder
    let finalPriceId = priceId;
    if (priceId === "price_pro" || !priceId) {
      finalPriceId = process.env.STRIPE_PRICE_PRO || process.env.STRIPE_PRICE_ID || "";
    } else if (priceId === "price_elite") {
      finalPriceId = process.env.STRIPE_PRICE_ELITE || "";
    }

    if (!finalPriceId) {
      return NextResponse.json(
        { error: "Price ID not configured. Set STRIPE_PRICE_PRO / STRIPE_PRICE_ELITE in env." },
        { status: 500 }
      );
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: finalPriceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
