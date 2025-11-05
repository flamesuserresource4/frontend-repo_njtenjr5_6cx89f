import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Data/AI</span> Engineer
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
