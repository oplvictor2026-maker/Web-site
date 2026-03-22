export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">

      {/* HERO */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-[#0b0f19] to-[#111827]">
        <h1 className="text-6xl font-bold mb-6">AI‑OS</h1>
        <h2 className="text-2xl text-gray-300 mb-8">
          Infrastructure for Autonomous AI Organizations
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-12">
          AI‑OS enables governed, persistent and multi‑agent AI organizations with
          structured memory, execution protocols and policy‑driven coordination.
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold">
            Book a Demo
          </button>
          <button className="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-xl font-semibold">
            View Architecture
          </button>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6 bg-[#0f172a] text-center">
        <h3 className="text-4xl font-bold mb-12">Why Current AI Systems Fail</h3>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-gray-300">
          <div>
            <h4 className="text-xl font-semibold mb-4">No Governance</h4>
            <p>AI tools operate without structured policy enforcement or human override.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">No Persistent Memory</h4>
            <p>Most systems forget. Organizations require institutional knowledge retention.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">No Organizational Structure</h4>
            <p>Agents act in isolation instead of coordinated organizational layers.</p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-24 px-6 bg-[#0b0f19] text-center">
        <h3 className="text-4xl font-bold mb-12">AI‑OS Architecture</h3>
        <div className="max-w-4xl mx-auto text-gray-300 space-y-6 text-lg">
          <p><strong>Governance Layer</strong> — Policy enforcement, decision logging and intervention protocols.</p>
          <p><strong>Memory Kernel</strong> — Structured episodic and semantic memory with measurable KPIs.</p>
          <p><strong>Agent Runtime</strong> — Multi‑agent coordination and execution framework.</p>
          <p><strong>Execution Protocol</strong> — Task orchestration, rollback and recovery procedures.</p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-[#0f172a] text-center">
        <h3 className="text-4xl font-bold mb-12">Enterprise Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto text-gray-300 text-left">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Autonomous AI Teams</h4>
            <p>Build structured AI organizations capable of collaboration and long‑term memory.</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">AI Operations Infrastructure</h4>
            <p>Deploy governed AI systems with audit, resilience and rollback capabilities.</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">AI R&D Labs</h4>
            <p>Experiment with policy‑driven multi‑agent ecosystems.</p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4">Governed AI Systems</h4>
            <p>Introduce structured oversight and accountability into AI workflows.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-gradient-to-t from-[#0b0f19] to-[#111827]">
        <h3 className="text-5xl font-bold mb-8">Build Your AI Organization Today</h3>
        <p className="text-gray-400 mb-12">
          AI‑OS provides the foundational infrastructure layer for governed autonomous AI systems.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-semibold text-lg">
          Start Building
        </button>
      </section>

      <footer className="py-12 text-center text-gray-500 text-sm bg-[#0b0f19] border-t border-gray-800">
        AI‑OS © 2026 · Autonomous AI Organization Infrastructure
      </footer>

    </main>
  );
}
