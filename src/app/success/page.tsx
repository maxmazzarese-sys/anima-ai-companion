export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-fuchsia-600 flex items-center justify-center text-2xl mx-auto mb-6">
          ✓
        </div>
        <h1 className="text-3xl font-bold mb-3">Welcome to Anima</h1>
        <p className="text-zinc-400 mb-8">
          Your subscription is active. You now have full access to unlimited conversations, memory, and image generation.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 font-semibold hover:opacity-90 transition"
        >
          Go to Dashboard
        </a>
        <p className="mt-6 text-sm text-zinc-500">
          A confirmation email is on its way.
        </p>
      </div>
    </div>
  );
}
