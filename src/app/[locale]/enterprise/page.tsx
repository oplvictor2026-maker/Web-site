import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise | Platform Overview",
  description: "Enterprise capabilities overview including scalability, governance, and operational excellence.",
};

export default function EnterprisePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Enterprise Capabilities</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Comprehensive enterprise readiness across architecture, governance,
          and operational domains.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">1. Scalability & Performance</h2>
        <p className="mt-4 leading-7">
          Designed for high-throughput environments, the platform supports
          elastic scaling and optimized performance across distributed
          workloads.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">2. Security & Compliance</h2>
        <p className="mt-4 leading-7">
          Enterprise-grade security controls combined with governance policies
          ensure regulatory alignment and operational integrity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">3. Operational Excellence</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Continuous integration and deployment.</li>
          <li>Monitoring, logging, and alerting.</li>
          <li>Incident response and change management.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">4. Strategic Enablement</h2>
        <p className="mt-4 leading-7">
          The platform enables digital transformation initiatives, supporting
          innovation while maintaining enterprise governance standards.
        </p>
      </section>
    </main>
  );
}
