import React from 'react';
import { ServerCog, LineChart, Boxes, ShieldCheck } from 'lucide-react';

const projects = [
  {
    icon: ServerCog,
    title: 'Real‑time Feature Platform',
    desc: 'Low‑latency feature serving with streaming ingestion, online store, and model rollouts.',
    tags: ['Kafka', 'Feast', 'Redis', 'Kubernetes'],
    link: '#',
  },
  {
    icon: LineChart,
    title: 'Demand Forecasting',
    desc: 'Hierarchical time‑series forecasting with automated retraining and monitoring.',
    tags: ['dbt', 'Prophet', 'Airflow', 'Great Expectations'],
    link: '#',
  },
  {
    icon: Boxes,
    title: 'LLM Knowledge Assistant',
    desc: 'RAG pipeline over product docs with evaluators, guardrails, and analytics.',
    tags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    link: '#',
  },
  {
    icon: ShieldCheck,
    title: 'Data Quality Framework',
    desc: 'End‑to‑end data tests, lineage, and SLAs enforced across pipelines.',
    tags: ['OpenLineage', 'Great Expectations', 'Apache Airflow'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected projects</h2>
            <p className="mt-2 text-white/70">Impactful builds spanning data, AI, and automation.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, desc, tags, link }) => (
            <a
              key={title}
              href={link}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 transition hover:from-white/[0.08] hover:to-white/[0.05]"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="text-teal-200" size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-white/70">{desc}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
