import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Architecture | Enterprise Platform",
  description: "Overview of data persistence, storage strategy, and knowledge retention architecture.",
};

export default function MemoryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Memory & Data Architecture</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Structured data management enabling durability, performance, and
          long-term knowledge retention.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">1. Data Persistence Strategy</h2>
        <p className="mt-4 leading-7">
          The platform leverages structured and unstructured storage systems
          optimized for transactional integrity and analytical workloads.
          Redundant storage configurations ensure durability and resilience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">2. Knowledge Management</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Version-controlled knowledge repositories.</li>
          <li>Audit trails for data changes.</li>
          <li>Search and indexing capabilities.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">3. Backup & Recovery</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Automated scheduled backups.</li>
          <li>Point-in-time recovery mechanisms.</li>
          <li>Disaster recovery planning and testing.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">4. Data Lifecycle Management</h2>
        <p className="mt-4 leading-7">
          Policies define data retention, archival, and deletion standards in
          accordance with legal and operational requirements.
        </p>
      </section>
    </main>
  );
}
