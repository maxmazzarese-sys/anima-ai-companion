# Anima — AI Companion SaaS

High-converting subscription landing page + Stripe Checkout for a private AI companion product.

## Features
- Beautiful dark landing page optimized for conversion
- Free / Pro ($9.99) / Elite ($24.99) tiers
- Stripe Checkout in subscription mode
- Success & cancel pages
- Ready for Vercel

## Setup

1. Create a Stripe account and switch to **Test mode**.
2. Create two Products with recurring Prices:
   - Pro → $9.99 / month
   - Elite → $24.99 / month
3. Copy the Price IDs (`price_...`).

### Environment variables (Vercel or `.env.local`)

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PRICE_PRO=price_...
STRIPE_PRICE_ELITE=price_...
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_...   # optional
NEXT_PUBLIC_STRIPE_PRICE_ELITE=price_...
```

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import the GitHub repo on Vercel. Add the environment variables in the project settings.

## Notes

- The free tier is UI-only (no real backend yet).
- After payment, users land on `/success`.
- For production: add webhooks to grant access, create a real dashboard, and handle subscription status.
