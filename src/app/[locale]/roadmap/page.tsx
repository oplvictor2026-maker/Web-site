import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Roadmap",
  description: "Enterprise product roadmap outlining current capabilities, near-term expansion, and long-term vision.",
};

export default function RoadmapPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight">Product Roadmap</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A transparent view into our current capabilities and strategic direction. This roadmap reflects
          active priorities and long-term platform investments for enterprise customers.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Current Capabilities (Now)</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6">
          <li>Secure, multi-tenant architecture designed for organizational deployments</li>
          <li>Role-based access control with granular permission management</li>
          <li>Comprehensive audit logging and activity traceability</li>
          <li>Enterprise-grade authentication and session management</li>
          <li>Core workflow orchestration and knowledge management features</li>
          <li>Internationalization-ready application structure</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Near-Term Expansion (Next)</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6">
          <li>Advanced administrative controls and policy configuration</li>
          <li>Extended integration framework for enterprise systems</li>
          <li>Enhanced reporting and export capabilities for compliance needs</li>
          <li>Improved scalability optimizations for high-volume environments</li>
          <li>Expanded localization coverage and documentation maturity</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Long-Term Vision (Future)</h2>
        <ul className="mt-6 list-disc space-y-3 pl-6">
          <li>Modular platform architecture enabling domain-specific extensions</li>
          <li>Enterprise data governance tooling with configurable retention policies</li>
          <li>Cross-environment deployment flexibility (cloud and private infrastructure)</li>
          <li>Operational analytics to support executive-level decision-making</li>
          <li>Ongoing investments in security, reliability, and performance resilience</li>
        </ul>
      </section>
    </main>
  );
}
