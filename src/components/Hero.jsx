import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Text Panel */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Sparkles size={16} className="text-teal-300" />
              Data & AI Engineer • Automation
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Building intelligent, automated systems
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">that scale with your data</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/70 md:text-lg">
              I design and deploy end‑to‑end data platforms, MLOps pipelines, and automation that turn raw data into reliable, real‑time decisions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-teal-400"
              >
                <Rocket size={18} /> Start a project
              </a>
              <a
                href="https://github.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://linkedin.com" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm text-white/60">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                • Data Engineering
                <div className="mt-1 text-white/80">Spark, Airflow, dbt, Lakehouse</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                • MLOps
                <div className="mt-1 text-white/80">Feature stores, CI/CD, monitoring</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                • AI Systems
                <div className="mt-1 text-white/80">LLM apps, vector search, RAG</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                • Automation
                <div className="mt-1 text-white/80">APIs, orchestration, agents</div>
              </div>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[360px] w-full md:h-[560px] rounded-2xl border border-white/10 bg-slate-900/40">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient edges that don't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
