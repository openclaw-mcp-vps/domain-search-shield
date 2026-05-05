export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Domain Privacy Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Registrars From{" "}
          <span className="text-[#58a6ff]">Sniping Your Domains</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Domain Search Shield proxies your availability checks through rotating servers and masked API keys — so no registrar ever sees what you&apos;re hunting.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Protecting Searches — $19/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["Rotating Proxies", "Every search exits from a different IP"],
            ["Masked Patterns", "Randomized timing hides your intent"],
            ["Multi-Registrar", "Check across registrars simultaneously"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <p className="font-semibold text-white mb-1">{title}</p>
              <p className="text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited domain searches",
              "Rotating proxy network",
              "5 simultaneous registrar checks",
              "Search pattern masking",
              "API access included",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does registrar sniping actually happen?",
              "Some registrars log domain searches and use that data to register high-interest domains before you can, or sell the data to third parties. Domain Search Shield routes your queries through anonymous proxies so your searches are never tied to your identity."
            ],
            [
              "Which registrars do you check against?",
              "We currently proxy searches through GoDaddy, Namecheap, Dynadot, and Name.com APIs simultaneously, giving you a comprehensive availability picture without exposing your search intent to any single registrar."
            ],
            [
              "Can I use the API in my own tools?",
              "Yes. Every Pro plan includes full API access with your personal key. You can integrate Domain Search Shield into your own scripts, dashboards, or domain research workflows."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
