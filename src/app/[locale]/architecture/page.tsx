import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture | Enterprise Platform",
  description: "Technical architecture overview of our enterprise platform, including infrastructure, services, and scalability model.",
};

export default function ArchitecturePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Platform Architecture</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A resilient, scalable, and security-first architecture designed for
          enterprise-grade workloads.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">1. System Overview</h2>
        <p className="mt-4 text-base leading-7">
          The platform is built on a modular, service-oriented architecture.
          Core capabilities are separated into independent services that
          communicate through well-defined APIs. This separation ensures
          scalability, fault isolation, and independent deployment cycles.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">2. Infrastructure Layer</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Cloud-native deployment model with containerized workloads.</li>
          <li>Horizontal scaling via orchestration layer.</li>
          <li>Multi-region readiness for high availability.</li>
          <li>Automated CI/CD pipelines for controlled releases.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">3. Application Services</h2>
        <p className="mt-4 text-base leading-7">
          Business logic is encapsulated within domain-driven services.
          Services expose RESTful and event-driven interfaces, enabling
          integrations with internal and third-party systems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">4. Security Architecture</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Role-based access control (RBAC).</li>
          <li>Encryption in transit and at rest.</li>
          <li>Audit logging and traceability.</li>
          <li>Regular vulnerability scanning and patch management.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">5. Observability & Reliability</h2>
        <p className="mt-4 text-base leading-7">
          The platform integrates centralized logging, metrics aggregation, and
          distributed tracing. Automated alerting ensures rapid incident
          response and operational transparency.
        </p>
      </section>
    </main>
  );
}
