import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance | Enterprise Platform",
  description: "Enterprise governance model covering compliance, risk management, and operational oversight.",
};

export default function GovernancePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Governance Framework</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Structured oversight ensuring compliance, accountability, and
          sustainable growth.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">1. Corporate Governance</h2>
        <p className="mt-4 leading-7">
          Clear decision-making structures, documented responsibilities, and
          executive oversight ensure alignment between strategic objectives and
          operational execution.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">2. Risk Management</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Enterprise risk identification and assessment.</li>
          <li>Defined mitigation and contingency planning.</li>
          <li>Regular review cycles and reporting.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold">3. Compliance & Regulatory Alignment</h2>
        <p className="mt-4 leading-7">
          Policies and procedures are aligned with applicable regulatory
          standards. Internal audits and external assessments ensure ongoing
          compliance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">4. Data Governance</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Data classification and lifecycle management.</li>
          <li>Privacy-by-design principles.</li>
          <li>Access controls and monitoring.</li>
        </ul>
      </section>
    </main>
  );
}
