import React from 'react';
import { Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-8 md:p-10">
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
            Let’s build something intelligent together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
            Have a challenge in data, AI, or automation? I can help design, deploy, and scale the solution end‑to‑end.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-teal-400"
            >
              <Mail size={18} /> Email me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white/80 hover:bg-white/10"
            >
              <Calendar size={18} /> Book a call
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} • Data & AI Engineer • Automation
        </p>
      </div>
    </section>
  );
}
