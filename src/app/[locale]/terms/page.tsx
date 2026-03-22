import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI-OS",
  description: "Terms of service for AI-OS enterprise infrastructure platform.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-6 leading-7">
        This is a placeholder terms of service page. Use of the AI-OS website
        and platform is subject to enterprise agreements and contractual
        arrangements.
      </p>
      <p className="mb-6 leading-7">
        Production deployments require a signed enterprise agreement outlining
        responsibilities, compliance obligations, and support terms.
      </p>
      <p className="leading-7">
        For detailed contractual information, please contact our enterprise
        team.
      </p>
    </main>
  );
}
