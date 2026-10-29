import { ArrowDown, Boxes, Code2, GitBranch } from 'lucide-react';
import { technologies, topics } from './data/topics';
import './App.css';

function App() {
  return (
    <main id="top" className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#4f46e5] to-[#7c3aed] text-white">
              <Code2 size={19} />
            </span>
            <span className="bg-linear-to-r from-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent font-bold">
              React Projects
            </span>
          </a>

          <a
            href="#topics"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition hover:text-[#4f46e5]"
          >
            <span>Explore topics</span>
            <ArrowDown size={16} className="text-[#6366f1]" />
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1.5 text-xs font-medium text-[#4f46e5]">
            <span className="h-2 w-2 rounded-full bg-[#6366f1]" />A collection of React projects
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
            Exploring React,
            <span className="block bg-linear-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
              one concept at a time.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600">
            A collection of practical React examples built on a shared boilerplate. Each branch
            explores a different concept through hands-on implementation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#topics"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#4f46e5] to-[#7c3aed] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 shadow-sm shadow-indigo-200"
            >
              Explore the topics
              <ArrowDown size={16} />
            </a>

            <a
              href="#stack"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-300"
            >
              Tech stack
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-indigo-100 blur-2xl opacity-70" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-400">
                  PROJECT STRUCTURE
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-800">One foundation.</h2>
              </div>
              <GitBranch className="text-[#6366f1]" size={23} />
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#4f46e5] to-[#7c3aed] text-white">
                  <Boxes size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-800">React Boilerplate</p>
                  <p className="text-xs text-slate-500">main branch</p>
                </div>
              </div>
            </div>

            <div className="ml-9 mt-3 space-y-3 border-l-2 border-dashed border-indigo-100 pl-5">
              {topics.map((topic) => (
                <div
                  key={topic.branch}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[#818cf8]" />
                  <span className="text-sm font-medium text-slate-700">{topic.title}</span>
                </div>
              ))}
              <p className="pt-1 text-xs text-slate-400">
                Independent examples · Separate branches
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Built with
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-200 bg-[#f8fafc] px-4 py-2 text-sm font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6366f1]">
              The collection
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              React topics & examples
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Practical implementations inspired by topics covered in React The Comprehensive Guide.
            </p>
          </div>

          <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            {topics.length} example branches
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <article
                key={topic.branch}
                className="group flex min-h-56 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-[#4f46e5] group-hover:bg-linear-to-br group-hover:from-[#4f46e5] group-hover:to-[#7c3aed] group-hover:text-white transition-colors duration-200">
                    <Icon size={21} />
                  </span>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-indigo-200 transition-colors">
                    {topic.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-800 transition-colors group-hover:text-[#4f46e5]">
                  {topic.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{topic.description}</p>

                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2 text-xs font-mono text-slate-400 group-hover:text-indigo-500 transition-colors">
                  <GitBranch size={14} />
                  {topic.branch}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
