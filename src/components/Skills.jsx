import React from 'react';
import { Cpu, Database, Workflow, Bot } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'Machine Learning',
    items: ['Modeling (XGBoost, DL)', 'LLMs & RAG', 'Feature Stores'],
    accent: 'from-teal-400 to-cyan-400',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['Lakehouse & Warehousing', 'Spark, Airflow, dbt', 'Streaming & Batch'],
    accent: 'from-cyan-400 to-blue-400',
  },
  {
    icon: Workflow,
    title: 'MLOps',
    items: ['CI/CD, Docker', 'Model Monitoring', 'Experiment Tracking'],
    accent: 'from-indigo-400 to-violet-400',
  },
  {
    icon: Bot,
    title: 'Automation',
    items: ['Agents & Orchestration', 'API Integrations', 'Event-driven Systems'],
    accent: 'from-emerald-400 to-teal-400',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Core capabilities</h2>
            <p className="mt-2 text-white/70">A stack designed for velocity, reliability, and scale.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, items, accent }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={`absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                  {items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
