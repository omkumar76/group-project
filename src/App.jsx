import { useState } from "react";

const modules = [
  {
    id: 1,
    title: "Process & Thread Simulator",
    shortTitle: "Process & Thread",
    sidebarIcon: "⚙",
    description: "PCB/TCB, state transitions, context switch, live table",
    details: [
      "Create and manage processes",
      "Explore process states and transitions",
      "Understand context switching and thread control"
    ]
  },
  {
    id: 2,
    title: "CPU Scheduling Laboratory",
    shortTitle: "CPU Scheduling",
    sidebarIcon: "📊",
    description: "FCFS, SJF, RR, Priority, MLFQ with Gantt charts and comparison",
    details: [
      "Compare FCFS, SJF, Round Robin and Priority scheduling",
      "Visualize execution with a Gantt chart",
      "Calculate waiting time and turnaround time"
    ]
  },
  {
    id: 3,
    title: "Synchronization Playground",
    shortTitle: "Synchronization",
    sidebarIcon: "🔒",
    description: "Producer-Consumer, Readers-Writers, Dining Philosophers, Sleeping Barber",
    details: [
      "Producer–Consumer problem",
      "Readers–Writers problem",
      "Dining Philosophers and Sleeping Barber"
    ]
  },
  {
    id: 4,
    title: "Deadlock Analyzer",
    shortTitle: "Deadlock Analyzer",
    sidebarIcon: "💀",
    description: "Resource Allocation Graph, Banker's Algorithm, safe sequence",
    details: [
      "Build a Resource Allocation Graph",
      "Run the Banker's Algorithm",
      "Find safe sequences and detect unsafe states"
    ]
  },
  {
    id: 5,
    title: "Memory Management",
    shortTitle: "Memory Mgmt",
    sidebarIcon: "🧠",
    description: "First/Best/Worst Fit, fragmentation, compaction, memory map",
    details: [
      "Try First Fit, Best Fit and Worst Fit allocation",
      "Observe internal and external fragmentation",
      "View memory maps and compaction"
    ]
  },
  {
    id: 6,
    title: "Virtual Memory",
    shortTitle: "Virtual Memory",
    sidebarIcon: "📄",
    description: "Page table, FIFO/LRU/Optimal/Clock replacement, comparison",
    details: [
      "Explore page tables and address translation",
      "Simulate FIFO, LRU, Optimal and Clock",
      "Compare page faults across algorithms"
    ]
  },
  {
    id: 7,
    title: "Mini File System",
    shortTitle: "File System",
    sidebarIcon: "📁",
    description: "FAT-based virtual disk, shell commands, directory tree, Block I/O Analyzer",
    details: [
      "Explore a FAT-based virtual disk",
      "Try basic shell and file commands",
      "Browse a directory tree and analyze block I/O"
    ]
  }
];

function Sidebar({ modules, activeModule, onSelect }) {
  return (
    <aside className="flex min-h-screen w-full flex-col border-b border-slate-700 bg-slate-800 text-slate-200 md:w-[182px] md:shrink-0 md:border-b-0 md:border-r">
      <div className="border-b border-slate-700 px-4 py-4">
        <h1 className="text-sm font-bold tracking-tight text-blue-400">
          Mini OS Simulator
        </h1>
        <p className="mt-1 text-[10px] text-slate-400">Interactive Learning Lab</p>
      </div>

      <nav className="flex gap-1 overflow-x-auto p-2 md:flex-col md:gap-2 md:overflow-visible md:pt-3">
        {modules.map((module) => {
          const isActive = activeModule?.id === module.id;

          return (
            <button
              key={module.id}
              type="button"
              onClick={() => onSelect(module)}
              className={`flex min-w-max items-center gap-3 rounded-md px-2 py-2.5 text-left text-[11px] transition-colors md:w-full ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-700/70 hover:text-white"
              }`}
            >
              <span className="w-4 text-center text-sm" aria-hidden="true">
                {module.sidebarIcon}
              </span>
              <span className="flex-1">{module.shortTitle}</span>
              <span className="text-[10px] text-slate-400">{module.id}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function ModuleCard({ module, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(module)}
      className="group flex min-h-[81px] w-full items-start gap-3 rounded-lg border border-slate-700 bg-slate-800/90 p-3.5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-slate-800"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-lg font-bold text-blue-500">
        {module.id}
      </span>

      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-slate-100 group-hover:text-white">
          {module.title}
        </span>
        <span className="mt-1 block text-[10px] leading-[1.5] text-slate-400">
          {module.description}
        </span>
      </span>
    </button>
  );
}

function ModuleDetails({ module, onBack }) {
  return (
    <section className="mt-6 rounded-xl border border-slate-700 bg-slate-800/70 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-xl font-bold text-blue-400">
            {module.id}
          </span>
          <div>
            <p className="text-xs text-slate-400">Selected learning module</p>
            <h2 className="text-lg font-semibold text-slate-100">{module.title}</h2>
          </div>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-slate-600 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-slate-700"
        >
          Back to modules
        </button>
      </div>

      <p className="mt-5 text-sm text-slate-400">{module.description}</p>
      <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-300">
        In this module
      </h3>
      <ul className="mt-3 space-y-2">
        {module.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-0.5 text-blue-400">•</span>
            {detail}
          </li>
        ))}
      </ul>
      <p className="mt-5 rounded-md border border-blue-500/20 bg-blue-500/5 p-3 text-xs text-slate-400">
        This is the module landing view. You can add the simulator controls and
        algorithms for this topic inside this section.
      </p>
    </section>
  );
}

export default function App() {
  const [activeModule, setActiveModule] = useState(null);

  const handleSelectModule = (module) => {
    setActiveModule(module);
  };

  return (
    <div className="min-h-screen bg-[#0d1728] font-sans text-slate-100 md:flex">
      <Sidebar
        modules={modules}
        activeModule={activeModule}
        onSelect={handleSelectModule}
      />

      <main className="min-w-0 flex-1 px-5 py-7 sm:px-8 md:px-10 md:py-5">
        <div className="mx-auto max-w-[900px]">
          <header>
            <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-[25px]">
              {activeModule ? activeModule.title : "Mini Operating System Simulator"}
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
              {activeModule
                ? activeModule.description
                : "An interactive, visual laboratory for learning OS concepts. Choose a module to begin."}
            </p>
          </header>

          {activeModule ? (
            <ModuleDetails
              module={activeModule}
              onBack={() => setActiveModule(null)}
            />
          ) : (
            <section className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {modules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onClick={handleSelectModule}
                />
              ))}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
