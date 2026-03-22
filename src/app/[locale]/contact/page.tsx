import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Enterprise | AI-OS",
  description: "Contact our enterprise team to discuss deployment, governance, and AI-OS infrastructure integration.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Book an Enterprise Demo</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us about your organization and deployment requirements. Our
          enterprise team will follow up with architecture guidance and
          rollout recommendations.
        </p>
      </header>

      <form className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full rounded-md border px-4 py-2"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Work Email</label>
            <input
              type="email"
              placeholder="jane@company.com"
              className="w-full rounded-md border px-4 py-2"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Company</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-md border px-4 py-2"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Size</label>
            <select className="w-full rounded-md border px-4 py-2">
              <option>1-50</option>
              <option>51-200</option>
              <option>201-1000</option>
              <option>1000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Deployment Goals</label>
          <textarea
            rows={5}
            placeholder="Describe your AI governance, memory, or multi-agent deployment goals..."
            className="w-full rounded-md border px-4 py-2"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Primary Interest</label>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Governance Layer
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Memory Kernel
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Multi-Agent Runtime
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Compliance & Audit
            </label>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Submit Enterprise Inquiry
        </button>

        <p className="text-xs text-muted-foreground">
          This is a preview form (no backend integration yet). Submissions are
          not stored.
        </p>
      </form>

      <div className="mt-16 text-center">
        <Link href="/" className="text-sm underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
