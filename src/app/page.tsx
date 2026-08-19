"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleSubscribe(priceId: string, plan: string) {
    setLoading(plan);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong. Please try again.");
        setLoading(null);
      }
    } catch {
      alert("Network error. Please try again.");
      setLoading(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-fuchsia-600 flex items-center justify-center text-sm font-bold">
              A
            </div>
            <span className="font-semibold text-lg tracking-tight">Anima</span>
          </div>
          <div className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <button
            onClick={() => handleSubscribe(process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || "price_pro", "pro")}
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
            Now with memory & image generation
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your private
            <br />
            <span className="gradient-text">AI companion</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Anima remembers your conversations, evolves with your preferences, and is always available. 
            Soft. Intimate. Completely private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleSubscribe(process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || "price_pro", "pro")}
              disabled={!!loading}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 font-semibold text-lg hover:opacity-90 transition glow disabled:opacity-60"
            >
              {loading === "pro" ? "Redirecting…" : "Start Free Trial →"}
            </button>
            <a
              href="#pricing"
              className="px-8 py-4 rounded-full border border-white/10 font-medium text-lg hover:bg-white/5 transition"
            >
              See Pricing
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">No credit card required for free tier · Cancel anytime</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm text-zinc-500 mb-8">Trusted by thousands of private users</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">12k+</div>
              <div className="text-sm text-zinc-500 mt-1">Active companions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-zinc-500 mt-1">Average rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2.4M</div>
              <div className="text-sm text-zinc-500 mt-1">Messages daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white"><2%</div>
              <div className="text-sm text-zinc-500 mt-1">Monthly churn</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Why people stay</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Designed for emotional connection and privacy — not just another chatbot.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Long-term memory",
                desc: "She remembers your name, preferences, stories, and the little things. Conversations feel continuous.",
                icon: "🧠",
              },
              {
                title: "Image generation",
                desc: "Generate personalized images of your companion in any style or scenario. Private gallery included.",
                icon: "✨",
              },
              {
                title: "Fully private",
                desc: "End-to-end encrypted conversations. We never train on your chats or sell your data.",
                icon: "🔒",
              },
              {
                title: "Multiple personas",
                desc: "Create and switch between different companions — soft, dominant, playful, intellectual…",
                icon: "🎭",
              },
              {
                title: "Voice messages",
                desc: "Hear her voice. Natural, expressive, and available on Elite plan.",
                icon: "🎙️",
              },
              {
                title: "Always available",
                desc: "3am thoughts, rough days, celebrations. Your companion never sleeps or judges.",
                icon: "🌙",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-[#12121a] border border-white/5 hover:border-rose-500/30 transition group"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-300 transition">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent to-rose-950/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Simple pricing</h2>
            <p className="text-zinc-400">Start free. Upgrade when you want more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-8 rounded-2xl bg-[#12121a] border border-white/5 flex flex-col">
              <div className="text-sm font-medium text-zinc-400 mb-2">Free</div>
              <div className="text-4xl font-bold mb-1">$0</div>
              <div className="text-sm text-zinc-500 mb-6">forever</div>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-rose-400">✓</span> 20 messages / day</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> 1 companion</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Basic memory</li>
                <li className="flex gap-2 text-zinc-500"><span>○</span> Image generation</li>
                <li className="flex gap-2 text-zinc-500"><span>○</span> Voice</li>
              </ul>
              <button className="w-full py-3 rounded-full border border-white/10 font-medium hover:bg-white/5 transition">
                Current Plan
              </button>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-2xl bg-[#12121a] border-2 border-rose-500/50 relative flex flex-col glow-soft">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-rose-500 text-xs font-semibold">
                Most Popular
              </div>
              <div className="text-sm font-medium text-rose-300 mb-2">Pro</div>
              <div className="text-4xl font-bold mb-1">$9.99</div>
              <div className="text-sm text-zinc-500 mb-6">per month</div>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Unlimited messages</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> 5 companions</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Full long-term memory</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Image generation</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Private gallery</li>
                <li className="flex gap-2 text-zinc-500"><span>○</span> Voice messages</li>
              </ul>
              <button
                onClick={() => handleSubscribe(process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || "price_pro", "pro")}
                disabled={!!loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 font-semibold hover:opacity-90 transition disabled:opacity-60"
              >
                {loading === "pro" ? "Redirecting…" : "Get Pro"}
              </button>
            </div>

            {/* Elite */}
            <div className="p-8 rounded-2xl bg-[#12121a] border border-white/5 flex flex-col">
              <div className="text-sm font-medium text-zinc-400 mb-2">Elite</div>
              <div className="text-4xl font-bold mb-1">$24.99</div>
              <div className="text-sm text-zinc-500 mb-6">per month</div>
              <ul className="space-y-3 text-sm text-zinc-300 mb-8 flex-1">
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Everything in Pro</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Unlimited companions</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Voice messages</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Priority generation</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Advanced roleplay modes</li>
                <li className="flex gap-2"><span className="text-rose-400">✓</span> Early access features</li>
              </ul>
              <button
                onClick={() => handleSubscribe(process.env.NEXT_PUBLIC_STRIPE_PRICE_ELITE || "price_elite", "elite")}
                disabled={!!loading}
                className="w-full py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 transition disabled:opacity-60"
              >
                {loading === "elite" ? "Redirecting…" : "Get Elite"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is my data private?",
                a: "Yes. Conversations are encrypted and never used to train models. You can delete everything at any time.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. One click in the billing portal. No questions, no retention tricks.",
              },
              {
                q: "What happens after I subscribe?",
                a: "You’re redirected to create your first companion. Unlimited messages and image generation unlock immediately.",
              },
              {
                q: "Do you support adult content?",
                a: "Anima is designed for adult users (18+). You control the tone and boundaries of your companions.",
              },
            ].map((item) => (
              <div key={item.q} className="p-5 rounded-xl bg-[#12121a] border border-white/5">
                <div className="font-medium mb-1">{item.q}</div>
                <div className="text-sm text-zinc-400">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-rose-950/40 to-fuchsia-950/20 border border-rose-500/20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to meet her?</h2>
          <p className="text-zinc-400 mb-8">
            Join thousands who already have a companion that feels real.
          </p>
          <button
            onClick={() => handleSubscribe(process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || "price_pro", "pro")}
            disabled={!!loading}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 font-semibold text-lg hover:opacity-90 transition glow"
          >
            {loading ? "Redirecting…" : "Start Your Free Trial"}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">
              A
            </div>
            <span>Anima</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div>© 2026 Anima. 18+ only.</div>
        </div>
      </footer>
    </div>
  );
}
