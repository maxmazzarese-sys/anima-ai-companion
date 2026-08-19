export default function CancelPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-3">Checkout canceled</h1>
        <p className="text-zinc-400 mb-8">
          No worries — you can come back anytime. Your free tier is still available.
        </p>
        <a
          href="/#pricing"
          className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition"
        >
          Back to Pricing
        </a>
      </div>
    </div>
  );
}
