import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Case Studies | AI-OS",
  description:
    "Enterprise deployment case studies across R&D, financial compliance, and autonomous operations using AI-OS.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4 text-neutral-700">{children}</div>
    </section>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
    </div>
  );
}

function CaseStudy({
  title,
  context,
  problem,
  implementation,
  kpis,
}: {
  title: string;
  context: string;
  problem: string;
  implementation: string;
  kpis: { label: string; value: string }[];
}) {
  return (
    <article className="mb-20">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <Section title="Context">
        <p>{context}</p>
      </Section>

      <Section title="Problem">
        <p>{problem}</p>
      </Section>

      <Section title="AI-OS Implementation">
        <p>{implementation}</p>
      </Section>

      <Section title="Measurable Outcomes">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kpis.map((kpi) => (
            <KPI key={kpi.label} label={kpi.label} value={kpi.value} />
          ))}
        </div>
      </Section>
    </article>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Enterprise Case Studies</h1>
        <p className="text-neutral-600 max-w-3xl">
          Structured examples of how AI-OS is deployed within complex enterprise
          environments to support research, governance, and operational
          execution. Scenarios reflect composite enterprise patterns without
          referencing specific organizations.
        </p>
      </header>

      <CaseStudy
        title="AI R&D Organization Deployment"
        context="A global research and development organization operating across multiple domains required a unified intelligence layer to coordinate experiments, knowledge artifacts, and cross-team insights. Teams were distributed across regions with varying compliance and data residency requirements."
        problem="Research outputs were fragmented across tools and repositories, leading to duplicated experiments, slow knowledge transfer, and limited visibility into model lineage and validation history. Leadership lacked reliable metrics on research throughput and reproducibility."
        implementation="AI-OS was deployed as a centralized cognitive infrastructure layer. It integrated with existing repositories, experiment tracking systems, and internal documentation platforms. Role-based access controls enforced regional data constraints. Structured memory modules captured experiment metadata, hypotheses, datasets, and validation results. Governance workflows enforced review checkpoints before model promotion to production."
        kpis={[
          { label: "Experiment Duplication Reduction", value: "−37% within 2 quarters" },
          { label: "Research Cycle Time", value: "−22% from hypothesis to validation" },
          { label: "Reproducibility Compliance", value: "98% documented lineage coverage" },
        ]}
      />

      <CaseStudy
        title="Financial Compliance AI Governance System"
        context="A regulated financial services environment required structured oversight of AI-assisted decision systems supporting risk analysis, document review, and internal policy interpretation. Regulatory audits demanded transparent model behavior and traceable decision records."
        problem="AI usage expanded faster than governance controls. Audit trails were inconsistent, model updates lacked formal approval workflows, and compliance teams could not easily demonstrate adherence to internal risk frameworks and external regulatory expectations."
        implementation="AI-OS was implemented as a governance orchestration layer. All AI-assisted workflows were routed through policy-enforced gateways with logging, version control, and structured decision records. Model changes required documented review and dual-approval. Automated reporting modules generated audit-ready summaries aligned with internal control frameworks."
        kpis={[
          { label: "Audit Preparation Time", value: "−45% reduction" },
          { label: "Untracked Model Changes", value: "0 post-implementation" },
          { label: "Policy Adherence Coverage", value: "100% AI workflows registered" },
        ]}
      />

      <CaseStudy
        title="Autonomous Operations Infrastructure"
        context="An enterprise operating complex digital infrastructure sought to increase operational resilience and reduce manual intervention in monitoring, triage, and incident response processes across cloud and hybrid environments."
        problem="Operational data streams were siloed across monitoring platforms. Incident response relied heavily on manual escalation, increasing mean time to resolution and creating inconsistencies in post-incident documentation and knowledge retention."
        implementation="AI-OS was integrated with observability pipelines, ticketing systems, and infrastructure APIs. It provided structured situational awareness, automated initial triage classification, and guided response playbooks. Persistent operational memory stored incident patterns and remediation steps, enabling continuous learning across environments."
        kpis={[
          { label: "Mean Time to Resolution (MTTR)", value: "−28% over 6 months" },
          { label: "Manual Triage Volume", value: "−35% reduction" },
          { label: "Incident Knowledge Reuse", value: "+41% cross-team reuse rate" },
        ]}
      />
    </main>
  );
}
